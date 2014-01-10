 function qiehuan(num){
  for(var id = 0;id<=7;id++)
  {
   if(id==num)
   {
    document.getElementById("qh_con"+id).style.display="block";
    document.getElementById("mynav"+id).className="nav_on";
   }
   else
   {
    document.getElementById("qh_con"+id).style.display="none";
    document.getElementById("mynav"+id).className="";
   }
  }
 }
 var chinazTopBarMenu = {
create: function (target, menucontents) {
if (!document.getElementById(menucontents)) {
    return;
}
var contents_wrap = document.getElementById(menucontents);
var contents = contents_wrap.innerHTML;
target.className += " hover";
var dropdownmenu_wrap = document.createElement("div");
dropdownmenu_wrap.className = "dropdownmenu-wrap";
var dropdownmenu = document.createElement("div");
dropdownmenu.className = "dropdownmenu";
dropdownmenu.style.width = "auto";
var dropdownmenu_inner = document.createElement("div");
dropdownmenu_inner.className = "dropdownmenu-inner";
dropdownmenu_wrap.appendChild(dropdownmenu);
dropdownmenu.appendChild(dropdownmenu_inner);
dropdownmenu_inner.innerHTML = contents;
if (target.getElementsByTagName("div").length == 0) {
    target.appendChild(dropdownmenu_wrap);
}
},
clear: function (target) {
target.className = target.className.replace(" hover", "");
}
}