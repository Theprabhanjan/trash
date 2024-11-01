
  function loaderAnimation() {
    var loader = document.querySelector("#loader");
    setTimeout(function () {
      loader.style.top = "-100%";
    }, 6000);
  }
  function mouseFollower() {
    window.addEventListener("mousemove", function (det) {
      document.querySelector(
        "#mouse-follower"
      ).style.transform = `translate(${det.clientX}px, ${det.clientY}px)`;
    });
  }

  
  mouseFollower()
  
  
  
  loaderAnimation();