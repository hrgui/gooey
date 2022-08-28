import React from "react";
import Toast from "./Toast";
import { ToastType } from "./ToastProvider";

type Props = {
  toasts: ToastType[];
  onRemoveToast: (id: number) => void;
};

const ToastsList = ({ toasts, onRemoveToast }: Props) => {
  return (
    <div className="absolute bottom-5 flex gap-3 flex-col-reverse">
      {toasts.map((toast) => (
        <Toast
          onRequestClose={() => onRemoveToast(toast.id)}
          key={toast.id}
          message={toast.message}
        />
      ))}
    </div>
  );
};

export default ToastsList;
