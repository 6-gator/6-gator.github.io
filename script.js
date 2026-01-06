const text = "Hello! Blah blah blah blah";
const speed = 100;
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById('text').innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
