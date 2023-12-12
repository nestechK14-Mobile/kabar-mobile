export const stringGotUppercase = text => {
  let textArray = text.split('');
  console.log(textArray);
  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i] === textArray[i].toUpperCase && textArray[i] !== textArray[i].toLowerCase()) {
      return true;
    }
  }
  return false;
};
