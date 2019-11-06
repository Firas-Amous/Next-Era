var object ={}
 object.shoparray=[];
 object.name = "Telescope store"
var total = 0 ;
$(function(){
	$(".btn1").on("click",function(){
		$("ul").append("<li>"+$("#h31").text()+"</li>")
		object.shoparray.push($("#h31").text())
		total+=160 
	})
	$(".btn2").on("click",function(){
		$("ul").append("<li>"+$("#h32").text()+"</li>")
		object.shoparray.push($("#h32").text())
		total+=120 
	})
	$(".btn3").on("click",function(){
		$("ul").append("<li>"+$("#h33").text()+"</li>")
		object.shoparray.push($("#h33").text())
		total+=1000 
	})
	$(".btn4").on("click",function(){
		$("ul").append("<li>"+$("#h34").text()+"</li>")
		object.shoparray.push($("#h34").text())
		total+=600  
	})
	$(".btn5").on("click",function(){
		$("ul").append("<li>"+$("#h35").text()+"</li>")
		object.shoparray.push($("#h35").text())
		total+=400
	