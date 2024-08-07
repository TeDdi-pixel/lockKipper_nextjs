import { PhotoBlock } from "./PhotoBlock";
import { PageOptions } from "./PageOptions";
import { ActionOptions } from "./ActionOptions";

export const Settings = ({ status }: { status: boolean }) => {
  return (
    <div
      className={`${
        status
          ? "opacity-100 translate-x-[0px] z-[999]"
          : "opacity-0 translate-x-[-30px] -z-50"
      } max-w-[250px] w-full border border-border rounded-xl absolute right-0 top-[50px] transition-all duration-300 bg-background`}
    >
      <PhotoBlock />
      <PageOptions />
      <ActionOptions />
    </div>
  );
};
