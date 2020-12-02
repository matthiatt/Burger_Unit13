// $(() => {
//   $(".create-burger").on("submit", (e) => {
//     e.preventDefault();

//     let createdBurger = {
//       name: $("#burger").val().trim(),
//     };

//     $.post("/api/burgers", createdBurger, () => {
//       location.reload();
//     });
//   });
//   $(".devour-it").on("click", () => {
//     let uniqueId = $(this).data("id");
//     let newDataObj = {
//       deleted: true,
//     };

//     $.ajax("/api/burgers/" + uniqueId, {
//       type: "PUT",
//       data: newDataObj,
//     }).then(() => {
//       location.reload();
//     });
//   });
// });

// Took from the cats example from class.

$(() => {
  $(".change-devour").on("click", () => {
    var id = $(this).data("id");

    var newState = {
      devoured: true,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState,
    }).then(() => {
      location.reload();
    });
  });

  $(".create-form").on("submit", (e) => {
    e.preventDefault();

    var name = $("[name=burger-name]").val().trim();

    if (name !== "") {
      var newBurger = {
        name: name,
      };

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(() => {
        location.reload();
      });
    } else {
      $("[name=burger-name]").val("");
    }
  });

  $(".delete-burger").on("delete", () => {
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(() => {
      location.reload();
    });
  });
});
