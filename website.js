

document.addEventListener("DOMContentLoaded" ,
function() {

//    alert("Hello World!");
})

let myPhoto =
document.getElementById("personal-image")
//
myPhoto.addEventListener("click", changeImage)

function changeImage() {
    // console.log("HEYYY")
    console.log(myPhoto.src);

    if (myPhoto.src ==
    "about-me/sag.jpg"){
        myPhoto.src = "sag-constl.jpg"
    } else {
        myPhoto.src = "sag.jpg"
    }
}
