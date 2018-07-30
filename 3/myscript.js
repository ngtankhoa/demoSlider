function openNav() {
    document.getElementById("mySidenav").style.width = "520px";
    document.getElementById("ninja-slider").style.marginLeft = "20px";
    // setTimeout(closeNav,3000);
    // clearTimeout(openNav);
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("ninja-slider").style.marginLeft = "50px";
}

function choose(){
    var x = document.getElementsByClassName("choosen");
    for (var i = 0; i < x.length; i++) {
        x[i].style.border = "1px solid black";

    }
}



