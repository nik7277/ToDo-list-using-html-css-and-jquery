$(document).ready(function(){

    // $("#add").click(function(){
    //     let $newitem = "<li>" + $("#new").val() + "</li>";
    //     console.log($newitem)
    // 	$("ul").append($newitem).append("<span></span>").attr('class','deleteicon').append("<i></i>").attr('class','fa fa-trash');
    // });

    $("#new").keypress(function(event){
     	if(event.which === 13){
             $newitem = "<li> <span class='trashicon'><i class='fa fa-trash'></i></span>" + $("#new").val() + "</li>";
             //$("ul").append("<li>" + $("#new").val() + "</li>");
             $("ul").append($newitem);
             $("#new").val('');
     	}
    	
    });

    $("#add_item").click(function(){
    	$("#new").toggle();
    });

    $("#new").focus(function(){
    	$("#new").addClass("addborder");
    });

    $("#new").blur(function(){
    	$("#new").removeClass("addborder");
    });

	// $("li").click(function(){
 	// 	$(this).toggleClass("done");
 	// });

    $("ul").on("click", "li", function(){
      $(this).toggleClass("done");

    });

    $("ul").on("click", "span", function(){
        $(this).parent().remove();
      });

    $("ul").on("mouseenter", "li", function(){
        $(this).find("span").fadeIn();
    }

    );

    
    $("ul").on("mouseleave ", "li", function(){
        $(this).find("span").fadeOut();
    }

    );

});    