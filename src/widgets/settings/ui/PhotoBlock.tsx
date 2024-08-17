import { ProfilePhoto } from "@/entities/user";
import { Text } from "@/shared/ui/Text";
import { useAppSelector } from "@/store/hooks";

export const PhotoBlock = () => {
  const { user, profilePhoto } = useAppSelector((state) => state.user);
  return (
    <div className="px-[14px] py-[12px] flex items-center gap-[5px] border-b border-border">
      <ProfilePhoto path={profilePhoto} width={45} height={45} />

      <div className="flex items-center gap-[5px] text-primary-foreground">
        <Text>Logged is as</Text>
        <Text className="text-[12.6px]">{user.displayName}</Text>
      </div>
    </div>
  );
};
