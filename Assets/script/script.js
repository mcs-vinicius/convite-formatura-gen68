var lista_alunos = document.getElementById('alunos');

alunos = [
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Aline.png?updatedAt=1706233531232',
    nome: 'Aline Conchetta ',
    descricao: 'Desenvolvedor FullStack Jr',
    cidade: 'São Paulo - SP',
    linkedin: 'aline-conchetta',
    github: 'AlineConchetta',
    email: 'alineconchetta@gmail.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Amanda.png?updatedAt=1706233531506',
    nome: 'Amanda Tsai ',
    descricao: 'Desenvolvedor FullStack Jr',
    cidade: 'São Paulo - SP',
    linkedin: 'amandapereira2000',
    github: 'amandats4i',
    email: 'amandatsai16@gmail.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Antonio.png?updatedAt=1706233531411',
    nome: 'Antonio Bandeira ',
    descricao: 'Desenvolvedor FullStack Jr',
    cidade: 'São Paulo - SP',
    linkedin: 'antoniovvbandeira',
    github: 'antonioviniciusvb',
    email: 'antonioviniciusvb@outlook.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Bruno.png?updatedAt=1706233531490',
    nome: 'Bruno Cesar',
    descricao: 'Desenvolvedor FullStack Jr',
    cidade: 'São Paulo - SP',
    linkedin: 'bcssilva',
    github: 'Cesar-bruno',
    email: 'cesarbruno53@gmail.com ',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Bryan.png?updatedAt=1706233531636',
    nome: 'Bryan Vieira',
    descricao: 'Desenvolvedor FullStack Jr',
    cidade: 'São Paulo - SP',
    linkedin: 'bryan-vieira',
    github: 'uPadrin',
    email: 'bryan.vieira2013@gmail.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Carolina.png?updatedAt=1706233531962',
    nome: 'Carolina Dias',
    descricao: 'Desenvolvedor FullStack Jr',
    cidade: 'São Paulo - SP',
    linkedin: 'carolinasdias',
    github: 'carolinasdias',
    email: 'carolina_sdias@hotmail.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Danielle.png?updatedAt=1706233532157',
    nome: 'Danielle M. Okuma',
    descricao: 'Desenvolvedora FullStack jr | Eng. Eletrônica',
    cidade: 'São Paulo - SP',
    linkedin: 'danielle-okuma',
    github: 'DaniOkuma',
    email: 'daniellemokuma@gmail.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Debora.png?updatedAt=1706233532559',
    nome: 'Debora Rodrigues',
    descricao: 'Desenvolvedora FullStack jr',
    cidade: 'Caieiras - SP',
    linkedin: 'deborah-rodrigues001',
    github: 'Deborah001-jpg',
    email: 'deborag.g17@gmail.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Douglas.png?updatedAt=1706233532462',
    nome: 'Douglas Rosolini',
    descricao: 'Desenvolvedora FullStack jr',
    cidade: 'São Paulo - SP',
    linkedin: 'douglas-rosolini-correia-614677239',
    github: 'douglasrc8',
    email: 'douglasrc1912@gmail.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Elisabeth.png?updatedAt=1706233532912',
    nome: 'Elisabeth Aparecida',
    descricao: 'Desenvolvedora FullStack jr',
    cidade: 'São Paulo - SP',
    linkedin: 'elisabeth-aparecida',
    github: 'bettyap',
    email: 'beth_ap@live.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Felipe.png?updatedAt=1706233532769',
    nome: 'Felipe Vieira',
    descricao: 'Desenvolvedora FullStack jr',
    cidade: 'São Paulo - SP',
    linkedin: 'felipe-vieira-b4473518b',
    github: 'berluccini',
    email: 'femlkblz@hotmail.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/GabrielRodrigues.png?updatedAt=1706233533214',
    nome: 'Gabriel Rodrigues ',
    descricao: 'Desenvolvedor FullStack Jr',
    cidade: 'São Paulo - SP',
    linkedin: 'gabrielrodriguesz',
    github: 'gabzoom',
    email: 'gabriel.rodriguesxs@gmail.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/GabrielSponda.png?updatedAt=1706233533223',
    nome: 'Gabriel Sponda ',
    descricao: 'Desenvolvedor FullStack Jr',
    cidade: 'São Paulo - SP',
    linkedin: 'gabrielsponda',
    github: 'gabrielsponda',
    email: 'spondagabriel@gmail.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Gercidio.png?updatedAt=1706233532975',
    nome: 'Gercidio Valeriano',
    descricao: 'Desenvolvedor FullStack Jr',
    cidade: 'São Paulo - SP',
    linkedin: 'gercidiovaleriano',
    github: 'Gercidio',
    email: 'gercidio.valeriano@gmail.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Guilherme.png?updatedAt=1706233532784',
    nome: 'Guilherme Goes ',
    descricao: 'Desenvolvedor FullStack Jr',
    cidade: 'São Paulo - SP',
    linkedin: 'guilherme-g-silva-98aba4284',
    github: 'thegoes',
    email: 'guilhermegoesoc32@gmail.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Jennifer.png?updatedAt=1706233533425',
    nome: 'Jeniffer Ribeiro ',
    descricao: 'Desenvolvedor FullStack Jr',
    cidade: 'São Paulo - SP',
    linkedin: 'ribeirojeniffer',
    github: 'jenifferribeiro',
    email: 'js.ribei@hotmail.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Kendal.png?updatedAt=1706233533837',
    nome: 'Kendal K. Correia ',
    descricao: 'Desenvolvedor FullStack Jr',
    cidade: 'São Paulo - SP',
    linkedin: 'kendal-katherine-correia',
    github: 'Kendal-Katherine',
    email: 'kendal.katherine3@gmail.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Luiza.png?updatedAt=1706233534032',
    nome: 'Luiza Kormann',
    descricao: 'Desenvolvedor FullStack Jr',
    cidade: 'São Paulo - SP',
    linkedin: 'luizakormann',
    github: 'luizakormann',
    email: 'luiza.kormann@gmail.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Luiz.png?updatedAt=1706233534262',
    nome: 'Luiz Eduardo',
    descricao: 'Desenvolvedor FullStack Jr',
    cidade: 'São Paulo - SP',
    linkedin: 'luiz-eduardosc',
    github: 'LuizEduardoSC',
    email: 'luizeduardoedd1@gmail.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Matheus-soares.png?updatedAt=1706233530067',
    nome: 'Matheus Soares',
    descricao: 'Desenvolvedor FullStack Jr',
    cidade: 'São Paulo - SP',
    linkedin: 'matheus-soares-rodrigues-a56b11238',
    github: 'MatheusSoares48',
    email: 'matheus.soaresrodrigues.2004@gmail.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/MatheusTexeira.png?updatedAt=1706233530188',
    nome: 'Matheus Teixeira',
    descricao: 'Desenvolvedor FullStack Jr',
    cidade: 'São Paulo - SP',
    linkedin: 'mdteixeira15/',
    github: 'mdteixeira',
    email: 'matheusdiegoteixeira@gmail.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Maria.png?updatedAt=1706233530532',
    nome: 'Maria Leiliane',
    descricao: 'Desenvolvedor FullStack Jr',
    cidade: 'São Paulo - SP',
    linkedin: 'mlls',
    github: 'Marilyn-FullStack',
    email: 'm.leiliane.lobo@gmail.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/NatanLopes.png?updatedAt=1706233529976',
    nome: 'Natan Lopes',
    descricao: 'Desenvolvedor FullStack Jr',
    cidade: 'São Paulo - SP',
    linkedin: 'nathan-lopes-da-silva-8b4962279',
    github: 'NathanLPS',
    email: 'nathan_lopes147@hotmail.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/NatanOliveira.png?updatedAt=1706233530063',
    nome: 'Natan Oliveira',
    descricao: 'Desenvolvedor FullStack Jr',
    cidade: 'São Paulo - SP',
    linkedin: 'natan-oliveira-santos-7a5b47294',
    github: 'NatanOSantos',
    email: 'natanoliveirasantosmed@gmail.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Pablo.png?updatedAt=1706233530074',
    nome: 'Pablo Maia',
    descricao: 'Desenvolvedor FullStack Jr',
    cidade: 'São Paulo - SP',
    linkedin: 'pablo-hsm',
    github: 'pxmiddle',
    email: 'pablo.h.s.maia@gmail.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Pedro.png?updatedAt=1706233529793',
    nome: 'Pedro Bernardo',
    descricao: 'Desenvolvedor FullStack Jr',
    cidade: 'Diadema - SP',
    linkedin: 'pedro-hs-bernardo',
    github: 'pedro-hsb',
    email: 'pedro.bernardo4561@gmail.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Samara.png?updatedAt=1706233529687',
    nome: 'Samara Almeida',
    descricao: 'Desenvolvedor FullStack Jr',
    cidade: 'São Paulo - SP',
    linkedin: 'samara-almeida-als',
    github: 'als-samara',
    email: 'samaraalmeida379@gmail.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Sthefanie.png?updatedAt=1706233530620',
    nome: 'Sthefany Sousa',
    descricao: 'Desenvolvedor FullStack Jr',
    cidade: 'São Paulo - SP',
    linkedin: 'sthefany-sousa-da-silva-bastos-873264232',
    github: 'SthefayBastos',
    email: 'sthefanyssbastos@hotmail.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Victoria.png?updatedAt=1706233530050',
    nome: 'Victória Moraes',
    descricao: 'Desenvolvedor FullStack Jr',
    cidade: 'Itapevi - SP',
    linkedin: 'victória-moraes',
    github: 'VictoriaCM',
    email: 'victoria.candido.mm@gmail.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Vinicius.png?updatedAt=1706233530929',
    nome: 'Vinicius Monteiro',
    descricao: 'Desenvolvedor FullStack Jr | Analista de Sistemas',
    cidade: 'São Paulo - SP',
    linkedin: 'viniciusmcsilva',
    github: 'mcs-vinicius',
    email: 'moonkraft_dev@outlook.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Vitor.png?updatedAt=1706233531355',
    nome: 'Vitor Nascimento',
    descricao: 'Desenvolvedor FullStack Jr',
    cidade: 'São Paulo - SP',
    linkedin: 'vitor-do-nascimento-ferreira',
    github: 'Vitornasc3',
    email: 'vitornasc673@gmail.com',
  },
  {
    foto: 'https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Wallysson.png?updatedAt=1706233531152',
    nome: 'Wallysson Christian ',
    descricao: 'Desenvolvedor FullStack Jr',
    cidade: 'São Paulo - SP',
    linkedin: 'wallysson-araujo',
    github: 'WallyssonChristian',
    email: 'wallysson.christian@outlook.com',
  },
];

