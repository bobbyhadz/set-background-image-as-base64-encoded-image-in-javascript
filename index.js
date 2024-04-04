console.log('bobbyhadz.com');

const dataURL =
  'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';

const box = document.getElementById('box');

box.style.backgroundImage = `url('${dataURL}')`;
