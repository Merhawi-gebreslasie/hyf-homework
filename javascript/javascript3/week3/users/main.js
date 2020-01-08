


// This is not the best approach ,I will work on it 


const NameUL=document.querySelector('.repo');
const promise1=new Promise(resolve=>{

        
fetch('https://api.github.com/search/repositories?q=user:Merhawi-gebreslasie')
.then(res=>res.json())
.then(res=>{
    const nameLI=document.createElement('li')
    nameLI.innerText='fullName: '+ res.items[0].full_name;
    NameUL.appendChild(nameLI);
    const urlUl=document.createElement('ul');
    const urlLI=document.createElement('li');
    nameLI.appendChild(urlUl);
    urlLI.innerText='url: '+ res.items[0].url;
    urlUl.appendChild(urlLI);
    const ownerUL=document.createElement('ul');
    urlLI.appendChild(ownerUL)
    const ownerLI=document.createElement('li');
    ownerLI.innerText='login: '+ res.items[0].owner.login;
    ownerUL.appendChild(ownerLI)
   

resolve();
})
})
const promise2=new Promise(resolve=>{
    fetch('https://api.github.com/search/repositories?q=user:wael85')
    .then(res=>res.json())
    .then(res=>{
        

        const nameLI=document.createElement('li')
        nameLI.innerText='fullName: '+ res.items[0].full_name;
        NameUL.appendChild(nameLI);
        const urlUl=document.createElement('ul');
        const urlLI=document.createElement('li');
        nameLI.appendChild(urlUl);
        urlLI.innerText='url: '+ res.items[0].url;
        urlUl.appendChild(urlLI);
        const ownerUL=document.createElement('ul');
        urlLI.appendChild(ownerUL)
        const ownerLI=document.createElement('li');
        ownerLI.innerText='login: '+ res.items[0].owner.login;
        ownerUL.appendChild(ownerLI)


        resolve()
    })
})
const promise3=new Promise(resolve=>{
    fetch('https://api.github.com/search/repositories?q=user:ricardoaguiar')
    .then(res=>res.json())
    .then(res=>{
        
    const nameLI=document.createElement('li')
    nameLI.innerText='fullName: '+ res.items[0].full_name;
    NameUL.appendChild(nameLI);
    const urlUl=document.createElement('ul');
    const urlLI=document.createElement('li');
    nameLI.appendChild(urlUl);
    urlLI.innerText='url: '+ res.items[0].url;
    urlUl.appendChild(urlLI);
    const ownerUL=document.createElement('ul');
    urlLI.appendChild(ownerUL)
    const ownerLI=document.createElement('li');
    ownerLI.innerText='login: '+ res.items[0].owner.login;
    ownerUL.appendChild(ownerLI)
resolve()
        
    })
})

// const clasmates=Promise.all([promise1,promise2,promise3]).then(()=>{
// console.log(res)})

