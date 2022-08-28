import React, { useState } from "react";
import ToastsList from "./ToastsList";

type Props = {
  children: React.ReactNode;
};

export type ToastContextType = {
  addToast: (msg: string, duration?: number) => void;
};

export type ToastType = {
  readonly id: number;
  readonly message: string;
  readonly autoHideDuration: number;
};

// TODO: BUG - when hot reloading in storybook this loses state and can't click add toast anymore
export const ToastContext = React.createContext<
  Partial<ToastContextType> | ToastContextType
>({});

const ToastProvider = ({ children }: Props) => {
  const [_toasts, setToasts] = useState<ToastType[]>([]);
  const [id, setId] = useState(0);

  const handleRemoveToast = (id: number) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id != id));
  };

  const addToast = (message: string, autoHideDuration = 3000) => {
    setToasts((toasts) => [...toasts, { id, message, autoHideDuration }]);
    setId(id + 1);

    if (autoHideDuration > -1) {
      setTimeout(() => {
        handleRemoveToast(id);
      }, autoHideDuration);
    }
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      <ToastsList onRemoveToast={handleRemoveToast} toasts={_toasts} />
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
