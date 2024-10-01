export default (value: string): string => {
  return value.replace(/\D/g, "").replace(/(\d)(\d{2})$/, "$1.$2");
};
