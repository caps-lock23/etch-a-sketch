const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener("mouseover", hoverOver);

function makeGrid() {
  for (let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++){
      const createDiv = document.createElement('div');
      wrapper.appendChild(createDiv);
    }
  }
  
}

function hoverOver(event) {
  if (event.target !== wrapper) {
      event.target.style.backgroundColor = "black";
  }
}

function resetAll() {
  const box = document.querySelectorAll("div");
	[...box].forEach(box => {
    box.style.backgroundColor = "#eee";
	});
}

makeGrid();

