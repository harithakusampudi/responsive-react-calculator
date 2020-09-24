export const isNumber = (key: any) => {
  return !isNaN(key) || key === ".";
};

export const getColorForKey = (key: string) => {
  if (isNumber(key)) {
    return "#595959";
  } else {
    const specialKeys = key === "c" || key === "+/-" || key === "%";
    return specialKeys ? "#8c8c8c" : "#fa8c16";
  }
};
