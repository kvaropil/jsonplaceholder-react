export const shortenText = (text: string, maxLength: number = 100): string => {
  if (text.length <= 100) return text;
  return `${text.slice(0, maxLength)}...`;
};
