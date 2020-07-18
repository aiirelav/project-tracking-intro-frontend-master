 var menu = document.querySelector('ul');
  var menuImg = document.getElementById('menu-image');
  var toggle = true;

  function showMenu(){
    if(toggle){
      menu.style.display = 'flex';
      menuImg.src = "images/icon-close.svg";
      toggle = false;
    }
    else {
      menu.style.display = 'none';
      menuImg.src = "images/icon-hamburger.svg";
      toggle = true;
    }
}