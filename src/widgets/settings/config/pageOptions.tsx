import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";

export const pageOptions = [
  {
    id: 0,
    icon: <RiUser3Line />,
    name: "Account settings",
    pathname: "account",
  },
  {
    id: 1,
    icon: <HiOutlineQuestionMarkCircle />,
    name: "Get help",
    pathname: "get_help",
  },
  {
    id: 2,
    icon: <MdOutlineFileDownload />,
    name: "Get the app",
    pathname: "download",
  },
];
