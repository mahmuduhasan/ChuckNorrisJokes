function fetchJoke() {
  const xhr = new XMLHttpRequest();

  xhr.open("get", "https://api.chucknorris.io/jokes/random");
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      //   console.log(data.value);
      document.getElementById("joke-holder").textContent = `${data.value}`;
    } else {
      console.log("Loading");
      document.getElementById("joke-holder").textContent = "Loading...";
    }
  };
  xhr.send();
}

document.addEventListener("DOMContentLoaded", fetchJoke);

document.getElementById("joke-getter").addEventListener("click", fetchJoke);
