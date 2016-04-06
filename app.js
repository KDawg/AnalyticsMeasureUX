$(document).ready(function() {
  console.log('booga booga booga!');


  $('#color-choices').on('change', function() {
    console.log('ticked my drop down!');
  });


  $('#btn-accept').on('click', function() {
    console.log('clicked me!');
  })
});