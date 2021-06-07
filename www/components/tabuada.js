// This is a JavaScript file

var num;

$(document).on("click","#calcular", function(){
  num = $('#numero').val();

  if(num == ""){
    $("#resultado").html("<b>Nenhum número foi selecionado!</b>");
    $("#resultado").css("border", "0px");
  }
  
  else{
    $("#resultado").html(num + " X 1 = " + num*1 + "<br>" +
      num + " X 2 = " + num*2 + "<br>" +
      num + " X 3 = " + num*3 + "<br>" +
      num + " X 4 = " + num*4 + "<br>" +
      num + " X 5 = " + num*5 + "<br>" +
      num + " X 6 = " + num*6 + "<br>" +
      num + " X 7 = " + num*7 + "<br>" +
      num + " X 8 = " + num*8 + "<br>" +
      num + " X 9 = " + num*9 + "<br>" +
      num + " X 10 = " + num*10
    );

    $("#resultado").css("padding", "10px");
    $("#resultado").css("border", "solid black 1px");
  }
});