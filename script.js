
// // $(document).ready(function() {
// // $('#submit').on('click', function(event){
// //     $(this).html("button clicked");
// // })
// // })

var nameId=$("#name");
var emailId=$('#email');
var phoneId=$('#phone');
var message=$('#message')

var required = [nameId,emailId,phoneId];


$(document).ready(function() {
    $('#submit').on('click', function(){
    for (let i = 0; i < required.length; i++){
        if (required[i].val () == ""){
        message.html('Please Fill Out the Required Fields')
        required[i].prev().addClass('warning');
        message.addClass('warning')
        }
        if (required[i].val () !== ""){
        required[i].prev().removeClass('warning');
        }
        if (!$("label").hasClass("warning")) {
        $("#form").remove();
        $('h2').html('Thanks for your feedback!')
        }
        
    }
});
})
