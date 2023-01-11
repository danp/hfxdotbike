//NOTE: needs to be called on both scroll and resize events to correctly set
//height of nav bar
window.onscroll=scrollFunction;
window.onresize=scrollFunction;

var currentMode;

function scrollFunction(){
  //TODO: move these height/transition styles into a class in css and just set classes
  console.log("scrollFunction called");
  var windowWidth=window.innerWidth;
  if(windowWidth>=768){
    
    if(currentMode==="narrow" || currentMode==="undefined"){
      
      //NOTE: switching to wide mode, change menu/socials display
      var menuElement=document.getElementById("menu");
      menuElement.style.display="inline-block";
      var socialsElement=document.getElementById("socials");
      socialsElement.style.display="inline-block";
    }
    
    var navBarElement=document.getElementById("nav_bar");
    if (document.body.scrollTop > 50.0 || 
      document.documentElement.scrollTop > 50.0) {

      navBarElement.style.height = "120px";
    }
    else {

      navBarElement.style.height = "200px";
    }
    navBarElement.offsetHeight;//NOTE: this triggers the change in height to be 
      //applied avoiding the transition on the change in height when the 
      //transition is re-applied.
    navBarElement.style.transition="height 1s ease-in-out";
    currentMode="wide";
  }
  else{
    
    if(currentMode==="wide" || currentMode==="undefined"){
      
      //NOTE: switching to wide narrow mode, change menu/socials display
      var menuElement=document.getElementById("menu");
      menuElement.style.display="none";
      var socialsElement=document.getElementById("socials");
      socialsElement.style.display="block";
    }
    
    var navBarElement=document.getElementById("nav_bar");
    navBarElement.style.transition="none";
    navBarElement.style.height = "auto";
    if(windowWidth>=475){
      
      //navBarElement.style.height = "auto";
    }
    else{
      
      //navBarElement.style.height = "230px";
    }
    currentMode="narrow";
  }
}
function expandMobileMenu(){
  
  var menuElement=document.getElementById("menu");
  console.log("menuElement.style.display="+menuElement.style.display);
  
  if(menuElement.style.display==="block"){
    
    menuElement.style.display="none";
  }
  else{
    
    menuElement.style.display="block";
  }
}
