$(function(){
   $("#login").click(function(e){
       e.preventDefault();
       var username = $("input[name='username']").val();
       var password = $("input[name='password']").val();
       $.ajax({
           url:"/ops/login/",
           type:"post",
           data:JSON.stringify({username:username, password:password}),
           contentType:"application/json",
           success: function(res){
               if(res.ret == 0){
                   location.href = "/ops/automation/plan/";
               }else{
                   $("#status").fadeIn(500);
                   setTimeout("$('#status').fadeOut(1500);", 3000);
               }
           }
       })
   });
});
