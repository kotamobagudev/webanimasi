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

function animasitIntroOut(){
    $("#start").attr('disabled', true).css({"color":"black"});
    $("#start").velocity("transition.whirlOut",{
                                stagger: 150,
                                complete: function(){
                                    $("#text").velocity({"font-size":"20px", 
                                                         "top":"95%"
                                                        }, {
                                                            duration: 1000,
                                                            complete: function(){
                                                                callMenu();
                                                                $("#menu ul li a[href='what_we_do']").trigger("click");
                                                                $("#start").attr('disabled', false);
                                                            }
                                                        });
                                }
                            });
}

function callMenu(){
    $("#menu ul li").velocity("transition.slideLeftIn",{
                                stagger: 250
                             });

    $("#menu ul li a").off("click").click(function(event){
        event.preventDefault();
        $(this).parent("li").addClass("active").siblings().removeClass("active");
    });
}

$(document).ready(function(){
    animasiInfo();
});