function none() {
  document.getElementById("search").style.display = "none";
}

function appear() {
  document.getElementById("more").style.display = "block";
  document.getElementById("appear").style.display = "none";
  document.getElementById("more").style.transition = "0.3s ease";
}

function less() {
  document.getElementById("more").style.display = "none";
  document.getElementById("appear").style.display = "block";
}

function back() {
  document.getElementById("live").style.backgroundColor = "#4248507a";
  document.getElementById("all-live").style.backgroundColor = "#4248507a";
}

function like() {
  document.getElementById("like-svg").style.display = "block";
  document.getElementById("moh").style.left = "-3rem";
  document.getElementById("like").style.color = "#1368d6";
}

function turn() {
  document.getElementById("comment-like").style.color = "#1368d6";
}

function like1() {
  document.getElementById("like1-svg").style.display = "block";
  document.getElementById("moh1").style.left = "-3rem";
  document.getElementById("like1").style.color = "#1368d6";
}

function like2() {
  document.getElementById("like2-svg").style.display = "block";
  document.getElementById("moh2").style.left = "-3rem";
  document.getElementById("like2").style.color = "#1368d6";
}

function like3() {
  document.getElementById("like3-svg").style.display = "block";
  document.getElementById("moh3").style.left = "-3rem";
  document.getElementById("like3").style.color = "#1368d6";
}

function like4() {
  document.getElementById("like4-svg").style.display = "block";
  document.getElementById("moh4").style.left = "-3rem";
  document.getElementById("like4").style.color = "#1368d6";
}



document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").onsubmit = function () {
    var input = document.getElementById("input").value;
     var summary = document.createElement("summary");
      summary.innerHTML = input;
        document.querySelector("main").appendChild(summary);
        document.getElementById("input").value = "";
      return false;
    }
  })