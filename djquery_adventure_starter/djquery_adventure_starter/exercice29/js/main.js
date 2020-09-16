$(document).ready(function(){
   
    $(".btn").click(function  (){
    
          var result= $("input:text").val().length;
            if(result>5){
                $("input").removeClass('is-invalid');
                $("input").addClass('is-valid');
            }
            else{
                $("input").removeClass('is-invalid');
                $("input").addClass('is-invalid');  
            }
           
   
  });
  
});