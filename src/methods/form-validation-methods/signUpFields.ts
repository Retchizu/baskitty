import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  userName: Yup.string()
    .min(4, "Username should be at least 4 characters")
    .max(16, "Maximum of 16 characters only")
    .required("Username required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password should be at least 8 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*\d).+$/,
      "Password must contain at least one uppercase and one number"
    )
    .required("Password is required"),
});
