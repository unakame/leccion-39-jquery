//var jq = jQuery.noConflict();
// Cambia el simbolo del dolar por jq para qe no haga conflicto
// con otras librerias qe taqmbien usen el dolar

/*var cb = function(){
  alert ("Cargo jQuery");
}
$(document).ready(cb);*/

// otra formar de hacer el Load

/*$(document).ready(function(){
  alert ("Cargo jQuery");
});*/

// otra forma

/*$(function(){
  alert ("Cargo jQuery");
})*/

//otra

/*$(() => { //function {}
  alert ("cargo jQuery");
})*/

//otra

/*$( _ => { //function {}
  alert ("cargo jQuery");
})*/

/*(()=> a{ => u {
  alert ("dd")
})} algo raro salio mal aca*/


/*$(() => {//function
$("a").click(function(e){
  alert ("click en la bandera");
  });
});*/

/*$(() => {//function
$("a:last-child").click(function(e){
  alert ("click en la bandera");
  });
});*/

/*$(() => {//function
$("a:last-child").click((e)=>{
  alert ("click en la bandera");
  });
});*/

/*$(() => {//function
$("a:last-child").on('click',(e)=>{
  alert ("click en la bandera");
  });
});*/

/*$(() => {//function
$("a").on('click',(e)=>{
  alert ("click en la bandera");
  });
  const band = $('<a href="#">Banderita</a>');
  $(".container").append(band);
});*/

/*$(() => {//function
$("a:first-child").on('click',(e)=>{
  e.preventDefault();
  $('.brand-popup').show();
  });
  $("a:last-child").on('click',(e) => {
    $('.brand-popup').toggle();
  });
});*/

$(() => {//function

  $('.popup-link').on('click',(e) => {
    e.preventDefault();
    $('.brand-popup').show();

  });

  $('.brand-popup .popup-close').on('click',(e) =>{
    e.preventDefault();
    $('.brand-popup').hide();
  })
});
