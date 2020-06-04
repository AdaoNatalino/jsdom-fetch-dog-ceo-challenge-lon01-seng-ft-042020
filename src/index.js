// console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener('DOMContentLoaded', function () {
    //load the dogs
    getAllTheDogs()
    getAllBreeds()
});

function getAllTheDogs(){fetch(imgUrl)
    // .then always expects to receive a function as a parameter
    // and also, that function ALWAYS recieves the
    // value of the previous promise resolution
    .then(function (JSONDataAboutDogs) {
      // this is going to be ALWAYS the same
      // we have to call .json() to tell the browser
      // that the binary data is in JSON format
      // and we would like to convert it to a js array
      return JSONDataAboutDogs.json();
    })
    .then(function (dogArray) {
      // once the data is eventually in the JS format
      // we can do our biz
      showDogs(dogArray);
    })}


  function makeDogCard(dog) {
    //   debugger
    const div = document.createElement("div");
    div.className = "card";
  
    const img = document.createElement("img");
    img.src = dog;
  
    //add all elements to div
    div.appendChild(img);
  
    return div;
  }

  function addDog(dog) {
    // selecting the target of the operation
    const dog_list = document.querySelector("#dog-image-container");
    // creating a dom node
    const div = makeDogCard(dog);
    // appending the node to the parent
    dog_list.appendChild(div);
  }

  function showDogs(dogArray) {
    // //   debugger
    // for (let i = 0; i < dogArray.message.length; i++) {
    //   addDog(dogArray.message[i]);
    // }


    // for (const element of dogArray.message){
    //   addDog(element)
    // }

    dogArray.message.forEach(element => {
      addDog(element)
    });
  }

  //-----------------------------------------------------------------------------------------------------

  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  function parseJSONintoJSObject(JSONDataAboutBreeds) {
    return JSONDataAboutBreeds.json();
  }

  function renderBreeds(breedsArray) {
    showBreeds(breedsArray);
  }

  function getAllBreeds() {
    //   debugger
    fetch(breedUrl)
    .then(parseJSONintoJSObject)
    .then(renderBreeds) 
  }

  function showBreeds(breedsArray) {
    // //   debugger
    // for (let i = 0; i < Object.keys(breedsArray.message).length; i++) {
    //     addBreed(Object.keys(breedsArray.message)[i]);
    //   }

    for (const key in breedsArray.message) {
      addBreed(key)
    }
  }

  function makeBreed(breed) {
    const div = document.createElement("div");
    div.className = "breed";
    const breedName = document.createElement("li");
    breedName.textContent = breed;
    div.appendChild(breedName);
  
    return div;
  }

  function addBreed(breed) {
    const breed_list = document.querySelector("#dog-breeds");
    const div = makeBreed(breed);
    breed_list.appendChild(div);
  }
