// const links = document.querySelector("a");

// links.addEventListener("focus", (e) => {

//     e.target.style.color = "tomato";
// })
// links.forEach(function (link) {

//   });
// });

const links = document.querySelectorAll("h1, a");

links.forEach(function (link) {
  link.addEventListener("focus", (e) => {
    e.target.style.color = "tomato";
    console.log(`Element ${e.currentTarget} is focused`);
  });
});
