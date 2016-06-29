window.onload = function() {
    console.log("page loaded");
    makeCartScrollNicely();
    makeSiteScrollNicely()
}

function makeCartScrollNicely() {
    var cart = document.querySelector('.cart__content');
    // console.log(cart);
    Ps.initialize(cart);
}

function makeSiteScrollNicely() {
    var site = document.querySelector('.site');
    // console.log(cart);
    Ps.initialize(site);
}
