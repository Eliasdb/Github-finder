import getUserAsync from './github.js';
import newfunction from './ui.js';

const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e)=>{
    var user = e.target.value;
    var passData = getUserAsync(user);
    newfunction(passData);
    
})

