const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bg = document.querySelectorAll(".animated-bg");
const animated_bg_text = document.querySelectorAll(".animated-bg-text");

function getDate() {
  header.innerHTML = `<img src="images/photo-one.jfif" alt=""/>`;
  title.innerHTML = `Lorem ipsum dolor sit amet`;
  excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur elit. Dolore perferendis`;
  profile_img.innerHTML = `<img src="images/touxiang.jpg" alt=""/>`;
  name.innerHTML = "John Doe";
  date.innerHTML = "Oct 08, 202";

  animated_bg.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_text.forEach((bg) => bg.classList.remove("animated-bg-text"));
}

setTimeout(getDate, 2500);
