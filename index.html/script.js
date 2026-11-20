/* ===== Edite seus dados aqui ===== */
const perfil = {
  nome: "Lucas Nunes",
  frase: "Organizo informação para que ela faça sentido para quem vai usar.",
  ficha: [
    ["Curso", "Ciência da Computação"],
    ["Instituição", "UDF"],
    ["Foco", "Banco de dados e web"],
    ["Cidade", "Brasília, DF"],
    ["Status", "Em busca do primeiro emprego"]
  ],
  sobre: [
    "Sou estudante de Ciência da Computação na UDF e estou em busca da minha primeira oportunidade profissional. Ainda não tenho experiência em empresa, mas tenho projetos que mostram como eu penso: modelo os dados com cuidado, escrevo as consultas e testo até funcionar.",
    "Aprendo rápido e gosto de entender o porquê das coisas antes de sair programando. Estou aberto a estágio ou vaga júnior em desenvolvimento, banco de dados ou áreas próximas, e quero aprender dentro de uma equipe de verdade."
  ],
  contato: [
    ["liuckyalt@gmail.com", "mailto:liuckyalt@gmail.com"],
    ["github.com/seu-usuario", "https://github.com/seu-usuario"],
    ["linkedin.com/in/seu-usuario", "https://www.linkedin.com/in/seu-usuario"]
  ]
};

const projetos = [
  {
    ano: "2026",
    titulo: "Oficina de veículos",
    descricao: "Modelo entidade-relacionamento, script SQL e consultas para controlar clientes, veículos e ordens de serviço.",
    stack: "SQL, modelagem ER",
    link: "https://github.com/seu-usuario/projeto-oficina"
  },
  {
    ano: "2026",
    titulo: "Este portfólio",
    descricao: "Site responsivo feito à mão com HTML, CSS e JavaScript, publicado no GitHub Pages.",
    stack: "HTML, CSS, JavaScript, Bootstrap",
    link: "https://github.com/seu-usuario/seu-usuario.github.io"
  }
];

const habilidades = [
  ["Banco de dados", "C, C++, SQL, MySQL, modelagem entidade-relacionamento"],
  ["Web", "HTML, CSS, JavaScript, Bootstrap"],
  ["Ferramentas", "Git, GitHub, VS Code"]
];

const $ = id => document.getElementById(id);

document.title = perfil.nome;
$("marca").textContent = perfil.nome.toLowerCase();
const partes = perfil.nome.split(" ");
$("nome").innerHTML = partes.length > 1
  ? `${partes[0]}<br>${partes.slice(1).join(" ")}`
  : perfil.nome;
$("frase").textContent = perfil.frase;

$("ficha").innerHTML = perfil.ficha
  .map(([campo, valor]) => `<div><dt>${campo}</dt><dd>${valor}</dd></div>`).join("");

$("textoSobre").innerHTML = perfil.sobre.map(p => `<p>${p}</p>`).join("");

$("listaProjetos").innerHTML = projetos.map(p => `
  <a class="linha" href="${p.link}" target="_blank" rel="noopener">
    <span class="ano">${p.ano}</span>
    <div><h3>${p.titulo}</h3><p>${p.descricao}</p></div>
    <span class="stack">${p.stack}</span>
  </a>`).join("");

$("listaHabilidades").innerHTML = `<dl class="m-0">${habilidades
  .map(([grupo, itens]) => `<div class="hab"><dt>${grupo}</dt><dd>${itens}</dd></div>`).join("")}</dl>`;

$("listaContato").innerHTML = perfil.contato
  .map(([texto, url]) => `<li><a href="${url}" target="_blank" rel="noopener">${texto}</a></li>`).join("");
$("rodape").textContent = `© ${new Date().getFullYear()} ${perfil.nome}`;