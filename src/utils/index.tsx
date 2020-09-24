import { keyColors } from "../constants";

export const isNumber = (key: any) => {
  return !isNaN(key) || key === ".";
};

export const getColorForKey = (key: string) => {
  if (isNumber(key)) {
    return keyColors.black;
  } else {
    const specialKeys = key === "c" || key === "±" || key === "%";
    return specialKeys ? keyColors.lightGrey : keyColors.orange;
  }
};
