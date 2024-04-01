screenWidth = screen.width; 
logined = false;
$(document).ready(function(){
    checkLogined();
    setTimeout(()=>re_renderGoogleButton(),2000);
    animateRichText();
    var threshold = 600;
    if(screenWidth<767){
        threshold = 900
    }
    if(screenWidth<=645){
        threshold = 1200
    }
    if(screenWidth<= 576){
        threshold = 0
    }
    $(document).on('scroll',function(){
        var scrollTop = document.documentElement.scrollTop;
        var bodyContent = $('#bgLayers_comp-kgz3ukvv');
        let contentHeight = $('#mediair4tvn771').height();
        if($('#mediair4tvn771').length>0  != undefined && bodyContent.length>0){
            if(scrollTop+300 > bodyContent.offset().top &&(scrollTop/(bodyContent.offset().top + contentHeight)<1 && scrollTop/(bodyContent.offset().top + contentHeight)>0.02)){
                let opacity = 1.4 -(scrollTop/(bodyContent.offset().top + contentHeight));
                $('#mediair4tvn771 #bgLayers_mediair4tvn771').css('opacity',opacity);
           }
        }
        $('.ROb7KR.wixui-image').each(function(){
            var $this= $(this);
            if(scrollTop+threshold>$(this).offset().top ||  threshold == 0){
                if(typeof($(this).attr('data-screen-in-hide') !== undefined && typeof($(this).attr('data-screen-in-hide') !== false))){
                    //  richText1.css('left','144px');
                    $(this).attr('data-screen-in-hide','done');
                }
            }
        });
       
    })
//Popup login
    $('button[data-hook=login-button]').click(function(){
         $('#popup-login-container').css('display','block');       
    })
    $('button[aria-label="Close"]').click(function(){
        $('#popup-login-container').css('display','none');       
    })
//-----------
    
    $('#comp-jxd8cqw4').on('submit', function (event) { // footer submit
        {
            event.preventDefault();
            var formdata = $(this).serialize();
            $.ajax({
                url: '/SendMail',
                type: 'POST',
                dataType: 'json',
                contentType: 'application/x-www-form-urlencoded',
                data: formdata,
                success: function (data) {
                    alert("Saved successfully");
                },
                error: function (error) {
                    console.log(`Error ${error}`);
                }
            });
            setTimeout(function () {
                $('#comp-jxd8cqwg').css('display', 'block');
                $('#comp-jxd8cqw4 input').val('');
                $('#comp-jxd8cqw4 textarea').val('');
            }, 1000)
            setTimeout(function () {
                $('#comp-jxd8cqwg').css('display', 'none');

            }, 3000)
        }
    })
    $('#comp-l2xbcfk7').on('submit', function (event) { // 
        {
            event.preventDefault();
            var formdata = $(this).serialize();
            $.ajax({
                url: '/SendMail',
                type: 'POST',
                dataType: 'json',
                contentType: 'application/x-www-form-urlencoded',
                data: formdata,
                success: function (data) {
                    alert("Saved successfully");
                },
                error: function (error) {
                    console.log(`Error ${error}`);
                }
            });
        setTimeout(function () {
            let emailModel = {
                Email: $('#comp-l2xbcfoc')
            }
            $('#comp-l2xbcfoc').css('display','block');
            $('#comp-l2xbcfk7 input').val('');
            $('#comp-l2xbcfk7 textarea').val('');
        },1000)
        setTimeout(function(){
            $('#comp-l2xbcfoc').css('display','none');
          
        },3000)

    }
    })
 
    $('#TINY_MENU [data-testid=tinymenu-menubutton').click(function(){
        if ($('#TINY_MENU').hasClass('IQ5y6N')){
            $('#TINY_MENU').removeClass('IQ5y6N');
            $('#TINY_MENU').addClass('vHom5A');
        }
        else{
            $('#TINY_MENU').addClass('IQ5y6N');
            $('#TINY_MENU').removeClass('vHom5A');
        }
    })


// popup sign mobile
    $('.QNVRC4.header-buttons').click(function(){
        $('.SM_ROOT_COMP931.royLTm').css('display','flex');
    })
    $('.dkeRPE').click(function(){
        $('.SM_ROOT_COMP931.royLTm').css('display','none');
    });
    //-------------
//scroll to top 
 $('#BACK_TO_TOP_BUTTON').click(function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
 })
 //-------

 //logout-btn
 $('.icon-logined .avatar').eq(0).click(function(){
    if($('.btn-logout').css('display') !== 'none' ){
        hidePopupLogout();
    }
    else{
        showPopupLogout();
    }
 })
 $('.btn-logout').click(()=>logOut());
 //--------

})
function re_renderGoogleButton(){
    $('#googleSM_ROOT_COMP948 .abcRioButton').css('width','100%');
    $('#googleSM_ROOT_COMP948 .abcRioButton').css('height','48px');
    if($('.abcRioButtonContents').length>0){
        $('.abcRioButtonContents')[0].textContent = 'Sign up with Google';
    }
}

