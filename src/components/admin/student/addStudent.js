import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";

import ClassDropDown from "./classDropDown";
import GenderDropDown from "./genderDropDown";

const AddStudent = (data) => {
  const [selectedFile, setSelectedFile] = useState(null);
  function handleFileChange(event) {
    setSelectedFile(event.target.files[0]);
  }

  const [error, setError] = useState("");
  const { addStudent } = useOutletContext();
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    let response = await addStudent(object);
    if (response.success === "true") {
      navigate("/admin/student");
    } else {
      setError(response.message);
    }
  };

  const importStudents = () => {
    console.log(selectedFile);
  }

  return (
    <div class="student-add">
      <h3>Add Students</h3>
      <div class="add-students-options">
        <div class="manual-add-btn">
          <a href="#Manually">Manually</a>
        </div>
        <div class="csv-add-btn">
          <div style={{ display: "flex", flexDirection: "row" }} >
            <input

              id="upload-student-button"
              name="students"
              type="file"
              onChange={handleFileChange}
            ></input>
            <button onClick={importStudents} type="submit">Upload CSV</button>
          </div>
        </div>
      </div>
      <div class="student-add-form-wrapper">
        <form action="" onSubmit={submitForm} class="student-add-form">
          <span>{error}</span>
          <div class="form-element">
            <input
              name="name"
              type="text"
              placeholder="Enter Student Name"
              required
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Enter Students Email Address"
            ></input>
          </div>
          <div class="form-element">
            <ClassDropDown />
            <GenderDropDown />
            <input
              type="text"
              name="dob"
              placeholder="Date of birth , DD/MM/YYYY"
              required
            ></input>
          </div>
          <div class="form-element"></div>
          <div class="form-element">
            <button class="add-one-btn" type="submit">
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
