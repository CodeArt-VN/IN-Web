var moreButton = $('button[data-hook=more-button]');
var shareButton = $('#new-blog-popover-root');
var popupShareContent = $('#popup-share-post-container');
var hidePopupShareContent = $('.modal__close');
var itemPopupShareContent = $('.share-item-container span');
$(document).ready(function () {
    moreButton.click(function () {
        if ($(this).attr('aria-pressed') == 'true') {
            hideShareButton()
            shareButton.hide();
        }
        else {
            $(this).attr('aria-pressed', 'true');
            shareButton.css('display', 'flex');
        }
    })
    shareButton.click(function () {
        hideShareButton();
        popupShareContent.show();
    })
    hidePopupShareContent.click(() => popupShareContent.hide());
    itemPopupShareContent.click(() => popupShareContent.hide());
})
function hideShareButton() {
    moreButton.attr('aria-pressed', 'false');
    shareButton.hide();
}
