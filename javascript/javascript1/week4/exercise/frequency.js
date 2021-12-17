function getCharacterFrequencies(str) {
  var obj = {
    Character: [],
  };
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let myChar = str.charAt(i);
    if (result[myChar]) {
      result[myChar]++;
    } else {
      result[myChar] = 1;
    }
  }
  const propertyNames = Object.keys(result);
  const propertyValues = Object.values(result);
  for (let i = 0; i < propertyNames.length; i++) {
    let tempObj = {
      character: propertyNames[i],
      count: propertyValues[i],
    };
    obj.Character.push(tempObj);
  }

  console.log(obj);
}
getCharacterFrequencies("happy");
