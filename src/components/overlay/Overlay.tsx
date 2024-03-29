import classNames from "classnames";
import { twMerge } from "tailwind-merge";

type Props = {} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Overlay = ({ className, ...props }: Props) => {
  return (
    <div
      className={twMerge(
        classNames("z-10 fixed inset-0 transition-opacity", className)
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
};

export default Overlay;
