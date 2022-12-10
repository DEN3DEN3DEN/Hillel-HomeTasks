var half_day; 
const day_am = "image/time/day_am.gif";
const day_pm = "image/time/day_pm.gif";
const img = new Array("image/time/img0.gif", "image/time/img1.gif",
"image/time/img2.gif", "image/time/img3.gif", "image/time/img4.gif",
"image/time/img5.gif", "image/time/img6.gif", "image/time/img7.gif",
"image/time/img8.gif", "image/time/img9.gif");

function extract (type, hr, min, sec) {
    if (hr<=9) {
        document.getElementById("h10").src=img[0];
        document.getElementById("h1").src=img[hr]; }
    else {
        document.getElementById("h10").src=img[Math.floor(hr/10)];
        document.getElementById("h1").src=img[hr%10]; }
    if (min<=9) {
        document.getElementById("m10").src=img[0];
        document.getElementById("m1").src=img[min]; }
    else {
        document.getElementById("m10").src=img[Math.floor(min/10)];
        document.getElementById("m1").src=img[min%10]; }
    if (sec<=9) {
        document.getElementById("s10").src=img[0];
        document.getElementById("s1").src=img[sec]; }
    else {
        document.getElementById("s10").src=img[Math.floor(sec/10)];
        document.getElementById("s1").src=img[sec%10]; }
    if (half_day=="AM") document.getElementById("hday").src=day_am;
    else document.getElementById("hday").src=day_pm;
}

function show() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    half_day="AM";
        if ((hours>=12)&&(minutes>=1)||(hours>=13)) {
            half_day = "PM";
            hours -= 12;
        }
    if (hours==0) hours = 12;
    extract(half_day, hours, minutes, time.getSeconds());
    setTimeout("show()", 1000)
}
show();