import "virtual:uno.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Button } from "./components/buttons";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Button>Hello World</Button>
);
