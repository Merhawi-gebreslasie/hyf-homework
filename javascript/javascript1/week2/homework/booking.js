function getFullname(fistName, lastName) {
  return fistName + lastName;
}
let fullName1 = getFullname("Merhawi", " Gebreslassie");
let fullName2 = getFullname("Goytom", " Gebreslassie");
console.log(fullName1);
console.log(fullName2);

function getFullname(fistName, lastName, useFormalName, gender) {
  if (useFormalName == null) {
    return " use formal name";
  }
  if (fistName == "" && lastName == "") {
    return " Insert name";
  }
  if (useFormalName) {
    return "Lord " + fistName + lastName + " Gender:" + gender;
  }
  return fistName + lastName + " Gender: " + gender;
}

fullName1 = getFullname("Merhawi", " Gebreslassie", false);
fullName2 = getFullname("Goytom", "Gebreslassie", true, "male");
console.log(fullName1);
console.log(fullName2);
