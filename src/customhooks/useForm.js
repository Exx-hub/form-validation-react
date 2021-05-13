import { useState, useEffect } from "react";
import { validate } from "../helpers/validate";

export const useForm = (submitForm) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIssubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIssubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submitForm(values);
    }
  }, [errors, isSubmitting, submitForm, values]);

  return [values, handleSubmit, handleChange, errors];
};
