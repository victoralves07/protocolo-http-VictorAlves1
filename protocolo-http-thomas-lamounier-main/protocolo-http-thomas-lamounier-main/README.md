# protocolo-http-thomas-lamounier

**#Fundamentação**
-Cliente e servidor: o que acontece desde digitar uma URL no navegador até a página aparecer, de forma resumida?

O cliente coloca a URL e o seu navegador e tenta estabelecer uma conexão com o IP/Servidor dai o cliente manda um REQUEST pro SERVER e gera uma resposta o Cliente recebe e o navegador le o conteudo enviado e mostra pro usuario

-Anatomia da requisição e da resposta: linha inicial, cabeçalhos e corpo. Mostre um exemplo real de cada, tirado do seu próprio servidor.

```
import { pageAlunos, pageContato, pageCursos, pageHome, pageNOTFOUND } from "./view.js";

export function route(req,res) {
    if(req.method === "GET" && req.url === "/"){
        res.writeHead(200, { "Content-Type": "text/html"});
        res.end(pageHome())
        return;
    }
    res.writeHead(404, {"Content-Type": "text/html"})
    res.end(pageNOTFOUND())
}
```

linha inicial

aqui nesse codigo estou falando que se o USER tentar acessar/requerir a URL / (home page ou landpage que nesse caso seria a pagina inicial)
estou ditando que se ele tentar acessar essa pagina ele conseguiria acessar se fosse essa URL caso não seria mandando pra uma pagina não encontrada o 404
isso é um pedido do USER querer acessar o site então a linha inicial é oque o USER quer chegar se ele pediu EX: slasla.com/ ele vai ser madando pra cá mas se não chegar tem que mandar pro 404

cabeçalho

nesse espaço " res.writeHead(200, { "Content-Type": "text/html"});"
o {"Content-type":"text/html"} estou dizendo o tipo do cabeçalho carregado 
cabeçalho é os detalhes tecnicos ele dita oque é oque eu to te mandando

Corpo

```
let produtos = ["teclado", "mouse", "monitor"]

const itens = produtos.map((produto) => `<li>${produto}</li>`).join('');  

const html =`
<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<tittle>lista de produtos</tittle>
</head>
<body>
<h1>OLA SEJA BEM VINDO A LOJA DO TIÃO</h1>
<ul>
<li><a href="">${itens}</a></li>
</ul>
</body>
</html>
`
res.writeHead(200, { 'Content-Type': 'text/html' });
res.end(`${html}`);
```

aqui eu entreguei um corpo HTML pra mostrar os produtos aqui só to pedindo pra me mostrar uma lista e o corpo é isso ele carrega a estrutura as imagens e outras ele carrega a carga do site


**#Métodos: GET, POST, PUT, PATCH e DELETE, para que serve cada um, e o que significa um método ser seguro e idempotente.**

-get

pega informações guardadas no servidor

-post

coloca informações dentro do servidor

-put

coloca informações porém só faz isso sem efeito colateral e faz substituições permanentes

-patch

faz substituições ou alterações parciais porém possui efeito colaterais

-delete

remove/apaga essas informações

Referencias: textos redigidos com base nas informações adquiridas no site:
https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Methods/POST
https://www.devmedia.com.br/http-get-e-post/41221

**#Códigos de status: o que representa cada família (1xx a 5xx) e o significado de pelo menos 200, 201, 301, 302, 304, 400, 401, 403, 404, 405 e 500. Explique a diferença entre 401 e 403, e entre 301 e 302.**

-200 O código HTTP 200 OK é a resposta de status de sucesso que indica que a requisição foi bem sucedida. Uma resposta 200 é cacheável por padrão.(deu tudo certo)<small>https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Status/200</small>

-201 O status HTTP "201 Created" é utilizado como resposta de sucesso, indica que a requisição foi bem sucedida e que um novo recurso foi criado (a request pra criar algo deu bom)<small>https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Status/201</small>

