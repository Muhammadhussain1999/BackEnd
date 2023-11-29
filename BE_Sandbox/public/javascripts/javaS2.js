function sendRequest() {
  console.log("working");

  let saadId = document.getElementById("saad");
  saadId.innerHTML = `Hello to <%=username%>`;
  saadId.style.fontFamily = "Young Serif, serif";
}
