window.addEventListener('message', function(event) {
    const {action, data} = event.data;
    if (action == 'show') {
        $("body").fadeOut(500);
        $("#title").text(data.title);
        $(".description").html(data.desc.replace(/\n/g, '<br>'));
        $("body").fadeIn(500);
        $(".wrap").animate({left: '-3%'}, "slow");
        $(".wrap").animate({left: '1%'}, "slow");
    } else if (action == 'hide') {
        $("body").fadeOut(500);
    }
});
