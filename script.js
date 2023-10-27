'use strict';
let headerCanvas = document.getElementById('title canvas'),
contextHeader = headerCanvas.getContext('2d');
let textCanvas = document.getElementById('text canvas'),
contextText = textCanvas.getContext('2d');
const rect = headerCanvas.getBoundingClientRect();
headerCanvas.width = rect.width
headerCanvas.height = rect.height
let imageX1 = -5200;
let imageX2 = 5200;
let textImageY1 = 400;
let xmenLogoCanvasImage = new Image(headerCanvas.width, headerCanvas.height);
let xmenTextCanvasImage = new Image(headerCanvas.width, headerCanvas.height);
let raf;



//let imageData;
const xmenDoodleImages = ["Doodles/Xmen/ArchAngel.png", "Doodles/Xmen/SummersDay.png", "Doodles/Xmen/WeaponSex.png", "Doodles/Xmen/SnowColorWay.png", "Doodles/Xmen/WhatsaMagneto.png"]

const xmenTextDoodleImage = "Doodles/Xmen/Text.png";
function getRandomIndex(array){
    let randomIndex = array[Math.floor(Math.random() * array.length)];
    return randomIndex;
}

document.addEventListener('DOMContentLoaded', () => {
let drawingIndex = getRandomIndex(xmenDoodleImages);
    contextHeader.clearRect(0, 0, xmenLogoCanvasImage.width, xmenLogoCanvasImage.height);
    contextText.clearRect(0,0, xmenLogoCanvasImage.width, xmenLogoCanvasImage.height);
    xmenLogoCanvasImage.onload = drawXmen();
    xmenLogoCanvasImage.src = drawingIndex;
    xmenTextCanvasImage.src = xmenTextDoodleImage;
}); 

const textimageObject = {
  y: textImageY1,
  vy: .25,
  drawImage(){
    contextText.drawImage(xmenTextCanvasImage, 0, textimageObject.y)
  }
}


const xmenimageObjLeft = {
  x: imageX1,
  vx: 40,
  drawImage() {
    contextHeader.drawImage(xmenLogoCanvasImage, xmenimageObjLeft.x, 0, xmenLogoCanvasImage.width, xmenLogoCanvasImage.height);
  },
};

const xmenimageObjRight = {
    x: imageX2,
    vx: -40,
    drawImage() {
      contextHeader.drawImage(xmenLogoCanvasImage, xmenimageObjRight.x, 0, xmenLogoCanvasImage.width, xmenLogoCanvasImage.height);
    },
  };

function drawXmen(){
    contextHeader.clearRect(0, 0, xmenLogoCanvasImage.width, xmenLogoCanvasImage.height);
    contextText.clearRect(0,0, xmenLogoCanvasImage.width, xmenLogoCanvasImage.height);
    xmenimageObjLeft.drawImage();
   
    if(xmenimageObjLeft.x < 0){
    xmenimageObjLeft.x += xmenimageObjLeft.vx;
    }
    xmenimageObjRight.drawImage();
    if(xmenimageObjRight.x > 0){
        xmenimageObjRight.x += xmenimageObjRight.vx;
    }
    textimageObject.drawImage();
    if(textimageObject.y > 0){
      textimageObject.y -= textimageObject.vy;
    }
    raf = window.requestAnimationFrame(drawXmen);
  
}

headerCanvas.addEventListener("mouseover", (e) => {
  raf = window.requestAnimationFrame(drawXmen);
});

headerCanvas.addEventListener("mouseout", (e) => {
  window.cancelAnimationFrame(raf);
});

//var canvas = document.querySelector('canvas');
//var ctx = canvas.getContext('2d');

// Draw the image onto the canvas
/*var img = new Image();
img.onload = function() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
    // Get the CanvasPixelArray from the given coordinates and dimensions.
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data;

    // Loop over each pixel and change the color.
    for (var i = 0; i < data.length; i += 4) {
        var red = data[i];
        var green = data[i + 1];
        var blue = data[i + 2];

        if (red == 255 && green == 242 && blue == 45) { // if color is somewhat red
            data[i]     = 73;     // Red
            data[i + 1] = 0; // Green
            data[i + 2] = 0;   // Blue
        }
    }

    // Put the modified data back on the canvas.
    ctx.putImageData(imgData, 0, 0);
};*/
