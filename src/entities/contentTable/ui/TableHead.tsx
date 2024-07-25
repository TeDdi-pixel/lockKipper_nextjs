import { Checkbox } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";

type Props = {
  handleCheckAll: () => void;
  allChecked: boolean;
};

const cellClassName =
  "text-primary-foreground font-bold px-[10.5px] py-[10.5px] first:min-w-[84px] first:w-[132px]";

const TableHead = ({ handleCheckAll, allChecked }: Props) => {
  return (
    <thead>
      <tr className="border-b-2 border-border text-left">
        <th className={`${cellClassName}`}>
          <Checkbox
            size="small"
            onChange={handleCheckAll}
            checked={allChecked}
          />
          <span className="align-middle">All</span>
        </th>
        <th className={cellClassName}>Name</th>
        <th className={cellClassName}>Owner</th>
        <th className={`${cellClassName} cursor-pointer`}>
          <div className="flex justify-end px-[10.5px] py-[10.5px]">
            <BsThreeDotsVertical />
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
