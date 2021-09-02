// bt1: Tính tổng số dương 

function tongSoDuong(){
    var sum = 0;

    for (var i = 0; i < numArray.length ; i++){
        if (numArray[i] > 0){
            sum += numArray[i];
        }
    }
    document.getElementById("txtResult1").innerHTML = "Tổng: " + sum;
}
document.getElementById("btnArray1").onclick = tongSoDuong;

//bt2: Đếm số dương

function demSoDuong(){
    var count = 0;

    for (var i = 0; i < numArray.length ; i++){
        if (numArray[i] > 0){
            count += 1;
        }
    }
    document.getElementById("txtResult2").innerHTML = "Số dương: " + count;
}
document.getElementById("btnArray2").onclick = demSoDuong;

        
// bt3: Tìm số nhỏ nhất
function numMin(){
    var min = numArray[0];

    for (var i = 1; i < numArray.length ; i++){
        if (min > numArray[i]){
            min = numArray[i];
        }
    }
    document.getElementById("txtResult3").innerHTML = "Số nhỏ nhất: " + min;   
}                                               
document.getElementById("btnArray3").onclick = numMin;









