$(document).ready(function(){
   
    $("input").keyup(function  (){
    
          var result= $("input:text").val();
            if(result.length < 5){

                $("input").addClass('is-valid');
            }
            else if(result.length > 5){
                $("input").addClass('is-invalid');  
            }
           
  });
  
});