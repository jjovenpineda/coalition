/* "use client";
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext<{
  data: { email: string; password: string };
  setData: (value: { email: string; password: string }) => void;
}>({
  data: { email: "", password: "" },
  setData: () => {},
});
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  return (
    <AuthContext.Provider value={{ data, setData }}>
      {children}
    </AuthContext.Provider>
  );
}

export const AuthContexz = () => useContext(AuthContext);
 */
"use client";
import React, { createContext, useContext, useState } from "react";

interface Auth {
  username: string;
  password: string;
}
const languages = ["JavaScript", "Python"];

const AuthContext = createContext<{
  data: Auth;
  setData: (value: Auth) => void;
}>({ data: { username: "", password: "" }, setData: () => {} });

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<Auth>({ username: "", password: "" });
  return (
    <AuthContext.Provider value={{ data, setData }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
