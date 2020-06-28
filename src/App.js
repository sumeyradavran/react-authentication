import React from "react";
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter } from "react-router-dom";

import Routing from "./pages/Routing";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routing />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
