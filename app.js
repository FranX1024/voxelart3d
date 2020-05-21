setInterval(update3DB, 10);
loadMap(map);

var sc = document.getElementById('show_color');

var rgbcol = [0, 0, 255];

document.getElementById('red').oninput = function(e) {

  rgbcol[0] = Number(e.target.value);

  tile_color3d = tile_color3d & ~(255 << 16) | (rgbcol[0] << 16);

  sc.style.backgroundColor = 'rgb(' + rgbcol.join(', ') + ')';
}
document.getElementById('green').oninput = function(e) {

  rgbcol[1] = Number(e.target.value);

  tile_color3d = tile_color3d & ~(255 << 8) | (rgbcol[1] << 8);

  sc.style.backgroundColor = 'rgb(' + rgbcol.join(', ') + ')';
}
document.getElementById('blue').oninput = function(e) {

  rgbcol[2] = Number(e.target.value);

  tile_color3d = tile_color3d & ~255 | rgbcol[2];

  sc.style.backgroundColor = 'rgb(' + rgbcol.join(', ') + ')';
}
document.getElementById('fov').oninput = function(e) {

  camera.setFov(Number(e.target.value));
}
document.getElementById('dist').oninput = function(e) {

  camera.dist = Number(e.target.value);
}
document.getElementById('ypos').oninput = function(e) {

  camera.top = Number(e.target.value);
}
