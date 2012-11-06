Dentro da aplicação do flex deve ter:
  Security.allowDomain("*");
  Security.allowInsecureDomain("*");
  
No HTML, deve ser passado como parâmetro ao objeto FLEX:
  allowFullScreen="always"

Ao rodar a aplicação, ela DEVE está rodando em um server.
OU SEJA, não funciona ao rodar o html como ARQUIVO LOCAL.

Exemplo:
Caso rode arquivo local, será lançado execessão de segurança:
file:///C:/Users/igorlima/igorlimaworkstation/github/F2JS/js/F2JS.html

Caso rode em um servidor, OK:
http://igorribeirolima.com.br/f2js/
