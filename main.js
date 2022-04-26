function gettime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    
    document.getElementById('ora').innerHTML = h + ":" + m + ":" + s;
    setTimeout(gettime, 1000);
}
gettime()