var bac1 = 500;
var bac2 = 650;
var bac3 = 850;
var bac4 = 1100;
var bac5 = 1300;
var tiendien;
function tinhtiendien() {
    var sokw = document.getElementById("sokw").value * 1;
    if (sokw < 0) {
        alert("Mời nhập lại, nhập số >0");
    } else if (sokw <= 50) {
        //bac1
        tiendien = sokw * bac1;
        sum.innerText = "Tiền điện tháng này là: " + tiendien;
    } else if (sokw > 50 && sokw <= 100) {
        //bac2
        tiendien = 50 * bac1 + (sokw - 50) * bac2;
        sum.innerText = "Tiền điện tháng này là: " + tiendien;
    } else if (sokw > 100 && sokw <= 200) {
        //bac3
        tiendien = 50 * bac1 + 50 * bac2 + (sokw - 100) * bac3;
        sum.innerText = "Tiền điện tháng này là: " + tiendien;
    } else if (sokw > 200 && sokw <= 350) {
        //bac4
        tiendien = 50 * bac1 + 50 * bac2 + 100 * bac3 + (sokw - 200) * bac4;
        sum.innerText = "Tiền điện tháng này là: " + tiendien;
    } else if (sokw > 350) {
        //bac5
        tiendien =
            50 * bac1 +
            50 * bac2 +
            100 * bac3 +
            150 * bac4 +
            (sokw - 350) * bac5;
        sum.innerText = "Tiền điện tháng này là: " + tiendien;
    }
}
