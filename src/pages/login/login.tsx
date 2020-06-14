import React, { useState, useEffect, FormEvent } from "react";
import { Button, TextField } from "@material-ui/core";
import "./login.scss";
import validate from "validate.js";
import Link from "@material-ui/core/Link";
import { authService } from "../../Api";
const schema = {
  email: {
    presence: { allowEmpty: false, message: "is required" },
  },
  password: {
    presence: { allowEmpty: false, message: "is required" },
  },
};
export default function Login() {
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });
  const customErrorMessages = {
    password: "الباسورد لازم يكون موجود يا زاكاوة",
    email: "الايميل لازم يكون موجود يا جامد",
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formState.isValid) {
      authService
        .login(
          (formState.values as any).email,
          (formState.values as any).password
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      alert("you dont");
    }
  };
  const handleChange = (event: {
    persist: () => void;
    target: { name: any; value: any };
  }) => {
    event.persist();
    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };
  const hasError = (field: string) =>
    (formState.touched as any)[field] && (formState.errors as any)[field]
      ? true
      : false;

  useEffect(() => {
    const errors = validate(formState.values, schema);
    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);
  return (
    <div className="root">
      <form onSubmit={handleSubmit}>
        <TextField
          error={hasError("email")}
          helperText={hasError("email") ? customErrorMessages.email : null}
          name="email"
          onChange={handleChange}
          type="text"
          value={(formState.values as any).email || ""}
          label="إميلك إيه ؟"
        />

        <TextField
          error={hasError("password")}
          helperText={
            hasError("password") ? customErrorMessages.password : null
          }
          name="password"
          onChange={handleChange}
          type="text"
          value={(formState.values as any).password || ""}
          label="باسورد إيه ؟"
        />
        <Button type="submit" color="primary" variant="contained">
          إطبخلي
        </Button>
        <Link className="link" color="primary" href="#" onClick={() => {}}>
          هعمل حساب جديد
        </Link>
      </form>
    </div>
  );
}
