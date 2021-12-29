document.getElementById("khselect").addEventListener("change", function () {
    document.getElementById("ketnoi").style.display =
        this.value == "Doanh nghiệp" ? "" : "none";
});
function tinhtiencap() {
    var khselect = document.getElementById("khselect");
    var khselectvalue = khselect[khselect.selectedIndex].value;
    var soketnoi = document.getElementById("soketnoi").value * 1;
    var sokenhcaocap = document.getElementById("sokenhcaocap").value * 1;
    var tongtien;

    var sum = document.getElementById("sum");
    if (khselectvalue == "Doanh nghiệp") {
        if (soketnoi <= 10) {
            tongtien = 15 + 75 + sokenhcaocap * 50;
        } else {
            tongtien = 15 + 75 + (soketnoi - 10) * 5 + sokenhcaocap * 50;
        }
    } else if (khselectvalue == "Nhà dân") {
        tongtien = 4.5 + 20.5 + sokenhcaocap * 7.5;
    }

    sum.innerText = "Tiền cáp tháng này là: " + tongtien + " $";
}
