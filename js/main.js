function addFunction() {
  var name = document.getElementById("nameText").value;
  var course = document.getElementById("courseText").value;
  var idNum = document.getElementById("idText").value;
  var table = document.getElementById("userTable");
  var rowLength = table.rowLength;
  if (name != "" || course != "" || idNum != "") {
    var row = table.insertRow(rowLength);
    var cellName = row.insertCell(0);
    var cellCourse = row.insertCell(1);
    var cellId = row.insertCell(2);
    cellName.innerHTML = name;
    cellCourse.innerHTML = course;
    cellId.innerHTML = idNum;

    alert("Thank you for registering, " + name + "!");
  } else {
    alert("Please enter all necessary information.");
  }
}
function deleteRows() {
  var rowCount = userTable.rows.length;
  var r = confirm("Delete all data?");
  if (r == true) {
    for (var i = rowCount - 1; i > 0; i--) {
      userTable.deleteRow(i);
    }
  }
}
function undoEntry() {
  var rowCount = userTable.rows.length;

  if (rowCount >= 2) {
    userTable.deleteRow(rowCount - 1);
  }
}
// should make an import to excel button soon
