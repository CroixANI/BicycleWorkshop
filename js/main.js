document.addEventListener("DOMContentLoaded", function(event) { 
    $(".menuToggle").on("click", function() {
        $(".menu ul").slideToggle(300, function() {
            var current = $(this);
            if (current.css("display") === "none") {
                current.removeAttr("style");
            }
        });
    });
});