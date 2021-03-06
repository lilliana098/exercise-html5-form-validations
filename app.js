window.addEventListener('load', function () {

    var objFormulario = document.querySelector('#formulario1');

    var objCaja2 = document.querySelector('#caja2');
    objCaja2.style.display = "none";

    objFormulario.addEventListener('submit', function () {

        let Card = document.querySelector('#Card').value;
        let CVC = document.querySelector('#CVC').value;
        let FirstName = document.querySelector('#FirstName').value;
        let LastName = document.querySelector('#LastName').value;
        let City = document.querySelector('#City').value;
        let postal = document.querySelector('#Postalcode').value;

        let state = document.querySelector("#state");
        let user = state.options[state.selectedIndex].value;
        let user1 = state.options[state.selectedIndex].text;
        console.log(user, user1);

        
        if (user == 0) {
            alert("Debes seleccionar la provincia");
        } else {
            user = true;
        }


        if (Card == "") {
            alert("Debes ingresar un número de tarjeta");

        } else {
            Card = true;
        }


        if (FirstName == "") {
            alert("Debes ingresar el nombre");

        } else {
            FirstName = true;
        }

        if (LastName == "") {
            alert("Debes ingresar el apellido");

        } else {
            LastName = true;
        }

        if (City == "") {
            alert("Debes ingresar la ciudad");

        } else {
            City = true;
        }


        if (postal == "") {
            alert("Favor ingresar tu código postal");

        } else {
            postal = true;
        }

        if (user === true && Card === true && FirstName === true && LastName === true && City === true && postal === true) {
           document.getElementById("strong").innerHTML = "Pago realizado exitosamente";
        }

        // parte 2

        var off_payment_method = document.getElementsByName('options');
        var ischecked_method = false;
        for (var i = 0; i < off_payment_method.length; i++) {
            if (off_payment_method[i].checked) {
                ischecked_method = true;
                break;
            }
        }
        if (!ischecked_method) { //payment method button is not checked
            alert("No ha seleccionado un metodo de pago");
        }



    });

});
