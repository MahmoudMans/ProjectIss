import React, { useRef, useContext } from "react";
import ReactToPrint, {
  PrintContextConsumer,
  useReactToPrint,
} from "react-to-print";
import { DarkModeContext } from "./context/darkModeContext";
import Navbar from "./navbar/Navbar";
import Scheduel from "./Scheduel";
import Sidebar from "./sidebar/Sidebar";

function ToPdf() {
  const { darkMode } = useContext(DarkModeContext);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div ref={componentRef}>
            <Scheduel />
          </div>
          {/* <Scheduel ref={componentRef} /> */}
          <button onClick={handlePrint}>Print this out!</button>
        </div>
      </div>
    </div>
  );
}

export default ToPdf;
