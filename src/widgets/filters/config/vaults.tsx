import { RiUser3Line } from "react-icons/ri";
import { GoPlus } from "react-icons/go";

export const vaults = [
  {
    id: 0,
    name: "My vault",
    icon: <RiUser3Line />,
    pathname: "my_vault",
  },
  {
    id: 1,
    icon: <GoPlus />,
    name: "New organization",
    pathname: "create_organization",
  },
];
