<!DOCTYPE html>
<html>

    <head>
        <title>Sistema Distribuido</title>
        <meta charset="UTF-8" />      
        <link href='img/sql.png' rel='shortcut icon' type='image/png'>
        <script src="js/jquery.min.js"></script>
        <!-- CSS - JS -->
        <link rel="stylesheet" type="text/css" media="all" href="css/index.css" />               
        <script type="text/javascript" src="js/index.js"></script>     
        <!-- Login -->
        <link rel="stylesheet" href="css/jquery-ui.css" />
        <script src="js/jquery-ui.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <link rel="shortcut icon" href="../favicon.ico"> 
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <script src="js/modernizr.custom.63321.js"></script>              
    </head>
    <body>

        <div class="contenido">
            <header>
                <img src="img/sql.jpg" border="3" />
            </header>
            <hr>
            <nav>
                <li><a onclick="infoTaxis()" >Información de Taxis</a></li>
                <li><a onclick="infoBuses()">Información de Buses</a></li>
                <li><a id="conexion">Conexión a SGBD</a></li>
            </nav>           
            <br><br><hr><br>
            <center>
                <h1 id="titulo">Sistema Distribuido de Servicio de Transporte Terrestre</h1>
            </center>


            <div id="background"></div>
            <section id="content_area">
                <center>
                    <br>
                    <h2 style="color: red">No se ha realizado la conexión</h2>                
                </center>
            </section>   

            <section id="dialog" class="dialog" title="Conectar a la Base de Datos">
                <form class="form-1" method="post" action="javascript:conexion();" >
                    <p class="field">
                        <input id="serverName" type="text" name="login" onkeypress='return notspace();' placeholder="Servidor">
                        <i class=""></i>
                    </p>
                    <p class="field">
                        <input id="dataBase" type="text" name="password" onkeypress='return notspace();' placeholder="Base Datos">
                        <i class=""></i>
                    </p>
                    <p class="field">
                        <input id="userName" type="text" name="login" onkeypress='return notspace();' placeholder="Usuario">
                        <i class="icon-user icon-large"></i>
                    </p>
                    <p class="field">
                        <input id="password" type="password" name="password" onkeypress='return notspace();'  placeholder="Contraseña">
                        <i class="icon-lock icon-large"></i>
                    </p>
                    <p class="submit">
                        <button type="submit" name="submit"><i class="icon-arrow-right icon-large"></i></button>
                    </p>
                </form>
            </section>
        </div>

    </body>
</html>

<?php
?>
