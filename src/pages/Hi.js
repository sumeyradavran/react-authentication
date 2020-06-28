import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export default function Hi() {
  const { user} = useContext(AuthContext);
  return (
    <div>
      <div>hi {user}</div>
    </div>
  );
}
