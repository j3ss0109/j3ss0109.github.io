/*JavaScript*/




function menulistclick(){
    var list=document.getElementById("list");
    if(list.style.display=="none"){
        list.style.display="block";
        list.style.animationName="list-on";
        list.style.animationDuration="0.2s";
        
    }else{
        list.style.animationName="list-off";
        list.style.animationDuration="0.2s";
        setTimeout(function(){
            list.style.display="none";
        },100);
    }
}

$.ajax({
	type:"get", //使用get方式
	url: "task.json", //json文件相對於這個HTML的路徑
	dataType:"json",
	success:function(data) {
		//data就是json數據
	},
	error:function() {
		alert("!ERROR!");
	}
});

function homelink(){
    location.href="index.html";
}

function tasklink(){
    location.href="task.html";
}

function shoplink(){
    location.href="shop.html";
}