// Sample element data (you can expand this)
const elements = [
  { symbol: "H", name: "Hydrogen", atomicNumber: 1, description: "Lightest element, colorless gas." },
  { symbol: "He", name: "Helium", atomicNumber: 2, description: "Noble gas, used in balloons." },
  { symbol: "Li", name: "Lithium", atomicNumber: 3, description: "Soft metal, used in batteries." },
  { symbol: "Be", name: "Beryllium", atomicNumber: 4, description: "Toxic metal, used in aerospace." },
  { symbol: "B", name: "Boron", atomicNumber: 5, description: "Used in detergents and semiconductors." },
  { symbol: "C", name: "Carbon", atomicNumber: 6, description: "Basis of all life, forms diamonds." },
  { symbol: "N", name: "Nitrogen", atomicNumber: 7, description: "Makes up 78% of the atmosphere." },
  { symbol: "O", name: "Oxygen", atomicNumber: 8, description: "Essential for respiration." },
  { symbol: "F", name: "Fluorine", atomicNumber: 9, description: "Highly reactive gas, used in toothpaste." },
  { symbol: "Ne", name: "Neon", atomicNumber: 10, description: "Inert gas, used in lights." }
];

// Generate grid with placeholders
const table = document.getElementById("table");
for (let i = 1; i <= 118; i++) {
  const elementData = elements.find(e => e.atomicNumber === i);
  const div = document.createElement("div");
  div.classList.add("element");
  div.innerText = elementData ? elementData.symbol : "";
  div.setAttribute("data-atomic", i);
  if (elementData) {
    div.addEventListener("click", () => showModal(elementData));
  } else {
    div.style.backgroundColor = "#e0e0e0";
    div.style.cursor = "default";
  }
  table.appendChild(div);
}

// Modal logic
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");

function showModal(data) {
  document.getElementById("elementName").innerText = data.name;
  document.getElementById("elementSymbol").innerText = data.symbol;
  document.getElementById("atomicNumber").innerText = data.atomicNumber;
  document.getElementById("elementDesc").innerText = data.description;
  modal.classList.remove("hidden");
}

closeBtn.onclick = () => modal.classList.add("hidden");
window.onclick = e => { if (e.target == modal) modal.classList.add("hidden"); };
