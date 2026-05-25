
var text_title ="Overlay text";

var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d');
var img = new Image();
img.crossOrigin="anonymous";

window.addEventListener('load', DrawPlaceholder(img,ctx,"#233d95",'p3.jpg',345,600));


var canvas1 = document.getElementById('imageCanvas1');
var ctx1 = canvas1.getContext('2d');
var img1 = new Image();
img1.crossOrigin="anonymous";

window.addEventListener('load', DrawPlaceholder(img1,ctx1,"#233d95",'p2.jpg',345,580));


var canvas2 = document.getElementById('imageCanvas2');
var ctx2 = canvas2.getContext('2d');
var img2 = new Image();
img2.crossOrigin="anonymous";

window.addEventListener('load', DrawPlaceholder(img2,ctx2,"#233d95",'p1.jpg',345,580));


function DrawPlaceholder(photo,canv,clr,sorc,x,y) {
    photo.onload = function() {
        DrawOverlay(photo,canv);
        DrawText(canv,clr);
        DynamicText(canv,photo,clr,x,y)
};
    photo.src =sorc;
  
}
function DrawOverlay(photo,canv) {
canv.drawImage(photo,0,0);
    canv.fillStyle = 'rgba(0, 0, 0, 0)';
    canv.fillRect(0, 0, canvas.width, canvas.height);
}
function DrawText(canv,fillcolor) {
    canv.fillStyle = fillcolor; 
    canv.textBaseline = 'middle';
    canv.font = "19px Almarai";
}
function DynamicText(canv,photo,clr,x,y) {
  document.getElementById('name').addEventListener('keyup', function() {
    canv.clearRect(0, 0, canvas.width, canvas.height);
    DrawOverlay(photo,canv);
    DrawText(canv,clr); 
    text_title = this.value;
   
      
    var lineheight = 30;
var lines = text_title.split('\n');

for (var i = 0; i<lines.length; i++)
    canv.fillText(lines[i], x, y + (i*lineheight) );  
    canv.textAlign = 'center';
  });  
}




download_img = function(el) {
  var image = canvas.toDataURL("image/jpg");
  el.href = image;
};

download_img1 = function(el) {
  var image1 = canvas1.toDataURL("image/jpg");
  el.href = image1;
};

download_img2 = function(el) {
  var image2 = canvas2.toDataURL("image/jpg");
  el.href = image2;
};



function setWordOrder(e) {
	if (e.key == " ") {
		var textbox = document.getElementById("mytextarea");
		textbox.value += "\u200F";
	}
}

