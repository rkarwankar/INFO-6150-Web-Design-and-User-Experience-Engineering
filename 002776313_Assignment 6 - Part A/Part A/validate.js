$(document).ready(function () {
  
   //validation for First Name
   $('#firstName').on('input', function () {
   
      var firstName = $(this).val();
      var validName =/^[a-zA-Z0-9_]*$/;
      
      var mina =  /.{5,}/;
      if (firstName.length == 0) {
   
         $('.first-name-msg').addClass('invalid-msg').text("Username required (Null value)");
         $(this).addClass('invalid-input').removeClass('valid-input');
         
      }
      else if (!validName.test(firstName)) {
   
         $('.first-name-msg').addClass('invalid-msg').text('only underscore allowed, No other special character allowed');
         $(this).addClass('invalid-input').removeClass('valid-input');
         
      }
      else if (!mina.test(firstName)) {
   
         $('.first-name-msg').addClass('invalid-msg').text('Minimum length 5');
         $(this).addClass('invalid-input').removeClass('valid-input');
      }
      
      else {
         $('.first-name-msg').empty();
         $(this).addClass('valid-input').removeClass('invalid-input');
      }

     });
     

     
   
   
   // valiadtion for Email
   $('#email').on('input', function () {
   
      var emailAddress = $(this).val();
      var validEmail = /^[^@\s]+@northeastern.edu$/;
   
      if (emailAddress.length == 0) {
   
        $('.email-msg').addClass('invalid-msg').text('Email is required (Null Value)');
        $(this).addClass('invalid-input').removeClass('valid-input');
      }
      else if (!validEmail.test(emailAddress)) {
   
        $('.email-msg').addClass('invalid-msg').text('Invalid Email Address');
        $(this).addClass('invalid-input').removeClass('valid-input');
      }

      
      else {
        $('.email-msg').empty();
        $(this).addClass('valid-input').removeClass('invalid-input');
     }
     });
   
   // valiadtion for Password
   $('#password').on('input', function () {
   
      var password = $(this).val();
      var cpassword = $('#cpassword').val();
   
      var uppercasePassword = /(?=.*?[A-Z])/;
      var lowercasePassword = /(?=.*?[a-z])/;
      var digitPassword = /(?=.*?[0-9])/;
      var spacesPassword = /^$|\s+/;
      var symbolPassword = /(?=.*?[#?!@$%^&*-])/;
      var minEightPassword = /.{8,}/;
   
   if (password.length == 0) {
   
      $('.password-msg').addClass('invalid-msg').text('Password is required');
      $(this).addClass('invalid-input').removeClass('valid-input');
   }
   else if (!uppercasePassword.test(password)) {
   
      $('.password-msg').addClass('invalid-msg').text('At least one Uppercase');
      $(this).addClass('invalid-input').removeClass('valid-input');
   }
   else if (!lowercasePassword.test(password)) {
   
      $('.password-msg').addClass('invalid-msg').text('At least one Lowercase');
      $(this).addClass('invalid-input').removeClass('valid-input');
   }
   else if (!digitPassword.test(password)) {
   
      $('.password-msg').addClass('invalid-msg').text('At least one digit');
      $(this).addClass('invalid-input').removeClass('valid-input');
   
   } else if (!symbolPassword.test(password)) {
   
      $('.password-msg').addClass('invalid-msg').text('At least one special character');
      $(this).addClass('invalid-input').removeClass('valid-input');
   }
   else if (spacesPassword.test(password)) {
   
      $('.password-msg').addClass('invalid-msg').text('Whitespaces are not allowed');
      $(this).addClass('invalid-input').removeClass('valid-input');
   }
   else if (!minEightPassword.test(password)) {
   
      $('.password-msg').addClass('invalid-msg').text('Minimum length 8');
      $(this).addClass('invalid-input').removeClass('valid-input');
   }
   else if(password.length>0) {
       if(password!=password){
   
      $('.password-msg').addClass('invalid-msg').text('must be matched');
      $('#password').addClass('invalid-input').removeClass('valid-input');
   
      }
     
      $('#password').addClass('valid-input').removeClass('invalid-input');
      $('.password-msg').empty();
   } 
   else {
      $('.password-msg').empty();
      $(this).addClass('valid-input').removeClass('invalid-input');
   }
   });


   $('input').on('input',function(e){
      if($('#myForm').find('.valid-input').length==3){
          $('#submit-btn').removeClass('allowed-submit');
          $('#submit-btn').removeAttr('disabled');
      }
     else{
          e.preventDefault();
          $('#submit-btn').attr('disabled','disabled')
          
         }
      })


      $('input').on('input',function(e){
         if($('#box').find('.valid-input').length==3){
             $('#btn1').removeClass('allowed-submit');
             $('#btn1').removeAttr('disabled');
         }
        else{
             e.preventDefault();
             $('#btn1').attr('disabled','disabled')
             
            }
         })

         $('input').on('input',function(e){
            if($('#box').find('.valid-input').length==3){
                $('#btn2').removeClass('allowed-submit');
                $('#btn2').removeAttr('disabled');
            }
           else{
                e.preventDefault();
                $('#btn2').attr('disabled','disabled')
                
               }
            })
            $('input').on('input',function(e){
               if($('#box').find('.valid-input').length==3){
                   $('#btn3').removeClass('allowed-submit');
                   $('#btn3').removeAttr('disabled');
               }
              else{
                   e.preventDefault();
                   $('#btn3').attr('disabled','disabled')
                   
                  }
               })
               $('input').on('input',function(e){
                  if($('#box').find('.valid-input').length==3){
                      $('#btn4').removeClass('allowed-submit');
                      $('#btn4').removeAttr('disabled');
                  }
                 else{
                      e.preventDefault();
                      $('#btn4').attr('disabled','disabled')
                      
                     }
                  })


      //validation for calculator num1
      $('#one').on('input', function () {
   
         var firstNum = $(this).val();
         var validNum =/^[0-9]*$/;
         if (firstNum.length == 0) {
   
            $('.first-num-msg').addClass('invalid-msg').text("Value required (Null value)");
            $(this).addClass('invalid-input').removeClass('valid-input');
            
         }
         else if (!validNum.test(firstNum)) {
      
            $('.first-num-msg').addClass('invalid-msg').text('only numerics allowed');
            $(this).addClass('invalid-input').removeClass('valid-input');
            
         }
         else {
            $('.first-num-msg').empty();
            $(this).addClass('valid-input').removeClass('invalid-input');
         }
      
      });

      //validation for calculator num2
      $('#txtSecondNumber').on('input', function () {
   
         var secondNum = $(this).val();
         var validNum =/^[0-9]*$/;
         if (secondNum.length == 0) {
   
            $('.second-num-msg').addClass('invalid-msg').text("Value required (Null value)");
            $(this).addClass('invalid-input').removeClass('valid-input');
            
         }
         else if (!validNum.test(secondNum)) {
      
            $('.second-num-msg').addClass('invalid-msg').text('only numerics allowed');
            $(this).addClass('invalid-input').removeClass('valid-input');
            
         }
         else {
            $('.second-num-msg').empty();
            $(this).addClass('valid-input').removeClass('invalid-input');
         }
      
      });

      //validation for calculator num3
      $('#txtThirdNumber').on('input', function () {
   
         var thirdNum = $(this).val();
         var validNum =/^[0-9]*$/;
         if (thirdNum.length == 0) {
   
            $('.third-num-msg').addClass('invalid-msg').text("Value required (Null value)");
            $(this).addClass('invalid-input').removeClass('valid-input');
            
         }
         else if (!validNum.test(thirdNum)) {
      
            $('.third-num-msg').addClass('invalid-msg').text('only numerics allowed');
            $(this).addClass('invalid-input').removeClass('valid-input');
            
         }
         else {
            $('.third-num-msg').empty();
            $(this).addClass('valid-input').removeClass('invalid-input');
         }
      
      });
   

      
   jQuery(document).ready(function() {
      jQuery('button').click(function(){
        var Value = jQuery(this).attr('data-value');
        jQuery('[name="id"]').val(Value);
        jQuery('#myForm').submit();
        window.location = "calculator.html";
        });
    });


    $(document).ready(function(){ 
      $('#submit-btn').click(function(){ 
       $("#spanid").html(" Exercises Solution");
       alert(hello);
       });
    });


    let namer = firstName;
    document.getElementById("name").innerHTML = namer;
  });
   
 