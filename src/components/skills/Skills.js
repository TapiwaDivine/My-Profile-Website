import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const Skills = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (ev) =>
    setFormData({ ...formData, [ev.target.name]: ev.target.value });

  const handleSubmit = () => {
    setSubmitted((prevSubmit) => !prevSubmit);
  };
  console.log({ formData });
  //   useEffect(() => {
  //     if (!search) return undefined;
  //     setUserName(search);
  //   }, [search]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <h1>{submitted ? "Form submitted" : "Please fill in form"}</h1>
      <input placeholder="Email" name="email" onChange={handleChange} />
      <input placeholder="Password" name="password" onChange={handleChange} />
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Skills;
