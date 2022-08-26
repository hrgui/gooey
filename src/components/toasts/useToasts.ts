import { useContext } from "react";
import { ToastContext, ToastContextType } from "./ToastProvider";

export function useToasts() {
  return useContext(ToastContext) as ToastContextType;
}
