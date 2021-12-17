const notes = [];
function saveNote(content, id) {
  if(typeof id!=='number'){
return 'id  should be a number';
  }
  return notes.push({ content, id }); //we  only use { content,id} since it has the same name ,we can also use the object {conten:content,id:id}
} 

saveNote("Pickup groceries", 1);
saveNote("Do laundry", 2);
saveNote("Do Cleaning", 3);
saveNote("Preparing Food", 4);
console.log(notes);

function getNote(id) {

  // your code here
  for (let i = 0; i < notes.length; i++) {
    return notes[i].id == id
      ? notes[i]
      : "id does not exist or an error string";
  }
}

const firstNote = getNote("gjhgj");
console.log(firstNote); // {content: 'Pick up groceries', id: 1

function logOutNotesFormatted() {
  // your code here
  for (let i = 0; i < notes.length; i++) {
    console.log(
      "The note with id:" +
        notes[i].id +
        "," +

        "  has the following note text: " +
        notes[i].content
    );
  }
}

logOutNotesFormatted(); // should log out the text below

// xxxxxx The note with id: 1, has the following note text: Pick up groceries
