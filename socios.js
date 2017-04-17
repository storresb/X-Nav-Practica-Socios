$(document).ready(function(){

  var timeline;
  var mytimeline;
  var update;
  var nmensajes = 0;
  var mynmensajes = 0;

 /* $('icono').click(function (e) {
    e.defaultPrevented()
    $(this).tab('show')
  })*/

  $.getJSON( "timeline.json").done(function(data){
    var inner = "";
    console.log("hola");
    timeline = data;
    timeline.forEach(function(el,i){
      nmensajes += i;
      inner += "<div class ='container'><div class='row'><div class='col-md-3'>";
        inner += "<p align='center'><img class='Avatar' src='"+el.avatar+"'></img></div></p>";
        inner += "<div class='autor col-md-7'><p>"+el.autor+"</p>";
        inner += "<p class = 'tit'>"+el.titulo+"</p>";
        inner += "<p class='mensaje'>"+el.mensaje+"<p></div></div></div>";
        inner += "<p align='center'><img class='Img' width='200' height='300' src='"+el.imagen+"'></img></div></p>";
        inner += "<p class = 'fecha'>"+el.fecha+"</p></div>";
        inner += "<p align='center'><br>----------------------------------------------------------------------------------</br></p>";
      inner += "</div></div></div></br>";
      
    });
    $("#final").html(inner)
   });
  $.getJSON("update.json").done(function(data){
    update = data;
    inner = "<div class='numMen'>"+update.length+" Nuevos mensajes</div>"
    inner += $("#update").html()
    console.log(data);

    $("#update").html(inner);
  });

  $("#update").click(function(){
    console.log("que tal");
    $(this).parent().remove();
    var inner2 = $("#update").html();
    var inner = "";
    $("#final").html("");
    nmensajes++;
    update.forEach(function(el,i){
      nmensajes +=i;
      inner += "<div class ='container'><div class='row'><div class='col-md-3'>";
        inner += "<p align='center'><img class='Avatar' width='100' height='150' src='"+el.avatar+"'></img></div></p>";
        inner += "<div class='autor col-md-7'><p>"+el.autor+"</p>";
        inner += "<p class = 'tit'>"+el.titulo+"</p>";
        inner += "<p class='mensaje'>"+el.mensaje+"<p></div></div></div>";
        inner += "<p align='center'><img class='Img' width='200' height='300' src='"+el.imagen+"'></img></div></p>";
        inner += "<p class = 'fecha'>"+el.fecha+"</p></div>";
        inner += "<p align='center'><br>----------------------------------------------------------------------------------</br></p>";
      inner += "</div></div></div></br>";
    });
    inner = inner+ inner2;
    $("#final").html(inner);
  });

  $("#myline").click(function(){
    $.getJSON( "myline.json").done(function(data){
      var inner = "";
      mytimeline = data;
      mytimeline.forEach(function(el,i){
        mynmensajes += i;
        inner += "<div class ='container'><div class='row'><div class='col-md-3'>";
          inner += "<p align='center'><img class='Avatar' width='100' height='150' align='middle' src='"+el.avatar+"'></img></div></p>";
          inner += "<div class='autor col-md-7'><p>"+el.autor+"</p>";
          inner += "<p class = 'tit'>"+el.titulo+"</p>";
          inner += "<p class = 'mensaje'>"+el.mensaje+"<p></div></div></div>";
          inner += "<p align='center'><img align='center' class='Img' width='200' height='300' src='"+el.imagen+"'></img></div></p>";
          inner += "<p class = 'fecha' >"+el.fecha+"</p></div>";
        inner += "<p align='center'><br>----------------------------------------------------------------------------------</br></p>";
        inner += "</div></div></div></br>";
        
      });
      $("#final").html(inner)
    });
  })
  $("#timeline").click(function(){
   $.getJSON( "timeline.json").done(function(data){
    var inner = "";
    console.log("hola");
    timeline = data;
    timeline.forEach(function(el,i){
      nmensajes += i;
      inner += "<div class ='container'><div class='row'><div class='col-md-3'>";
        inner += "<p align='center'><img class='Avatar' width='100' height='150' src='"+el.avatar+"'></img></div></p>";
        inner += "<div class='autor col-md-7'><p>"+el.autor+"</p>";
        inner += "<p class = 'tit' align='center'>"+el.titulo+"</p>";
        inner += "<p class = 'mensaje' align='center' >"+el.mensaje+"<p></div></div></div>";
        inner += "<p align='center'><img class='Img' width='200' height='300' src='"+el.imagen+"'></img></div></p>";
        inner += "<p class = 'fecha' >"+el.fecha+"</p></div>";
        inner += "<p align='center' ><br>----------------------------------------------------------------------------------</br></p>";
      inner += "</div></div></div></br>";
      
    });
    $("#final").html(inner)
   });
 })

});