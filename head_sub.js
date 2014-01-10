
  $('#head_sub ul li').click(function(){
	  //perform the actions when it's not selected
    if (!$(this).hasClass('selected')) {    
	    //remove the selected class from all LI    
	    $('#head_sub ul li').removeClass('selected2');
	    //Reassign the LI
	    $(this).addClass('selected2');
		if ($(this).attr("id")){
		//alert($(this).attr("id"));
		loadFile=$(this).attr("id")+"?r="+Math.random();
		//alert(loadFile);
		$("#subContent").load(loadFile);
		}
	
		}
	else{
	    alert("already have selected");
	}
})	;
