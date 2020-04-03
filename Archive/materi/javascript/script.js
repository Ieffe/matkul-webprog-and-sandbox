(function () {
    "use strict";
    var myfunction = function (event) {
        alert("Message goes here");
        event.preventDefault();
    };
    
    var form = document.getElementById("cart-hplus");
    form.addEventListener("submit", myfunction, true);

})();