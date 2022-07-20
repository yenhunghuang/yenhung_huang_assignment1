//question1

// Given array
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      Student_Name: "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      Student_Name: "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      Student_Name: "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      Student_Name: "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

//Implement the table

let studentInfo = "<table>";

studentInfo += "<tr>";
for (let i in tableInfo.tableHeader)
  studentInfo += "<td>" + tableInfo.tableHeader[i] + "</td>";
studentInfo += "</tr>";

for (let i in tableInfo.tableContent) {
  studentInfo += "<tr>";
  for (let j in tableInfo.tableContent[i]) {
    studentInfo += "<td>" + tableInfo.tableContent[i][j] + "</td>";
  }
  studentInfo += "</tr>";
}

studentInfo += "</table>";

document.getElementById("studentTable").innerHTML = studentInfo;

//question2
//Oderlist
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

let oderList = document.getElementById("oderList");

list.forEach((ele) => {
  let li = document.createElement("li");

  li.innerText = ele;

  oderList.appendChild(li);
});

//Unoderlist
let unoderList = document.getElementById("unoderList");

list.forEach((ele) => {
  let li = document.createElement("li");

  li.innerText = ele;

  unoderList.appendChild(li);
});

//question3
//List

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

let select = document.getElementById("select");

dropDownList.forEach((ele) => {
  let option = document.createElement("option");
  option.value = ele.value;
  option.text = ele.content;
  select.appendChild(option);
});
