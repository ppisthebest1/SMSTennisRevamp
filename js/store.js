function inputFunction() {
  const input = document.querySelector("#storeInput")
  const filter = input.value.toUpperCase();
  const container = document.querySelector("#store-container");
  const items = container.getElementsByClassName("item");
  const results = document.querySelector("#storeInputResults");
  let count = 0;

  for (let i = 0; i < items.length; i++) {
    const a = items[i].getElementsByClassName("itemName")[0];
    const text = a.innerHTML.toUpperCase();
    const v = text.indexOf(filter);
    if (v > -1) {
      items[i].style.display = "";
      count++;
    } else {
      items[i].style.display = "none";
    }
  }

  if (count < 12)
    if (count == 1)
        results.textContent = "Showing 1 result.";
    else 
        results.textContent = "Showing " + count.toString() + " results.";
  else 
    results.textContent = "Showing all results.";
}