var svg_email =
  '<svg xmlns="http://www.w3.org/2000/svg"width="24"height="24"viewBox="0 0 24 24"fill="none"stroke="currentColor"stroke-width="2"stroke-linecap="round"stroke-linejoin="round"class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>';

var svg_instagram =
  '<svg xmlns="http://www.w3.org/2000/svg"width="16"height="15.999"viewBox="0 0 16 15.999"><path id="Subtraction_4"data-name="Subtraction 4"d="M6-582H-2a4,4,0,0,1-4-4v-8a4,4,0,0,1,4-4H6a4,4,0,0,1,4,4v8A4,4,0,0,1,6-582ZM2-594a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4.005,4.005,0,0,0,2-594Zm4.5-2a1,1,0,0,0-1,1,1,1,0,0,0,1,1,1,1,0,0,0,1-1A1,1,0,0,0,6.5-596ZM2-587.5A2.5,2.5,0,0,1-.5-590,2.5,2.5,0,0,1,2-592.5,2.5,2.5,0,0,1,4.5-590,2.5,2.5,0,0,1,2-587.5Z"transform="translate(6 598)"></path></svg>';

var svg_linkedin =
  '<svg xmlns="http://www.w3.org/2000/svg" x="0px"y="0px"width="50"height="50"viewBox="0,0,256,256"style="fill: #000000"><g fill="#ffffff"fill-rule="nonzero"stroke="none"stroke-width="1"stroke-linecap="butt"stroke-linejoin="miter"stroke-miterlimit="10"stroke-dasharray=""stroke-dashoffset="0"font-family="none"font-weight="none"font-size="none"text-anchor="none"style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path></g></g></svg>';