-301 O código de resposta de status de redirecionamento 301 Moved Permanently do protocolo HTTP indica que o recurso requisitado foi movido permanentemente para a URL dada pelo cabeçalho Localização headers ( seu conteudo foi movido permanentemente)<small>https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Status/301</small>

-302 O código de estado HyperText Transfer Protocol (HTTP) 302 Found indica que o recurso foi temporariamente movido para a URL informada pelo cabeçalho Localização (esse muda temporario até voltar a informação então ele não vai voltar até que volte a informação pra ele mas se a informação nunca for voltar ai vira um 301 porém os motores de busca não atualizam o link inicial depois ele manda para a URL nova ou para alterada caso haja uma e for especificado qual o novo caminho/destino)<small>https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Status/302</small>

-304 O código de resposta HTTP de redirecionamento do cliente 304 Not Modified indica que não há necessidade de retransmitir a requisição de recursos(desde que foi acessado não alterou)<small>https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Status/304</small>

-400 O código de status de resposta HTTP 400 Bad Request indica que o servidor não pode ou não irá processar a requisição devido a alguma coisa que foi entendida como um erro do cliente (ele não consegue ou não pode te dar oque você pediu por que ele entendeu que nesse seu pedido seu navegador tava com algum tipo de problema antes de pedir)<small>https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Status/400</small>

-401 O código de resposta de status de erro do cliente HTTP 401 Unauthorized indica que a solicitação não foi aplicada porque não possui credenciais de autenticação válidas para o recurso de destino.(você pediu só que aquilo que você pediu não tem autorização pra aquilo por que você não tem credenciais para aquilo você é um ze ninguem tentando entrar na casa branca claramente você não tem autorização)<small>https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Status/401</small>

-403 O código de resposta de status de erro do cliente HTTP 403 Forbidden indica que o servidor entendeu o pedido, mas se recusa a autorizá-lo.(aqui é quando você tem as credenciais mas você não foi autorizado)<small>https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Status/403</small>

-404 A resposta de erro 404 Not Found indica que o servidor não conseguiu encontrar o recurso solicitado (não encontrou oque você queria encontrar)<small>https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Status/404</small>

-405 Este status de resposta indica que o verbo HTTP utilizado não é suportado, por exemplo: a requisição ocorre por meio de um get, porém o único método disponível é o post( é quando você tem a chave mas pra entrar na sua casa não adianta ter a chave porque você só entra na sua casa com a chave da sua casa ela é a unica ou uma das unicas que você consegue acessar sua casa porque só aceita esse tipo de chave)<small>https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Status/405</small>

-500 Quando o servidor retorna um código de erro (HTTP) 500, indica que encontrou uma condição inesperada e que o impediu de atender à solicitação.(quando é erro interno no servidor)<small>https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Status/500</small>

**#Cabeçalhos: para que servem e o papel de pelo menos Content-Type, Content-Length, Location, Allow, Cache-Control, User-Agent e Accept.**

accept
-O cabeçalho de requisição HTTP Accept anuncia quais tipos de conteúdo, expressos como MIME types, o cliente é capaz de entender.(ele diz qual deve ser lido e interpretado)<small>https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Headers/Accept</small>

content-type
-O cabeçalho Content-Type é utilizado para indicar o tipo de arquivo do recurso. ( dita o tipo do conteudo)<small>https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Headers/Content-Type</small>

content-lenght
-O cabeçalho de entidade Content-Length indica o tamanho do corpo da entidade, em bytes, enviado ao destinatário.(fala quanta pesa a entidade dizendo seu tamanho)<small>https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Headers/Content-Length</small>

Location
-O cabeçalho de resposta Location indica o URL para qual página deve-se ser redirecionada. Ele só tem significado quando é enviado junto a uma resposta de status 3xx (redirecionamento) ou 201 (criado).(mostra para onde foi mandado ou aonde foi criado )<small>https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Headers/Location</small>

Allow
-O cabeçalho de resposta Allow lista um conjunto de métodos suportados pelo recurso.(lista oque ele suporta, não tem muito oque dizer se o server te manda "Method Not Allowed 405" ai se usa ele )<small>https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Headers/Allow</small>

