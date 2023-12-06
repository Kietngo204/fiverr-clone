import { yupResolver } from "@hookform/resolvers/yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, TextField } from "@mui/material";
import { SignUpType } from "interfaces/userType";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { onOpenAlert } from "redux/slices/alertSlice";
import { RootState } from "redux/store";
import { number, object, string } from "yup";
import { signUp } from "redux/thunks/userThunk";
import { setIsSignIn } from "redux/slices/formSignSlice";

const FormSignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.signUp
  );
  const dispatch = useDispatch();
  const signupSchema = object({
    email: string().required("Please enter the email").email(),
    password: string()
      .required("Please enter the password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
        "Password must be at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character"
      ),
    name: string().required("Please enter the name"),
    phone: number().required().typeError("Please enter the phone"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpType>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    resolver: yupResolver(signupSchema),
    mode: "onTouched",
  });
  const onSubmit: SubmitHandler<SignUpType> = (data) => {
    dispatch(signUp(data) as any);

    setSubmitted(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;

    // Giới hạn độ dài tối đa là 10 ký tự
    if (value.length > 10) {
      value = value.slice(0, 10);
    }

    event.target.value = value;
  };

  React.useEffect(() => {
    // Kiểm tra khi isLoading thay đổi và submitted = true (đã submit form)
    if (!isLoading && submitted) {
      if (error) {
        dispatch(
          onOpenAlert({
            status: "error",
            message: "Email already exists!",
          })
        );
      } else if (data) {
        dispatch(
          onOpenAlert({ status: "success", message: "Sign-up successful" })
        );
        setTimeout(() => {
          dispatch(setIsSignIn());
        }, 2000);
      }
      setSubmitted(false); // Đặt lại submitted sau khi xử lý thông báo
    }
  }, [isLoading, error, data, dispatch, submitted]);

  return (
    <form
      className="flex flex-col gap-3 m-6 mt-0"
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
      <TextField
        fullWidth
        id="name-basic"
        label="Name"
        variant="outlined"
        color="info"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        fullWidth
        id="phone-basic"
        label="Phone"
        variant="outlined"
        color="info"
        type="number"
        // inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        onInput={handleInputChange}
        {...register("phone")}
        error={!!errors.phone}
        helperText={errors.phone?.message}
      />
      <button className="text-white bg-black px-6 py-3 rounded transition duration-300 hover:bg-[#404145]">
        Sign Up
      </button>
    </form>
  );
};

export default FormSignUp;
