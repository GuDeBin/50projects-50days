const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
  console.log("dragOver");
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
  console.log("dragEnter");
}

function dragLeave() {
  this.className = "empty";
  console.log("dragLeave");
}

function dragDrop() {
  this.className = "empty";
  this.append(fill);
  console.log("dragDrop");
}

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}
