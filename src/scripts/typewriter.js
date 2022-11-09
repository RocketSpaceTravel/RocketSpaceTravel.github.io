var app = document.getElementById('Header');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('Making space travel <span style="color: #5ec183;">convenient.</span>')
  .pauseFor(300)
  .deleteChars(11)
  .typeString('<span style="color: #5ec183;">faster.</span>')
  .pauseFor(1000)
  .deleteChars(8)
  .typeString('<span style="color: #5ec183;">easier.</span>')
  .pauseFor(1000)
  .deleteChars(7)
  .typeString('<span style="color: #5ec183;">enjoyable.</span>')
  .pauseFor(1000)
  .deleteChars(11)
  .typeString('<span style="color: #5ec183;">educating.</span>')
  .pauseFor(1000)
  .start();