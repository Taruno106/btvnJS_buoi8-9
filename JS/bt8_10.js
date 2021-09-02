// bt8: Tìm số nguyên tố đầu tiên

function timSoNT() {
    var numPrime;
    for (var i = 0; i < numArray.length; i++) {
        var count = 0;//biến đếm số ước
        for (var j = 2; j <= Math.sqrt(numArray[i]); j++) {
            if (numArray[i] % j == 0) {
                count++;
            }
        }
        if (count == 0 && numArray[i] > 1) {
            numPrime = numArray[i];
            document.getElementById("txtResult8").innerHTML = "Số nguyên tố đầu tiên: " + numPrime;
            break;
        } else {
            document.getElementById("txtResult8").innerHTML = "Mảng không có số nguyên tố";
        }
    }
}
document.getElementById("btnArray8").addEventListener("click",timSoNT);



// bt10: So sánh số lượng số âm và dương
function soSanh(){

    var soAm = 0, soDuong = 0;
    for (var i = 0; i < numArray.length; i++){
        if (numArray[i] > 0){
            soDuong++;
        } else if (numArray[i] < 0){
            soAm++;
        } else {
            console.log("Mảng rỗng hoặc chứa phần tử 0");
        }
    }
    var content = "";
    if (soDuong > soAm){
        content += "Số dương > số âm";
    } else if (soDuong < soAm){
        content += "Số âm > số dương";
    } else {
        content += "Số dương = số âm";
    }
    document.getElementById("txtResult10").innerHTML = content;
}
document.getElementById("btnArray10").onclick = soSanh;







