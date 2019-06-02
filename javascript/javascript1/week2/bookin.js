
console.log("Flight booking full name function".toUpperCase());   


function getFullname(firstname,surname,useFormalName){
    var fullname1=firstname;
    var fullname2=surname;
var formalName="Lord"+" "+fullname1+" "+fullname2;
    if(useFormalName){
        return formalName;    
    
}
else{
    return fullname1 + " "+fullname2; 
}
}
// Testing
console.log(getFullname('Merhawi','Gebreslassie',true));