$(function(){
	var iNow = 0;
	var time;
	
	function timer(){
		 time = setInterval(function(){
			iNow++;
			if(iNow==$('#ads img').size()){
				iNow=0;
			}
			$('#ads-ul li').eq(iNow).addClass('sele').siblings().removeClass('sele');
			$('#ads img').eq(iNow).addClass('selected').siblings().removeClass('selected');;
		},1000);
	}
	timer();
	$('#ads').hover(function(){
		clearInterval(time);
	},function(){
		timer();
	});
	$('#ads-ul li').on('mouseover',function(){
		var $index = $(this).index();
		$(this).addClass('sele').siblings().removeClass('sele');
		$('#ads img').eq($index).addClass('selected').siblings().removeClass('selected');;
	});
	
	$li = $('#skin-select li');
	for(var i=0;i<$li.size();i++){
		var color = ['#4A4A4A','#b5d61f','#F9AF2A','#37C7D4','#E44072','#BE46D8'];
		$li.eq(i).attr('index',i);
		$('#skin-select li').on('click',function(){
		var $disWidth = -$(this).index()*($(this).width()+6);
		for(var i=0;i<$('#skin-select li').size();i++){
			$('#skin-select li').eq(i).css('background-position',-$li.eq(i).attr('index')*($(this).width()+6)+'px'+' 0px');
		}
		var $j= $(this).attr('index');
		console.log(color[$j]);
		$(this).css('background-position',$disWidth+'px'+' -15px');
		$('#header-bottom').css('background',color[$j]);
		$('#classify-title').css('background',color[$j]);
		});
	}	
	$('#activity-ul li').on('click',function(){
		$(this).children().addClass('selec').parent().siblings().children().removeClass('selec');
		// var $iDis = $('#pic-all li').index($(this)).width();
		
		$iDisli = $('.pic-detail').eq($(this).index()).width();
		$iMove=$(this).index()*$iDisli;
		console.log(-$iMove);
		$('#pic-all').animate({
			left:-$iMove
		 },1000);
		});
	
});
