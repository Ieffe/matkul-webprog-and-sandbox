(function () {
    "use strict"; //mencegah variabel liar yang tidak didefinisi
    // var myfunction = function (event) {
    //     alert("Message goes here");
    //     event.preventDefault();
    // };
    
    // var form = document.getElementById("cart-hplus");
    // form.addEventListener("submit", myfunction, true);
    // konten video 1

    document.addEventListener("DOMContentLoaded", function(){
        var state = document.getElementById("s-state");

        document.getElementById("cart-hplus").addEventListener("submit", estimateTotal);

        var btnEstimate = document.getElementById("btn-estimate");

        btnEstimate.disabled = true;

        state.addEventListener("change", function(){
            if (state.value === ""){
                btnEstimate.disabled = true;
            } 
            else {
                btnEstimate.disabled = false;
            }
        });

        function estimateTotal(event){
            event.preventDefault();
            alert("test");
        }

    });

})();