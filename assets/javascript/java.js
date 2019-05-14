//SUBMIT BUTTON FUNCTIONALITY [TEMPORARY TO FIREBBASE]
//Connect to database
var config = {
    apiKey: "AIzaSyBKJn62wb2EiHuWZMwe8HMyhI4iXyXmAUE",
    authDomain: "portfolio-2894d.firebaseapp.com",
    databaseURL: "https://portfolio-2894d.firebaseio.com",
    projectId: "portfolio-2894d",
    storageBucket: "portfolio-2894d.appspot.com",
    messagingSenderId: "429695162437"
  };
  firebase.initializeApp(config)
  var database = firebase.database();

//Necessary variables
var name = ""
var email = ""
var message = ""

$("#submit").on("click", function () {
    //Pull info and store in variables
    name =  $("#name").val();
    email =  $("#email").val();
    message = $("#message").val();

    console.log (name, email, message)

    //Push up to database
    database.ref().push({
        name: name,
        email: email,
        message: message,
    })

    //Empty Conact & submit button
    $('#contactform').empty();
    $("#submitrow").empty();

    //Fill Contact with Thanks Message
    $("#contactform").html("<div class='col-12 border-0 rounded font green pl-4 py-3 rounded bg-white'> Dear " + name + ", <br><br>Thank you for reaching out. I greatly appreciate your interest in my work and services. I will get back in touch with you at " + email+ " as soon as possible.<br><br> Sincerely, Keith Costa</div>")

    $("#contactform").addClass("p-3")

})

$("#submitEs").on("click", function () {
    //Pull info and store in variables
    name =  $("#name").val();
    email =  $("#email").val();
    message = $("#message").val();

    console.log (name, email, message)

    //Push up to database
    database.ref().push({
        name: name,
        email: email,
        message: message,
    })

    //Empty Conact & submit button
    $('#contactform').empty();
    $("#submitrow").empty();

    //Fill Contact with Thanks Message
    $("#contactform").html("<div class='col-12 border-0 rounded font green pl-4 py-3 rounded bg-white'> Estimado " + name + ", <br><br>Gracias por ponerte en contacto conmigo. Aprecio su interes en mi trabajo y servicios. Le mandare un mensage a " + email+ " lo antes possible.<br><br> Sinceramente, Keith Costa</div>")

    $("#contactform").addClass("p-3")

})
//NAVBAR SCROLL

$(window).scroll(function(){
    $("#navbar").toggleClass("scroll" , $(this).scrollTop()> 10);
    $(".dropdown").toggleClass("scroll" , $(this).scrollTop()>10);
    // $("#navbar").removeClass("scroll" , $(this).scrollTop() = 0.5);
    $(".logo").toggleClass("scrollImg" , $(this).scrollTop()> 10); 
    $("#testdiv").toggleClass("test1", $(this).scrollTop()> 10);
})

//WHITE DROP DOWN MENU

$("#white").on("click", (event) => {
    $("#navbar").toggleClass("scroll") 
    $(".dropdown").toggleClass("scroll")
})

//SPANISH TO ENGLISH TRANSLATE

// $(window).scroll(function(){
//     $("#english").attr("href","index.html#whatido").$(this).scrollTop(800)
// })