var svg_github =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>';

// ordena por ordem alfabética
// from: https://www.freecodecamp.org/news/how-to-sort-alphabetically-in-javascript/

alunos.sort(function (a, b) {
  if (a.nome < b.nome) {
    return -1;
  }
  if (a.nome > b.nome) {
    return 1;
  }
  return 0;
});

// verifica se a string correspondente está vazia (ainda não implementado)
// object.name?.isEmpty ?? 'default value'

alunos.forEach((aluno) => {
  var li = document.createElement('li');

  li.setAttribute('class', 'card');

  li.innerHTML =
    // email
    '<a href="mailto:' +
    aluno.email +
    '" class="mail">' +
    svg_email +
    '</a>' +
    // imagem
    '<div class="profile-pic"><div class="back-profile"><img src="' +
    aluno.foto +
    '" alt="" /></div></div>' +
    // nome
    '<div class="bottom"><div class="content">' +
    '<h3 class="name-card">' +
    aluno.nome +
    '</h3>' +
    '<h4 class="about-me">' +
    aluno.descricao +
    '</h4>' +
    '<span class="about-me">' +
    aluno.cidade +
    '</span></div>' +
    // social links
    '<div class="bottom-bottom"><div class="social-links-container">' +
    '<a href="https://www.linkedin.com/in/' +
    aluno.linkedin +
    '/">' +
    svg_linkedin +
    '</a>' +
    '<a href="https://github.com/' +
    aluno.github +
    '"> ' +
    svg_github +
    ' </a> </div>' +
    '<a class="button" href="mailto:' +
    aluno.email +
    '">Contact Me</a></div></div></li>';
  lista_alunos.appendChild(li);
});
