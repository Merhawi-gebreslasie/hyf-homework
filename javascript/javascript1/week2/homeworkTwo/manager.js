console.log("Student manager");
const class01Students = [];
function addStudentToClass(studentName) {
    // You write code her
    if (class01Students.length <= 6 && class01Students.indexOf(studentName) === -1) {
        class01Students.push(studentName);
        return class01Students;
    }
    else if(class01Students.indexOf(studentName) !== -1) {
        return "Student " + studentName + " is already in the class";
    }

    else if(studentName === "Margrethe II" && class01Students.length === 7) {

        class01Students.push(studentName);
        return class01Students;
    } else {
        return "Cannot add more students to class 07.";
    }
}


function getNumberOfStudents() {
    // You write code here
    return class01Students.length;


}
console.log(addStudentToClass("Merhawi"));
console.log(addStudentToClass("Tahmila"));
console.log(addStudentToClass("Merhawi"));
console.log(addStudentToClass("Tesfai"));
console.log(addStudentToClass("wael"));
console.log(addStudentToClass("Mohamed"));
console.log(addStudentToClass("Kat"));
console.log(addStudentToClass("Recardo"));
console.log(addStudentToClass("John"));
console.log(addStudentToClass("Margrethe II"));

console.log(getNumberOfStudents());
/*Student manager
manager.js:29 ["Merhawi"]
manager.js:30 (2) ["Merhawi", "Tahmila"]
manager.js:31 Student Merhawi is already in the class
manager.js:32 (3) ["Merhawi", "Tahmila", "Tesfai"]
manager.js:33 (4) ["Merhawi", "Tahmila", "Tesfai", "wael"]
manager.js:34 (5) ["Merhawi", "Tahmila", "Tesfai", "wael", "Mohamed"]
manager.js:35 (6) ["Merhawi", "Tahmila", "Tesfai", "wael", "Mohamed", "Kat"]
manager.js:36 (7) ["Merhawi", "Tahmila", "Tesfai", "wael", "Mohamed", "Kat", "Recardo"]
manager.js:37 Cannot add more students to class 07.
manager.js:38 (8) ["Merhawi", "Tahmila", "Tesfai", "wael", "Mohamed", "Kat", "Recardo", "Margrethe II"]
manager.js:40 8
*/