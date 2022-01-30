const div=document.createElement('div')
async function fecthData(){
  const response1=await  fetch('https://api.github.com/search/repositories?q=user:Vahablotfi')
  const response2=await  fetch('https://api.github.com/search/repositories?q=user:mariem460')
  const response3=await  fetch('https://api.github.com/search/repositories?q=user:asmafassy')

  const user1=await response1.json()
  const user2=await response2.json()
  const user3=await response3.json()
const results= await Promise.all([user1,user2,user3])
 const result= results.map(item=>'<ul>'+
 '<li>'+'Full name :' +item.items[0].full_name+'</li>'+
 '<li>' +'Url :' +item.items[0].url+'</li>'+
 '<li>' +'Owner :'+item.items[0].html_url+'</li>'+
 '</ul>'
);
div.innerHTML=result;
document.body.appendChild(div)
}
fecthData()
