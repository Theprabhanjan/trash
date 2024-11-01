function loaderAnimation() {
    var loader = document.querySelector("#loader");
    setTimeout(function () {
        loader.style.top = "-100%"; // Adjust this if needed
    }, 5000);
}

function mouseFollower() {
    window.addEventListener("mousemove", function (det) {
        document.querySelector("#mouse-follower").style.transform = `translate(${det.clientX}px, ${det.clientY}px)`;
    });
}

// Ensure functions run after DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    mouseFollower();
    loaderAnimation();
});
