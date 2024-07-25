import Image from "next/image";

type Props = {
  path: string;
  width: number;
  height: number;
  onClick?: () => void;
  className?: string;
};

export const ProfilePhoto = ({
  path,
  width,
  height,
  onClick,
  className,
}: Props) => {
  return (
    <div
      className={`overflow-hidden max-h-[45px] max-w-[45px] w-full h-full ${className}`}
      onClick={onClick}
    >
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
