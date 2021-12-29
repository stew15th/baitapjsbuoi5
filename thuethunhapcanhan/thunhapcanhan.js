function thuthue() {
    var thunhap = document.getElementById("thunhap").value * 1;
    var nguoiphuthuoc = document.getElementById("nguoiphuthuoc").value * 1;
    var thuesuat;
    if (thunhap <= 60) {
        thuesuat = 0.05;
        thunhapchiuthue = thunhap - 4 - nguoiphuthuoc * 1.6;
        result = thunhapchiuthue * thuesuat;
    } else if (thunhap > 60 && thunhap <= 120) {
        thuesuat = 0.1;
        thunhapchiuthue = thunhap - 4 - nguoiphuthuoc * 1.6;
        result = thunhapchiuthue * thuesuat;
    } else if (thunhap > 120 && thunhap <= 210) {
        thuesuat = 0.15;
        thunhapchiuthue = thunhap - 4 - nguoiphuthuoc * 1.6;
        result = thunhapchiuthue * thuesuat;
    } else if (thunhap > 210 && thunhap <= 384) {
        thuesuat = 0.2;
        thunhapchiuthue = thunhap - 4 - nguoiphuthuoc * 1.6;
        result = thunhapchiuthue * thuesuat;
    } else if (thunhap > 384 && thunhap <= 624) {
        thuesuat = 0.25;
        thunhapchiuthue = thunhap - 4 - nguoiphuthuoc * 1.6;
        result = thunhapchiuthue * thuesuat;
    } else if (thunhap > 624 && thunhap <= 960) {
        thuesuat = 0.3;
        thunhapchiuthue = thunhap - 4 - nguoiphuthuoc * 1.6;
        result = thunhapchiuthue * thuesuat;
    } else {
        thuesuat = 0.35;
        thunhapchiuthue = thunhap - 4 - nguoiphuthuoc * 1.6;
        result = thunhapchiuthue * thuesuat;
    }
    sum.innerText =
        "Tổng thuế thu nhập cá nhân của bạn phải nộp là: " +
        Math.round(result * 1000) / 1000 +
        "triệu ";
}
