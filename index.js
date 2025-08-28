
let numberBank = [];
let odds = [];
let evens = [];


function render() {
 
  document.body.innerHTML = "";

  
  const title = document.createElement("h1");
  title.textContent = "Odds and Events";
  document.body.appendChild(title);

 
  const input = document.createElement("input");
  input.type = "number";
  input.id = "numberInput";

  const addBtn = document.createElement("button");
  addBtn.textContent = "Add number";
  addBtn.addEventListener("click", () => {
    const value = parseInt(input.value);
    if (!isNaN(value)) {
      numberBank.push(value);
      input.value = "";
      render();
    }
  });

  const sortOneBtn = document.createElement("button");
  sortOneBtn.textContent = "Sort 1";
  sortOneBtn.addEventListener("click", () => {
    if (numberBank.length > 0) {
      const num = numberBank.shift();
      if (num % 2 === 0) {
        evens.push(num);
      } else {
        odds.push(num);
      }
      render();
    }
  });

  const sortAllBtn = document.createElement("button");
  sortAllBtn.textContent = "Sort All";
  sortAllBtn.addEventListener("click", () => {
    while (numberBank.length > 0) {
      const num = numberBank.shift();
      if (num % 2 === 0) {
        evens.push(num);
      } else {
        odds.push(num);
      }
    }
    render();
  });

  document.body.appendChild(input);
  document.body.appendChild(addBtn);
  document.body.appendChild(sortOneBtn);
  document.body.appendChild(sortAllBtn);

  
  document.body.appendChild(renderList("Bank", numberBank));
  document.body.appendChild(renderList("Odds", odds));
  document.body.appendChild(renderList("Evens", evens));
}

function renderList(title, arr) {
  const container = document.createElement("div");
  const heading = document.createElement("h3");
  heading.textContent = title;
  const list = document.createElement("p");
  list.textContent = arr.join(" ");
  container.appendChild(heading);
  container.appendChild(list);
  return container;
}


render();