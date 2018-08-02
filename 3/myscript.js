function openNav() {
    setTimeout(closeNav, 30000);
    document.getElementById("mySidenav").style.width = "520px";
    document.getElementsByClassName("col-md-10").style.marginRight = "520px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("ninja-slider").style.marginLeft = "75px";
}





