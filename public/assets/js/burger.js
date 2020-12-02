$(() => {
  $(".create-burger").on("submit", (e) => {
    e.preventDefault();

    let createdBurger = {
      name: $("#burger").val().trim(),
    };

    $.post("/api/burgers", createdBurger, () => {
      location.reload();
    });
  });
  $(".devour-it").on("click", () => {
    let uniqueId = $(this).data("id");
    let newDataObj = {
      deleted: true,
    };

    $.ajax("/api/burgers/" + uniqueId, {
      type: "PUT",
      data: newDataObj,
    }).then(() => {
      location.reload();
    });
  });
});
