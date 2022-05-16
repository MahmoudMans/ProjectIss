import { useState, useEffect } from "react";
import Axios from "axios";
import FormInput from "../components/FormInput";
import "./booking.css";

function StudentBox() {
  const [boxList, setBoxList] = useState([]);

  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [StudentID, setStudentID] = useState("");
  const [Phone, setPhone] = useState("");
  const [Date, setDate] = useState("");
  const [Timein, setTimein] = useState("");
  const [Timeout, setTimeout] = useState("");
  const [Reason, setReason] = useState("");
  const [BoxName, setBoxName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addToList = () => {
    Axios.post("http://localhost:5000/api/booking", {
      FullName: FullName,
      Email: Email,
      StudentID: StudentID,
      Phone: Phone,
      Date: Date,
      Timein: Timein,
      Timeout: Timeout,
      Reason: Reason,
      BoxName: BoxName,
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:5000/api/getboxs").then((response) => {
      setBoxList(response.data);
    });
  }, []);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const ddHandler = (e) => {
    setBoxName(e.target.value);
    console.log(BoxName);
  };
  console.log(BoxName);

  return (
    <div>
      <div className="booking">
        <div className="formpad">
          <form className="forms" onSubmit={handleSubmit}>
            <h1 className="hone">Book a box</h1>
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
              id={2}
              name="Email"
              type="email"
              placeholder="Email"
              errorMessage="It should be a valid email address!"
              label="Email"
              required={true}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <FormInput
              id={3}
              name="Phone"
              type="number"
              placeholder="Phone"
              label="Phone"
              required={true}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />{" "}
            <FormInput
              id={4}
              name="StudentID"
              type="text"
              placeholder="StudentID"
              label="StudentID"
              onChange={(event) => {
                setStudentID(event.target.value);
              }}
            />
            <FormInput
              id={5}
              name="Date"
              type="date"
              placeholder="Date"
              label="Date"
              onChange={(event) => {
                setDate(event.target.value);
              }}
            />
            <FormInput
              id={6}
              name="Timein"
              type="time"
              placeholder="Timein"
              label="Timein"
              onChange={(event) => {
                setTimein(event.target.value);
              }}
            />{" "}
            <FormInput
              id={7}
              name="Timeout"
              type="time"
              placeholder="Timeout"
              onChange={(event) => {
                setTimeout(event.target.value);
              }}
              label="Timeout"
            />
            <FormInput
              id={8}
              name="Reason"
              type="textarea"
              placeholder="Reason"
              onChange={(event) => {
                setReason(event.target.value);
              }}
              label="Reason"
            />
            <div className="formInput">
              <label className="formlabel" for="boxs">
                Choose a box:
              </label>
              <select
                className="selectsty"
                name="boxs"
                id="boxs"
                onChange={(e) => {
                  setBoxName(e.target.value);
                }}
              >
                <option value="">choose a box</option>
                {boxList.map((box) => {
                  return <option value={box.BoxName}>{box.BoxName}</option>;
                })}
                {/* <option value="volvo">Volvo</option> */}
              </select>
            </div>
            <button className="btnform" onClick={addToList}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StudentBox;
