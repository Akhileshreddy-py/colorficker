// Import stylesheets
import './style.css';


// Write Javascript code!
var obj=document.getElementById("cid");
obj.innerText="#123456";
var sobj=document.getElementById("cid");

var btn=document.getElementById("btn1");
function ck()
{

var r=Math.random()*1000000;
r=Math.floor(r);
sobj.innerText="#"+r;
  document.getElementById("bd").style.backgroundColor="#"+r;
}

//btn.addEventListener(onclick,ck);
btn.addEventListener("click",ck)