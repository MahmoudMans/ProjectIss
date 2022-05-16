import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Axios from "axios";
import FormInput from "./FormInput";
import Button from "@mui/material/Button";
import { Avatar, Grid, Paper, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";
import { DarkModeContext } from "./context/darkModeContext";

function AddLci() {
  const [FullName, setFullName] = useState("");
  const [AmountToPay, setAmountToPay] = useState("");
  const [AmountPaied, setAmountPaied] = useState("");
  const [RemainingAmount, setRemainingAmount] = useState("");
  const [FinalDeadline, setFinalDeadline] = useState("");
  const [Email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const { darkMode } = useContext(DarkModeContext);

  const addToList = () => {
    Axios.post("http://localhost:5000/api/addlcistudent", {
      FullName: FullName,
      AmountToPay: AmountToPay,
      AmountPaied: AmountPaied,
      RemainingAmount: RemainingAmount,
      FinalDeadline: FinalDeadline,
      Email: Email,
    });
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div>
            <div className="booking">
              <div className="formpad">
                <form className="forms" onSubmit={handleSubmit}>
                  <h1 className="hone">Add a student</h1>
                  {/* {inputs.map((input) => (
            //   <FormInput
            //     key={input.id}
            //     {...input}
            //     value={values[input.name]}
            //     onChange={onChange}
            //   />
            // ))} */}
                  <FormInput
                    key={1}
                    name="Fullname"
                    type="text"
                    placeholder="Full Name"
                    errorMessage="Username should be 3-16 characters and shouldn't include any special character!"
                    label="FullName"
                    pattern="^[A-Za-z0-9]{3,16}$"
                    required={true}
                    onChange={(event) => {
                      setFullName(event.target.value);
                    }}
                  />
                  <FormInput
                    key={1}
                    name="Email"
                    type="text"
                    placeholder="Email"
                    // errorMessage="Username should be 3-16 characters and shouldn't include any special character!"
                    label="Email"
                    required={true}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                  <FormInput
                    id={2}
                    name="Amounttopay"
                    type="number"
                    placeholder="Amounttopay"
                    label="Amounttopay"
                    required={true}
                    onChange={(event) => {
                      setAmountToPay(event.target.value);
                    }}
                  />
                  <FormInput
                    id={3}
                    name="AmountPaied"
                    type="number"
                    placeholder="AmountPaied"
                    label="AmountPaied"
                    required={true}
                    onChange={(event) => {
                      setAmountPaied(event.target.value);
                    }}
                  />{" "}
                  <FormInput
                    id={4}
                    name="RemainingAmount"
                    type="Number"
                    placeholder="RemainingAmount"
                    label="RemainingAmount"
                    onChange={(event) => {
                      setRemainingAmount(event.target.value);
                    }}
                  />
                  <FormInput
                    id={5}
                    name="Date"
                    type="date"
                    placeholder="Date"
                    label="Date"
                    onChange={(event) => {
                      setFinalDeadline(event.target.value);
                    }}
                  />
                  <button className="btnform" onClick={addToList}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddLci;
