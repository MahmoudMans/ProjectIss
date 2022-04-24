import React, { useContext, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./CourseTable.css";
import Axios from "axios";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import TablePaginationUnstyled from "@mui/base/TablePaginationUnstyled";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";
import { DarkModeContext } from "./context/darkModeContext";

function createData(classname, location, size, typeofclassrooms) {
  return { classname, location, size, typeofclassrooms };
}

const rows = [createData("mb02", "Medtech", 20, "Lab")].sort((a, b) =>
  a.calories < b.calories ? -1 : 1
);

const blue = {
  200: "#A5D8FF",
  400: "#3399FF",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const Root = styled("div")(
  ({ theme }) => `
        table {
          font-family: IBM Plex Sans, sans-serif;
          font-size: 0.875rem;
          border-collapse: collapse;
          width: 100%;
        }
      
        td,
        th {
          border: 1px solid ${
            theme.palette.mode === "dark" ? grey[800] : grey[200]
          };
          text-align: left;
          padding: 6px;
        }
      
        th {
          background-color: ${
            theme.palette.mode === "dark" ? grey[900] : grey[100]
          };
        }
        `
);

const CustomTablePagination = styled(TablePaginationUnstyled)(
  ({ theme }) => `
        & .MuiTablePaginationUnstyled-spacer {
          display: none;
        }
        & .MuiTablePaginationUnstyled-toolbar {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
      
          @media (min-width: 768px) {
            flex-direction: row;
            align-items: center;
          }
        }
        & .MuiTablePaginationUnstyled-selectLabel {
          margin: 0;
        }
        & .MuiTablePaginationUnstyled-select {
          padding: 2px;
          border: 1px solid ${
            theme.palette.mode === "dark" ? grey[800] : grey[200]
          };
          border-radius: 50px;
          background-color: transparent;
          &:hover {
            background-color: ${
              theme.palette.mode === "dark" ? grey[800] : grey[50]
            };
          }
          &:focus {
            outline: 1px solid ${
              theme.palette.mode === "dark" ? blue[400] : blue[200]
            };
          }
        }
        & .MuiTablePaginationUnstyled-displayedRows {
          margin: 0;
      
          @media (min-width: 768px) {
            margin-left: auto;
          }
        }
        & .MuiTablePaginationUnstyled-actions {
          padding: 2px;
          border: 1px solid ${
            theme.palette.mode === "dark" ? grey[800] : grey[200]
          };
          border-radius: 50px;
          text-align: center;
        }
        & .MuiTablePaginationUnstyled-actions > button {
          margin: 0 8px;
          border: transparent;
          border-radius: 2px;
          background-color: transparent;
          &:hover {
            background-color: ${
              theme.palette.mode === "dark" ? grey[800] : grey[50]
            };
          }
          &:focus {
            outline: 1px solid ${
              theme.palette.mode === "dark" ? blue[400] : blue[200]
            };
          }
        }
        `
);

function Boxs() {
  const [boxList, setBoxList] = useState([]);
  const { darkMode } = useContext(DarkModeContext);
  useEffect(() => {
    Axios.get("http://localhost:5000/api/getboxs").then((response) => {
      setBoxList(response.data);
    });
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const deleteBoxs = (id) => {
    Axios.delete(`http://localhost:5000/deleteboxs/${id}`);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div>
            <div className="tableau">
              <Root sx={{ width: 500, maxWidth: "100%", padding: "50px" }}>
                <table aria-label="custom pagination table">
                  <thead>
                    <tr>
                      <th>Box Name</th>
                      <th>Location</th>
                      <th>buttons</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(rowsPerPage > 0
                      ? boxList.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                      : boxList
                    ).map((row) => (
                      <tr key={row.BoxName}>
                        <td>{row.BoxName}</td>
                        <td style={{ width: 120 }} align="right">
                          {row.Location}
                        </td>
                        <td style={{ width: 120 }} align="right">
                          <button
                            onClick={() => {
                              deleteBoxs(row._id);
                            }}
                          >
                            delete
                          </button>
                        </td>
                      </tr>
                    ))}

                    {emptyRows > 0 && (
                      <tr style={{ height: 41 * emptyRows }}>
                        <td colSpan={3} />
                      </tr>
                    )}
                  </tbody>
                  <tfoot>
                    <tr>
                      <CustomTablePagination
                        rowsPerPageOptions={[
                          5,
                          10,
                          25,
                          { label: "All", value: -1 },
                        ]}
                        colSpan={10}
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        componentsProps={{
                          select: {
                            "aria-label": "rows per page",
                          },
                          actions: {
                            showFirstButton: true,
                            showLastButton: true,
                          },
                        }}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                      />
                    </tr>
                  </tfoot>
                </table>
                <Stack spacing={8} sx={{ padding: "50px" }} direction="row">
                  <Link to="/AddBoxs">
                    <Button variant="contained">Add Box</Button>
                  </Link>
                </Stack>
              </Root>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boxs;
