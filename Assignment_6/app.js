// Get references to the areas and content
var area1 = document.getElementById("sage1");
var area2 = document.getElementById("omen1");
var area3 = document.getElementById("pheonix1");
var area4 = document.getElementById("cypher1");
var area5 = document.getElementById("jett1");


var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var content4 = document.getElementById("content4");
var content5 = document.getElementById("content5");


// Add mouseover event listeners to the areas
area1.addEventListener("mouseover", function() {
  content1.style.display = "block";
});

area2.addEventListener("mouseover", function() {
  content2.style.display = "block";
});
area3.addEventListener("mouseover", function() {
    content3.style.display = "block";
  });
area4.addEventListener("mouseover", function() {
  content4.style.display = "block";
});
area5.addEventListener("mouseover", function() {
    content5.style.display = "block";
  });


// Add mouseout event listeners to the areas
area1.addEventListener("mouseout", function() {
  content1.style.display = "none";
});

area2.addEventListener("mouseout", function() {
  content2.style.display = "none";
});

area3.addEventListener("mouseout", function() {
    content3.style.display = "none";
});

area4.addEventListener("mouseout", function() {
  content4.style.display = "none";
});

area5.addEventListener("mouseout", function() {
    content5.style.display = "none";
});