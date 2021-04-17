$('#btn1').on('click', blueDown)
$('#btn2').on('click', whiteDown)
$('#btn3').on('click', dotBlueDown)

function blueDown() {
  $('.blue').addClass('down');
  setTimeout(reset, 1000);
}

function whiteDown() {
  $('.white').addClass('down');
  setTimeout(reset, 1000);
}

function dotBlueDown() {
  $('.blue.dot').addClass('down');
  setTimeout(reset, 1000);
}

function reset(){
  $('.flag').removeClass('down');
}
