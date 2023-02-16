

// 菜单
$(function(){
	$("#han_menu_top").click(function(){
		$("#han_menu_top_link").slideToggle(500);
	})
})
// table切换、资讯
$(function(){
	$("#nav_tabs_home").click(function(){
		$("#nav_tabs_home").css({"color":"#0079fc","border-bottom-width":"2px","border-bottom-style":"solid","border-bottom-color":"#83aff6"});
		$("#nav_tabs_profile").css({"color":"#000","border-bottom-width":"0px","border-bottom-style":"solid","border-bottom-color":"#83aff6"});		
		$("#nav_tabs_messages").css({"color":"#000","border-bottom-width":"0px","border-bottom-style":"solid","border-bottom-color":"#83aff6"});		
		$("#nav_tabs_settings").css({"color":"#000","border-bottom-width":"0px","border-bottom-style":"solid","border-bottom-color":"#83aff6"});		
	});
	$("#nav_tabs_profile").click(function(){
		$("#nav_tabs_home").css({"color":"#000","border-bottom-width":"0px","border-bottom-style":"solid","border-bottom-color":"#83aff6"});
		$("#nav_tabs_profile").css({"color":"#0079fc","border-bottom-width":"2px","border-bottom-style":"solid","border-bottom-color":"#83aff6"});		
		$("#nav_tabs_messages").css({"color":"#000","border-bottom-width":"0px","border-bottom-style":"solid","border-bottom-color":"#83aff6"});		
		$("#nav_tabs_settings").css({"color":"#000","border-bottom-width":"0px","border-bottom-style":"solid","border-bottom-color":"#83aff6"});	
	});
	$("#nav_tabs_messages").click(function(){
		$("#nav_tabs_home").css({"color":"#000","border-bottom-width":"0px","border-bottom-style":"solid","border-bottom-color":"#83aff6"});
		$("#nav_tabs_profile").css({"color":"#000","border-bottom-width":"0px","border-bottom-style":"solid","border-bottom-color":"#83aff6"});		
		$("#nav_tabs_messages").css({"color":"#0079fc","border-bottom-width":"2px","border-bottom-style":"solid","border-bottom-color":"#83aff6"});		
		$("#nav_tabs_settings").css({"color":"#000","border-bottom-width":"0px","border-bottom-style":"solid","border-bottom-color":"#83aff6"});		
	});
	$("#nav_tabs_settings").click(function(){
		$("#nav_tabs_home").css({"color":"#000","border-bottom-width":"0px","border-bottom-style":"solid","border-bottom-color":"#83aff6"});
		$("#nav_tabs_profile").css({"color":"#000","border-bottom-width":"0px","border-bottom-style":"solid","border-bottom-color":"#83aff6"});		
		$("#nav_tabs_messages").css({"color":"#000","border-bottom-width":"0px","border-bottom-style":"solid","border-bottom-color":"#83aff6"});		
		$("#nav_tabs_settings").css({"color":"#0079fc","border-bottom-width":"2px","border-bottom-style":"solid","border-bottom-color":"#83aff6"});		
	});

});

