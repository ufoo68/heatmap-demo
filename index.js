const userId = 'user-123';
const url = location.hostname;
const title = document.title;
let stayTime = 0;
let intervalId = null;

setInterval(() => {
  if (document.visibilityState === 'visible') {
    stayTime += 1;
  }
}, 1000);



document.addEventListener('click', function(event) {
  const positionX = event.clientX;
  const positionY = event.clientY;
  const screenX = screen.availWidth;
  const screenY = screen.availHeight;
  const scrollY = window.scrollY;
  const scrollX = window.scrollX;
  const timestamp = new Date().valueOf();
  console.log({
    userId,
    url,
    title,
    timestamp,
    stayTime,
    positionX,
    positionY,
    screenX,
    screenY,
    scrollY,
    scrollX
  });
});