$(function(){
	$('.nav-li').hover(function(){
		$(this).children('.sublink').css('display','block');
		console.log(1);
	},function(){
		console.log(2);
		$(this).children('.sublink').css('display','none');
	});
	$('#mask').on('mouseover',function(){
		$('#img-box').css('display','block');
		$('#show-box').css('display','block');
		$('#mask').on('mousemove',function(e){
			var $iDisWidth = e.clientX-378-$('#show-box').width()/2;
			var $iDisHeight = e.clientY-113-$('#show-box').height()/2;
			if($iDisWidth<=0){
				$iDisWidth=0
			}
			if($iDisHeight<=0){
				$iDisHeight=0
			}
			var $disx = $(this).width()-$('#show-box').width();
			var $disy = $(this).height()-$('#show-box').height();
			

			if($iDisWidth>=$disx){
				$iDisWidth=$disx;
			}
			if($iDisHeight>=$disy){
				$iDisHeight=$disy;
			}
			$('#show-box').css({
			'left': $iDisWidth+'px',
			'top':$iDisHeight+'px'
			});
			var $disxbig = $('#img-big .big-selected').width()-$('#img-box').width();
			var $value = $disxbig/$disx;
			$('#img-big .big-selected').css({
				'left':-$value*$iDisWidth+'px',
				'top':-$value*$iDisHeight+'px'

			});
		});	
	});
	$('#mask').on('mouseout',function(){
		$('#img-box').css('display','none');
		$('#show-box').css('display','none');
	});
	$('.intro-selected img').on('click',function(){
	 		var $seletedindex = $(this).index();
	 		$('#img-small img').eq($seletedindex).addClass('small-selected').siblings().removeClass('small-selected');
	 		$('#img-big img').eq($seletedindex).addClass('big-selected').siblings().removeClass('big-selected');		
	 	});
	$('#kind li').on('click',function(){
		var $kindindex= $(this).index();
		$(this).css('border-color','#f60').siblings().css('border-color','#ccc');
	 	$('#img-small img').eq(3*$kindindex).addClass('small-selected').siblings().removeClass('small-selected');
	 	$('#img-big img').eq(3*$kindindex).addClass('big-selected').siblings().removeClass('big-selected');
	 	$('#intro-img li').eq($kindindex).addClass('intro-selected').siblings().removeClass('intro-selected');
	 	$('#choice-color span').eq($kindindex).addClass('choice-selected').siblings().removeClass('choice-selected');
	 	$('.intro-selected img').on('click',function(){
	 		var $seletedindex = $(this).index();
	 		$('#img-small img').eq(3*$kindindex+$seletedindex).addClass('small-selected').siblings().removeClass('small-selected');
	 		$('#img-big img').eq(3*$kindindex+$seletedindex).addClass('big-selected').siblings().removeClass('big-selected');		
	 	});
	});
	$('#size li').on('click',function(){
		var $sizeindex = $(this).index();
		$(this).css('background','#f60').siblings().css('background','');
		$('#size-choice span').eq($sizeindex+1).addClass('size-selected').siblings().removeClass('size-selected');
	});
	$('select').on('click',function(){
		var $value_money = $('select option:selected').val();
		$('#money').html($value_money*200);
	});
	$('#pro-intro li').on('click',function(){
		var $word_selected = $(this).index();
		$('#pro-word div').eq($word_selected).addClass('pro-selected').siblings().removeClass('pro-selected');
	});
	$('#stars li').on('mouseover',function(){
		var $starheigh = -(16*$(this).index()+96);
		$('#stars').css('background-position','0 '+$starheigh+'px');
	}).on('click',function(){
		var $sore = $(this).index()+1;
		alert('你给此商品的评分为'+$sore+'分');
		var $stargreen = -(16*$(this).index()+16);
		$('#stars').css('background-position','0 '+$stargreen+'px');
	});

});