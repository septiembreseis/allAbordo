$('.pop-pasajeros').click(function()
            {   
                $(".suma-pasajeros").toggle();     
            });
    
        $(".suma-pasajeros").toggle(function() {
                $(this).css('display','inherit');
            }, function() {
                $(this).css('display','none');
            });

    
        $(document).ready(function(){
            $(".suma-pasajeros").css('display','none');
            $("p").click(function(){
                $(this).toggleClass("highlight");
                
            });
        });
        $(document).ready(function() {
          $(function() {
            $('.datepicker').datepicker({
              dateFormat: 'D, M d, yy',
              showButtonPanel: false,
              changeMonth: false,
              changeYear: false,
              /*showOn: "button",
              buttonImage: "images/calendar.gif",
              buttonImageOnly: true,
              minDate: '+1D',
              maxDate: '+3M',*/
              inline: true
            });
          });
          $.datepicker.regional['es'] = {
            closeText: 'Cerrar',
            prevText: '<Ant',
            nextText: 'Sig>',
            currentText: 'Hoy',
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juev', 'Vie', 'Sáb'],
            dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
            weekHeader: 'Sm',
            dateFormat: 'dd/mm/yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
          };
          $.datepicker.setDefaults($.datepicker.regional['es']);
        });

function yesnoCheck() {
    if (document.getElementById('yesCheck').checked) {
        document.getElementById('ifYes').style.opacity = '1';
    }
    else document.getElementById('ifYes').style.opacity = '0';
}

function yesno2Check() {
    if (document.getElementById('yes2Check').checked) {
        document.getElementById('ifYes2').style.opacity = '1';
    }
    else document.getElementById('ifYes2').style.opacity = '0';
}

   $(function() {
        $('#destinovan').change(function(){
            $('.seguro').hide();
            $('#' + $(this).val()).show();
        });
    });

                var placeholderText = {
                    "Autobús": "Escribe tu código de reservación",
                    "Renta de vehículo (van)": "Escribe tu número de contrato",
                    "Paquetería": "Escribe tu código de rastreo"
                };

                $("#tipoServicio").on("change", function () {

                    if (this.value != -1) {
                        $("#codreserv").val(placeholderText[$("#tipoServicio option:selected").text()]);
                    } else {
                        $("#codreserv").val("");
                    }

                });


var map;
var chicago = new google.maps.LatLng(41.850033, -87.6500523);

/**
 * The ZoomControl adds +/- button for the map
 *
 */

function ZoomControl(controlDiv, map) {
  
  // Creating divs & styles for custom zoom control
  controlDiv.style.padding = '5px';

  // Set CSS for the control wrapper
  var controlWrapper = document.createElement('div');
  controlWrapper.style.backgroundColor = 'white';
  controlWrapper.style.borderStyle = 'solid';
  controlWrapper.style.borderColor = 'gray';
  controlWrapper.style.borderWidth = '1px';
  controlWrapper.style.cursor = 'pointer';
  controlWrapper.style.textAlign = 'center';
  controlWrapper.style.width = '32px'; 
  controlWrapper.style.height = '64px';
  controlDiv.appendChild(controlWrapper);
  
  // Set CSS for the zoomIn
  var zoomInButton = document.createElement('div');
  zoomInButton.style.width = '32px'; 
  zoomInButton.style.height = '32px';
  /* Change this to be the .png image you want to use */
  zoomInButton.style.backgroundImage = 'url("http://placehold.it/32/00ff00")';
  controlWrapper.appendChild(zoomInButton);
    
  // Set CSS for the zoomOut
  var zoomOutButton = document.createElement('div');
  zoomOutButton.style.width = '32px'; 
  zoomOutButton.style.height = '32px';
  /* Change this to be the .png image you want to use */
  zoomOutButton.style.backgroundImage = 'url("http://placehold.it/32/0000ff")';
  controlWrapper.appendChild(zoomOutButton);

  // Setup the click event listener - zoomIn
  google.maps.event.addDomListener(zoomInButton, 'click', function() {
    map.setZoom(map.getZoom() + 1);
  });
    
  // Setup the click event listener - zoomOut
  google.maps.event.addDomListener(zoomOutButton, 'click', function() {
    map.setZoom(map.getZoom() - 1);
  });  
    
}

function initialize() {
  var mapDiv = document.getElementById('map-canvas');
    
  var mapOptions = {
    zoom: 12,
    center: chicago,
    /* Disabling default UI widgets */
    disableDefaultUI: true,
//    key: 'AIzaSyBlbP_V6RFfZTyJamXyD7mThTRp-ejpVew',
  }
  
  map = new google.maps.Map(mapDiv, mapOptions);

  // Create the DIV to hold the control and call the ZoomControl() constructor
  // passing in this DIV.
  var zoomControlDiv = document.createElement('div');
  var zoomControl = new ZoomControl(zoomControlDiv, map);

  zoomControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(zoomControlDiv);
}

initialize();