Cache-control
-O campo de cabeçalho genérico Cache-Control é usado para especificar diretivas para mecanismos de cache tanto em requisições quanto em respostas ( ele guia o cache ele fala como que vai ser mandados os arquivos temporarios)<small>https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Headers/Cache-Control</small>

User-agent
-O cabeçalho de requisição User-Agent é uma cadeia de caracteres característica que permite servidores e pares de rede identificar a aplicação, sistema operacional, fornecedor, e/ou versão do agente de usuário requisitante.(ele fala quem é o usuario falando suas crendenciais).<small>https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Headers/User-Agent</small>

**#HTTP é stateless: o que isso significa e por que o servidor não lembra de uma requisição para a outra.**

O "HTTP é stateless" fala que o http é sem estado/sem memoria porque que ele não armazena memoria ele funciona dessa maneira porque se ele armazena-se dados de todos os usuarios teria um consumo imenso de Ram e eventualmente explodiria com o aumento exponencial da rede, ele opera sem guardar dados para que possa ser escalaval fazendo com que muitos usuarios possam usufruir dele para isso ele trata sempre como se fosse a primeira vez do usuario. o jeito que eles usam para "guardar memoria" no caso é você que guarda com os seus cookies, dai toda vez num pedido e numa resposta ele confirma com seus cookies e identifica você

**#HTTP x HTTPS: a diferença, de forma resumida.**

http você faz o envio de pacotes porém esses pacotes não são criptografados então qqlr um pode acessar seu pacote se ele se interferir na rede, ja o https ele pega seu pacote embaralha os dados e manda o pacote criptografado e o servidor e você que tem a chave descriptografa para fazer a leitura


**#Conclusão**

A maioria dos servidores produzidos em aula foram todos ou com 200 ou 404 porém ao fazer essa aula o 301/Location foi um dos mais legais de se programar e as vezes tem em alguns sites e a gente nem percebe então minha visão sobre servidores mudou para que aparentemente em cada situação existe um numero cituando o erro e em todos meus servidores eu gostaria de destacar exatamente oque aconteceu!


DEV_MEDIA. HTTP: GET e POST. Rio de Janeiro: DevMedia, 2020. Disponível em: https://www.devmedia.com.br/http-get-e-post/41221. Acesso em: 15 out. 2026.
MDN WEB DOCS. PATCH. [S. l.]: MDN Contributors, 2026. Disponível em: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Methods/PATCH. Acesso em: 15 out. 2026.
MDN WEB DOCS. 500 Internal Server Error. [S. l.]: MDN Contributors, 2025. Disponível em: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Status/500. Acesso em: 15 out. 2026.

Texto redigidos por autoria própria e usado AI apenas para desenvolver linhas de pensamento nenhum texto foi redigido por AI. 
GOOGLE. Gemini 4 Argon. Ferramenta de inteligência artificial generativa.
Data de uso: 13 out. 2026.
Finalidade: explicação geral de oque é linha inicial, cabeçalho e corpo no http.
Arquivos impactados: README.md
Prompt gerado para entendimento da pergunta:
```
Resumindo a ideia para você colocar na sua cabeça:

    Linha inicial: É o título do pedido (ex: "Quero ver a página sobre").

    Cabeçalhos: São os detalhes técnicos e as regras (ex: "O arquivo é do tipo HTML e pesa 200 bytes").

    Corpo: É a carga principal (ex: o desenho da página, o texto ou a imagem em si).

```

GOOGLE. Gemini 4 Argon. Ferramenta de inteligência artificial generativa.
Data de uso: 13 out. 2026.
Finalidade: explicação dos textos lidos no site "https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Methods/PATCH" e suas variantes a depender da seção em que estava se respondendo para melhor compreensão
Arquivos impactados: README.md
Oque afetou: Ele fez minha linha de pensamento para escrever sobre os texto (mais a padronização abnt das referencias)
