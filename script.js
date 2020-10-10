/*Loader*/
window.onload = function() {
    $("#load-screen").css("display", "none");
    $("body").css("overflow", "visible");
    $("#container").removeClass("hidden");
    $("#container").addClass("fade"); 
}


/*Anchor scrolling*/
$("#side-nav a").on('click', function(event){
    event.preventDefault();
    var hash = this.hash;
    
    $('html, body').animate({
        scrollTop: $(hash).offset().top - $("#top-nav").outerHeight()
    }, 1500);
});


/*Side nav*/
function openNav(){
    var smWidth = window.matchMedia("(max-width: 600px)");
    if(smWidth.matches){
        document.getElementById("side-nav").style.width = "100vw";
        document.getElementById("container").style.marginLeft = "100vw";
    }
    else{
        document.getElementById("side-nav").style.width = "250px";
        document.getElementById("container").style.marginLeft = "250px";
    } 
    document.getElementById("openbtn").classList.add("change");
    document.getElementById("openbtn").onclick = closeNav;
}
function closeNav() {
    document.getElementById("side-nav").style.width = "0";
    document.getElementById("container").style.marginLeft = "0";
    document.getElementById("openbtn").classList.remove("change");
    document.getElementById("openbtn").onclick = openNav;
}


/*Element fade when in view, top nav section text*/
$(window).on("resize scroll load", function(){
    $(".fade-in-view").each(function(){
        if($(this).isInViewport()){
            $(this).addClass("show");
        }
        else{
            $(this).removeClass("show");
        }
    });
    $("section").each(function(){
        if($(this).isInViewport()){
            $("#current h1").text($(this).attr("link-title"));
        }
    });
});
$.fn.isInViewport = function(t) {
    var elementTop = $(this).offset().top - $("#top-nav").outerHeight();
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    if($(this).hasClass("fade-in-view") || t==1){
        return elementBottom > viewportTop && elementTop < viewportBottom;
    }
    else {
        return elementTop < (viewportTop + $(window).height()/4) && elementTop < viewportBottom;
    }
};


/*Featured site*/
$(".site").click(function(){
    $(".featured").html($(this).html());
});


/*Art modal*/
$(".art").click(function(){
    $("#modal-img").attr("src", $(this).children("img").attr("src"));
    $("#modal-img").attr("alt", $(this).children("img").attr("alt"));
    $("#caption").text($(this).children(".title").text());
    $("#modal").fadeIn(1000);
});
$('#close').click(function(){
    $("#modal").fadeOut(1000);
});
window.onclick = function(event) {
    if(event.target == modal) {
        $("#modal").fadeOut(1000);
    }
}

/*Footer date*/
var year = new Date().getFullYear();
$("#date").html(year); 