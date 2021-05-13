import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";

function Form() {
  const [submitted, setSubmitted] = useState(false);
  const [info, setInfo] = useState({});
  console.log(info); // user info to be sent to back end naks!!

  const submitForm = (info) => {
    setSubmitted(true);
    setInfo(info);
  };
  return (
    <div>
      {submitted ? <FormSuccess /> : <FormSignup submitForm={submitForm} />}
    </div>
  );
}

export default Form;
