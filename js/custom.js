$(".footer-links-wrapper h3").click(function () {
  if (window.innerWidth <= 768) {
    $(this).toggleClass("expanded");
    $(this).next("ul").slideToggle();
  }
});
