img = document.getElementById("screen");

img.src = getRandomImagePath();

img.onload = function(){
    setTimeout(refresh, 1);
};

function refresh() {
    let strImgPath = getRandomImagePath();
    img.src = strImgPath;
}

function getRandomImagePath(){
    let strImageName = Math.floor(Math.random() * 13) + 1;  // returns a random integer from 1 to 13
    strImageName = strImageName.toString();
    strImageName = strImageName + '.png';
    let strImgPath = "./imgs/" + strImageName;

    return strImgPath;
}