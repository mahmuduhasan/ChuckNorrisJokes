const jokeCategory = document.getElementById("joke-category");
let category = 0;

function getCategory(e) {
  category = e.target.value;
  // console.log(category);
}

function createCategory(category) {
  // console.log(jokeCategory);
  const option = document.createElement("option");
  option.value = category;
  option.textContent =
    category[0].toUpperCase() + category.slice(1, category.length);
  jokeCategory.appendChild(option);
}

function fetchCategory() {
  const xhr = new XMLHttpRequest();
  xhr.open("get", "https://api.chucknorris.io/jokes/categories");
  xhr.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
      const categoryData = JSON.parse(this.responseText);
      // categoryData.unshift("Select Category");
      // console.log(categoryData);
      categoryData.forEach((category) => {
        createCategory(category);
      });
    }
  };
  xhr.send();
  fetchJoke();
}

function fetchJoke() {
  let url;
  if (category === 0) {
    url = "https://api.chucknorris.io/jokes/random";
  } else {
    url = `https://api.chucknorris.io/jokes/random?category=${category}`;
  }
  const xhr = new XMLHttpRequest();

  xhr.open("get", url);
  xhr.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
      document.getElementById("joke-holder").textContent = JSON.parse(
        this.responseText
      ).value;
    }
  };

  xhr.send();
}

document.addEventListener("DOMContentLoaded", fetchCategory);
jokeCategory.addEventListener("change", getCategory);
document.getElementById("joke-getter").addEventListener("click", fetchJoke);
