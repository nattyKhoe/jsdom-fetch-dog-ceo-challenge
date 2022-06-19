// console.log('%c HI', 'color: firebrick');
window.onload= function(){
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
let dogBreed = document.querySelector("#dog-breeds");

fetch(imgUrl)
.then( response => response.json())
.then( json => {
    json.message.forEach(dog => {
        let dogImg = document.createElement("img");
        dogImg.src = dog;
        dogImg.style.height = '200px';
        document.querySelector("#dog-image-container").appendChild(dogImg); //or store "dog-image-container" into a variable
    });
});

fetch(breedUrl)
.then( response => response.json() )
.then( json=> {
    for (let breed in json.message){
        let breedLI = document.createElement("li");
        breedLI.innerText = breed;
        
        dogBreed.appendChild(breedLI);
    };
});

dogBreed.addEventListener ('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.style.color = 'red';
    }
});

document.querySelector("#breed-dropdown").addEventListener('change', function (e){
    dogBreed.innerHTML ="";
    let option = document.querySelector("#breed-dropdown").value;

    fetch(breedUrl)
    .then( response => response.json())
    .then( json =>{
        for (let breed in json.message) {
            if (breed[0] === option){
                let breedLI = document.createElement("li");
                breedLI.innerText = breed;
                
                dogBreed.appendChild(breedLI);
            }
        }
    });
    });
};

