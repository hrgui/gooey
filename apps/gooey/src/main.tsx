import "./app/AppProvider";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
