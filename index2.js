$("a.back-to-top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, {
      duration: 1000});
});

$("li.nav-item").click(function() {
    $("div.navbar-collapse").removeClass("show");
});