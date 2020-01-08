const button=document.querySelector('.myform button');
const input=document.querySelector('.myform input');
function myFonction(callback){
    input.innerHTML=input.value;
button.addEventListener('click',()=>{
    setTimeout(()=>{console.log('This is input')},callback*1000)
})
input.addEventListener('iput',()=>{

})
}
myFonction(input.value)
function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
      textbox.addEventListener(event, function() {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          this.value = "";
        }
      });
    });
  }
  setInputFilter(input,input.value);
