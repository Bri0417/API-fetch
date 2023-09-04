
async function user(){
 try {
    const res =  await fetch("https://jsonplaceholder.typicode.com/users")
    const result = await res.json();
    for (var i = 0; i < result.length; i++) {
  
      const div = document.createElement("div");
      div.innerHTML = `<div class="row row-cols-1 row-cols-md-3 ">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title"><b> <span>Name :</span> ${result[i].name} </b></h5>
              <p class="card-text"><span>Email :</span> ${result[i].email}</p>
              <p class="card-text"><span>Street :</span> ${result[i].address.street}</p>
              <p class="card-text"><span>Address :</span> ${result[i].address.subregion}</p>
     
            </div>
          </div>
        </div>
        </div>`;
      document.body.append(div);
    }
} catch (error) {
    console.log(error)
 }
}
user();