Dentro da aplica��o do flex deve ter:
  Security.allowDomain("*");
  Security.allowInsecureDomain("*");
  
No HTML, deve ser passado como par�metro ao objeto FLEX:
  allowFullScreen="always"

Ao rodar a aplica��o, ela DEVE est� rodando em um server.
OU SEJA, n�o funciona ao rodar o html como ARQUIVO LOCAL.

Exemplo:
Caso rode arquivo local, ser� lan�ado execess�o de seguran�a:
file:///C:/Users/igorlima/igorlimaworkstation/github/F2JS/js/F2JS.html

Caso rode em um servidor, OK:
http://igorribeirolima.com.br/f2js/
