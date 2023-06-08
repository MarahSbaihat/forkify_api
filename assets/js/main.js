var myRecipes = [];
var links = document.querySelectorAll('.nav-link');
for(var i=0; i<links.length; i++){
    links[i].addEventListener('click',function(e){
        getRecipes(e.target.text);
    });
}

function getRecipes (meal){
    var httpRequest = new XMLHttpRequest ();
    httpRequest.open('GET',`https://forkify-api.herokuapp.com/api/search?q=${meal}`);
    httpRequest.send();
    httpRequest.addEventListener('readystatechange', function(){
        if(httpRequest.readyState==4 && httpRequest.status==200){
            myRecipes = JSON.parse(httpRequest.response).recipes;
            displayData();
        }
    });
}

function displayData(){
    var result = ``;
    for (var i=0; i<myRecipes.length; i++){
        result+=`
        <div class="col-md-3">
        <div class="data">
            <h2 class"heading">${myRecipes[i].title}</h2>
            <img class="w-100 h-75" src="${myRecipes[i].image_url}" />
        </div>
        </div>
        `;
    }
    document.getElementById('data').innerHTML=result;
}