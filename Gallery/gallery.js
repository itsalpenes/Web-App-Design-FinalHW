var imgAlbum = document.getElementById("imgAlbum");
var imgInfo = document.getElementById("imgInfo");
var imagePath = "../src/";

var infos = [
    "Big Ben",
    "London Eye",
    "London Streets"
]

var images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
];

function showImage(index) {
    if (index < 0 || index >= images.length) {
        console.error("Geçersiz index");
        return;
    }
    imgAlbum.src = imagePath + images[index];
    imgInfo.textContent = infos[index];
}
function nextImage() {
    var currentSrc = imgAlbum.src;
    var currentIndex = images.findIndex(img => currentSrc.endsWith(img));
    if (currentIndex < 0) {
        console.error("Current image not found in the list");
        return;
    }
    var nextIndex = (currentIndex + 1) % images.length;
    showImage(nextIndex);
}
function previousImage() {
    var currentSrc = imgAlbum.src;
    var currentIndex = images.findIndex(img => currentSrc.endsWith(img));
    if (currentIndex < 0) {
        console.error("Current image not found in the list");
        return;
    }
    var prevIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(prevIndex);
}