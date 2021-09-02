//Thêm phần tử vào mảng

var numArray = [];
function addELE(){
    var num = parseFloat(document.getElementById("inputArray").value);

    numArray.push(num);
    // console.log(numArray);
    document.getElementById("txtResult").innerHTML = numArray;
}
document.getElementById("btnArray").onclick = addELE;








