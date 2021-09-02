// bt6: Đổi chỗ

function transPosition(){
    var pos_1 = document.getElementById("inputPos1").value;
    var pos_2 = document.getElementById("inputPos2").value;

    if ((-1 < pos_1 && pos_1 < numArray.length) && (-1 < pos_2 && pos_2 < numArray.length)){
        //numArray[pos_1] = pos_1;
        //numArray[pos_2] = pos_2;
        var temp = numArray[pos_1];
        numArray[pos_1] = numArray[pos_2];
        numArray[pos_2] = temp;
        document.getElementById("txtResult6").innerHTML = numArray;
    } else {
        document.getElementById("txtResult6").innerHTML = "Nhập 2 vị trí nằm trong khoảng index của mảng";
    }
}
document.getElementById("btnArray6").onclick = transPosition;


//bt9: Đếm số nguyên

var numArrayAdd = [];
function addEleInt(){
    var numAdd = parseFloat(document.getElementById("inputInt").value);

    numArrayAdd.push(numAdd);
    document.getElementById("txtResult9_1").innerHTML = numArrayAdd;
}
document.getElementById("btnArray9_1").onclick = addEleInt;


function countInt(){
    var count = 0;
    for (var i = 0; i < numArrayAdd.length; i++){
        if (Number.isInteger(numArrayAdd[i])){
            count++;

        }
    }

    document.getElementById("txtResult9_2").innerHTML = "Số nguyên: " + count;

}
document.getElementById("btnArray9_2").onclick = countInt;

