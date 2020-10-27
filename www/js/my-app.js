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
// recorro con dos for para darle funcionalidad a todos los botones
for (v = 1; v <= jugadores;v++){
for(i=1; i <=6;i++){
$$("#dado"+i + v).on("click", function(){
  ac1.open();
  console.log("estoy aca");
  
});

}
}

var ac1 = app.actions.create({
  
  //ACA ESTOY TRABADO , QUIERO OBTENER EL ID DE CADA BOTON PRESIONADO Y ...
  buttons: [
    {
      text: " ", // YA TENDRIA QUE TENERLO DE ANTEMANO PARA AGREGARLO AL TITULO DE POP-UP SEGUN CORRESPONDA SU ID.
    },
    {
      text: 'Uno',
      onClick: function () {
        var arr = document.getElementById(this);
        // PENSE EN BUSCAR LA POSICION 5 (VENDRIA A SER DE DADO1 EL 1 PARA PODER MULTIPLICARLO POR EL NUMERO DE BOTON PRESIONADO)
        var ele1= parseInt(arr[5]); //ACA TRATANDO DE OBTENER LA POSICION 5 , PERO NO FUNCIONA.
        totalCuadrante = 1*2;
        console.log(totalCuadrante, ele1);//ACA SOLO ESTABA PROBANDO SI ele1 me daba el resultado que queria.
      }

    },
    {
      text: 'Dos',
      onClick: function () {
        
        totalCuadrante = 2*2;
        console.log(totalCuadrante);
      }
      
    },
    {
      text: 'Tres',onClick: function () {
        
        totalCuadrante = 3*2;
        console.log(totalCuadrante);
      }
      
    },
    {
      text: 'Cuatro',
      onClick: function () {
        
        totalCuadrante = 4*2;
        console.log(totalCuadrante);
      }
    },
    {
      text: 'Cinco',
      onClick: function () {
        
        totalCuadrante = 5*2;
        console.log(totalCuadrante);
      }
    },{
      text: 'Seis',
      onClick: function () {
        
        totalCuadrante = 6*2;
        console.log(totalCuadrante);
      }
    },
    {
      text: 'Cancel',
      color: 'red'
    },
  ]
})
});



  

