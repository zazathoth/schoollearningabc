document.addEventListener('DOMContentLoaded', function () {
  var mapContainer = document.getElementById('map');
  mapContainer.style.height = window.innerHeight + 'px';

  L.mapbox.accessToken = 'pk.eyJ1IjoiemF6YXRob3RoIiwiYSI6IkI5bHVDQkkifQ.af6mYw2fTbmfah7gL2l-xg';

  drawMap();
});


function drawMap () {
  var canvasTiles = L.tileLayer.canvas();
  var map = L.mapbox.map('map', 'zazathoth.f9a2cd21').setView([19.1562, 72.7631], 11);

  L.canvasOverlay().drawing(drawPoints).addTo(map);
}

function drawPoints (canvasOverlay, params) {
  var ctx = params.canvas.getContext('2d');
  ctx.clearRect(0, 0, params.canvas.width, params.canvas.height);
  ctx.beginPath();
  points.map(function (d, i) {
    dot = canvasOverlay._map.latLngToContainerPoint( [d[0], d[1]] );
    ctx.lineTo(dot.x, dot.y);
  });
  ctx.stroke();
}