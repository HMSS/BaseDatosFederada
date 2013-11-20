document.write("<script language=\"JavaScript\" type=\"text/JavaScript\" src=\"https://www.google.com/jsapi\"></script" + ">");
/*  Variables de Conexión  */
var server;
var db;
var user;
var pass;



/**
 * Comprueba que los input solo acepten números
 * @param {type} evt
 * @returns {Boolean}
 */
function onlyNumbers(evt) {
    var e = event || evt; // for trans-browser compatibility
    var charCode = e.which || e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

/**
 * Comprueba que no existan espacios en blanco
 * @param {type} e eventp
 * @returns {Boolean}
 */
function notspace(evt)
{
    var e = evt || event;
    if (e.keyCode == 32)
        return false;
}

/**
 * Accion para el evento del boton Conexión de bd.
 * @returns {undefined}
 */
$(function() {
    $('#conexion').click(function() {
        $('#background').animate({
            'opacity': '.80'
        });
        $('#background').css('display', 'block');
        $('#background').click(function() {
            $(".ui-dialog-content").dialog("close");
            $('#background').hide();
        });
        $("#dialog").dialog({
            height: 350,
            width: 400
        });
        $('#dialog').bind('dialogclose', function(event) {
            $('#background').hide();
        });
    });
});


/**
 * Método que realiza almacena los datos de la conexión a la base de datos.
 * @returns {undefined}
 */
function conexion() {
    server = document.getElementById("serverName").value;
    db = document.getElementById("dataBase").value;
    user = document.getElementById("userName").value;
    pass = document.getElementById("password").value;
    //alert(server);
    if (server == "" || db == "" || user == "" || password == "") {
        alert("Todos los datos son requeridos");
    }
    else {
        //limpiar los datos
        $("#serverName").val("");
        $("#dataBase").val("");
        $("#userName").val("");
        $("#password").val("");
        crearGraficos();
    }
}



/**
 * Devuelve el nombre del "radio" seleccionado
 * @param {type} ctrl Name del form y Name de los imput
 * @returns {unresolved} Retorna el nombre del seleccionado
 */
function getRadioButtonSelectedValue(ctrl) {
    for (i = 0; i < ctrl.length; i++)
        if (ctrl[i].checked)
            return ctrl[i].value;
}











