module.exports = {
  collections: [
    {
      title: "Ordenanzas",
      route: "ordenanzas",
      methods: {
        get: null,
        create: null,
        delete: null,
        raw: null,
      },
    },
    {
      title: "Decretos",
      route: "decretos",
      methods: {
        get: null,
        create: null,
        delete: null,
        raw: null,
      },
    },
    {
      title: "Noticias",
      route: "noticias",
      methods: {
        get: "/news",
        create: "/news",
        delete: "/news",
        raw: "/news/1/raw",
      },
      schema: {
        id: {
          type: "ID",
        },
        title: {
          type: "STRING",
        },
        content: {
          type: "RICHTEXT",
        },
        slug: {
          type: "STRING",
          blocked: true,
        },
        imageId: {
          type: "IMAGE",
        },
        createdAt: {
          type: "DATE",
        },
        updatedAt: {
          type: "DATE",
        },
      },
    },
  ],
};
