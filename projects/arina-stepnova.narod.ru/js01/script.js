$(document).ready(function() {
    $(".header__burger").click(function(event) {
        $(".header__burger,.header__menu").toggleClass("active");
        $("body").toggleClass("lock");

    });


   
    var resize=false;

    function set_meta_tag(){
        $("meta[name=viewport]").attr("content","user-scalable=no, width=device-width");
        $("meta[name=viewport]").attr("content","user-scalable=no, width="+$("body").width());
    }


    set_meta_tag();

    $(window).on("resize",function(){
        if(resize==false){
            set_meta_tag();
            resize=true;
        }

        setTimeout(function(){
            resize=false;
        },300);
        
    });


    
   





		
        
      

        
























    $(".slider").slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
        speed:1000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseODotsHover:true
        
    });

    
});


