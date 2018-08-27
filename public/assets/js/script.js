$("#submit").on("click", function (event) {
    event.preventDefault();
    var newBurger = {
        //id: 0,
        name: $("#name").val().trim(),
        //ready: true
        
    }
    $.post("/new", newBurger)
        .done(function (data) {
            location.reload();
        })
         
})

$(document).on("click", '#devour', function (event){
    event.preventDefault();
   var burgerId = $(this).attr("data-id")
    $.ajax({
        url: "/devour/"+ burgerId, 
        method: "PUT"
    }).then(function (results){
        location.reload();
    })


})