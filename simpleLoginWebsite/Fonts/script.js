
var bar = document.getElementById("Bar2");
var login = document.getElementById("login");
var img = document.getElementById("stock-img");
var mainLogin = document.getElementById("main-login");

window.onload = function()
{
  setTimeout(function()
  {
    bar.style.opacity = 0;
    bar.style.visibility = "hidden";
  }, 1000);
  bar.style.paddingLeft = "100%";

  setTimeout(function()
  {
    login.style.opacity = 1;
    mainLogin.style.top = "50%";
    img.style.top = "50%";
  }, 2000);


}
