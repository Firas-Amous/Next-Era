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
<<<<<<< HEAD
		object.shoparray.push($("#h35").text())
		total+=400
	
=======
	})
	$(".btn6").on("click",function(){
		$("ul").append("<li>"+$("#h36").text()+"</li>")
	})
	$(".btn7").on("click",function(){
		$("ul").append("<li>"+$("#h37").text()+"</li>")
	})
	$(".btn8").on("click",function(){
		$("ul").append("<li>"+$("#h38").text()+"</li>")
	})
	$(".btn9").on("click",function(){
		$("ul").append("<li>"+$("#h39").text()+"</li>")
	})
	$(".btn10").on("click",function(){
		$("ul").append("<li>"+$("#h3").text()+"</li>")
	})
	$(".btn11").on("click",function(){
		$("ul").append("<li>"+$("#h36").text()+"</li>")
	})

$(function(){
	$("#btn1").on("click",function(){
		$("ul").append("<li>"+$("#h31").text()+"</li>")
	})
	$("#btn2").on("click",function(){
		$("ul").append("<li>"+$("#h32").text()+"</li>")
	})
	$("#btn3").on("click",function(){
		$("ul").append("<li>"+$("#h33").text()+"</li>")
	})
	$("#btn4").on("click",function(){
		$("ul").append("<li>"+$("#h34").text()+"</li>")
	})
	$("#btn5").on("click",function(){
		$("ul").append("<li>"+$("#h35").text()+"</li>")
	})
	$("#btn6").on("click",function(){
		$("ul").append("<li>"+$("#h36").text()+"</li>")
	})
})
>>>>>>> a9d19cd3fb3de9da34b8fa300ff2fb2985cc55e5
