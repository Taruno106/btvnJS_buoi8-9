//bt4: Tìm số dương nhỏ nhất

function timSoDuongNhoNhat() {
    var numArrayPos = [];
    var numPos = 0;

    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            numArrayPos.push(numArray[i]);
            numPos = numArray[i];
        }
        // console.log(numArrayPos);
    }
    if (numPos > 0) {
        var minPositive = numArrayPos[0];
        for (var j = 1; j < numArrayPos.length; j++) {
            if (minPositive > numArrayPos[j]) {
                minPositive = numArrayPos[j];
            }
        }
        document.getElementById("txtResult4").innerHTML = "Số dương nhỏ nhất: " + minPositive;
    } else {
        document.getElementById("txtResult4").innerHTML = "Mảng không có số dương";
    }

}
document.getElementById("btnArray4").onclick = timSoDuongNhoNhat;

//bt5: Tìm số chẵn cuối cùng
function timSoChanCuoiCung() {
    var evenLast;

    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 == 0) {
            evenLast = numArray[i];
        }
    }
    if (evenLast % 2 == 0) {
        document.getElementById("txtResult5").innerHTML = "Số chẵn cuối cùng: " + evenLast;
    } else {
        document.getElementById("txtResult5").innerHTML = "Mảng không có số chẵn";
    }
}
document.getElementById("btnArray5").onclick = timSoChanCuoiCung;

//bt7: Sắp xếp tăng dan
function sapXepTang(){
    for (var i = 0; i < numArray.length; i++){
        for (var j = 0; j < numArray.length - 1; j++){
            if (numArray[j] > numArray[j+1]){
                var temp = numArray[j];
                numArray[j] = numArray[j+1];
                numArray[j+1] = temp;
            }
        }
    }
    document.getElementById("txtResult7").innerHTML = "Thứ tự tăng: " + numArray;
}
document.getElementById("btnArray7").onclick = sapXepTang;

