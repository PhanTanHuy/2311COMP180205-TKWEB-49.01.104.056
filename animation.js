document.addEventListener("DOMContentLoaded", function() {
    moveFish();
    moveDriver();
    moveDriver1();
    moveDriver2();
    moveRua();
});

var currentScale = 1;

function moveFish() {
    var fish = document.getElementById("fish");

    setInterval(function() {
        var tankWidth = document.querySelector(".fish-tank").offsetWidth;
        var tankHeight = document.querySelector(".fish-tank").offsetHeight;

        var randomX = Math.floor(Math.random() * (tankWidth - fish.width));
        var randomY = Math.floor(Math.random() * (tankHeight - fish.height));

        var flip = Math.random() < 0.5 ? 1 : -1; // 50% xoay 180 độ

        fish.style.transition = "transform 2s"; // Thời gian di chuyển lâu hơn
        fish.style.transform = "translate(" + randomX + "px, " + randomY + "px) scaleX(" + (currentScale * flip) + ")";
        
        currentScale *= flip;

        setTimeout(function() {
            fish.style.transition = "transform 1s"; // Thời gian di chuyển ngắn hơn
            fish.style.transform = "translate(" + randomX + "px, " + randomY + "px) scaleX(" + currentScale + ")";
        }, 10000); // Khoảng thời gian giữa các lần di chuyển
    }, 1000); // Thời gian di chuyển lâu hơn
}
function moveDriver() {
    var fish = document.getElementById("driver");

    setInterval(function() {
        var tankWidth = document.querySelector(".fish-tank").offsetWidth;
        var tankHeight = document.querySelector(".fish-tank").offsetHeight;

        var randomX = Math.floor(Math.random() * (tankWidth - fish.width));
        var randomY = Math.floor(Math.random() * (tankHeight - fish.height));

        var flip = Math.random() < 0.5 ? 1 : -1; // 50% xoay 180 độ

        fish.style.transition = "transform 10s"; // Thời gian di chuyển lâu hơn
        fish.style.transform = "translate(" + randomX + "px, " + randomY + "px) scaleX(" + (currentScale * flip) + ")";
        
        currentScale *= flip;

        setTimeout(function() {
            fish.style.transition = "transform 1s"; // Thời gian di chuyển ngắn hơn
            fish.style.transform = "translate(" + randomX + "px, " + randomY + "px) scaleX(" + currentScale + ")";
        }, 10000); // Khoảng thời gian giữa các lần di chuyển
    }, 1000); // Thời gian di chuyển lâu hơn
}
function moveDriver1() {
    var fish = document.getElementById("driver1");

    setInterval(function() {
        var tankWidth = document.querySelector(".fish-tank").offsetWidth;
        var tankHeight = document.querySelector(".fish-tank").offsetHeight;

        var randomX = Math.floor(Math.random() * (tankWidth - fish.width));
        var randomY = Math.floor(Math.random() * (tankHeight - fish.height));

        var flip = Math.random() < 0.5 ? 1 : -1; // 50% xoay 180 độ

        fish.style.transition = "transform 2s"; // Thời gian di chuyển lâu hơn
        fish.style.transform = "translate(" + randomX + "px, " + randomY + "px) scaleX(" + (currentScale * flip) + ")";
        
        currentScale *= flip;

        setTimeout(function() {
            fish.style.transition = "transform 1s"; // Thời gian di chuyển ngắn hơn
            fish.style.transform = "translate(" + randomX + "px, " + randomY + "px) scaleX(" + currentScale + ")";
        }, 1000); // Khoảng thời gian giữa các lần di chuyển
    }, 1000); // Thời gian di chuyển lâu hơn
}
function moveRua() {
    var fish = document.getElementById("rua");

    setInterval(function() {
        var tankWidth = document.querySelector(".fish-tank").offsetWidth;
        var tankHeight = document.querySelector(".fish-tank").offsetHeight;

        var randomX = Math.floor(Math.random() * (tankWidth - fish.width));
        var randomY = Math.floor(Math.random() * (tankHeight - fish.height));

        var flip = Math.random() < 0.5 ? 1 : -1; // 50% xoay 180 độ

        fish.style.transition = "transform 20s"; // Thời gian di chuyển lâu hơn
        fish.style.transform = "translate(" + randomX + "px, " + randomY + "px) scaleX(" + (currentScale * flip) + ")";
        
        currentScale *= flip;

        setTimeout(function() {
            fish.style.transition = "transform 5s"; // Thời gian di chuyển ngắn hơn
            fish.style.transform = "translate(" + randomX + "px, " + randomY + "px) scaleX(" + currentScale + ")";
        }, 20000); // Khoảng thời gian giữa các lần di chuyển
    }, 1000); // Thời gian di chuyển lâu hơn
}
function moveDriver2() {
    var fish = document.getElementById("driver2");

    setInterval(function() {
        var tankWidth = document.querySelector(".fish-tank").offsetWidth;
        var tankHeight = document.querySelector(".fish-tank").offsetHeight;

        var randomX = Math.floor(Math.random() * (tankWidth - fish.width));
        var randomY = Math.floor(Math.random() * (tankHeight - fish.height));

        var flip = Math.random() < 0.5 ? 1 : -1; // 50% xoay 180 độ

        fish.style.transition = "transform 2s"; // Thời gian di chuyển lâu hơn
        fish.style.transform = "translate(" + randomX + "px, " + randomY + "px) scaleX(" + (currentScale * flip) + ")";
        
        currentScale *= flip;

        setTimeout(function() {
            fish.style.transition = "transform 1s"; // Thời gian di chuyển ngắn hơn
            fish.style.transform = "translate(" + randomX + "px, " + randomY + "px) scaleX(" + currentScale + ")";
        }, 1000); // Khoảng thời gian giữa các lần di chuyển
    }, 1000); // Thời gian di chuyển lâu hơn
}
document.addEventListener("DOMContentLoaded", function() {
    const musicButton = document.getElementById("musicButton");
    const music = document.getElementById("music");
  
    let isPlaying = false;
  
    musicButton.addEventListener("click", function() {
      if (isPlaying) {
        music.pause();
        musicButton.innerText = "Phát nhạc";
      } else {
        music.play();
        musicButton.innerText = "Ngưng phát nhạc";
      }
  
      isPlaying = !isPlaying;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const changeBackgroundButton = document.getElementById("changeBackgroundButton");
    const backgroundDiv = document.getElementById("backgroundDiv");
    const backgrounds = ['fleximg2', 'fleximg', 'fleximg3'];
    let currentIndex = 0;
  
    changeBackgroundButton.addEventListener("click", function() {
      // Chuyển đổi giữa các lớp background
      backgroundDiv.classList.remove(backgrounds[currentIndex]);
      currentIndex = (currentIndex + 1) % backgrounds.length;
      backgroundDiv.classList.add(backgrounds[currentIndex]);
    });
  });
  
  
  
