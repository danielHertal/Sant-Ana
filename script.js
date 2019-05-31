let exec = false;

$(document).on("scroll",function(){
    if($(document).scrollTop()>50){ //QUANDO O SCROLL PASSAR DOS 100px DO TOPO
        $(".logo").addClass("small_logo"); //TROCA P CLASSE MENOR
        $(".cabecalho").addClass("small");
        $("#menu").addClass("small_menu");
        $("#inicio1").addClass("small_btn");
        $("#sobre1").addClass("small_btn");
        $("#produtos1").addClass("small_btn");
        $("#contatos1").addClass("small_btn");
    } else{
        $(".logo").removeClass("small_logo")//VOLTA P MENU GRANDE ORIGINAL,
        $(".cabecalho").removeClass("small");
        $("#menu").removeClass("small_menu");
        $("#inicio1").removeClass("small_btn");
        $("#sobre1").removeClass("small_btn");
        $("#produtos1").removeClass("small_btn");
        $("#contatos1").removeClass("small_btn");
    }
});
$(document).ready(function(){
	$("#inicio1").click(function(event) {
		if(exec == false){
			if($(window).width() <= 768){
				$('#menu').hide();
				$('#btn-menu').show();
			}
			exec = true;
			event.preventDefault();
    		var target_offset = $("body").offset();
			var target_top = target_offset.top;
			$('html, body').animate({ scrollTop: target_top }, 900);
			setTimeout(atrasoAnimacao,500);
		}    	
	});

	$("#produtos1").click(function(event) {
    	if(exec == false){
			if($(window).width() <= 768){
				$('#menu').hide();
				$('#btn-menu').show();
			}
			exec = true;
			event.preventDefault();
    		var target_offset = $("#produtos2").offset();
			var target_top = target_offset.top-220;
			$('html, body').animate({ scrollTop: target_top }, 900);			
			setTimeout(atrasoAnimacao,500);
		}  
	});

	$("#sobre1").click(function(event) {
		if(exec == false){
			if($(window).width() <= 768){
				$('#menu').hide();
				$('#btn-menu').show();
			}
			exec = true;		
    		event.preventDefault();
    		var target_offset = $("#sobre2").offset();
			var target_top = target_offset.top-180;
			$('html, body').animate({ scrollTop: target_top }, 900);
			setTimeout(atrasoAnimacao,500);
		}  
	});

    $("#contatos1").click(function(event) {
		if(exec == false){
			if($(window).width() <= 768){
				$('#menu').hide();
				$('#btn-menu').show();
			}
			exec = true;		
    		event.preventDefault();
    		var target_offset = $("#contatos2").offset();
			var target_top = target_offset.top+200;
			$('html, body').animate({ scrollTop: target_top }, 900);
			setTimeout(atrasoAnimacao,500);
		}  
	});
});

function atrasoAnimacao(){
	exec = false;
}
function fechaMenu(){
	$("#menu").hide();
	$("#btn-menu").show();
}
function abreMenu(){
	$("#menu").show();
	$("#btn-menu").hide();
}

$(document).ready(function() {	
    if($(window).width() <= 768){
		$("#btn-menu").show();
		$("#menu").hide();
	}
});

setInterval(passar, 3500);

var img = 1;
var pas = true;
function passar(){  
    $(".image").css("background-image",
    "url(images/fotos/img"+img+".jpg)");
    
    $(".image").mouseover(function(){
        pas = false;
    });
    $(".image").mouseleave(function(){
        pas = true;
    });
	
    if(pas == true){
       img++; 
       if(img>6){
		   img = 1;
       }
    }
    
    
}

function pleft(){
	if(img==1){
		 $(".image").css("background-image",
    	"url(images/fotos/img6.jpg)");
	}else if(img==2){
		$(".image").css("background-image",
    	"url(images/fotos/img1.jpg)");
	}else if(img==3){
		$(".image").css("background-image",
    	"url(images/fotos/img2.jpg)");
	}else if(img==4){
		$(".image").css("background-image",
    	"url(images/fotos/img3.jpg)");
	}else if(img==5){
		$(".image").css("background-image",
    	"url(images/fotos/img4.jpg)");
	}else if(img==6){
		$(".image").css("background-image",
    	"url(images/fotos/img5.jpg)");
	}
}

function pright(){
	if(img==1){
		$(".image").css("background-image",
    	"url(images/fotos/img2.jpg)");
	}else if(img==2){
		$(".image").css("background-image",
    	"url(images/fotos/img3.jpg)");
	}else if(img==2){
		$(".image").css("background-image",
    	"url(images/fotos/img4.jpg)");
	}else if(img==2){
		$(".image").css("background-image",
    	"url(images/fotos/img5.jpg)");
	}else if(img==2){
		$(".image").css("background-image",
    	"url(images/fotos/img6.jpg)");
	}else if(img==2){
		$(".image").css("background-image",
    	"url(images/fotos/img1.jpg)");
	}
}
window.onload = function(){
	$(".prod").hide();
}


