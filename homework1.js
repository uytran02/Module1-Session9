//Ex1
// let physicGrade = +window.prompt("Nhập vào điểm môn vật lý");
// let chemistryGrade = +window.prompt("Nhập vào điểm môn hóa học");
// let biologyGrade = +window.prompt("Nhập vào điểm môn sinh học");
let physicGrade = parseFloat(prompt("Nhập vào điểm môn vật lý"));
let chemistryGrade = parseFloat(prompt("Nhập vào điểm môn hóa học"));
let biologyGrade = parseFloat(prompt("Nhập vào điểm môn sinh học"));

let sumGrade = physicGrade + chemistryGrade + biologyGrade;
let averageGrade = sumGrade / 3;
console.log("Tổng điểm 3 môn Lý, Hóa, Sinh của bạn là " + sumGrade);
console.log("Điểm trung bình 3 môn Lý, Hóa, Sinh của bạn là " + averageGrade);
//Ex2

let celsiusTemp = parseFloat(prompt("Mời nhập giá trị độ C"));
let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
console.log(
  "Giá trị độ C bạn nhập tương đương với " + fahrenheitTemp + " độ F"
);

//Ex3, Ex4
const PI = 3.14;
let circleRadius = parseFloat(prompt("Mời nhập bán kính hình tròn"));
let circleAcreage = circleRadius * circleRadius * PI;
let circlePerimeter = 2 * PI * circleRadius;
console.log("Diện tích hình tròn là " + circleAcreage + " đơn vị diện tích");
console.log("Chu vi hình tròn là " + circlePerimeter);
