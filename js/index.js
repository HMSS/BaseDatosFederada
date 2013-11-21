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
        infoTaxis();
    }
}

/**
 * Encarga generar una tabla con los servicios respectivos a un taxi
 */
function infoTaxis(){
        $(document).ready(function() {
        $.ajax({
            url: "php/conexion.php",
            type: "post",
            dataType: 'json',
            data: {server: server,
                db: db,
                user: user,
                pass: pass,
                query: "select nombre from dbo.provincia"
            }
        }).done(function(response) {
            if (response == -1) {
                alert("Error de conexión");
                server = null
                db = null
                user = null
                pass = null
            }
            else {
                if (response == -2) {
                    booleanConexion = "0";
                    server = null;
                    db = null;
                    user = null;
                    pass = null;
                    ;
                }
                else {
                    booleanConexion = "1";
                    //Oculta ventana emergente
                    $(".ui-dialog-content").dialog("close");
                    $('#background').hide();
                    //Construir los Div para los n graficos
                   if (response.length > 0)
                        div = "<center><table border=1>";
                        div +=  "<tr>";
                        div +=  "<th scope='col'>ID Servicio</th>";
                        div +=  "<th scope='col'>Inicio</th>"
                        div +=  "<th scope='col'>Finalización</th>"
                        div +=  "<th scope='col'>Costo</th>"
                        div +=  "<th scope='col'>Origen</th>"
                        div +=  "<th scope='col'>Destino</th>"
                        div +=  "<th scope='col'>Chofer</th>"
                        div +=  "</tr>";
                    for (index = 0; index < response.length; ++index) {
                           div += "<tr><td>"+response[index].id + +response[index].ini +response[index].fin +response[index].cost +response[index].orig +response[index].dest +response[index].chof +"</td></tr>"; 
                    }
                    div += "</table></center>";
                    //Construir gráficos individualmente
                    $("#titulo").html("Información de los Servicos de Taxis");
                    $("#content_area").html(div);
                }
            }
        });
    });
}


/**
 * Encarga generar una tabla con los servicios respectivos a un bus
 */
function infoBuses(){
        $(document).ready(function() {
        $.ajax({
            url: "php/conexion.php",
            type: "post",
            dataType: 'json',
            data: {server: server,
                db: db,
                user: user,
                pass: pass,
                query: "select ID_Servicio,Inicio,Finalizacion,Costo,Origen,Destino,Chofer from informacionBuses"
            }
        }).done(function(response) {
            if (response == -1) {
                alert("Error de conexión");
                server = null
                db = null
                user = null
                pass = null
            }
            else {
                if (response == -2) {
                    booleanConexion = "0";
                    server = null;
                    db = null;
                    user = null;
                    pass = null;
                    ;
                }
                else {
                    booleanConexion = "1";
                    //Oculta ventana emergente
                    $(".ui-dialog-content").dialog("close");
                    $('#background').hide();
                    //Construir los Div para los n graficos
                   if (response.length > 0)
                        div = "<center><table border=1>";
                        div +=  "<tr>";
                        div +=  "<th scope='col'>ID Servicio</th>";
                        div +=  "<th scope='col'>Inicio</th>"
                        div +=  "<th scope='col'>Finalización</th>"
                        div +=  "<th scope='col'>Costo</th>"
                        div +=  "<th scope='col'>Origen</th>"
                        div +=  "<th scope='col'>Destino</th>"
                        div +=  "<th scope='col'>Chofer</th>"
                        div +=  "</tr>";
                    for (index = 0; index < response.length; ++index) {
                          div += "<tr><td>"+response[index].id + +response[index].ini +response[index].fin +response[index].cost +response[index].orig +response[index].dest +response[index].chof +"</td></tr>";
                    }
                    div += "</table></center>";
                    //Construir gráficos individualmente
                    $("#titulo").html("Información de los Servicos de Taxis");
                    $("#content_area").html(div);
                }
            }
        });
    });
}










