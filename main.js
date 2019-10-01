$("#send").on("click", function () {
    var data = $("#msg").val()
    if(data==="gago"){
        $("#messages").append(`<p>****</p>`)
    }else{
        $("#messages").append(`<p>${data}</p>`)
    }
})