/* suggestion */

let data = [
  { name: "health" },
  { name: "offers" },
  { name: "medicie" },
  { name: "opo" },
];
const suggestionPannel = document.getElementById("suggestion");
const search_input = document.querySelector(".search-input");
search_input.addEventListener("keyup", function () {
  const input = search_input.value;

  suggestionPannel.innerHTML = "";
  const suggestion = data.filter(function (data) {
    return data.name.toLocaleLowerCase().startsWith(input);
  });

  suggestion.forEach(function (el) {
    const div = document.createElement("div");
    div.innerHTML = el.name;
    suggestionPannel.appendChild(div);
    /*   if (input === "") {
      suggestionPannel.style.visibility = "hidden";
    } else {
      div.innerHTML = el.name;
    } */
  });
  if (input === "") {
    suggestionPannel.innerHTML = "";
  }
});
