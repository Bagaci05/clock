function gettime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    
    document.getElementById('ora').innerHTML = h + ":" + m + ":" + s;
    setTimeout(gettime, 1000);
}
gettime()