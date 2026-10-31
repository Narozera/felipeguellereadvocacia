import {
  job,
  fml,
  cns,
  digital,
  civil,
  whats,
  email,
  timer,
  location,
  linkedin,
  instagram,
  people,
  building,
  chain,
  family,
  checklist,
  dish,
  bank,
  hospital,
  consumer,
  familyTree,
  contract,
  realEstate,
  home,
  shield,
  homeOffice,
} from "../assets";

const whatsappUrl = "https://api.whatsapp.com/send?phone=5511955557002";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Av.+Paulista,+1471,+Conjunto+1110,+S%C3%A3o+Paulo+-+SP";

export const menu = [
  {
    id: 1,
    text: "Atuação",
    href: "#jobs",
  },
  {
    id: 2,
    text: "Sobre",
    href: "#about",
  },
  {
    id: 3,
    text: "Contato",
    href: "#contact",
  },
];

export const hero = {
  tag: "Advogado Trabalhista · São Paulo",
  title: "Advocacia Trabalhista com estratégia, transparência e profissionalismo.",
  text: "Defesa dos direitos do trabalhador e assessoria preventiva para empresas, com atendimento direto e personalizado. Atuação também em Direito Civil, de Família, do Consumidor e Digital.",
  button: "Fale pelo WhatsApp",
  buttonHref: whatsappUrl,
  secondary: "Conheça as áreas de atuação",
  secondaryHref: "#jobs",
  highlights: [
    {
      id: 1,
      title: "Reclamações Trabalhistas",
      text: "Para o empregado que teve seus direitos desrespeitados.",
    },
    {
      id: 2,
      title: "Defesas Trabalhistas",
      text: "Representação processual estratégica para empresas.",
    },
    {
      id: 3,
      title: "Compliance Trabalhista",
      text: "Prevenção de riscos e redução de passivos.",
    },
  ],
};

export const labor = {
  tag: "Especialidade principal",
  title: "Direito do Trabalho",
  text: "O Direito do Trabalho regula as relações entre empregados e empregadores, protegendo os direitos dos trabalhadores e promovendo um ambiente de trabalho justo. É o foco da atuação do escritório, tanto na defesa do trabalhador quanto na proteção da empresa.",
  img: job,
  alt: "Trabalho",
  audiences: [
    {
      id: 1,
      icon: people,
      alt: "Pessoas",
      title: "Para o empregado",
      text: "Reclamações Trabalhistas compreendendo todos os direitos e benefícios: verbas rescisórias, horas extras, férias, 13º salário, FGTS, adicionais previstos em lei, licença maternidade e paternidade, equiparação salarial, entre outros.",
    },
    {
      id: 2,
      icon: building,
      alt: "Empresa",
      title: "Para a empresa",
      text: "Defesas Trabalhistas e representação processual estratégica, levando em consideração o segmento da empresa, com participação em audiências de conciliação, mediação, instrução e julgamento.",
    },
  ],
  services: [
    "Compliance Trabalhista: prevenção de riscos e redução de passivos",
    "Auditoria trabalhista preventiva",
    "Revisão de contratos e políticas internas",
    "Adequação à legislação, normas coletivas e eSocial",
    "Elaboração de contratos de trabalho",
    "Implantação do PAT e controle de jornada",
    "Orientação estratégica e treinamentos internos",
  ],
};

export const titleJobs = {
  tag: "Áreas de atuação",
  title: "Atuação também em outras áreas do Direito",
};

