const obj = {
  academyName: "그린컴퓨터아트학원",
  location: "둔산점",
  address: "대전광역시 서구 대덕대로 182 오라클빌딩 3층",
  telNumber: "042-476-2111",
  classroomNumber: 305,
  lectureName: "it's different",
  studentList: [
    "김우진",
    "김현",
    "방승희",
    "변호녕",
    "소사무엘",
    "송영준",
    "신동현",
    "오승민",
    "유승민",
    "윤준현",
    "이민구",
    "이유안",
    "이은정",
    "정영식",
    "최성민",
    "최은철",
    "홍문기"
  ]
};

for(i = 0; i < obj.studentList.length; i++) {
  if(obj.studentList[i] === "이민구") {
    console.log(`이민구는 ${i + 1}번에 있습니다.`);
  }
}
console.log(obj.address);
