const div=document.createElement('div')
async function fecthData(){
  try{
  const vahabUser=await  fetch('https://api.github.com/search/repositories?q=user:Vahablotfi')
  const mariemUser=await  fetch('https://api.github.com/search/repositories?q=user:mariem460')
  const asmaUser=await  fetch('https://api.github.com/search/repositories?q=user:asmafassy')

  const user1=await vahabUser.json()
  const user2=await mariemUser.json()
  const user3=await asmaUser.json()
const results= await Promise.all([user1,user2,user3])
 const result= results.map(item=>'<ul>'+
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
