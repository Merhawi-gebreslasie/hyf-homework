console.log("formal name");
function getFullname(firstname,surname,useFormalName){
    let fullname1=firstname;
    let fullname2=surname;
    if(useFormalName){
        return "Lord "+fullname1+" "+ fullname2;
    }
    else{
        return fullname1+" "+fullname2;
    }  
}
console.log(getFullname("Merhawi","Gebreslasie",true));
console.log(getFullname("Merhawi","Gebreslasie",false));
console.log(getFullname("Merhawi","Gebreslasie",""));

/* The solution looks like this:
Lord Merhawi Gebreslasie*/