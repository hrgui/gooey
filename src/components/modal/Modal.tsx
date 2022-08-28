import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export type ModalProps = {
  isOpen?: boolean;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Modal = ({
  isOpen = false,
  children,
  className,
  ...props
}: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={twMerge(
        classNames(
          "transform w-full top-0 left-0 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30",
          className
        )
      )}
      {...props}
    >
      <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex">
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
