function AlertBox(message, title, func, message_without_buttons){
	//console.log(message_without_buttons);
	if (typeof message_without_buttons == 'undefined' || message_without_buttons != 1 )
	{
		buttons = {
			OK: function(){
				if (typeof func == 'function'){
					func();
				}
				$( this ).dialog( "close" );
				$( this ).remove();
				return false;
			}
		};
	}
	else
	{
		buttons = {};
	}
	if (title){
		box_title =title;
	}else{
		box_title = 'Alert';
	}

	$('<div id="RemoveConfirmation"><div class="message"><p style="font-weight:bold; text-align:center;color:#000"><BR>'+ message  +'</p></div></div>').dialog({
	        modal: true,
	        resizable: false,
            dialogClass:'infobox',
	        minHeight: 100,
	        minWidth: 400,
	        buttons: buttons,
	        title: box_title
	 });
}

//  show an alert message on a element
//  need a <div id="formcheckdiv"> </div> on the page where call this function; and an id as parameter
//  call :   showAlertOnItem("username","can not blank")
//  see registerajax.ctp for an example

    
function showAlertOnItem(item,message){
    item = "#" + item;
    style =  "left:" +  $(item).offset().left  + "px;";
    style += "top:" + ($(item).offset().top-26)  + "px;";
    style += "position:absolute;";
    style += "color:red;background-color:white;";
    style += "padding:3px;";
    style += "border: solid 1px green;";
    $("#formcheckdiv").html(" <div style='" + style + "'>" +  "<img width='16' height='16' src='/js/tanhao.jpg'><b>"   + message +    "</b></div> ");  
    $(item).focus();	
}

function deleteAlertOnItem(item,message){
    $("#formcheckdiv").html("");   
}

