export const shortenNumber = (number: string | number, digits = 2) => {
  if (number === "-" || !number) return number;
  const value = Number(number);
  const operator = value > 0 ? "" : "-";

  const si_suffixes = [
    { value: 1e12, symbol: "T" },
    { value: 1e9, symbol: "B" },
    { value: 1e6, symbol: "M" },
    { value: 1e3, symbol: "K" },
    { value: 1, symbol: "" },
  ];

  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let item = si_suffixes.slice().find(function (item) {
    return Math.abs(value) >= item.value;
  });
  return item
    ? `${operator}${(value / item.value).toFixed(digits).replace(rx, "$1")}${
        item.symbol
      }`
    : 0;
};

export function dig(obj: any, keyString: string) {
  const keys = keyString.split(".");
  let nestedObj = obj;

  for (const key of keys) {
    if (nestedObj && typeof nestedObj === "object" && key in nestedObj) {
      nestedObj = nestedObj[key];
    } else {
      return undefined;
    }
  }
}

export function set(obj: any, keyString: string, value: any) {
  const keys = keyString.split(".");
  console.log("dd", keys);
  let nestedObj = obj;

  for (let i = 0; i <= keys.length - 1; i++) {
    const key = keys[i];

    if (!nestedObj[key] || typeof nestedObj[key] !== "object") {
      nestedObj[key] = {};
    }

    nestedObj = nestedObj[key];
    console.log("xxx", nestedObj);
  }

  nestedObj[keys[keys.length - 1]] = value;
  return nestedObj;
}
