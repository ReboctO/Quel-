import { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { registerUser, loginUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";

const schema = z
  .object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .optional(),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().optional(),
  })
  .refine(
    (data) => !data.confirmPassword || data.password === data.confirmPassword,
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );

const AuthModal = ({ open, onClose }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    setServerError(null);
    setLoading(true);
    try {
      if (isRegister) {
        await registerUser(data.username, data.email, data.password);
      } else {
        await loginUser(data.email, data.password);
      }
      navigate("/dashboard"); // Redirect to dashboard after login/register
      onClose(); // Close modal on success
    } catch (error) {
      setServerError(
        error.response?.data?.message ||
          "Authentication failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
          {isRegister ? "Create an Account" : "Sign In"}
        </Typography>

        {serverError && <Alert severity="error">{serverError}</Alert>}

        <form onSubmit={handleSubmit(onSubmit)}>
          {isRegister && (
            <TextField
              fullWidth
              label="Username"
              {...register("username")}
              error={!!errors.username}
              helperText={errors.username?.message}
              margin="normal"
            />
          )}
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

          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ mt: 2 }}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} />
            ) : isRegister ? (
              "Register"
            ) : (
              "Login"
            )}
          </Button>
        </form>

        <Typography
          variant="body2"
          sx={{ mt: 2, textAlign: "center", cursor: "pointer" }}
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister
            ? "Already have an account? Sign in"
            : "Don't have an account? Register"}
        </Typography>
      </Box>
    </Modal>
  );
};

export default AuthModal;
