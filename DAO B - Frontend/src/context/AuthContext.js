import { createContext, useState, useEffect, useMemo, useContext } from "react";
import AxiosClient from "../axiosClient";
import { useLocation } from "react-router-dom";
import instance from "../axiosClient";

// const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  loading: false,
  error: "",
  message: "",
};

const AuthContext = createContext({ initialState });

export const AuthProvider = ({ children }) => {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(initialState.loading);
  const [error, setError] = useState(initialState.error);
  const [message, setMessage] = useState(initialState.message);

  useEffect(() => {
    verifyMe();
  }, []);
  useEffect(() => {
    console.log(user)
    setUser(JSON.parse(localStorage.getItem('user')))
    console.log(user)
  }, []);

  // reset error state on location change
  useEffect(() => {
    if (error) setError("");
  }, [location.pathname]);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const userData = await AxiosClient.post("/auth/login", {
        email,
        password,
      });
      // if(userData){
      //   localStorage.setItem('user', JSON.stringify(userData.data))
      // }
      setUser(userData.data);
      console.log(userData.data)
      console.log(user._id)
      setError("");
      localStorage.setItem('user', JSON.stringify(userData.data));
    } catch (err) {
      setError(err.response.data.error);
    }
    setLoading(false);
  };

  const register = async (name, email, password) => {
    console.log("waiting..")

    setLoading(true);
    try {
      const userData = await instance.post("/auth/register/", {
        name,
        email,
        password,
      });
      console.log(userData)
      // if(userData){
      //   localStorage.setItem('user', JSON.stringify(userData.data))
      // }
      console.log(user)

      setMessage(userData.data.message);
      setError("");
    } catch (err) {
      setMessage("");
      setError(err.response.data.error);
    }
    setLoading(false);
  };

  const logout = async () => {
    setLoading(true);
    try {
      const logoutData = await AxiosClient.get("/auth/logout");
      setUser(null);
      setMessage(logoutData.data.message);
      // localStorage.removeItem('user');
      setError("");
    } catch (err) {
      setError(err.response.data.error);
    }
    setLoading(false);
  };

  const checkCookie = async () => {
    setLoading(true);
    try {
      await AxiosClient.get("/cookies");
      setUser(null);
    } catch (err) {
      setError(err.response.data.error);
    }
    setLoading(false);
  };

  const verifyMe = async () => {
    setLoading(true);
    try {
      const verifyData = await AxiosClient.get("/auth/me");
      setUser(verifyData.data);
    } catch (err) {
      setUser(null);
    }
    setLoading(false);
  };

  const momoedValue = {
    user,
    loading,
    error,
    message,
    login,
    register,
    logout,
    checkCookie,
    verifyMe,
  };

  return (
    <AuthContext.Provider value={momoedValue}>{children}</AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
