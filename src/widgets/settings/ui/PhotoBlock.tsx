import { ProfilePhoto } from "@/entities/user";
import { Text } from "@/shared/ui/Text";

export const PhotoBlock = () => {
  return (
    <div className="px-[14px] py-[12px] flex items-center gap-[5px] border-b border-border">
      <ProfilePhoto path="/photo_2024-04-18_12-10-09.jpg" width={45} height={45} />

      <div className="flex items-center gap-[5px] text-primary-foreground">
        <Text>Logged is as</Text>
        <Text className="text-[12.6px]">Name</Text>
      </div>
    </div>
  );
};
