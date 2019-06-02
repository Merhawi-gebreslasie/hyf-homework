console.log('Student Manager');
const class07Students = [];
var add=0;
function addStudentToClass(studentName) {
    // You write code here
    
 if(class07Students.length<=5){
    class07Students.push(studentName);
add=class07Students;

}

else if((class07Students.length>=6) && (studentName==='Margrethe II')){
    class07Students.push(studentName);
add=class07Students;

}

else{
    add='Can not add more students to class 07';
    

}
  
    return add;
    }
    
  /*  console.log(class07Students);
    for(let i=0;i<=class07Students.length-1;i++){
        for(let j=i+1;j<=class07Students.length-1;i++){
    
        if((class07Students[i]===class07Students[j])&&(i!=j)){
            console.log('Can not add more students to the class 07')
            class07Students[i].pop(studentName) 
        }
    
} */

console.log(addStudentToClass('merhawi'));
console.log(addStudentToClass('gotish'));
console.log(addStudentToClass('merha'));
console.log(addStudentToClass('merh'));
console.log(addStudentToClass('merhawi'));
console.log(addStudentToClass('mer'));

console.log(addStudentToClass('hsdjflkj'));



