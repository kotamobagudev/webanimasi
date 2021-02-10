function animasiInfo(){
    $('#text span').velocity("transition.slideLeftIn", {stagger: 150, complete: function(){
        animasiButton();
    }});
}

function animasiButton(){
    $('#start').velocity("transition.bounceUpIn")
                .mouseenter(function(){
                    $(this).velocity({width: 100});
                })
                .mouseleave(function(){
                    $(this).velocity({width: 125});
                });
}

$(document).ready(function(){
    animasiInfo();
});