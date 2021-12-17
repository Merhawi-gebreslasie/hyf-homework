let class07Students =[];
function addStudentToClass(studentName) {
    if(class07Students.indexOf(studentName)!==-1){
    console.log('Student '+ studentName+' is already in the class');
    }
    else if((class07Students.length<6&&studentName!=='')||studentName=='Margrethe'){
    
      class07Students.push(studentName);
        console.log(class07Students);
    
    }
       
      else{
        console.log('Cannot add more students to class 07'); 
      }
   
    }

         addStudentToClass('mera');
        addStudentToClass('mer');
        addStudentToClass('mera');
        addStudentToClass('');//empty string
        addStudentToClass('me');
        addStudentToClass('era');
        addStudentToClass('mea');
        addStudentToClass('extra')//more than limit
        addStudentToClass('Margrethe');//add anyways
    function getNumberOfStudents() {
        // You write code here
       
       return class07Students.length;
      }
      
    console.log(getNumberOfStudents());



