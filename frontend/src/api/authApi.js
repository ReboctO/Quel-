import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5156/api/auth";

const registerUser = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Registration failed", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};

const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error("Login failed", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

export { registerUser, loginUser };
