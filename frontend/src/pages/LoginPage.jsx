import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loginUser } from "../api/authApi";
import { AuthContext } from "../context/AuthContext";
import { TextField, Button, Container, Typography } from "@mui/material";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const authContext = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data.email, data.password);
      authContext?.login(response.Token);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
        Login
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="Email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
          margin="normal"
        />
        <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
