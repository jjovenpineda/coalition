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
const user = { username: "", password: "" };

const AuthContext = createContext<{
  data: Auth;
  setData: (value: Auth) => void;
}>({ data: user, setData: () => {} });

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<Auth>(user);
  return (
    <AuthContext.Provider value={{ data, setData }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
