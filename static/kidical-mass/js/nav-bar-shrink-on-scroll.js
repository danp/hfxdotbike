//NOTE: needs to be called on both scroll and resize events to correctly set
//height of nav bar
window.onscroll=scrollFunction;
window.onresize=scrollFunction;

function scrollFunction() {

  var windowWidth=window.innerWidth;
  var navBarElement=document.getElementById("nav_bar");
  if(windowWidth>768){

    navBarElement.style.transition="ease-in-out height 1s";
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

      navBarElement.style.height = "120px";
    }
    else {

      navBarElement.style.height = "200px";
    }
  }
  else{
    navBarElement.style.transition="none";
    if(windowWidth<475){

      navBarElement.style.height = "230px";
    }
    else{

      navBarElement.style.height = "300px";
    }
  }
}
