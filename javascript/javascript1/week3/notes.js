var notes=[];
function addNotes(content,id){
let obj={
    id:id,
    content:content,

};
return notes.push(obj);
}
function getNoteFromId(id){
    for(let i=0;i<=notes.length-1;i++){
       return notes[i].id===id?notes[i]:'an error string';
    }
} 
function logOutNotesFormatted(){
    let i=0;
    while(i<=notes.length-1){
    var note="The note with id:"+notes[i].id+','+' has the following note text: '+notes[i].content+".";
      i++; 

}
return note;
}
addNotes('You are sitting at a meeting. A person is presenting some interesting thought that you want to write down. You check your bag, but realise that you forgot to bring your notepad. Hmm you check the internet for an online solution. But you need to signup for them all, too bad... Maybe this could be a worthwhile problem so solve. Lets create a simple and easy to use notepad ',32);
addNotes('You have to have a moto to live and learn',1);
console.log(notes);
console.log(getNoteFromId(32));
console.log(getNoteFromId(3434));
console.log(logOutNotesFormatted());