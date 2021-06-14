// This is a JavaScript file

var num;

$(document).on("click","#calcular", function(){
  num = $('#numero').val();

  valorInvalido = function(){
    $("#resultado").html("<b>Nenhum número foi selecionado!</b>");
    $("#resultado").css("border", "none");
  }

  mostrarTabuada = function(){
    var resultado, tabuada="";

    for(var a = 1; a <= num; a++){
      resultado = num * a;
      tabuada += num + " X "+ a+ " = " + resultado + "<br>";
    }
    
    $("#resultado").html(tabuada);
    $("#resultado").css("border", "solid black 1px");
  }

  if(num == "") {
    valorInvalido();
  } else {
    mostrarTabuada();
  }
});