//main
jQuery(document).ready(function($){
	var mainHeader = $('.cd-auto-hide-header'),
		secondaryNavigation = $('.cd-secondary-nav'),
		//this applies only if secondary nav is below intro section
		belowNavHeroContent = $('.sub-nav-hero'),
		headerHeight = mainHeader.height();
	
	//set scrolling variables
	var scrolling = false,
		previousTop = 0,
		currentTop = 0,
		scrollDelta = 10,
		scrollOffset = 150;

	mainHeader.on('click', '.nav-trigger', function(event){
		// open primary navigation on mobile
		event.preventDefault();
		mainHeader.toggleClass('nav-open');
	});

	$(window).on('scroll', function(){
		if( !scrolling ) {
			scrolling = true;
			(!window.requestAnimationFrame)
				? setTimeout(autoHideHeader, 250)
				: requestAnimationFrame(autoHideHeader);
		}
	});

	$(window).on('resize', function(){
		headerHeight = mainHeader.height();
	});

	function autoHideHeader() {
		var currentTop = $(window).scrollTop();

		( belowNavHeroContent.length > 0 ) 
			? checkStickyNavigation(currentTop) // secondary navigation below intro
			: checkSimpleNavigation(currentTop);

	   	previousTop = currentTop;
		scrolling = false;
	}

	function checkSimpleNavigation(currentTop) {
		//there's no secondary nav or secondary nav is below primary nav
	    if (previousTop - currentTop > scrollDelta) {
	    	//if scrolling up...
	    	mainHeader.removeClass('is-hidden');
	    } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
	    	//if scrolling down...
	    	mainHeader.addClass('is-hidden');
	    }
	}

	function checkStickyNavigation(currentTop) {
		//secondary nav below intro section - sticky secondary nav
		var secondaryNavOffsetTop = belowNavHeroContent.offset().top - secondaryNavigation.height() - mainHeader.height();
		
		if (previousTop >= currentTop ) {
	    	//if scrolling up... 
	    	if( currentTop < secondaryNavOffsetTop ) {
	    		//secondary nav is not fixed
	    		mainHeader.removeClass('is-hidden');
	    		secondaryNavigation.removeClass('fixed slide-up');
	    		belowNavHeroContent.removeClass('secondary-nav-fixed');
	    	} else if( previousTop - currentTop > scrollDelta ) {
	    		//secondary nav is fixed
	    		mainHeader.removeClass('is-hidden');
	    		secondaryNavigation.removeClass('slide-up').addClass('fixed'); 
	    		belowNavHeroContent.addClass('secondary-nav-fixed');
	    	}
	    	
	    } else {
	    	//if scrolling down...	
	 	  	if( currentTop > secondaryNavOffsetTop + scrollOffset ) {
	 	  		//hide primary nav
	    		mainHeader.addClass('is-hidden');
	    		secondaryNavigation.addClass('fixed slide-up');
	    		belowNavHeroContent.addClass('secondary-nav-fixed');
	    	} else if( currentTop > secondaryNavOffsetTop ) {
	    		//once the secondary nav is fixed, do not hide primary nav if you haven't scrolled more than scrollOffset 
	    		mainHeader.removeClass('is-hidden');
	    		secondaryNavigation.addClass('fixed').removeClass('slide-up');
	    		belowNavHeroContent.addClass('secondary-nav-fixed');
	    	}

	    }
	}
});
/***************************************************workplace*************************************************/
$(function() {
						//第一个下拉框
						$("#tunbiao_s1").click(function() {
							$("#zhao_s2").slideUp(500)

							$("#tunbiao_s1").css({
								"display": "none"
							})
							$("#tunbiao_s2").css({
								"display": "block"
							})
						})
						$("#tunbiao_s2").click(function() {
								$("#zhao_s2").slideDown(500)
							$("#zhao_s3").css({"display":"none"})
							$("#zhao_s4").css({"display":"none"})
							$("#zhao_s5").css({"display":"none"})
							$("#tunbiao_s3").css({
								"display": "none"
							})
							$("#tunbiao_s4").css({
								"display": "block"
							})
							$("#tunbiao_s5").css({
								"display": "none"
							})
							$("#tunbiao_s6").css({
								"display": "block"
							})
							$("#tunbiao_s7").css({
								"display": "none"
							})
							$("#tunbiao_s8").css({
								"display": "block"
							})
								$("#tunbiao_s2").css({
									"display": "none"
								})
								$("#tunbiao_s1").css({
									"display": "block"
								})
							})
							//第二个下拉框
						$("#tunbiao_s3").click(function() {
							$("#zhao_s3").slideUp(500)
							$("#tunbiao_s3").css({
								"display": "none"
							})
							$("#tunbiao_s4").css({
								"display": "block"
							})
						})
						$("#tunbiao_s4").click(function() {
								$("#zhao_s3").slideDown(500)
								$("#zhao_s2").css({"display":"none"})
							    $("#zhao_s4").css({"display":"none"})
							    $("#zhao_s5").css({"display":"none"})
							    $("#tunbiao_s1").css({
								"display": "none"
							})
							$("#tunbiao_s2").css({
								"display": "block"
							})
							$("#tunbiao_s5").css({
								"display": "none"
							})
							$("#tunbiao_s6").css({
								"display": "block"
							})
							$("#tunbiao_s7").css({
								"display": "none"
							})
							$("#tunbiao_s8").css({
								"display": "block"
							})
								$("#tunbiao_s4").css({
									"display": "none"
								})
								$("#tunbiao_s3").css({
									"display": "block"
								})
							})
							//第三个下拉框
						$("#tunbiao_s5").click(function() {
							$("#zhao_s4").slideUp(500)
							$("#tunbiao_s5").css({
								"display": "none"
							})
							$("#tunbiao_s6").css({
								"display": "block"
							})
						})
						$("#tunbiao_s6").click(function() {
								$("#zhao_s4").slideDown(500)
								$("#zhao_s2").css({"display":"none"})
							    $("#zhao_s3").css({"display":"none"})
							    $("#zhao_s5").css({"display":"none"})
							    $("#tunbiao_s1").css({
								"display": "none"
							})
							$("#tunbiao_s2").css({
								"display": "block"
							})
							$("#tunbiao_s3").css({
								"display": "none"
							})
							$("#tunbiao_s4").css({
								"display": "block"
							})
							$("#tunbiao_s7").css({
								"display": "none"
							})
							$("#tunbiao_s8").css({
								"display": "block"
							})
								$("#tunbiao_s6").css({
									"display": "none"
								})
								$("#tunbiao_s5").css({
									"display": "block"
								})
							})
							//第四个下拉框
						$("#tunbiao_s7").click(function() {
							$("#zhao_s5").slideUp(500)
							$("#tunbiao_s7").css({
								"display": "none"
							})
							$("#tunbiao_s8").css({
								"display": "block"
							})
						})
						$("#tunbiao_s8").click(function() {
								$("#zhao_s5").slideDown(500)
								$("#zhao_s2").css({"display":"none"})
							    $("#zhao_s3").css({"display":"none"})
							    $("#zhao_s4").css({"display":"none"})
							    $("#tunbiao_s1").css({
								"display": "none"
							})
							$("#tunbiao_s2").css({
								"display": "block"
							})
							$("#tunbiao_s3").css({
								"display": "none"
							})
							$("#tunbiao_s4").css({
								"display": "block"
							})
							$("#tunbiao_s5").css({
								"display": "none"
							})
							$("#tunbiao_s6").css({
								"display": "block"
							})
								$("#tunbiao_s8").css({
									"display": "none"
								})
								$("#tunbiao_s7").css({
									"display": "block"
								})
							})
							//第五个下拉框
						$("#tunbiao_s9").click(function() {
							$("#zhao_s6").slideUp(500)
							$("#tunbiao_s9").css({
								"display": "none"
							})
							$("#tunbiao_s10").css({
								"display": "block"
							})
						})
						$("#tunbiao_s10").click(function() {
								$("#zhao_s6").slideDown(500)
								$("#zhao_s7").css({"display":"none"})
							    $("#zhao_s8").css({"display":"none"})
							    $("#zhao_s9").css({"display":"none"})
							    $("#tunbiao_s11").css({
								"display": "none"
							})
							$("#tunbiao_s12").css({
								"display": "block"
							})
							$("#tunbiao_s13").css({
								"display": "none"
							})
							$("#tunbiao_s14").css({
								"display": "block"
							})
							$("#tunbiao_s15").css({
								"display": "none"
							})
							$("#tunbiao_s16").css({
								"display": "block"
							})
								$("#tunbiao_s10").css({
									"display": "none"
								})
								$("#tunbiao_s9").css({
									"display": "block"
								})
							})
							//第六个下拉框
						$("#tunbiao_s11").click(function() {
							$("#zhao_s7").slideUp(500)
							$("#tunbiao_s11").css({
								"display": "none"
							})
							$("#tunbiao_s12").css({
								"display": "block"
							})
						})
						$("#tunbiao_s12").click(function() {
								$("#zhao_s7").slideDown(500)
								$("#zhao_s6").css({"display":"none"})
							    $("#zhao_s8").css({"display":"none"})
							    $("#zhao_s9").css({"display":"none"})
							    $("#tunbiao_s9").css({
								"display": "none"
							})
							$("#tunbiao_s10").css({
								"display": "block"
							})
							$("#tunbiao_s13").css({
								"display": "none"
							})
							$("#tunbiao_s14").css({
								"display": "block"
							})
							$("#tunbiao_s15").css({
								"display": "none"
							})
							$("#tunbiao_s16").css({
								"display": "block"
							})
								$("#tunbiao_s12").css({
									"display": "none"
								})
								$("#tunbiao_s11").css({
									"display": "block"
								})
							})
							//第七个下拉框
						$("#tunbiao_s13").click(function() {
							$("#zhao_s8").slideUp(500)
							$("#tunbiao_s13").css({
								"display": "none"
							})
							$("#tunbiao_s14").css({
								"display": "block"
							})
						})
						$("#tunbiao_s14").click(function() {
								$("#zhao_s8").slideDown(500)
								$("#zhao_s6").css({"display":"none"})
							    $("#zhao_s7").css({"display":"none"})
							    $("#zhao_s9").css({"display":"none"})
							    $("#tunbiao_s9").css({
								"display": "none"
							})
							$("#tunbiao_s10").css({
								"display": "block"
							})
							$("#tunbiao_s11").css({
								"display": "none"
							})
							$("#tunbiao_s12").css({
								"display": "block"
							})
							$("#tunbiao_s15").css({
								"display": "none"
							})
							$("#tunbiao_s16").css({
								"display": "block"
							})
								$("#tunbiao_s14").css({
									"display": "none"
								})
								$("#tunbiao_s13").css({
									"display": "block"
								})
							})
							//第八个下拉框
						$("#tunbiao_s15").click(function() {
							$("#zhao_s9").slideUp(500)
							$("#tunbiao_s15").css({
								"display": "none"
							})
							$("#tunbiao_s16").css({
								"display": "block"
							})
						})
						$("#tunbiao_s16").click(function() {
								$("#zhao_s9").slideDown(500)
								$("#zhao_s6").css({"display":"none"})
							    $("#zhao_s8").css({"display":"none"})
							    $("#zhao_s7").css({"display":"none"})
							    $("#tunbiao_s9").css({
								"display": "none"
							})
							$("#tunbiao_s10").css({
								"display": "block"
							})
							$("#tunbiao_s13").css({
								"display": "none"
							})
							$("#tunbiao_s14").css({
								"display": "block"
							})
							$("#tunbiao_s11").css({
								"display": "none"
							})
							$("#tunbiao_s12").css({
								"display": "block"
							})
								$("#tunbiao_s16").css({
									"display": "none"
								})
								$("#tunbiao_s15").css({
									"display": "block"
								})
							})
							//第九个下拉框
						$("#tunbiao_s17").click(function() {
							$("#zhao_s10").slideUp(500)
							$("#tunbiao_s17").css({
								"display": "none"
							})
							$("#tunbiao_s18").css({
								"display": "block"
							})
						})
						$("#tunbiao_s18").click(function() {
								$("#zhao_s10").slideDown(500)
								$("#zhao_s11").css({"display":"none"})
							    $("#zhao_s12").css({"display":"none"})
							    $("#zhao_s13").css({"display":"none"})
							    $("#tunbiao_s19").css({
								"display": "none"
							})
							$("#tunbiao_s20").css({
								"display": "block"
							})
							$("#tunbiao_s21").css({
								"display": "none"
							})
							$("#tunbiao_s22").css({
								"display": "block"
							})
							$("#tunbiao_s23").css({
								"display": "none"
							})
							$("#tunbiao_s24").css({
								"display": "block"
							})
								$("#tunbiao_s18").css({
									"display": "none"
								})
								$("#tunbiao_s17").css({
									"display": "block"
								})
							})
							//第十个下拉框
						$("#tunbiao_s19").click(function() {
							$("#zhao_s11").slideUp(500)
							$("#tunbiao_s19").css({
								"display": "none"
							})
							$("#tunbiao_s20").css({
								"display": "block"
							})
						})
						$("#tunbiao_s20").click(function() {
								$("#zhao_s11").slideDown(500)
								$("#zhao_s10").css({"display":"none"})
							    $("#zhao_s12").css({"display":"none"})
							    $("#zhao_s13").css({"display":"none"})
							    $("#tunbiao_s17").css({
								"display": "none"
							})
							$("#tunbiao_s18").css({
								"display": "block"
							})
							$("#tunbiao_s21").css({
								"display": "none"
							})
							$("#tunbiao_s22").css({
								"display": "block"
							})
							$("#tunbiao_s21").css({
								"display": "none"
							})
							$("#tunbiao_s22").css({
								"display": "block"
							})
								$("#tunbiao_s20").css({
									"display": "none"
								})
								$("#tunbiao_s19").css({
									"display": "block"
								})
							})
							//第11个下拉框
						$("#tunbiao_s21").click(function() {
							$("#zhao_s12").slideUp(500)
							$("#tunbiao_s21").css({
								"display": "none"
							})
							$("#tunbiao_s22").css({
								"display": "block"
							})
						})
						$("#tunbiao_s22").click(function() {
								$("#zhao_s12").slideDown(500)
								$("#zhao_s10").css({"display":"none"})
							    $("#zhao_s11").css({"display":"none"})
							    $("#zhao_s13").css({"display":"none"})
							    $("#tunbiao_s17").css({
								"display": "none"
							})
							$("#tunbiao_s18").css({
								"display": "block"
							})
							$("#tunbiao_s19").css({
								"display": "none"
							})
							$("#tunbiao_s20").css({
								"display": "block"
							})
							$("#tunbiao_s21").css({
								"display": "none"
							})
							$("#tunbiao_s22").css({
								"display": "block"
							})
								$("#tunbiao_s22").css({
									"display": "none"
								})
								$("#tunbiao_s21").css({
									"display": "block"
								})
							})
							//第12个下拉框
						$("#tunbiao_s23").click(function() {
							$("#zhao_s13").slideUp(500)
							$("#tunbiao_s23").css({
								"display": "none"
							})
							$("#tunbiao_s24").css({
								"display": "block"
							})
						})
						$("#tunbiao_s24").click(function() {
								$("#zhao_s13").slideDown(500)
								$("#zhao_s10").css({"display":"none"})
							    $("#zhao_s11").css({"display":"none"})
							    $("#zhao_s12").css({"display":"none"})
							    $("#tunbiao_s17").css({
								"display": "none"
							})
							$("#tunbiao_s18").css({
								"display": "block"
							})
							$("#tunbiao_s19").css({
								"display": "none"
							})
							$("#tunbiao_s20").css({
								"display": "block"
							})
							$("#tunbiao_s21").css({
								"display": "none"
							})
							$("#tunbiao_s22").css({
								"display": "block"
							})
								$("#tunbiao_s24").css({
									"display": "none"
								})
								$("#tunbiao_s23").css({
									"display": "block"
								})
							})
							//第21个下拉框
						$("#tunbiao_s41").click(function() {
							$("#zhao_s22").slideUp(500)
							$("#tunbiao_s41").css({
								"display": "none"
							})
							$("#tunbiao_s42").css({
								"display": "block"
							})
						})
						$("#tunbiao_s42").click(function() {
								$("#zhao_s22").slideDown(500)
								$("#zhao_s23").css({"display":"none"})
							    $("#zhao_s24").css({"display":"none"})
							    $("#zhao_s25").css({"display":"none"})
							    $("#tunbiao_s43").css({
								"display": "none"
							})
							$("#tunbiao_s44").css({
								"display": "block"
							})
							$("#tunbiao_s45").css({
								"display": "none"
							})
							$("#tunbiao_s46").css({
								"display": "block"
							})
							$("#tunbiao_s47").css({
								"display": "none"
							})
							$("#tunbiao_s48").css({
								"display": "block"
							})
								$("#tunbiao_s42").css({
									"display": "none"
								})
								$("#tunbiao_s41").css({
									"display": "block"
								})
							})
							//第22个下拉框
						$("#tunbiao_s43").click(function() {
							$("#zhao_s23").slideUp(500)
							$("#tunbiao_s43").css({
								"display": "none"
							})
							$("#tunbiao_s44").css({
								"display": "block"
							})
						})
						$("#tunbiao_s44").click(function() {
								$("#zhao_s23").slideDown(500)
								$("#zhao_s22").css({"display":"none"})
							    $("#zhao_s24").css({"display":"none"})
							    $("#zhao_s25").css({"display":"none"})
							    $("#tunbiao_s41").css({
								"display": "none"
							})
							$("#tunbiao_s42").css({
								"display": "block"
							})
							$("#tunbiao_s45").css({
								"display": "none"
							})
							$("#tunbiao_s46").css({
								"display": "block"
							})
							$("#tunbiao_s47").css({
								"display": "none"
							})
							$("#tunbiao_s48").css({
								"display": "block"
							})
								$("#tunbiao_s44").css({
									"display": "none"
								})
								$("#tunbiao_s43").css({
									"display": "block"
								})
							})
							//第23个下拉框
						$("#tunbiao_s45").click(function() {
							$("#zhao_s24").slideUp(500)
							$("#tunbiao_s45").css({
								"display": "none"
							})
							$("#tunbiao_s46").css({
								"display": "block"
							})
						})
						$("#tunbiao_s46").click(function() {
								$("#zhao_s24").slideDown(500)
								$("#zhao_s22").css({"display":"none"})
							    $("#zhao_s23").css({"display":"none"})
							    $("#zhao_s25").css({"display":"none"})
							    $("#tunbiao_s41").css({
								"display": "none"
							})
							$("#tunbiao_s42").css({
								"display": "block"
							})
							$("#tunbiao_s43").css({
								"display": "none"
							})
							$("#tunbiao_s44").css({
								"display": "block"
							})
							$("#tunbiao_s47").css({
								"display": "none"
							})
							$("#tunbiao_s48").css({
								"display": "block"
							})
								$("#tunbiao_s46").css({
									"display": "none"
								})
								$("#tunbiao_s45").css({
									"display": "block"
								})
							})
							//第24个下拉框
						$("#tunbiao_s47").click(function() {
							$("#zhao_s25").slideUp(500)
							$("#tunbiao_s47").css({
								"display": "none"
							})
							$("#tunbiao_s48").css({
								"display": "block"
							})
						})
						$("#tunbiao_s48").click(function() {
							$("#zhao_s25").slideDown(500)
							$("#zhao_s22").css({"display":"none"})
							    $("#zhao_s23").css({"display":"none"})
							    $("#zhao_s24").css({"display":"none"})
							    $("#tunbiao_s41").css({
								"display": "none"
							})
							$("#tunbiao_s42").css({
								"display": "block"
							})
							$("#tunbiao_s43").css({
								"display": "none"
							})
							$("#tunbiao_s44").css({
								"display": "block"
							})
							$("#tunbiao_s45").css({
								"display": "none"
							})
							$("#tunbiao_s46").css({
								"display": "block"
							})
							$("#tunbiao_s48").css({
								"display": "none"
							})
							$("#tunbiao_s47").css({
								"display": "block"
							})
						})

						//搜素框
						$("#d2_s2").click(function() {
							$("#p1_s1").fadeToggle(500)
						})

						//table切换
						$("#one_s").click(function() {
							$("#one_s").css({
								"color": "#0081ff"
							})
							$("#four_s,#five_s,#six_s").css({
								"color": "#ff9d01"
							})
							$("#two_s").css({
								"display": "inline-block"
							})
							$("#three_s").css({
								"display": "inline-block"
							})
							$("#box_one").css({
								"display": "block"
							})
							$("#box_two,#box_three,#box_four,#box_five,#box_six").css({
								"display": "none"
							})
						})
						$("#two_s").click(function() {
							$("#one_s").css({
								"color": "#ff9d01"
							})
							$("#box_two").css({
								"display": "block"
							})
							$("#box_one,#box_three,#box_four,#box_five,#box_six").css({
								"display": "none"
							})
						})
						$("#three_s").click(function() {
							$("#one_s").css({
								"color": "#ff9d01"
							})
							$("#box_three").css({
								"display": "block"
							})
							$("#box_one,#box_two,#box_four,#box_five,#box_six").css({
								"display": "none"
							})
						})
						$("#four_s").click(function() {
							$("#four_s").css({
								"color": "#0081ff"
							})
							$("#one_s,#five_s,#six_s").css({
								"color": "#ff9d01"
							})
							$("#two_s").css({
								"display": "none"
							})
							$("#three_s").css({
								"display": "none"
							})
							$("#box_four").css({
								"display": "block"
							})
							$("#box_two,#box_three,#box_one,#box_five,#box_six").css({
								"display": "none"
							})
						})
						$("#five_s").click(function() {
							$("#five_s").css({
								"color": "#0081ff"
							})
							$("#one_s,#four_s,#six_s").css({
								"color": "#ff9d01"
							})
							$("#two_s").css({
								"display": "none"
							})
							$("#three_s").css({
								"display": "none"
							})
							$("#box_five").css({
								"display": "block"
							})
							$("#box_two,#box_three,#box_one,#box_four,#box_six").css({
								"display": "none"
							})
						})
						$("#six_s").click(function() {
							$("#six_s").css({
								"color": "#0081ff"
							})
							$("#one_s,#five_s,#four_s").css({
								"color": "#ff9d01"
							})
							$("#two_s").css({
								"display": "none"
							})
							$("#three_s").css({
								"display": "none"
							})
							$("#box_six").css({
								"display": "block"
							})
							$("#box_two,#box_three,#box_one,#box_five,#box_four").css({
								"display": "none"
							})
						})
					})










