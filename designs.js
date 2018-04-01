// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// Your code goes here!

//makes grid when size is submitted
$('#sizePicker').submit(function(evt) {
  let gridWidth = $('#inputWeight').val();
  let gridHeight = $('#inputHeight').val();
  makeGrid(gridWidth, gridHeight);
  //prevent page from refreshing when submit is completed
  evt.preventDefault();
} );
//function to create canvas
function makeGrid(gridWidth,gridHeight) {
  let result = '';
  for (let i = 1; i <=gridHeight; i++) {
    result += '<tr>';
    for (let j = 1; j <= gridWidth; j++) {
      result += '<td></td>';
    } result += '</tr>';
  } $('#pixelCanvas').html(result);
}
//apply color to cells being clicked
$('#pixelCanvas').on('click', 'td', function() {
  let currentColor = $('#colorPicker').val();
  $(this).css('background-color', currentColor);
});
