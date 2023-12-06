import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { SignInType } from "interfaces/userType";
import { signIn } from "redux/thunks/userThunk";
import { useDispatch, useSelector } from "react-redux";
import { onOpenAlert } from "redux/slices/alertSlice";
import { RootState } from "redux/store";
import { handleSignIn } from "redux/slices/userSlice";
import { onCloseModal } from "redux/slices/modalSlice";

const FormSignIn = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.signIn
  );

  const dispatch = useDispatch();

  const signinSchema = object({
    email: string().required("Please enter the email"),
    password: string().required("Please enter the password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInType>({
    defaultValues: {
      email: "kiet1231@gmail.com",
      password: "Az123123!",
    },
    resolver: yupResolver(signinSchema),
    mode: "onTouched",
  });
  const onSubmit: SubmitHandler<SignInType> = (data) => {
    dispatch(signIn(data) as any);
    setSubmitted(true);
  };

  React.useEffect(() => {
    // Kiểm tra khi isLoading thay đổi và submitted = true (đã submit form)
    if (!isLoading && submitted) {
      if (error) {
        dispatch(
          onOpenAlert({
            status: "error",
            message: "Incorrect email or password",
          })
        );
      } else if (data) {
        console.log(data);

        dispatch(
          onOpenAlert({ status: "success", message: "Login successful" })
        );
        dispatch(handleSignIn(data));
        setTimeout(() => {
          dispatch(onCloseModal());
        }, 2000);
      }
      setSubmitted(false); // Đặt lại submitted sau khi xử lý thông báo
    }
  }, [isLoading, error, data, dispatch, submitted]);

  return (
    <form
      className="flex flex-col gap-5 m-6"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        fullWidth
        id="email-basic"
        label="Email"
        variant="outlined"
        color="info"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        fullWidth
        type={showPassword ? "text" : "password"}
        id="password-basic"
        label="Password"
        variant="outlined"
        color="info"
        autoComplete="on"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        }}
      />
      <button className="text-white bg-black px-6 py-3 rounded transition duration-300 hover:bg-[#404145]">
        Sign In
      </button>
    </form>
  );
};

export default FormSignIn;
