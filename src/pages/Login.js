import React from "react";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";
import { useCookies } from "react-cookie";

export default function Login(props) {
  const { user } = useContext(AuthContext);
  const [cookies, setCookie] = useCookies();
  const { location, history } = props;
  const { state } = location;
  if (user) {
    if (state && state.from) {
      history.replace(state.from);
    }
    else {
      history.replace("/overview");
    }
  }
  return (
    <button
      onClick={() => {
        setCookie("süm", "süm");
      }}
    >
      Login
    </button>
  );
}
