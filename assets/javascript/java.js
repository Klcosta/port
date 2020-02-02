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
    name = $("#name").val();
    email = $("#email").val();
    message = $("#message").val();

    console.log(name, email, message)

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
    $("#contactform").html("<div class='col-12 rounded font green pl-4 py-3 rounded bg-white greenborder1'> Dear " + name + ", <br><br>Thank you for reaching out. I greatly appreciate your interest in my work and services. I will get back in touch with you at " + email + " as soon as possible.<br><br> Sincerely, Keith Costa</div>")

    $("#contactform").addClass("p-3")

})

$("#submitEs").on("click", function () {
    //Pull info and store in variables
    name = $("#name").val();
    email = $("#email").val();
    message = $("#message").val();

    console.log(name, email, message)

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
    $("#contactform").html("<div class='col-12 border-0 rounded font green pl-4 py-3 rounded bg-white'> Estimado " + name + ", <br><br>Gracias por ponerte en contacto conmigo. Aprecio su interes en mi trabajo y servicios. Le mandare un mensage a " + email + " lo antes possible.<br><br> Sinceramente, Keith Costa</div>")

    $("#contactform").addClass("p-3")

})

//NAVBAR SCROLL


$(window).scroll(function () {
    $("#navbar").toggleClass("scroll", $(this).scrollTop() > 10);
    $(".dropdown").toggleClass("scroll", $(this).scrollTop() > 10);
    // $("#navbar").removeClass("scroll" , $(this).scrollTop() = 0.5);
    $(".logo").toggleClass("scrollImg", $(this).scrollTop() > 10);
    $("#testdiv").toggleClass("test1", $(this).scrollTop() > 10);
})

//WHITE DROP DOWN MENU
$("#white").on("click", (event) => {
    if ($(window).scrollTop() === 0){

        $("#navbar").toggleClass("scroll")
        $(".dropdown").toggleClass("scroll")

    }
})

//CHANGE BACKGROUND ON HOVER

$("#graphicDesignButton")
    .mouseover(function(){
            $("#mainBgImage2").attr("src" , "assets/images/graphicdesignbg.jpg")
            $("#mainBgImage2").fadeIn("slow")
            $("#testbox").addClass("whitebackground")
        }
    )
    .mouseout(function(){
            $("#mainBgImage2").fadeOut("slow")
            $("#testbox").removeClass("whitebackground")
    })

$("#webDevelopmentButton")
    .mouseover(
        function(){
            $("#mainBgImage2").attr("src" , "assets/images/webdevelopementbg.jpg")
            $("#mainBgImage2").fadeIn("slow")
            $("#testbox").addClass("whitebackground")
        }
    )
    .mouseout(function(){
            $("#mainBgImage2").fadeOut("slow")
            $("#testbox").removeClass("whitebackground")
    })

//SLIDER//

let reviews=["Keith has been an absolute pleasure to work with. He is very respectful of my ideas and wants to make sure that he works hard to bring my vision to life. Keith is extremely patient and talented. Anyone would be lucky to select Keith for a project. Thank you for everything you have done for me!" , "Working with Keith has been nothing but amazing!! He's always there, catches to things very quickly and had 100% of this work done in time. I will definitely recommend him. Quality of work was A+. No complaints, just great work, great communication!! Thank you Keith!", "Keith is a very passionate designer who strives to complete the design task with utmost diligence and quality exceeding expectations. He certainly proved to be a very reliable, dependable and resourceful designer - I plan to continue working with him on many projects I have in my roadmap. Thanks Keith - You are awesome!"]

let reviewses=["Ha sido un placer trabajar con Keith. Es muy respetuoso con mis ideas y quiere asegurarse de que trabaja duro para hacer realidad mi visión. Keith es extremadamente paciente y talentoso. Cualquier persona seria afortunado de seleccionar a Keith para un proyecto. ¡Gracias por todo lo que has hecho por mí! - (traducido del inglés)" , "¡Trabajar con Keith ha sido increíble! Siempre está allí, se da cuenta de las cosas muy rápidamente y tiene el 100% de este trabajo realizado a tiempo. Definitivamente recomendable. La calidad del trabajo fue sobresaliente. ¡No tengo quejas, solo buen trabajo y excelente comunicación! ¡Gracias Keith! - (traducido del inglés)" , "Keith es un diseñador muy apasionado que se esfuerza por completar cada proyecto con la mayor diligencia y una calidad que supera las expectativas. Ciertamente demostró ser un diseñador de confianza e ingenioso. Planeo continuar trabajando con él en muchos proyectos que tengo en mi hoja de ruta. Gracias Keith - ¡Eres increíble! - (traducido del inglés)"]

let reviewers=["Nate Holmes" , "Ari Berman" , "Bharat Kumar"]
let organization = ["Secured Tech Solutions" ,  "UpWork Customer" , "EdNexus"]
let organizationes = ["Secured Tech Solutions" ,  "Cliente de UpWork" , "EdNexus"]

let count = 0;

function displayReview() {
    $("#reviews").html("<div class='text-center'>"  + reviews[count] + "</div><br> <div class='text-center'>" + reviewers[count] + "</div><div class='text-center'>" +organization[count] + "</div>");
    nextImage()
}

function displayReviewes() {
    $("#reviewses").html("<div class='text-center'>"  + reviewses[count] + "</div><br> <div class='text-center'>" + reviewers[count] + "</div><div class='text-center'>" +organizationes[count] + "</div>");
    nextImage()
}

function nextImage() {
    t = setTimeout(displayReview, 15000);
    if (count === 2) {
        count = 0;
    }
    else{count ++}
}

function rightArrow() {
    clearTimeout(t);
    displayReview()
    displayReviewes();
}

function leftArrow() {
    clearTimeout(t);
    if (count === 2){
        count = 0
    }
    else{
    count ++;
    }

    displayReview()
}

function leftArrowEs() {
    clearTimeout(t);
    if (count === 2){
        count = 0
    }
    else{
    count ++;
    }

    displayReviewes()
}

// This will run the display image function as soon as the page loads.
$("#rightArrow").click(rightArrow)
$("#leftArrow").click(leftArrow)
$("#leftArrowEs").click(leftArrowEs)

displayReview();
displayReviewes();

//Git Hub Button Hover Effect//

$("#gitHubIcon")
    .mouseover(
        function(){
            $("#gitHubIcon").attr("src" , "../../assets/images/GitHub-Mark-Light-120px-plusv2hover.png")
        }
    )
    .mouseout(function(){
            $("#gitHubIcon").attr("src" , "../../assets/images/GitHub-Mark-Light-120px-plusv2.png")
    })
