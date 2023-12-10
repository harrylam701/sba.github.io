$("#sendBtn").click(function(){
    //获取用户姓名
    var  userName = $("#userName").val();
    //判断非空
    if(userName == null || userName.trim() == ""){
          $("#msg").html("用户姓名不能为空！");
          return;
    }
    //获取留言内容
    var  content= $("#content").val();

    //判断非空

    if(content.trim() == ""){
             $("#msg").html("请输入留言内容！");
             return;
    }  

//留言数据

var  msg = "<li><h4>"+userName+"</h4><small>"+formatDate()+"</small>";
    msg +="<div>"+content+"</div></li>";

//将留言内容追加到留言板中

$("#msgBoard").prepend(msg);


//清空内容与提示信息

$("#userName").val("");
$("#content").val("");
$("msg").val("");
    
});

//格式化时间
function formatDate(){
      //获取系统当前时间
      var  date = new  Date();
      //获取年月日时分秒
      var str = date.getFullYear()+"-"+(parseInt(date.getMonth())+1)+"-"+date.getDate();
      str +" "+ date.getHours +":"+ date.getMinutes()+":"+date.getSeconds();

      return  str;
}