var image = document.getElementById('image'); 
var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");


var images = ["https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/city.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/cloudy.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/green.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/pretty_clouds.jpg"];

var imageIndex = 0;
previousButton.onclick = function() {
   if(imageIndex == 0){
        imageIndex = images.length - 1;
    } else {
        imageIndex--;
    }

    image.setAttribute('src', images[imageIndex]);
}

nextButton.onclick = showNextImage;

function showNextImage(){
    console.log("555");
    if((imageIndex == images.length - 1)){
        imageIndex = 0;
    } else {
        imageIndex++;
    }

    image.setAttribute('src', images[imageIndex]);
    image.setAttribute('opacity',  0);
}

setInterval(showNextImage, 3000);