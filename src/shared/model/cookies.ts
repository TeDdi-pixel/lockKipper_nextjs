'use server'

import { cookies } from "next/headers";

export const getFromCookies = (key: string) => {
  const cookieStore = cookies();
  const cookie = cookieStore.get(key);
  return cookie ? JSON.parse(cookie.value) : null;
};

export const saveToCookies = (key: string, data: any, options = {}) => {
  const cookieStore = cookies();
  cookieStore.set(key, JSON.stringify(data), {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
    sameSite: "strict",
    path: "/",
    ...options,
  });
};

export const removeCookie = (key: string, options = {}) => {
  const cookieStore = cookies();
  cookieStore.delete(key, {
    path: "/",
    ...options,
  });
};