var confei = false; //confeitaria desativado
var panifi = false; //panificadora desativado
var lanch = false

function conf(){
	if(confei == true){
		console.log('entro');
		confei = false;
		$(".conf").hide();
		$("#confeitaria").removeClass("zoom");		
    }
    else if (panifi == false && lanch == false) {
		$(".conf").show();
		confei = true;
		$("#confeitaria").addClass("zoom");		
    }
    else if (panifi == true) {
		$(".panif").hide();
		$("#panificadora").removeClass("zoom");
		confei = true;
		panifi = false;
		$(".conf").show();
		$("#confeitaria").addClass("zoom");
    }
    else if (lanch == true) {
		$(".lanches").hide();
		$("#lanches").removeClass("zoom");
		lanch = false;
		confei = true;
		$(".conf").show();
		$("#confeitaria").addClass("zoom");
	}	
}

function pani(){		
	if(panifi == true){
		panifi = false;
		$(".panif").hide();
		$("#panificadora").removeClass("zoom");		
    }
    else if (confei == false && lanch == false) {
		$(".panif").show();
		panifi = true;
		$("#panificadora").addClass("zoom");		
    }
    else if (confei == true) {
		$(".conf").hide();
		$("#confeitaria").removeClass("zoom");
		confei = false;
		panifi = true;
		$(".panif").show();
		$("#panificadora").addClass("zoom");
    }
    else if (lanch == true) {
		$(".lanches").hide();
		$("#lanches").removeClass("zoom");
		lanch = false;
		panifi = true;
		$(".panif").show();
		$("#panificadora").addClass("zoom");
	}	
}

function lanc(){
	if(lanch == true){
		lanch = false;
		$(".lanches").hide();
		$("#lanches").removeClass("zoom");		
    }
    else if (confei == false && panifi == false) {
		$(".lanches").show();
		lanch = true;
		$("#lanches").addClass("zoom");		
    }
    else if (confei == true) {
		$(".conf").hide();
		$("#confeitaria").removeClass("zoom");
		confei = false;
		lanch = true;
		$(".lanches").show();
		$("#lanches").addClass("zoom");
    }
    else if (panifi == true) {
		$(".panif").hide();
		$("#panificadora").removeClass("zoom");
		panifi = false;
		lanch = true;
		$(".lanches").show();
		$("#lanches").addClass("zoom");
	}
}

