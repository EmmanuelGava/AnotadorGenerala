// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
  // App root element
  root: "#app",
  // App Name
  name: "My App",
  // App id
  id: "com.myapp.test",
  // Enable swipe panel
  panel: {
    swipe: "left",
  },
  // Add default routes
  routes: [
    {
      path: "/about/",
      url: "about.html",
    },
  ],
  // ... other parameters
});

var mainView = app.views.create(".view-main");

// Handle Cordova Device Ready Event
$$(document).on("deviceready", function () {
  console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on("page:init", function (e) {
  // Do something here when page loaded and initialized
  console.log(e);
});

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on("page:init", '.page[data-name="about"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized

  var jugadores = 2;
  var ele1 = 0;

  for (var i = 1; i <= jugadores; i++) {
    //Agrego un div en formato boton con el id jugadorNro para identificar el cabezal de la columna
    $$("#puntajes").append(
      '<div class="col-33"><a id="jugador' +
        i +
        '" class="button button-outline"></a></div>'
    );
    //Agrego un div con el id dado para identificar cada boton hasta el 6 (dado1 + i = dado 11, dado2+i = dado21)
    $$("#nJug" + i).text($$("#jugador" + i).val());
    $$("#uno").append(
      '<div class="col-33">' +
        '<a href="#" id="dado1' +
        i +
        '"' +
        ' class="button button-raised jugador' +
        i +
        '"> - </a>' +
        "</div>"
    );
    $$("#dos").append(
      '<div class="col-33"><a href="#" id="dado2' +
        i +
        '" class="button button-raised jugador' +
        i +
        '"> - </a></div>'
    );
    $$("#tres").append(
      '<div class="col-33"><a href="#" id="dado3' +
        i +
        '" class="button button-raised jugador' +
        i +
        '"> - </a></div>'
    );
    $$("#cuatro").append(
      '<div class="col-33"><a href="#" id="dado4' +
        i +
        '" class="button button-raised jugador' +
        i +
        '"> - </a></div>'
    );
    $$("#cinco").append(
      '<div class="col-33"><a href="#" id="dado5' +
        i +
        '" class="button button-raised jugador' +
        i +
        '"> - </a></div>'
    );
    $$("#seis").append(
      '<div class="col-33"><a href="#" id="dado6' +
        i +
        '" class="button button-raised jugador' +
        i +
        '"> - </a></div>'
    );

    //agrego un id igual a su columna
    $$("#escalera").append(
      '<div class="col-33"><a href="#" id="escalera' +
        i +
        '" class="button button-raised jugador' +
        i +
        '"> - </a></div>'
    );
    $$("#full").append(
      '<div class="col-33"><a href="#" id="full' +
        i +
        '" class="button button-raised jugador' +
        i +
        '"> - </a></div>'
    );
    $$("#poker").append(
      '<div class="col-33"><a href="#" id="poker' +
        i +
        '" class="button button-raised jugador' +
        i +
        '"> - </a></div>'
    );
    $$("#generala").append(
      '<div class="col-33"><a href="#" id="generala' +
        i +
        '" class="button button-raised jugador' +
        i +
        '"> - </a></div>'
    );
    $$("#generalaDirecta").append(
      '<div class="col-33"><a href="#" id="generalaDirecta' +
        i +
        '" class="button button-raised jugador' +
        i +
        '"> - </a></div>'
    );
    $$("#total").append(
      '<div class="col-33"><a href="#" id="total' +
        i +
        '" class="button button-raised"> 0 </a></div>'
    );
  }
  // recorro con dos for para darle identicacion a los botones del 1 al 6 de cada equipo.
  for (v = 1; v <= jugadores; v++) {
    for (i = 1; i <= 6; i++) {
      $$("#dado" + i + v).on("click", function () {
        traerValoresDado(this.id);
      });
    }
  }

  function traerValoresDado(nombre) {
    //Traigo el id atraves de nombre y agarro con ele1 la posicion 5 (porque el array arranca en cero) que es el numero que identifica a cada div
    var ele1 = parseInt(nombre[4]);

    var ac1 = app.actions.create({
      buttons: [
        {
          text: "dado " + ele1,
        },
        {
          text: "Uno",
          onClick: function () {
            // PENSE EN BUSCAR LA POSICION 5 (VENDRIA A SER DE DADO1 EL 1 PARA PODER MULTIPLICARLO POR EL NUMERO DE BOTON PRESIONADO)
            //ACA TRATANDO DE OBTENER LA POSICION 5 , PERO NO FUNCIONA.
            totalCuadrante = 1 * ele1;
            console.log(totalCuadrante); //ACA SOLO ESTABA PROBANDO SI ele1 me daba el resultado que queria.
            $$("#" + nombre).text(totalCuadrante);
          },
        },
        {
          text: "Dos",
          onClick: function () {
            totalCuadrante = 2 * ele1;
            console.log(totalCuadrante);
            $$("#" + nombre).text(totalCuadrante);
          },
        },
        {
          text: "Tres",
          onClick: function () {
            totalCuadrante = 3 * ele1;
            console.log(totalCuadrante);
            $$("#" + nombre).text(totalCuadrante);
          },
        },
        {
          text: "Cuatro",
          onClick: function () {
            totalCuadrante = 4 * ele1;
            console.log(totalCuadrante);
            $$("#" + nombre).text(totalCuadrante);
          },
        },
        {
          text: "Cinco",
          onClick: function () {
            totalCuadrante = 5 * ele1;
            console.log(totalCuadrante);
            $$("#" + nombre).text(totalCuadrante);
          },
        },
        {
          text: "Seis",
          onClick: function () {
            totalCuadrante = 6 * ele1;
            console.log(totalCuadrante);
            $$("#" + nombre).text(totalCuadrante);
          },
        },
        {
          text: "Tachar",
          onClick: function () {
            totalCuadrante = 0 * ele1;
            console.log(totalCuadrante);
            $$("#" + nombre).text("X");
          },
        },
        {
          text: "Cancel",
          color: "red",
        },
      ],
    });

    ac1.open();
  }

  for (i = 1; i <= jugadores; i++) {
    $$("#escalera" + i).on("click", function () {
      traerValoresJuego(this.id, "escalera");
    });
    $$("#full" + i).on("click", function () {
      traerValoresJuego(this.id, "full");
    });
    $$("#poker" + i).on("click", function () {
      traerValoresJuego(this.id, "poker");
    });
    $$("#generala" + i).on("click", function () {
      traerValoresJuego(this.id, "generala");
    });
    $$("#generalaDirecta" + i).on("click", function () {
      traerValoresJuego(this.id, "generalaDirecta");
    });

    function traerValoresJuego(nombre, tipo) {
      var ac1 = app.actions.create({
        buttons: [
          {
            text: "Juego",
          },
          {
            text: "Servido",
            onClick: function () {
              switch (tipo) {
                case "escalera":
                  totalCuadrante = 25;
                  break;
                case "full":
                  totalCuadrante = 35;
                  break;
                case "poker":
                  totalCuadrante = 45;
                  break;
                case "generala":
                  totalCuadrante = 55;
                  break;
                case "generalaDirecta":
                  totalCuadrante = 65;
                  break;
                default:
              }
              console.log(totalCuadrante);
              $$("#" + nombre).text(totalCuadrante);
            },
          },
          {
            text: "No Servido",
            onClick: function () {
              switch (tipo) {
                case "escalera":
                  totalCuadrante = 20;
                  break;
                case "full":
                  totalCuadrante = 30;
                  break;
                case "poker":
                  totalCuadrante = 40;
                  break;
                case "generala":
                  totalCuadrante = 50;
                  break;
                case "generalaDirecta":
                  totalCuadrante = 60;
                  break;
                default:
              }
              $$("#" + nombre).text(totalCuadrante);
            },
          },
          {
            text: "Tachar",
            onClick: function () {
              totalCuadrante = 0;
              $$("#" + nombre).text("X");
            },
          },
          {
            text: "Cancel",
            color: "red",
          },
        ],
      });

      ac1.open();
    }
  }
});
