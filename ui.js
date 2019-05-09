
export default async function newfunction(gotData){
    let passData = await gotData;
    document.getElementById('profile').innerHTML = `
    <div class="  card card-body mb-3">
    <div class="row">
    <div class="col-md-3">
    <img class="img-fluid mb-2" src="${passData.avatar_url}">
    <a href="${passData.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
    </div>
    <div class="col-md-9">
    <span class="badge badge-primary">Repo public: {passData.repos}</span>
    <span class="badge badge-success">Followers: ${passData.followers}</span>
    <span class="badge badge-info">Following: ${passData.following}</span>
    <br><br>
    <ul class="list-group">
    <li class="list-group-item">Company:${passData.company}</li>
    <li class="list-group-item">Website/Blog: <a href="${passData.blog}">${passData.blog} </a></li>
    <li class="list-group-item">Location: ${passData.location}</li>
    <li class="list-group-item">Member Since: ${passData.created_at}</li>
    </ul>
    </div>
    </div>
    </div>` 
}
    
  







