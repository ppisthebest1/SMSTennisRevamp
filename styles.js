document
  .getElementById("nav-button")
  .addEventListener("click", dropdownDisplay);

function dropdownDisplay() {
  let x = document.getElementById("dropdown-container");
  if (x.style.display == "unset") {
    x.style.height = "0";
    x.style.display = "none";
    x.style.pointerEvents = "none";
  } else {
    x.style.display = "unset";
    x.style.pointerEvents = "all";
    x.style.height = "160px";
  }
}
