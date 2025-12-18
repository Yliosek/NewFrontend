let operation;
let result;
$(document).ready(function() {
    $(".num").on('click',function(){
        $(".wendow").text($(".wendow").text()+$(this).text());
    });
    $(".op").on('click',function(){
        operation=$(this).text();
       
        if(result==null)
        {
            result=parseInt($(".wendow").text());
        }
        $(".wendow").text("");
    });
    $(".result").on('click',function(){
        let namber=parseInt($(".wendow").text());
      switch(operation)
      {
        case '+':
            result+=namber;
            break;
        case '-':
            result-=namber;
            break;
        case '*':
            result*=namber;
            break;
        case '/':
            result/=namber;
            break;
      }  
      $(".wendow").text(result);
    });
    $(".clear").on('click',function(){
        result=null;
        operation=null;
        $(".wendow").text("");
    })
});