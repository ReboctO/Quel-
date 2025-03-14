import { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide,
} from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
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

const Transition = (props) => <Slide direction="up" {...props} />;

const AuthModal = ({ open, onClose }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
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

      onClose(); // ✅ Close modal first
      setTimeout(() => setConfirmationOpen(true), 300); // ✅ Show confirmation after modal closes
    } catch (error) {
      setServerError(
        error.response?.data?.message ||
          "Authentication failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = () => {
    setConfirmationOpen(false);
    navigate("/"); // Redirect after confirmation
  };

  return (
    <>
      {/* Authentication Modal */}
      <Modal open={open} onClose={onClose}>
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] bg-white bg-opacity-90 backdrop-blur-md shadow-lg p-6 rounded-lg">
          <Typography variant="h5" className="mb-4 text-center font-semibold">
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
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : isRegister ? (
                "Register"
              ) : (
                "Login"
              )}
            </Button>
          </form>

          <Typography
            variant="body2"
            className="mt-3 text-center cursor-pointer text-blue-500 hover:underline"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister
              ? "Already have an account? Sign in"
              : "Don't have an account? Register"}
          </Typography>
        </Box>
      </Modal>

      {/* Confirmation Dialog */}
      <Dialog
        open={confirmationOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleConfirm}
      >
        <DialogContent className="flex flex-col items-center p-6">
          <CheckCircleOutline
            className="text-green-500"
            style={{ fontSize: 60 }}
          />
          <Typography className="text-lg font-semibold mt-3">
            {isRegister
              ? "Account Created Successfully!"
              : "You Have Login Successfully!"}
          </Typography>
          <Typography className="text-gray-600 mt-1 text-center">
            {isRegister ? "You can now explore our platform." : "Welcome back!"}
          </Typography>
        </DialogContent>
        <DialogActions className="flex justify-center pb-4">
          <Button
            onClick={handleConfirm}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
            variant="contained"
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AuthModal;
