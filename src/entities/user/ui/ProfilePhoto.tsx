import Image from "next/image";

type Props = {
  path: string;
  width: number;
  height: number;
};

export const ProfilePhoto = ({ path, width, height }: Props) => {
  return (
    <div className="overflow-hidden max-h-[45px] max-w-[45px] w-full h-full cursor-pointer">
      <Image
        className="rounded-full max-h-[45px] max-w-[45px] w-full h-full object-cover"
        src={path}
        alt="profile_photo"
        width={width}
        height={height}
      />
    </div>
  );
};
