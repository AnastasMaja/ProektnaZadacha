// task3.js

document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM to be fully loaded before adding event listeners

    // Get the list items
    var homeLink = document.querySelector("#homeLink");
    var aboutLink = document.querySelector("#aboutLink");
    var productsLink = document.querySelector("#productsLink");
    var contactLink = document.querySelector("#contactLink");
    var comp = document.querySelector("#comp");
    var acc = document.querySelector("#acc");
    var sm = document.querySelector("#sm");

    // Add click event listeners to each list item
    homeLink.addEventListener("click", function () {
        navigateTo("task1.html");
    });

    aboutLink.addEventListener("click", function () {
        navigateTo("about.html");
    });

    productsLink.addEventListener("click", function () {
        navigateTo("products.html");
    });

    contactLink.addEventListener("click", function () {
        navigateTo("contact.html");
    });

    acc.addEventListener("click", function() {
        navigateTo(accessories.html);
    });

    comp.addEventListener("click", function() {
        navigateTo(computers.html);
    });

    sm.addEventListener("click", function() {
        navigateTo(smartphones.html);
    });
});

function navigateTo(page) {
    window.location.href = page;
}

function incrementQuantity() {
    var quantityInput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
}

function decrementQuantity() {
    var quantityInput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
}

function increaseLikes(buttonId) {
    var currentLikes = parseInt(document.getElementById(buttonId).getAttribute('data-likes'), 10);

    var newLikes = currentLikes + 1;

    document.getElementById(buttonId).setAttribute('data-likes', newLikes);

    document.getElementById(buttonId).innerText = 'Like ' + newLikes;
}


