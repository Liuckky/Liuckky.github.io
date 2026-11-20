L.N | Portfólio

Site portfólio pessoal desenvolvido como projeto final, com HTML, CSS e JavaScript, usando a navbar do Bootstrap. É responsivo (funciona em celular, tablet e computador), tem versão em português e inglês e tema claro e escuro. Está publicado no GitHub Pages.

Funcionalidades:

Layout responsivo, com menu que vira em 90° ao deitar o celular, e uma ficha de dados na página inicial.
Versão em inglês (pasta en/), com botão para trocar de idioma em todas as páginas.
Tema claro e escuro: o site segue o tema do sistema na primeira visita e lembra a escolha depois.
Formulário de contato com validação de campos.
Botão de voltar ao topo, que aparece depois de rolar a página.
Tecnologias
HTML5
CSS3, com variáveis CSS (:root) e media queries
JavaScript (sem frameworks e sem bibliotecas além do Bootstrap)
Bootstrap 5.3, carregado por CDN (grade, navbar e formulário)
Fontes Archivo e Source Serif 4, do Google Fonts
GitHub Pages para hospedagem
Estrutura do projeto
Liuckky.github.io/
├── index.html            página inicial (português)
├── pages/                demais páginas em português
│   ├── sobre.html
│   ├── projetos.html
│   └── contato.html
├── en/                   versão em inglês
│   ├── index.html
│   ├── about.html
│   ├── projects.html
│   └── contact.html
├── css/
│   └── style.css         estilos do site e do tema escuro
├── js/
│   ├── script.js         formulário, botão de topo e ano do rodapé
│   └── tema.js           tema claro/escuro
├── images/               imagens e favicon
└── README.md

O conteúdo de cada página fica em seu próprio arquivo HTML, e os estilos, scripts e imagens ficam em pastas separadas.

Como o código funciona
HTML

Cada página tem a mesma estrutura: navbar do Bootstrap, conteúdo e rodapé. O link da página ativa recebe a classe active. A troca de idioma é feita por links entre páginas equivalentes (por exemplo, pages/sobre.html e en/about.html).

CSS (css/style.css)
As cores ficam em variáveis no :root (--papel, --tinta, --verde, --mostarda, entre outras), então dá para mudar o visual em um só lugar.
O tema escuro é um bloco [data-bs-theme="dark"] que redefine essas variáveis. O Bootstrap 5.3 usa o mesmo atributo para ajustar os componentes dele.
O responsivo combina a grade do Bootstrap com uma media query para telas de até 576 px (topo menor, botões em largura total).
JavaScript
js/tema.js é carregado no <head>, para o tema ser aplicado antes de a página aparecer. Ele lê a escolha salva no localStorage (ou o tema do sistema, via prefers-color-scheme), define o atributo data-bs-theme (na página e na navbar) e controla o botão de alternar.
js/script.js faz três coisas:
Escreve o ano atual no rodapé.
Mostra o botão de voltar ao topo quando a rolagem passa de 300 px.
Valida o formulário de contato (nome com pelo menos 2 caracteres, email em formato válido e mensagem com pelo menos 10 caracteres). Se estiver tudo certo, abre o programa de email com a mensagem pronta (mailto:), porque o GitHub Pages não tem servidor para enviar mensagens. As mensagens de erro seguem o idioma da página.
Como rodar localmente

Não precisa instalar nada. Baixe ou clone o repositório e abra o index.html no navegador. Se preferir usar um servidor local, rode na pasta do projeto:

bash
python -m http.server 8000

e acesse http://localhost:8000. É preciso ter internet, porque o Bootstrap e a fonte são carregados por CDN.

Como publicar no GitHub Pages
Crie um repositório público chamado seu-usuario.github.io.
Envie todos os arquivos para a raiz do repositório, mantendo as pastas.
Em Settings → Pages, escolha Deploy from a branch, a branch main e a pasta / (root).
Após alguns minutos, o site fica disponível em https://seu-usuario.github.io.
Como personalizar
Textos: edite os arquivos HTML (lembre de atualizar a versão em português e a em inglês).
Imagens: substitua os arquivos da pasta images/ mantendo os mesmos nomes (por exemplo, foto-perfil.jpg).
Projetos: altere os cartões em pages/projetos.html e en/projects.html, incluindo os links do GitHub.
Cores: mude as variáveis no início do css/style.css.
Autor

L.N, estudante de Ciência da Computação na UDF.

GitHub: github.com/Liuckky
Email: liuckyalt@gmail.com
