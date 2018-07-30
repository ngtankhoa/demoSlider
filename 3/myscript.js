function openNav() {
    document.getElementById("mySidenav").style.width = "520px";
    document.getElementById("ninja-slider").style.marginLeft = "20px";
    setTimeout(closeNav,30000);
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("ninja-slider").style.marginLeft = "50px";
}

// function choose(){
//     var x = document.getElementsByClassName("choosen");
//     console.log(x);
//     for (var i = 0; i < x.length; i++) {
//         console.log(x[i]);
//         x[i].style.border = "1px solid black";
//         return false;
//     }
// }



