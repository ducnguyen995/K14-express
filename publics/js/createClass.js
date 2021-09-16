async function createClass() {
  const form = document.querySelector("form");
  const formData = new FormData(form);
  const res = await $.ajax({
    url: "/class",
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
  });
  console.log(11, res.newClass);

  let div = `
  <img src='${res.newClass.thumbnail}'>
  <div>${res.newClass.className}</div>
  `;
  $(".classList").html(div);
}
