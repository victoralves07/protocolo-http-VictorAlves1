export function route(request, response) {
const parsedUrl = new URL(request.url, `http://${request.headers.host}`);
  const pathname = parsedUrl.pathname;


  if (request.method === 'GET' && pathname === '/busca') {
    const termo = parsedUrl.searchParams.get('termo');

    if (!termo) {
      response.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
      response.end('<h1>Erro 400: O parâmetro "termo" é obrigatório na busca.</h1>');
      return;
    }

    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(`<h1>Você buscou por: ${termo}</h1>`);
    return;
  }

  if (request.method === 'GET' && request.url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end('<h1>Bem-vindo à página inicial!</h1>');
    return;
  }

  if (request.method === 'GET' && request.url === '/admin') {
    response.writeHead(403, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(`<h1>VOCÊS Não PASSARAM</h1>
          <img src="https://t2.tudocdn.net/307995?w=1920" alt="gandalf image">
      `);
    return;
  }

  if (request.method === 'GET' && request.url === '/sobre') {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end("<h1>TA TUDO ERRADO ESSE METODO AI</h1>");
    return;
  }
  if (pathname === '/contato') {
    if (request.method === 'POST') {
      response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      response.end('<h1>Contato recebido com sucesso!</h1>');
      return;
    }
    
    response.writeHead(405, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end('<h1>TA TUDO ERRADO ESSE METODO AI</h1>');
    return;
  }

  if (request.method === 'GET' && request.url === '/antigo') {
    response.writeHead(301, { 'Content-Type': 'text/html; charset=utf-8', 'Location': '/sobre' });
    response.end('Página movida permanentemente');
    return;
  }

  response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end("<h1>Página não encontrada</h1>");
};
