const div=document.createElement('div')
async function fecthData(){
  try{
  const vahabUser=await  fetch('https://api.github.com/search/repositories?q=user:Vahablotfi').then(user=>user.json());
  const mariemUser=await  fetch('https://api.github.com/search/repositories?q=user:mariem460').then(user=>user.json());
  const asmaUser=await  fetch('https://api.github.com/search/repositories?q=user:asmafassy').then(user=>user.json());

 
const users= await Promise.all([vahabUser,mariemUser,asmaUser])
 const result= users.map(item=>'<ul>'+
 '<li>'+'Full name :' +item.items[0].full_name+'</li>'+
 '<li>' +'Url :' +item.items[0].url+'</li>'+
 '<li>' +'Owner :'+item.items[0].html_url+'</li>'+
 '</ul>'
);
div.innerHTML=result;
document.body.appendChild(div)
  } catch(err){
    console.error(err);
}
fecthData()
