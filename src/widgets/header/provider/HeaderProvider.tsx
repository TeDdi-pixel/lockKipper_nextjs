"use client";
import { ProfilePhoto } from "@/entities/user";
import { setSettings } from "@/store/features/settings/settingsSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Settings } from "@/widgets/settings";
import React, { ReactNode } from "react";

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.settings);
  return (
    <header className="flex justify-between items-center h-[45px] mb-[30.5px] relative">
      {children}
      <ProfilePhoto
        path={"/photo_2024-04-18_12-10-09.jpg"}
        width={45}
        height={45}
        onClick={() => dispatch(setSettings(!status))}
        className="cursor-pointer"
      />
      <Settings status={status} />
    </header>
  );
};
