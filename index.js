// Import stylesheets
import './style.css';

// Write Javascript code!
var obj=document.getElementById("cid");
obj.innerText="#123456";

var btn=document.getElementById("btn1");
function ck()
{
  btn.innerText="wow man";
  document.getElementById("bd").style.backgroundColor="#12f456";
}
btn.addEventListener(onclick,ck);
