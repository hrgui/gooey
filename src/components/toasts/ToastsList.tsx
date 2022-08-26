import React from "react";
import Toast from "./Toast";
import { ToastType } from "./ToastProvider";

type Props = {
  toasts: ToastType[];
};

const ToastsList = ({ toasts }: Props) => {
  return (
    <div className="absolute bottom-5 flex gap-3 flex-col-reverse">
      {toasts.map((toast) => (
        <Toast key={toast.id} message={toast.message} />
      ))}
    </div>
  );
};

export default ToastsList;
