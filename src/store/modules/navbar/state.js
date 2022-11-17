export default {
  navbarList: [
    // TIPOS DE DIV'S 1.LIST-LINKS, 2.DOUBLE, 3.BANNER, 4.SINGLE
    {
      label: "Cafés",
      icon: "vertuo-capsule",
      module: {
        name: "coffee",
        items: [
          {
            title: "CÁPSULAS VERTUO",
            image: "coffee",
            type: "LIST-LINKS",
            links: [
              {
                label: "Comprar Cápsulas Vertuo",
                link: "#",
              },
              {
                label: "Conheça o Sistema Vertuo",
                link: "#",
              },
            ],
          },
          {
            title: "CÁPSULAS ORIGINAL",
            image: "coffee-original",
            type: "LIST-LINKS",
            links: [
              {
                label: "Comprar Cápsulas Original",
                link: "#",
              },
              {
                label: "Conheça o Sistema Original",
                link: "#",
              },
            ],
          },
          {
            type: "DOUBLE",
            items: [
              {
                label: "Descubra o seu sistema ideal",
                link: "#",
                image: "double-system-0",
              },
              {
                label: "Até R$150 de desconto na compra de cafés",
                link: "#",
                image: "double-system-1",
              },
            ],
          },
          {
            type: "BANNER",
            link: "#",
            image: "coffee-banner",
          },
        ],
      },
    },
    {
      label: "Assinatura",
      icon: "subscription",
      module: {
        name: "subscription",
        items: [
          {
            title: "Assinatura Nespresso: 10% de Crédito extra todos os meses",
            smallTitle: true,
            image: "subscription-1",
            type: "LIST-LINKS",
            links: [
              {
                label: "Assinatura de Máquina Vertuo",
                link: "#",
              },
              {
                label: "Assinatura de Cafés",
                link: "#",
              },
              {
                label: "Conheça nossas Assinaturas",
                link: "#",
              },
            ],
          },
          {
            title: "Ganhou Cartão de Assinatura? Ative aqui",
            image: "subscription-2",
            smallTitle: true,
            type: "SINGLE",
            link: "#"
          },
          {
            title: "Pedido Automático - Receba sempre seus cafés favoritos",
            image: "subscription-3",
            smallTitle: true,
            type: "SINGLE",
            link: "#"
          },
          {
            type: "BANNER",
            link: "#",
            image: "subscription-4",
          },
        ],
      },
    },
    {
      label: "Máquinas",
      icon: "vertuo-machine",
      module: {
        name: "machine",
        items: [
          {
            title: "DESCONTO ESPECIAL EM MÁQUINAS",
            smallTitle: false,
            image: "machines-1",
            type: "LIST-LINKS",
            links: [
              {
                label: "VERTUO COM 30% OFF + VOUCHER",
                link: "#",
                style: 'font-size: 11.5px'
              },
              {
                label: "INISSIA POR R$399 + VOUCHER",
                link: "#",
              }
            ],
          },
          {
            title: "ASSINATURA DE MÁQUINA VERTUO",
            image: "machines-2",
            type: "SINGLE",
            link: "#"
          },
          {
            type: "DOUBLE",
            items: [
              {
                label: "Ganhe até R$150 comprando uma máquina de café",
                link: "#",
                image: "machines-3",
                style: 'font-size: 13.5px'
              },
              {
                label: "Assistência técnica",
                link: "#",
                image: "double-system-1",
              },
            ],
          },
          {
            type: "BANNER",
            link: "#",
            image: "coffee-banner",
          },
        ],
      },
    },
    {
      label: "Acessórios",
      icon: "accessories",
      module: {
        name: "accessories",
        items: [
          {
            title: "30% OFF EM ACESSÓRIOS SELECIONADOS",
            image: "accessories-1",
            ext: ".png",
            type: "SINGLE",
            link: "#"
          },
          {
            type: "DOUBLE",
            items: [
              {
                label: "Xícaras e copos",
                link: "#",
                image: "accessories-2",
              },
              {
                label: "Porta-cápsulas",
                link: "#",
                image: "accessories-3",
              },
            ],
          },
          {
            type: "DOUBLE",
            items: [
              {
                label: "Espumadores de leite Aeroccino",
                link: "#",
                image: "accessories-4",
              },
              {
                label: "Para Harmonizar",
                link: "#",
                image: "accessories-5",
              },
            ],
          },
          {
            type: "BANNER",
            link: "#",
            image: "accessories-6",
          },
        ],
      },
    },
    {
      label: "Benefícios",
      icon: "member-benefit",
      module: {
        name: "benefit",
        items: [
          {
            title: "Quer saber o seu status?",
            smallTitle: false,
            image: "benefits-2",
            type: "LIST-LINKS",
            links: [
              {
                label: "Acesse sua conta",
                link: "#",
                style: 'font-size: 11.5px; margin-top: 10px;'
              },
              {
                label: "Descubra seus benefícios",
                link: "#",
              }
            ],
          },
          {
            title: "Nespresso & YOU: O programa de benefícios Nespresso",
            image: "benefits-3",
            type: "SINGLE",
            link: "#"
          },
          {
            title: "30% OFF EM ACESSÓRIOS SELECIONADOS",
            image: "benefits-4",
            type: "SINGLE",
            link: "#"
          },
          {
            type: "BANNER",
            link: "#",
            image: "benefits-1",
          },
        ],
      },
    },
    {
      label: "Nossos Serviços",
      icon: "our-services",
      module: {
        name: "services",
        items: [
          {
            title: "Rastreie o seu pedido",
            image: "services-2",
            ext: '.png',
            type: "SINGLE",
            link: "#"
          },
          {
            title: "Confira o prazo de entrega para sua região",
            image: "services-3",
            ext: '.png',
            type: "SINGLE",
            link: "#"
          },
          {
            type: "DOUBLE",
            items: [
              {
                label: "Pontos de Coleta para suas cápsulas",
                link: "#",
                image: "services-4",
              },
              {
                label: "Encontre uma Boutique Nespresso",
                link: "#",
                image: "services-5",
              },
            ],
          },
          {
            type: "BANNER",
            link: "#",
            image: "services-1",
          },
        ]
      },
    },
    {
      label: "Sustentabilidade",
      icon: "sustainability",
      module: {
        name: "sustainability",
      },
    },
    {
      label: "Contato",
      icon: "contact-FAQ",
      module: {
        name: "contact",
      },
    },
    {
      label: "Linha profissional",
      icon: "business",
      module: {
        name: "business",
      },
    },
  ],
};
