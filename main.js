// Getting error:  error TypeError: Cannot read properties of undefined (reading 'strIngredient7') when trying to push ingredients to DOM?????

//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks)

      let arr = []
      for (let i = 0; i < 15; i++){
        if(data.drinks[i][`strIngredient${i}`] !== null){
          console.log(data.drinks[i][`strIngredient${[i]}`])
        }
          arr.push([`strIngredient${[i]}`])
      }

      document.querySelector('h2').innerText = data.drinks[0].strDrink
      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      document.querySelector('.instructions').innerText = data.drinks[0].strInstructions
      document.querySelector(".ingredients").innerHTML = arr

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}
 
