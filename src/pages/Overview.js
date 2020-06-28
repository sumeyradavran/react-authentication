import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useCookies } from "react-cookie";

export default function Overview() {
  const { user} = useContext(AuthContext);
  const [cookies, setCookie, removeCookie] = useCookies();
  return (
    <div>
      <div>overview {user}</div>
      <button
        onClick={() => {
          removeCookie("süm");
        }}
      >
        Logout
      </button>
    </div>
  );
}
