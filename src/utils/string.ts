export const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const numberToVowel = (text: string) => {
  return text
    .replace(/3/g, 'e')
    .replace(/4/g, 'a')
    .replace(/1/g, 'i')
    .replace(/0/g, 'o');
};
