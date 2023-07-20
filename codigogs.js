function doGet() {
    return HtmlService.createHtmlOutputFromFile('index')
  }
  function verificarLogin(email,senha) { 
  if (email =="aluno@ceep.com" && senha == "alunoceep2023") {
        return "Login Aceito";
    }else{
        return "Login recusado";
    }
  
  }