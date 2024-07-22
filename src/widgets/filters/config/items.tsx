import { HiOutlineStar } from "react-icons/hi2";
import { IoEarthOutline, IoCardOutline } from "react-icons/io5";
import { BsPersonVcard } from "react-icons/bs";
import { MdOutlineStickyNote2 } from "react-icons/md";

export const items = [
  {
    id: 0,
    icon: <HiOutlineStar />,
    name: "Favorites",
    pathname: "favorites",
  },
  { id: 1, icon: <IoEarthOutline />, name: "Login", pathname: "login" },
  { id: 2, icon: <IoCardOutline />, name: "Card", pathname: "card" },
  {
    id: 3,
    icon: <BsPersonVcard />,
    name: "Identity",
    pathname: "identity",
  },
  {
    id: 4,
    icon: <MdOutlineStickyNote2 />,
    name: "Secure note",
    pathname: "secure_note",
  },
];
