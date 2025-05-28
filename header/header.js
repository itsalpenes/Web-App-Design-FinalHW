fetch("../header/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header-container").innerHTML = data;
  });

function toggleBar() {
  console.log("clicked");
  var menu = document.getElementById("header-ul");

  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
    menu.style.flexDirection = "row";
    menu.style.position = "absolute";
    menu.style.top = "35px";
    menu.style.right = "30px";
    menu.style.backgroundColor = "rgba(26, 74, 27, 0.91)";
    menu.style.width = "400px";
    menu.style.zIndex = "1200";
    menu.style.lineHeight = "1.8";
    menu.style.padding = "15px 10px 10px 15px";
    menu.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
    menu.style.alignItems = "center";
    menu.style.transition = "all 0.3s ease-in-out";
    menu.style.borderRadius = "10px";
    menu.classList.add("animate__animated", "animate__fadeInDown");
  }
}
