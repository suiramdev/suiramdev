import clsx from "clsx";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";
import { RiErrorWarningFill } from "react-icons/ri";

type Props = {
  children: React.ReactNode;
  type?: "note" | "warning" | "dislike" | "like";
};

export default function Note({ children, type, ...props }: Props) {
  return (
    <blockquote
      className={clsx(
        "relative flex flex-col my-4 px-5 py-2.5",
        "after:content-[''] after:absolute after:top-0 after:left-0 after:w-1.5 after:h-full after:shadow-lg",
        !type && "bg-gray-800/50 after:bg-gray-800",
        type == "note" && "bg-blue-600/50 after:bg-blue-600",
        type == "warning" && "bg-amber-600/50 after:bg-amber-600",
        type == "dislike" && "bg-red-600/50 after:bg-red-600",
        type == "like" && "bg-green-600/50 after:bg-green-600"
      )}
      {...props}
    >
      {type && (
        <label className="flex items-center gap-2 mb-2 text-white font-semibold">
          {type == "note" && <HiInformationCircle size={12} />}
          {type == "warning" && <RiErrorWarningFill size={12} />}
          {type == "dislike" && <FaThumbsDown size={12} />}
          {type == "like" && <FaThumbsUp size={12} />}
          {type.toString().toUpperCase()}
        </label>
      )}
      {children}
    </blockquote>
  );
}
