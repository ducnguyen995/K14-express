$.ajax({
  type: "GET",
  url: "/user",
})
  .then(function (data) {
    data.map(function (ele) {
      const friend = `
      <div class="friend">
        <h4>${ele.username}</h4>
      </div>
      `;

      $(".listFriend").append(friend);
    });
  })
  .catch(function (err) {
    console.log(err);
  });
