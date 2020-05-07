document
  .getElementById("nav-button")
  .addEventListener("click", dropdownDisplay);
function dropdownDisplay() {
  let container = document.getElementById("dropdown-container");
  let divs = document.getElementsByClassName("items-div");

  if (container.style.display == "unset") {
    container.style.display = "none";
    container.style.pointerEvents = "none";
  } else {
    for (let i = 0; i < divs.length; i++) {
      divs[i].style.height = "40px";
      divs[i].style.webkitTransition =
        "height 750ms linear, background-color 750ms linear";
      divs[i].style.transition =
        "height 750ms linear, background-color 750ms linear";
    }
    container.style.display = "unset";
    container.style.pointerEvents = "all";
  }
}

function showDescription(name) {
  let hodge = document.getElementById("hodge-desc");
  let mccormic = document.getElementById("mccormic-desc");

  if (name == "hodge") {
    mccormic.style.display = "none";
    hodge.style.display = "unset";
  }
  if (name == "mccormic") {
    hodge.style.display = "none";
    mccormic.style.display = "unset";
  }
}
