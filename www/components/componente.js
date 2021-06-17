// This is a JavaScript file

$document.on("click", "#buscar", function(){
  $.ajax({
      type:"get",
      url:viacep.com.br/ws/"+$("#cep").val()+"/json/
      success: function(data){
          var conteudo;
          conteudo = "<p> <strong>logradouro:</strong"+data.logradouro+"></p>";
          conteudo += "<p> <strong>bairro:</strong"+data.bairro+"></p>";
          conteudo += "<p> <strong>cidade:</strong"+data.localidade+"></p>";
          conteudo += "<p> <strong>estado:</strong"+data.data.uf+"></p>";

          $("dados").html(conteudo);
      },
      error: function(){
        alert("erro");
      }
  });
});