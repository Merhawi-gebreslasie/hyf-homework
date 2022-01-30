
const bodyElement= document.querySelector('body')
const firstNameInputElement= document.getElementById('firstName')
const dobInputElement= document.getElementById('dob')
const buttonElement= document.querySelector('button')

let arr=[]
class Person{
    constructor(firstName, dob){
        this.firstName= firstName;
        this.dob= dob;
        
    }
    
    computeAge(){
        return 2020-this.dob
    }
    
    renderPersonInfo(){
        const divElement= document.createElement('div')
        
        divElement.innerHTML= `First Name: ${this.firstName} Dob: ${this.dob}`
       
        bodyElement.append(divElement)


    }

    editPersonInfo(){

    }
}

const pr= new Person('one',1990)


buttonElement.addEventListener('click', ()=>{
    const person= new Person(firstNameInputElement.value,dobInputElement.value)
    person.renderPersonInfo()
    firstNameInputElement.value=""
    dobInputElement.value=""
})

