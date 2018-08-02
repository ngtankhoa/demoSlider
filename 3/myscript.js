function openNav() {
    setTimeout(closeNav, 30000);
    document.getElementById("mySidenav").style.width = "520px";
    document.getElementsByClassName("row")[0].style.marginRight = "15%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByClassName("row")[0].style.marginRight = "0%";
}





