// In your script.js file
function loaderAnimation() {
    var loader = document.querySelector("#loader");
    setTimeout(function () {
        loader.style.top = "-100%"; // Move loader out of view
    }, 5000);
}

function mouseFollower() {
    window.addEventListener("mousemove", function (det) {
        document.querySelector("#mouse-follower").style.transform = `translate(${det.clientX}px, ${det.clientY}px)`;
    });
}

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    mouseFollower();
    loaderAnimation();
});
