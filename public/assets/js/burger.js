// I noticed the example in the homework README.md didn't include a folder for js and a file like how the cats example was done.  So just as a precautionary check, I decided to add one.  If it's not needed I will take note and disable it.

//**NOTE** I got all this from the cat example.

$(function() {
  $(".burger").on("click", function(event) 
  {
    var id = $(this).data("id");
    var burgerName = $(this).data("burger_name");

    var burger = {
      burger: burgerName
    };

    $.ajax("/api/burger/" + id, 
    {
      type: "PUT",
      data: burger
    }).then(
      function() 
      {
        console.log("changed sleep to", burgerName);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) 
  {
    event.preventDefault();

    var newBurger = {
      name: $("#").val().trim(),
      newName: $("[name=newName]:checked").val().trim()
    };

    $.ajax("/api/burger", 
    {
      type: "POST",
      data: newBurger
    }).then(
      function() 
      {
        console.log("created new burger");
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) 
  {
    var id = $(this).data("id");

    $.ajax("/api/burger/" + id, 
    {
      type: "DELETE"
    }).then(
      function() 
      {
        console.log("deleted burger", id);
        location.reload();
      }
    );
  });
});