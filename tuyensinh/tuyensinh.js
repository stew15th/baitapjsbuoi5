var tinhdiemel = document.getElementById("tinhdiem");
var ttkhuvuc;
var ttdoituong;
tinhdiemel.addEventListener("click", function () {
    var diem1 = document.getElementById("diem1").value * 1;
    var diem2 = document.getElementById("diem2").value * 1;
    var diem3 = document.getElementById("diem3").value * 1;
    var diemchuan = document.getElementById("diemchuan").value * 1;
    var khuvuc = document.getElementById("khuvuc").value;
    var doituong = document.getElementById("doituong").value * 1;
    if (khuvuc == "A") {
        ttkhuvuc = 2;
    } else if (khuvuc == "B") {
        ttkhuvuc = 1;
    } else if (khuvuc == "C") {
        ttkhuvuc = 0.5;
    } else {
        ttkhuvuc = 0;
    }

    if (doituong == 1) {
        ttdoituong = 2.5;
    } else if (doituong == 2) {
        ttdoituong = 1.5;
    } else if (doituong == 3) {
        ttdoituong = 1;
    } else {
        ttdoituong = 0;
    }
    result = ttdoituong + ttkhuvuc + diem1 + diem2 + diem3;

    if (result < diemchuan) {
        sum.innerText = "Thí sinh không trúng tuyển, với số điểm là: " + result;
    } else {
        sum.innerText = "Thí sinh đã trúng tuyển với số điểm: " + result;
    }
});
