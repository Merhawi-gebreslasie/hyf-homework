const  thumpUpSpan = document.querySelector("span");
const marks = document.querySelectorAll(".marks li");
async function translateOneByOne() {
        let  redMoved = await  moveElement(marks[0], { x: 20, y: 300 })
        console.log("Red has been moved");
        let  blueMoved = await moveElement(marks[1], { x: 400, y: 312 })
        console.log("Blue has been moved");
        let  greenMoved = await moveElement(marks[2], { x: 400, y: 20 })
        console.log("Green has been moved");
        thumpUpSpan.classList.add('shown')
    }
    
    //uncomment   to see the result for allAtOnce
   // translateOneByOne()
    
    
    
    
    
    
    
    async function translateAllAtOnce() {
        let  redMoved =  moveElement(marks[0], { x: 20, y: 300 })
        
        let  blueMoved = moveElement(marks[1], { x: 400, y: 312 })
        
        let  greenMoved =moveElement(marks[2], { x: 400, y: 20 })
        const result=Promise.all([redMoved,blueMoved,greenMoved])
        thumpUpSpan.classList.add('shown')
    }
    (async()=>await translateAllAtOnce())();








