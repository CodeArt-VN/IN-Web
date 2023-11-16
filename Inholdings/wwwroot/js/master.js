$(document).ready(function () {
    uri = window.location.pathname;
    init();
    hightLightActiveLink();
    $('.parent-item').click(function () {
        if ($(this).attr('data-togged') == 'false' || $(this).attr('data-togged') == undefined) {
            $(this).find('.header--sub__menu').css('display','contents');
            $(this).attr('data-togged', 'true');
            $(this).find('p').eq(0).find('i').remove();
            $(this).find('p').eq(0).append("<i class='fa fa-angle-down' aria-hidden='true'></i>")
        }
        else {
            $(this).attr('data-togged', 'false');
            $(this).find('.header--sub__menu').hide();
            $(this).find('p').eq(0).find('i').remove();
            $(this).find('p').eq(0).append("<i class='fa fa-angle-right' aria-hidden='true'></i>")
        }
    })
});
function init(){
    var screenWidth = screen.width;
    if(screenWidth<=576){
        document.documentElement.style.setProperty('--site-width', (screenWidth) + 'px');
    }
}
function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

function hightLightActiveLink() {
    if (uri == "/" || uri == "" || uri == undefined) {
        $('.home-item').attr('data-state', 'menu selected link');
    }
    else {
        $('.header-menu li').each(function () {
            $(this).attr('data-state', 'menu false link');
            if ($(this).attr('data-root') != '' && $(this).attr('data-root') != undefined) { // check nếu menu item có child

                if (uri.replace('/', '').toLocaleLowerCase() == $(this).attr('data-value')) {
                    $(this).attr('data-state', 'menu selected link');
                    $('li[data-value=' + $(this).attr('data-root') + ']').attr('data-state', 'menu selected link');   // thêm hightlight vào menu item cha
                }
            }
            else {
                if (uri.replace('/', '').toLocaleLowerCase() == $(this).attr('data-value')) {
                    $(this).attr('data-state', 'menu selected link')
                }
                else {
                    $(this).attr('data-state', 'menu false link')
                }
            }
        })
    }
}