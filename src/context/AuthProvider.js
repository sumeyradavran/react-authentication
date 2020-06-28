import React from "react";
import { useState, useEffect } from "react";

import { useCookies } from "react-cookie";

export const AuthContext = React.createContext({
  setUser: () => {},
  user: null,
});
export default function AuthProvider({ children }) {
  const [cookies] = useCookies();
  const [user, setUser] = useState(cookies["süm"]);
  const value = { user, setUser };
  const cookie = cookies["süm"];
  useEffect(() => {
    setUser(cookie);
  }, [cookie]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