export const jobs = [
  {
    id: 1,
    img: cns,
    alt: "Consumidor",
    title: "Direito do Consumidor",
    text: "Regula as relações comerciais entre consumidores e empresas, protegendo os interesses dos consumidores e equilibrando a relação de poder entre as partes.",
    items: [
      {
        id: 1,
        icon: bank,
        alt: "Banco",
        text: "Atuação em questões relacionadas a empréstimos, financiamentos, cartões de crédito, cheque especial, cobranças abusivas, dentre outros assuntos relacionados a instituições financeiras.",
      },
      {
        id: 2,
        icon: consumer,
        alt: "Consumidor",
        text: "Atuação em defesa dos direitos do consumidor de pessoas físicas em geral, incluindo ações judiciais individuais e coletivas, consultoria e elaboração de contratos e pareceres jurídicos.",
      },
      {
        id: 3,
        icon: hospital,
        alt: "Hospital",
        text: "Atuação em questões relacionadas a planos de saúde, responsabilidade civil médica, produtos médicos, dentre outros assuntos relacionados à saúde.",
      },
    ],
  },
  {
    id: 2,
    img: fml,
    alt: "Família",
    title: "Direito de Família",
    text: "Regulariza as relações entre os membros da família e as influências que exercem sobre as pessoas e os bens, promovendo um ambiente familiar saudável e justo.",
    items: [
      {
        id: 1,
        icon: chain,
        alt: "Correntes",
        title: "Separação e Divórcio",
        text: "Ambos os procedimentos podem ser realizados via tabelionato de notas em caso de dissolução consensual. Na hipótese de litígio, o procedimento deve ser judicial.",
      },
      {
        id: 2,
        icon: checklist,
        alt: "Caderno",
        title: "Inventários",
        text: "Procedimento judicial ou extrajudicial visando a partilha dos bens deixados pelo falecido entre os herdeiros.",
      },
      {
        id: 3,
        icon: dish,
        alt: "Prato",
        title: "Pensão Alimentícia",
        text: "Quantia fixada judicialmente para atender às necessidades do dependente familiar.",
      },
      {
        id: 4,
        icon: family,
        alt: "Família",
        title: "Guarda e Visitas",
        text: "Definição de quem fica com a guarda dos filhos e de como será o convívio com o outro genitor, sempre priorizando o melhor interesse da criança.",
      },
    ],
  },
  {
    id: 3,
    img: civil,
    alt: "Civil",
    title: "Direito Civil",
    text: "Regulamenta as relações jurídicas entre as pessoas e seus bens, tratando de propriedade, contratos, responsabilidade civil, sucessões e patrimônio.",
    items: [
      {
        id: 1,
        icon: familyTree,
        alt: "Árvore genealógica",
        text: "Atuação em questões relacionadas a testamentos, heranças, partilha de bens, dentre outras.",
      },
      {
        id: 2,
        icon: contract,
        alt: "Contrato",
        text: "Atuação em questões relacionadas a contratos, cobranças, indenizações, dentre outras.",
      },
      {
        id: 3,
        icon: realEstate,
        alt: "Imóvel",
        text: "Atuação em locações (Lei 8.245/91), ações de despejo, revisionais e renovatórias de aluguel.",
      },
      {
        id: 4,
        icon: home,
        alt: "Casa",
        text: "Atuação em questões relacionadas a propriedade, posse, usucapião, dentre outras.",
      },
    ],
  },
  {
    id: 4,
    img: digital,
    alt: "Digital",
    title: "Direito Digital e Compliance",
    text: "Regula as relações jurídicas no ambiente virtual, abrangendo proteção de dados, privacidade, comércio eletrônico, crimes virtuais e propriedade intelectual.",
    items: [
      {
        id: 1,
        icon: shield,
        alt: "Escudo",
        text: "Atuação em questões relacionadas à coleta, armazenamento e uso de dados pessoais, com adequação à Lei Geral de Proteção de Dados (LGPD). Além de questões relacionadas a direitos autorais, marcas e outras formas de propriedade intelectual.",
      },
      {
        id: 2,
        icon: homeOffice,
        alt: "Home Office",
        text: "Atuação em questões relacionadas ao trabalho remoto, ao uso da tecnologia no ambiente de trabalho e à proteção de dados do trabalhador.",
      },
    ],
  },
];

export const about = {
  tag: "Sobre",
  name: "Felipe Guellere",
  role: "Advogado e sócio da Guellere Sociedade de Advogados",
  paragraphs: [
    "Graduado em Direito e pós-graduado em Direito Digital e Compliance pela Faculdade de Direito IBMEC SP, construí minha carreira passando pelo Tribunal de Justiça de São Paulo, por escritórios de advocacia e pelo departamento jurídico de uma empresa privada.",
    "Hoje, à frente da Guellere Sociedade de Advogados, atuo com foco no Direito do Trabalho, na defesa de trabalhadores e na assessoria preventiva de empresas, além de prestar consultoria nas áreas cível, de família, do consumidor e digital.",
    "Meu compromisso é tratar cada cliente com excelência, respeito e integridade, com atenção específica à causa e às condições de quem me contrata.",
  ],
  stats: [
    { id: 1, value: "2017", label: "no Direito desde" },
    { id: 2, value: "+90", label: "processos gerenciados em carteira" },
    { id: 3, value: "TJSP", label: "experiência em gabinete" },
  ],
  education: [
    {
      id: 1,
      title: "Pós-graduação em Direito Digital e Compliance",
      place: "IBMEC SP",
      period: "2022 – 2023",
    },
    {
      id: 2,
      title: "Bacharelado em Direito",
      place: "IBMEC SP",
      period: "2017 – 2021",
    },
  ],
};

export const contact = {
  tag: "Contato",
  title: "Vamos conversar sobre o seu caso",
  text: "Entre em contato pelo WhatsApp ou e-mail para agendar um atendimento presencial ou online.",
  button: "Chamar no WhatsApp",
  buttonHref: whatsappUrl,
};

export const footerTitle = "Redes Sociais";

export const footerText = [
  {
    id: 1,
    text: "(11) 95555-7002",
    icon: whats,
    alt: "WhatsApp",
    href: whatsappUrl,
  },
  {
    id: 2,
    text: "felipeguellere@hotmail.com",
    icon: email,
    alt: "Email",
    href: "mailto:felipeguellere@hotmail.com",
  },
  {
    id: 3,
    text: "9:00 às 18:00 | Segunda a Sexta-feira",
    icon: timer,
    alt: "Horário",
  },
  {
    id: 4,
    text: "Av. Paulista, 1471, Conjunto 1110 · São Paulo/SP",
    icon: location,
    alt: "Localização",
    href: mapsUrl,
  },
];

export const footerIcons = [
  {
    id: 1,
    icon: linkedin,
    href: "https://www.linkedin.com/in/felipeguellere/",
    alt: "Linkedin",
  },
  {
    id: 2,
    icon: instagram,
    href: "https://www.instagram.com/felipeguellere.adv/",
    alt: "Instagram",
  },
];
