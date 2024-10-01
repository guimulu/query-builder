// Disclaimer: This will only mask the IPv4 address, if we need to mask IPv6 we need to change the regex.
export default (value: string): string => {
  return value
    .replace(/[^\d.]/g, "")
    .split(".")
    .map((part) => {
      // Remove leading zeros
      let num = parseInt(part, 10);
      // We can't have a number smaller than 0 in an IP address
      if (isNaN(num) || num < 0) num = 0;
      // We can't have a number bigger than 255 in an IP address
      if (num > 255) num = 255;
      return num.toString();
    })
    .slice(0, 4)
    .join(".");
};
