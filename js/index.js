
$(document).ready(function(){
    $("#development-image").click(function(){
      $("#development-image").slideDown('1500').hide('1000');
      $("#development").show('1500');
    });
    $("#development").click(function(){
      $("#development").slideUp('1500');
      $("#development-image").slideDown('1500');
    });
  });
  
  $(document).ready(function(){
    $("#design-image").click(function(){
      $("#design-image").slideDown('1500').hide('1000');
      $("#design").show('1500');
    });
    $("#design").click(function(){
      $("#design").slideUp('1500');
      $("#design-image").slideDown('1500');
    });
  });
  
  $(document).ready(function(){
    $("#product-image").click(function(){
      $("#product-image").slideDown('1500').hide('1000');
      $("#product").show('1500');
    });
    $("#product").click(function(){
      $("#product").slideUp('1500');
      $("#product-image").slideDown('1500');
    });
  });

  $(document).ready(function(){
    $("#black-studio").mouseover(function(){
      $("#overlay1").show();
    }).mouseout(function(){
      $("#overlay1").hide();
    });
  });
  $(document).ready(function(){
    $("#ontario-security").mouseover(function(){
      $("#overlay2").show();
    }).mouseout(function(){
      $("#overlay2").hide();
    });
  });
  $(document).ready(function(){
    $("#pyramids").mouseover(function(){
      $("#overlay3").show();
    }).mouseout(function(){
      $("#overlay3").hide();
    });
  });
  $(document).ready(function(){
    $("#jim-carry").mouseover(function(){
      $("#overlay4").show();
    }).mouseout(function(){
      $("#overlay4").hide();
    });
  });
  
  $(document).ready(function(){
    $("#nice-day").mouseover(function(){
      $("#overlay5").show();
    }).mouseout(function(){
      $("#overlay5").hide();
    });
    $("#calculator").mouseover(function(){
        $("#overlay6").show();
      }).mouseout(function(){
        $("#overlay6").hide();
      });
    $("#burned").mouseover(function(){
      $("#overlay7").show();
    }).mouseout(function(){
      $("#overlay7").hide();
    });
    $("#giraffe").mouseover(function(){
      $("#overlay8").show();
    }).mouseout(function(){
      $("#overlay8").hide();
    });
  });


$(document).ready(function(){
    $("form#feedback").submit(function(event){
      event.preventDefault();
      let name = $("input#name").val();
      let email = $("input#email").val();
      let comments = $("textarea#comments").val();
      if(!name || !email || !comments){
           alert("Error! Enter valid name, email and message");
           name.val = ""; email.val = ""; comments.val =  ""; 
      }
      else{
          alert(name + ""+ " we have received you feedback. Thank you for your time");
          name.val = ""; email.val = ""; comments.val =  "";
      }
      $("#feedback")[0].reset(); 
    });
});

