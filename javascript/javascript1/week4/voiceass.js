
let todo = [];
let response = null;
let names = [];
function getReply(command) {
  
  let arr = command.split(" ");
  let name = arr[arr.length - 1];
  
  let myName = "Hello my name is";
  if (names.indexOf(name) !== -1) {
    response = name + "you aready exist";
    
  } else if (command.includes(myName)) {
    names.push(name);
    response = "nice to meet you " + name;

  } else if (command.includes("What is my name?")) {
    response = names[names.length - 1];
   
  } 

  
    else if (command.includes("Add fishing")) {
      todo.push("fishing");
       response=" fishing added to your to do";
    }
    else if (command.includes("singing")) {
     response=  todo.push("singing in the shower");
    }
   else if (command.includes("Remove fishing from my todo")) {
      let fishingRemoved = todo.shift();
      
      response= ("Removed " + fishingRemoved + " from your todo");
    
    }
    else if (command === "What is on my todo?") {
      response=todo+',';

      
    }
    else if(command.includes("What day is it")){
let timestamp=new Date();
let humanReadableMonth=timestamp.toLocaleString('default',{month:'long'})
  response=timestamp.getDate()+'.of '+humanReadableMonth+' '+timestamp.getFullYear()
}
else if(command.includes('+')||command.includes('/')||command.includes('*')||command.includes('-')){

let  matches = command.match(/(\d+)/g);

    let num1=matches[matches.length-2];
    let num2=matches[matches.length-1];
    if(command.includes('+')){

      response=  num1+num2
    }
    
    if(command.includes('/')){

      response=  num1/num2
    }
    if(command.includes('-')){

      response=  num1-num2;
    }
    if(command.includes('*')){

      response= num1*num2;
    }
     matches=[];
    
}

    else if(command.includes('Set a timer ')){
      response=setTimeout(() => {
        console.log('Timer done');
      }, 4000);
      response=console.log('Timer set for 4 minutes');
    }else if(command.includes('random day')){
      let days=['Sunday','Monday','Tuesday','Wednesday','Thusday','Friday','Saturday'];
    let randomIndex=Math.floor(Math.random()*days.length-1);
    response=days[randomIndex];
    }

else{
  response='I will add more commands later';
}
  

  return response;
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Merhawi"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("What is on my todo?")); 
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 3 + 6"));
console.log(getReply("what is 3 * 6"));
console.log(getReply("what is 3 / 6"));
console.log(getReply("what is 3 - 6"));
console.log(getReply("Set a timer for 4 minutes"));
console.log(getReply('pick random day of a week'));