function coppyLinkPost(){
  navigator.clipboard.writeText('https://www.inholdings.vn/post/our-inside-secrets-1');
}
function animateRichText(){
    let richText1 = $('#comp-kgz3y51p1');
    let richText2 = $('#comp-kgz4ezvw');
    if(richText1.length>0 && typeof(richText1.attr('data-screen-in-hide') !== undefined && typeof(richText1.attr('data-screen-in-hide') !== false))){
        richText1.css('grid-area','1 / 1 / 2 / 2;');
        if(screenWidth > 576){
            richText1.css('left','114px');
        }
        //  richText1.css('left','144px');
        richText1.attr('data-screen-in-hide','done');
    }
    if(richText2.length>0 && typeof(richText2.attr('data-screen-in-hide') !== undefined && typeof(richText2.attr('data-screen-in-hide') !== false))){
        richText2.css('grid-area','1 / 1 / 2 / 2;');
        if(screenWidth > 576){
            richText2.css('left','610px');
        }
        richText2.attr('data-screen-in-hide','done');
    }
    
}
 
hidePopupLogin = () => $('#popup-login-container').length>0 ? $('#popup-login-container').hide():'';
showPopupLogin = () =>$('#popup-login-container').show();
hidePopupLogout = () =>$('.btn-logout').hide();
showPopupLogout = () =>$('.btn-logout').show();
hideAvatar = () => $('.icon-logined').hide();
showAvatar = () => $('.icon-logined').css('display','flex');
showBtnLogin = () => $('.btn-login').show();
hideBtnLogin = () => $('.btn-login').hide();
function onSignIn(response){
     const responsePayload = parseJwt(response.credential);
    if(responsePayload){
        hidePopupLogin();
    }
    $.cookie('user-logined', JSON.stringify(responsePayload), { path: '/' });
    logined=true;
    $('.btn-login').css('display','none');

    showAvatar();
    hidePopupLogout();
    loginedInit(responsePayload);
     //console.log("ID: " + responsePayload.sub);
     //console.log('Full Name: ' + responsePayload.name);
     //console.log('Given Name: ' + responsePayload.given_name);
     //console.log('Family Name: ' + responsePayload.family_name);
     //console.log("Image URL: " + responsePayload.picture);
     //console.log("Email: " + responsePayload.email);
}
function logOut(){
    $.removeCookie('user-logined', {path:'/'});
    $.removeCookie('user-logined', { path: '/post' });
    logined = false;
    if($('.icon-logined').length>0){
        $('.icon-logined').find('img').attr('src','') ;
        $('.icon-logined').find('img').attr('data-src','') ;
    }
    hideAvatar();
    showBtnLogin();
    google.accounts.id.disableAutoSelect();
    // showPopupLogin();
}
function loginedInit(user){
    if(user != undefined && user != ''){
        hideBtnLogin();
        if($('.icon-logined').length>0){
            $('.icon-logined').find('img').attr('src',user.picture) ;
            $('.icon-logined').find('img').attr('data-src',user.picture) ;
        }
        showAvatar();
    }
}
function checkLogined(){
    if( $.cookie('user-logined') != undefined && $.cookie('user-logined') != null){
       var user = JSON.parse($.cookie('user-logined') );
       loginedInit(user);
    }
    else{
         return;
    }
   
}