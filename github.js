const client_ID = 'e747e7b6ee095c339bf9';
const client_Secrect = '6272ba6f3eab62183322a347b088e47e650fc2ff';
const repos_count = 5;
const repos_sort = "full_name";

export default async function getUserAsync(user) 
{
    return fetch(`https://api.github.com/users/${user}?client_id=${client_ID}&client_secret=${client_Secrect}`)
    .then(response => response.json())
}

// export default async function getUserRepo(user){
//     return fetch(`https://api.github.com/users/${user}/repos?per_page=${repos_count}&sort=${repos_sort}&client_id=${client_ID}&client_secret=${client_Secrect}`)
//     .then(response => response.json())
// }
  