$(document).ready(function(){
	$("#confeitaria").mouseover(function(){
		$("#confeitaria").addClass("prod_hover");
	});
	$("#confeitaria").mouseleave(function(){
		$("#confeitaria").removeClass("prod_hover");
	});
	
	$("#panificadora").mouseover(function(){
		$("#panificadora").addClass("prod_hover");
	});
	$("#panificadora").mouseleave(function(){
		$("#panificadora").removeClass("prod_hover");
	});
	
	$("#lanches").mouseover(function(){
		$("#lanches").addClass("prod_hover");
	});
	$("#lanches").mouseleave(function(){
		$("#lanches").removeClass("prod_hover");
	});
	
	/*-------------------------------------------------------*/
	$("#inicio1").mouseover(function(){
		$("#inicio1").addClass("btn_hover");
	});
	$("#inicio1").mouseleave(function(){
		$("#inicio1").removeClass("btn_hover");
	});
	$("#produtos1").mouseover(function(){
		$("#produtos1").addClass("btn_hover");
	});
	$("#produtos1").mouseleave(function(){
		$("#produtos1").removeClass("btn_hover");
	});
	$("#sobre1").mouseover(function(){
		$("#sobre1").addClass("btn_hover");
	});
	$("#sobre1").mouseleave(function(){
		$("#sobre1").removeClass("btn_hover");
	});
	$("#contatos1").mouseover(function(){
		$("#contatos1").addClass("btn_hover");
	});
	$("#contatos1").mouseleave(function(){
		$("#contatos1").removeClass("btn_hover");
	});
	
	/*-------------------------------------------------------*/
	$("#inicio1").mouseup(function(){
		$("#inicio1").removeClass("btn_cor");
		$("#inicio1").addClass("btn_hover");
	}).mousedown(function(){
		$("#inicio1").removeClass("btn_hover");
		$("#inicio1").addClass("btn_cor");
	});
	
	$("#produtos1").mouseup(function(){
		$("#produtos1").removeClass("btn_cor");
		$("#produtos1").addClass("btn_hover");
	}).mousedown(function(){
		$("#produtos1").removeClass("btn_hover");
		$("#produtos1").addClass("btn_cor");
	});
	
	$("#sobre1").mouseup(function(){
		$("#sobre1").removeClass("btn_cor");
		$("#sobre1").addClass("btn_hover");
	}).mousedown(function(){
		$("#sobre1").removeClass("btn_hover");
		$("#sobre1").addClass("btn_cor");
	});
	
	$("#contatos1").mouseup(function(){
		$("#contatos1").removeClass("btn_cor");
		$("#contatos1").addClass("btn_hover");
	}).mousedown(function(){
		$("#contatos1").removeClass("btn_hover");
		$("#contatos1").addClass("btn_cor");
	});
	/*-------------------------------------------------------*/
	
	$("#conf1").mouseover(function(){
		$("#conf1").addClass("prod_hover");
	});
	$("#conf1").mouseleave(function(){
		$("#conf1").removeClass("prod_hover");
	});
	$("#conf2").mouseover(function(){
		$("#conf2").addClass("prod_hover");
	});
	$("#conf2").mouseleave(function(){
		$("#conf2").removeClass("prod_hover");
	});
	$("#conf3").mouseover(function(){
		$("#conf3").addClass("prod_hover");
	});
	$("#conf3").mouseleave(function(){
		$("#conf3").removeClass("prod_hover");
	});
	$("#conf4").mouseover(function(){
		$("#conf4").addClass("prod_hover");
	});
	$("#conf4").mouseleave(function(){
		$("#conf4").removeClass("prod_hover");
	});
	
	$("#panif1").mouseover(function(){
		$("#panif1").addClass("prod_hover");
	});
	$("#panif1").mouseleave(function(){
		$("#panif1").removeClass("prod_hover");
	});
	$("#panif2").mouseover(function(){
		$("#panif2").addClass("prod_hover");
	});
	$("#panif2").mouseleave(function(){
		$("#panif2").removeClass("prod_hover");
	});
	$("#panif3").mouseover(function(){
		$("#panif3").addClass("prod_hover");
	});
	$("#panif3").mouseleave(function(){
		$("#panif3").removeClass("prod_hover");
	});
	$("#panif4").mouseover(function(){
		$("#panif4").addClass("prod_hover");
	});
	$("#panif4").mouseleave(function(){
		$("#panif4").removeClass("prod_hover");
	});

	$("#lanc1").mouseover(function(){
		$("#lanc1").addClass("prod_hover");
	});
	$("#lanc1").mouseleave(function(){
		$("#lanc1").removeClass("prod_hover");
	});
	$("#lanc2").mouseover(function(){
		$("#lanc2").addClass("prod_hover");
	});
	$("#lanc2").mouseleave(function(){
		$("#lanc2").removeClass("prod_hover");
	});
	$("#lanc3").mouseover(function(){
		$("#lanc3").addClass("prod_hover");
	});
	$("#lanc3").mouseleave(function(){
		$("#lanc3").removeClass("prod_hover");
	});
	$("#lanc4").mouseover(function(){
		$("#lanc4").addClass("prod_hover");
	});
	$("#lanc4").mouseleave(function(){
		$("#lanc4").removeClass("prod_hover");
	});
	
	$("#lanc5").mouseover(function(){
		$("#lanc5").addClass("prod_hover");
	});
	$("#lanc5").mouseleave(function(){
		$("#lanc5").removeClass("prod_hover");
	});
	$("#lanc6").mouseover(function(){
		$("#lanc6").addClass("prod_hover");
	});
	$("#lanc6").mouseleave(function(){
		$("#lanc6").removeClass("prod_hover");
	});
	$("#lanc7").mouseover(function(){
		$("#lanc7").addClass("prod_hover");
	});
	$("#lanc7").mouseleave(function(){
		$("#lanc7").removeClass("prod_hover");
	});
	$("#lanc8").mouseover(function(){
		$("#lanc8").addClass("prod_hover");
	});
	$("#lanc8").mouseleave(function(){
		$("#lanc8").removeClass("prod_hover");
	});
	$("#lanc9").mouseover(function(){
		$("#lanc9").addClass("prod_hover");
	});
	$("#lanc9").mouseleave(function(){
		$("#lanc9").removeClass("prod_hover");
	});
	$("#lanc10").mouseover(function(){
		$("#lanc10").addClass("prod_hover");
	});
	$("#lanc10").mouseleave(function(){
		$("#lanc10").removeClass("prod_hover");
	});
	$("#lanc11").mouseover(function(){
		$("#lanc11").addClass("prod_hover");
	});
	$("#lanc11").mouseleave(function(){
		$("#lanc11").removeClass("prod_hover");
	});
	$("#lanc12").mouseover(function(){
		$("#lanc12").addClass("prod_hover");
	});
	$("#lanc12").mouseleave(function(){
		$("#lanc12").removeClass("prod_hover");
	});
	/*----------------------------------------------*/
	/*					Produtos					*/
	/*----------------------------------------------*/
	
	$("#conf1").click(function(){
		$("._fundo").show();
		$("#confi1").show();
	});
	// $("#conf2").click(function(){
	// 	$("._fundo").show();
	// 	$("#confi2").show();
	// });
	// $("#conf3").click(function(){
	// 	$("._fundo").show();
	// 	$("#confi3").show();
	// });
	// $("#conf4").click(function(){
	// 	$("._fundo").show();
	// 	$("#confi4").show();
	// });
	
	$("#panif1").click(function(){
		$("._fundo").show();
		$("#pani1").show();
	});
	// $("#conf2").click(function(){
	// 	$("._fundo").show();
	// 	$("#confi2").show();
	// });
	// $("#conf3").click(function(){
	// 	$("._fundo").show();
	// 	$("#confi3").show();
	// });
	// $("#conf4").click(function(){
	// 	$("._fundo").show();
	// 	$("#confi4").show();
 //    });

    $('#lanc1').click(function () {
        $("._fundo").show();
        $("#lanche1").show();
    });
    $('#lanc2').click(function () {
        $("._fundo").show();
        $("#lanche2").show();
    });
    $('#lanc3').click(function () {
        $("._fundo").show();
        $("#lanche3").show();
    });
    $('#lanc4').click(function () {
        $("._fundo").show();
        $("#lanche4").show();
    });
    $('#lanc5').click(function () {
        $("._fundo").show();
        $("#lanche5").show();
    });
    $('#lanc6').click(function () {
        $("._fundo").show();
        $("#lanche6").show();
    });
    $('#lanc7').click(function () {
        $("._fundo").show();
        $("#lanche7").show();
    });
    $('#lanc8').click(function () {
        $("._fundo").show();
        $("#lanche8").show();
    });
    $('#lanc9').click(function () {
        $("._fundo").show();
        $("#lanche9").show();
    });
    $('#lanc10').click(function () {
        $("._fundo").show();
        $("#lanche10").show();
    });
    $('#lanc11').click(function () {
        $("._fundo").show();
        $("#lanche11").show();
    });
    $('#lanc12').click(function () {
        $("._fundo").show();
        $("#lanche12").show();
    });
	/*------------------------------------------*/
	/*				Fexar produtos				*/
	/*------------------------------------------*/
	$("#btn_confi1").click(function(){
		$("._fundo").hide();
		$("#confi1").hide();
	});
	$("#btn_confi2").click(function(){
		$("._fundo").hide();
		$("#confi2").hide();
	});
	$("#btn_confi3").click(function(){
		$("._fundo").hide();
		$("#confi3").hide();
	});
	$("#btn_confi4").click(function(){
		$("._fundo").hide();
		$("#confi4").hide();
	});
	
	$("#btn_pani1").click(function(){
		$("._fundo").hide();
		$("#pani1").hide();
	});
	$("#btn_confi2").click(function(){
		$("._fundo").hide();
		$("#confi2").hide();
	});
	$("#btn_confi3").click(function(){
		$("._fundo").hide();
		$("#confi3").hide();
	});
	$("#btn_confi4").click(function(){
		$("._fundo").hide();
		$("#confi4").hide();
	});
	/*---------------Lanches--------------------*/
	$("#btn_lanche1").click(function(){
		$("._fundo").hide();
		$("#lanche1").hide();
	});
	$("#btn_lanche2").click(function(){
		$("._fundo").hide();
		$("#lanche2").hide();
	});
	$("#btn_lanche3").click(function(){
		$("._fundo").hide();
		$("#lanche3").hide();
	});
	$("#btn_lanche4").click(function(){
		$("._fundo").hide();
		$("#lanche4").hide();
	});
	$("#btn_lanche5").click(function(){
		$("._fundo").hide();
		$("#lanche5").hide();
	});
	$("#btn_lanche6").click(function(){
		$("._fundo").hide();
		$("#lanche6").hide();
	});
	$("#btn_lanche7").click(function(){
		$("._fundo").hide();
		$("#lanche7").hide();
	});
	$("#btn_lanche8").click(function(){
		$("._fundo").hide();
		$("#lanche8").hide();
	});
	
	$("#btn_lanche9").click(function(){
		$("._fundo").hide();
		$("#lanche9").hide();
	});
	$("#btn_lanche10").click(function(){
		$("._fundo").hide();
		$("#lanche10").hide();
	});
	$("#btn_lanche11").click(function(){
		$("._fundo").hide();
		$("#lanche11").hide();
	});
	$("#btn_lanche12").click(function(){
		$("._fundo").hide();
		$("#lanche12").hide();
	});
});




























