$('.tab').on('click', function() {
    $('.tab').removeClass('active-tab');
    $(this).addClass('active-tab');
    $('.tab span').text('+');
    $(this).find('span').text('-');
    $('.card').removeClass('active-card');
    let active = `#card-${$(this).attr('id')}`;
    $(active).addClass('active-card');
});
