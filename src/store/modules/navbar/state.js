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
            image: "coffee-original",
            smallTitle: true,
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
    // {
    //   label: "Assinatura",
    //   icon: "subscription",
    //   module: {
    //     name: "subscription",
    //     items: [
    //       {
    //         title: "CÁPSULAS VERTUO",
    //         image: "coffee",
    //         type: "LIST-LINKS",
    //         links: [
    //           {
    //             label: "Comprar Cápsulas Vertuo",
    //             link: "#",
    //           },
    //           {
    //             label: "Conheça o Sistema Vertuo",
    //             link: "#",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
    {
      label: "Máquinas",
      icon: "vertuo-machine",
      module: {
        name: "machine",
      },
    },
    {
      label: "Acessórios",
      icon: "accessories",
      module: {
        name: "accessories",
      },
    },
    {
      label: "Benefícios",
      icon: "member-benefit",
      module: {
        name: "benefit",
      },
    },
    {
      label: "Nossos Serviços",
      icon: "our-services",
      module: {
        name: "services",
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
