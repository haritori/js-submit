const colors = [
  "#f3a683",
  "#f7d794",
  "#778beb",
  "#786fa6",
  "#63cdda",
  "#cf6a87",
  "#e77f67",
  "#ea8685",
  "#596275",
  "#f78fb3",
  "#303952",
  "#2d3436",
  "#2d98da",
  "#4b6584",
  "#218c74",
];

const body = document.querySelector("body");

body.style.background = colors[Math.floor(Math.random() * colors.length)];
