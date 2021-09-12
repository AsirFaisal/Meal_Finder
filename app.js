async function searchFood() {
  const text = document.getElementById("searchField");
  const search = text.value;
  text.value = "";
  const url = `https://themealdb.com/api/json/v1/1/search.php?s=${search}`;
  const res = await fetch(url);
  const data = await res.json();
  displayData(data.meals);
  console.log(data.meals);
}
async function myFunction(id) {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const res = await fetch(url);
  const data = await res.json();
  const meal = data.meals[0];
  const card = document.getElementById("clicked");
  card.innerHTML = " ";
  const mealname = "Hello";

  card.innerHTML = `<div class="card mx-auto my-auto" style="width: 18rem;">
      <img src= ${meal.strMealThumb} class="card-img-top" alt="...">
      <div class="card-body ">
        <h5 class="card-title">${meal.strMeal}</h5>
        <h3>Food type : ${meal.strCategory}</h3>
        <p class="card-text">Instructions : ${meal.strInstructions}}</p>
        
      </div>`;
}
function displayData(meals) {
  const card = document.getElementById("clicked");
  card.innerHTML = " ";
  const results = document.getElementById("card");
  results.innerHTML = "";
  if (meals == null) {
    alert("No result found");
  } else {
    meals.forEach((meal) => {
      const card = document.createElement("div");
      const url = meal.strMealThumb;
      card.innerHTML = `<div class="card mx-auto my-auto" style="width: 18rem;" onclick='myFunction(${
        meal.idMeal
      })'>
      <img src= ${meal.strMealThumb} class="card-img-top" alt="...">
      <div class="card-body ">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        <a href="#" class="btn btn-primary">See Recipe</a>
      </div>`;
      results.appendChild(card);
    });
  }
}
