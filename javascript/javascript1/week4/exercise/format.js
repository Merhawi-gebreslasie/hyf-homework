function formatCreditCardNumber(number) {
  let obj = {
    original: number,
    formated: "",
  };
  //let spaceSize=4;
  let char = number.toString();
  let spaceSize=4;

  while (char.length > 0) {
    obj.formated = obj.formated + "  " + char.substring(0, spaceSize);
    char = char.substring(spaceSize);
  }
  return obj;
}
const formattedCreditCardObject = formatCreditCardNumber(123456789);

console.log(formattedCreditCardObject);
/*
{
  original: 123456789,
  formatted: "1234 5678 9",
}

*/
