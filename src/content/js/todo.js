//check off todo by click
$(document).on('click', 'li', function(){
    $(this).toggleClass("completed");
})

$(document).on('click',"span", function(event){
    $(this).parent().fadeOut(600, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type=text]").keypress(function(event){
    if(event.which === 13){
        var todo = $(this).val();
        $(this).val("");
        $("ul").append(generateToDo(todo));
    }
})

function generateToDo(val){
    return "<li><span><i class='fa fa-trash'></i></span>  " + val + "</li>";
}