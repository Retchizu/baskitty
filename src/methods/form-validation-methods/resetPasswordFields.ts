import * as Yup from "yup";

export const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password should be at least 8 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*\d).+$/,
      "Password must contain at least one uppercase and one number"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});
