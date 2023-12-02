import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    el
  );
};

// If we are in development or in isolation,
// call mount immediatly
if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("FileMgmtRoot");

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through the Shell App (container)
// and we should export the mount func
export { mount };
