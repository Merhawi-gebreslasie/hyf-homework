const searchinput = document.getElementById('myinput');

const value =searchinput.value;
const searchbutton = document.getElementById('mybutton');
const div = document.createElement('div');
document.body.appendChild(div);
function searchgif() {
    fetch("https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=dc6zaTOxFJmzC&q=rainbow")
        .then(Response => Response.json())
        .then(Response => {
            Response.data.forEach(d=>{
                if(d[value]===d[i]){
                    const img = document.createElement('img');
                    img.innerText = d.images.original.url;
                    div.appendChild(img);
                }
                else{
                    const h1=document.createElement('h1');
                    h1.innerText='please enter the correct number';
                    document.body.appendChild(h1);
                }
           
            })
        })
            // for (let i = 0; i < res.length; i++) {
            //     for(let j=0;j<searchinput.value;j++){
            //         let image = res[j];


            //     }
                
            //     if(searchinput.value < res.length){
                  
            //     }
                 

            // const searchValue=Response.value;
            // div.innerText=searchValue;
            //     div.innerText=Response.data[0].images.url;

        
}

searchbutton.addEventListener('submit',searchgif);