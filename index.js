function showcontribute(){
    $("#contribute_container").css("display","inherit");
    $("#contribute_container").addClass("animated slideInDown");
    setTimeout(function(){
        $("#contribute_container").removeClass("animated slideInDown");
    },800);
}
function closecontribute(){
    $("#contribute_container").addClass("animated slideOutUp");
    setTimeout(function(){
        $("#contribute_container").removeClass("animated slideOutUp");
        $("#contribute_container").css("display","none");
    },800);
}
function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInLeft");
    },800);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display","none");
    },800);
}
function showspeakers(){
    $("#speakers_container").css("display","inherit");
    $("#speakers_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#speakers_container").removeClass("animated slideInRight");
    },800);
}
function closespeakers(){
    $("#speakers_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#speakers_container").removeClass("animated slideOutRight");
        $("#speakers_container").css("display","none");
    },800);
}
function showorganizers(){
    $("#organizers_container").css("display","inherit");
    $("#organizers_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#organizers_container").removeClass("animated slideInUp");
    },800);
}
function closeorganizers(){
    $("#organizers_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#organizers_container").removeClass("animated slideOutDown");
        $("#organizers_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#contribute").removeClass("animated fadeIn");
      $("#about").removeClass("animated fadeIn");
      $("#organizers").removeClass("animated fadeIn");
      $("#speakers").removeClass("animated fadeIn");
    },1000);
},1500);
