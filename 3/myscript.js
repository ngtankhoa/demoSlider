function openNav() {
    document.getElementById("mySidenav").style.width = "520px";
    document.getElementById("ninja-slider").style.marginLeft = "20px";
    document.getElementById("thumbnail-slider").style.marginLeft = "-60px";
    document.getElementsByClassName("changeLanguage").style.marginLeft = "-60px";
    setTimeout(closeNav,30000);
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("ninja-slider").style.marginLeft = "75px";
    document.getElementById("thumbnail-slider").style.marginLeft = "-25px";
    document.getElementsByClassName("changeLanguage").style.marginLeft = "-25px";
}





