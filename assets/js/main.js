menubutton.addEventListener("click", function () {
  mobilewrapper.classList.add("mobile-wrapper--open");
});

clsbtn.addEventListener("click", function () {
  mobilewrapper.classList.remove("mobile-wrapper--open");
});

// jQuery

// $("#searchbtn").on("click", function () {
//   $("#inputfailed").fadeOut();
// });

$("#searchbtn").on("click", function () {
  $("#popup").slideDown(300); // Fade in the overlay
});

$("#closebtn").on("click",function(){
  $("#popup").slideUp(400);
})
