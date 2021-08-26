function render() {
  $(".listFriend").html("");

  $.ajax({
    type: "GET",
    url: "/user",
  })
    .then(function (data) {
      data.map(function (ele) {
        const friend = `
        <div class="friend">
          <h4>${ele.username} <button onclick='changePass("${ele._id}")'>doi mat khau</button></h4>
          
        </div>
        `;

        $(".listFriend").append(friend);
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}

function logon() {
  let username = $("#username").val();
  let password = $("#password").val();
  let age = $("#age").val();
  $.ajax({
    url: "/user/",
    type: "POST",
    data: { username: username, password: password, age: age },
  })
    .then(function (data) {
      render();
    })
    .catch(function (err) {
      console.log(err);
    });
}

function changePass(id) {
  $(".changePass").css("display", "block");
  $(".btnChange").attr("onclick", `changePassword("${id}")`);
}

function changePassword(id) {
  const username = $(".username").val();
  const password = $(".password").val();
  const newPass = $(".newPass").val();
  const confirm = $(".confirm").val();
  $.ajax({
    url: "/user/" + id,
    type: "PUT",
    data: { username, password, newPass },
  })
    .then(function (data) {
      render();
    })
    .catch(function (err) {
      console.log(err);
    });
}
render();
