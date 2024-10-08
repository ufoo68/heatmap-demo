const userId = 'user-123';
const url = location.hostname;
const title = document.title;
let stayTime = 0;
let intervalId = null;

const dataPoints = [];

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
  dataPoints.push({
    x: positionX,
    y: positionY,
    value: 1
  });
  heatmapInstance.setData({
    max: 10,
    data: dataPoints
  });
  console.log({
    userId,
    url,
    title,
    stayTime,
    positionX,
    positionY,
    screenX,
    screenY,
    scrollY,
    scrollX
  });
});

let heatmapInstance = h337.create({
  container: document.querySelector('body')
});



let heatmapData = {
  max: 10,
  data: dataPoints
};

heatmapInstance.setData(heatmapData);