import { Checkbox } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TypeCellsData } from "../types/types";

type TypeProps = {
  data: TypeCellsData[];
  checkedItems: number[];
  handleSelectCheckbox: (itemId: number) => void;
};
const bodyRowCell =
  "px-[10.5px] py-[10.5px] first:flex first:items-center first:justify-between last:text-primary-foreground last:cursor-pointer";
const TableBody = ({ data, checkedItems, handleSelectCheckbox }: TypeProps) => {
  return (
    <tbody>
      {data.map((cell) => (
        <tr key={cell.id} className="h-[30px] first:border-t-0 border-t border-border self-center">
          <td className={bodyRowCell}>
            <Checkbox
              size="small"
              checked={checkedItems.includes(cell.id)}
              onChange={() => handleSelectCheckbox(cell.id)}
            />
            <span className="text-[23px] text-primary-foreground max-h-[23px] h-[23px]">
              {cell.icon}
            </span>
          </td>
          <td className={bodyRowCell}>
            <div className="flex flex-col justify-between gap-[5px]">
              <span className="text-primary font-bold">{cell.name}</span>
              <span className="text-primary-foreground">{cell.description}</span>
            </div>
          </td>
          <td className={bodyRowCell}>
            <span className="text-[10.5px] font-bold text-primary-foreground bg-accent-foreground py-[1.75px] px-[5.25px] rounded">{cell.owner}</span>
          </td>
          <td className={bodyRowCell}>
            <div className="flex justify-end px-[10.5px] py-[10.5px]">
              <BsThreeDotsVertical />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
