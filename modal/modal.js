$(document).ready(() => {

    // let myDiv = $('.div2').html()
    // alert(myDiv)


        $(".mybtn").click(function () {
    
            // $(".mymodal").css("display", "block");
            $(".div2").show();
        });
    
        $("#close").click(() => {
    
            // $(".mymodal").css("display", "none");
            $(".div2").hide();
        });
    

})