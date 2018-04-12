$(function(){
    $('input[type=button]').each(function(){
        $(this).click(function(){
            $('.show_msg').show()
        })
    })
    $('.show_msg em').click(function(){
        $('.show_msg').hide()
    })
})