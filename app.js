const client_ID = 'b461dc91e5897eba844a';
const client_Secrect = '0af9a092b4cf525a9ce6ffc646134f9fd5466894';



const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e)=>{
  if(e.keyCode == 13){
    user = searchUser.value;
    async function getUserAsync(user) 
  {
    let response = await fetch(`https://api.github.com/users/${user}`);
    let data = await response.json()
    return data;
  }
  
  getUserAsync(user)
    .then(data => console.log(data)); 
  }
   
})
