// cafes collection
const cafes = [
  {
    id: crypto.randomUUID(),
    user_Name: "DK Computer",
    city: "Kondagaon",
    avtar_Url: "img.jpg",
    phone_No: "919617709663",
  },
  // {
  //   id: crypto.randomUUID(),
  //   user_Name: "PS Computer",
  //   city: "Golawand",
  //   avtar_Url: "img.jpg",
  //   phone_No: "917974755379",
  // },
];

// colleges  collection

const colleges = [
  {
    id: crypto.randomUUID(),
    user_Name: "Govt Gundadhur PG College, Kondagaon",
    city: "Kondagaon",
    avtar_Url: "img.jpg",
    site_Url: "ggpgcollegekondagaon",
    category: "education",
    posts: [
      {
        id: crypto.randomUUID(),
        title: "B.sc (life science) 1 semester, merit list ",
        pdf_Url: "file.pdf",
        description: "this is a text 1",
      },
      {
        id: crypto.randomUUID(),
        title: "B.sc (computer science) 1 semester, merit list ",
        pdf_Url: "file.pdf",
        description: "this is a text 2",
      },
      {
        id: crypto.randomUUID(),
        title: "BA  1 semester, merit list ",
        pdf_Url: "file.pdf",
        description: "this is a text 3",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    user_Name: "Govt girls College, Kondagaon",
    city: "Kondagaon",
    avtar_Url: "img.jpg",
    site_Url: "gmrgcollegekondagaon",
    category: "education",
    posts: [
      {
        id: crypto.randomUUID(),
        title: "B.sc (life science) 1 semester, merit list ",
        pdf_Url: "file.pdf",
        description: "this is a text 1",
      },
      {
        id: crypto.randomUUID(),
        title: "B.sc (computer science) 1 semester, merit list ",
        pdf_Url: "file.pdf",
        description: "this is a text 2",
      },
      {
        id: crypto.randomUUID(),
        title: "BA  1 semester, merit list ",
        pdf_Url: "file.pdf",
        description: "this is a text 3",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    user_Name: "Govt navin College, Mardapal",
    city: "Mardapal",
    avtar_Url: "img.jpg",
    site_Url: " ",
    posts: [
      {
        id: crypto.randomUUID(),
        title: "B.sc (life science) 1 semester, merit list ",
        pdf_Url: "file.pdf",
        description: "this is a text 1",
      },
      {
        id: crypto.randomUUID(),
        title: "B.sc (computer science) 1 semester, merit list ",
        pdf_Url: "file.pdf",
        description: "this is a text 2",
      },
      {
        id: crypto.randomUUID(),
        title: "BA  1 semester, merit list ",
        pdf_Url: "file.pdf",
        description: "this is a text 3",
      },
    ],
  },
];

export { cafes, colleges };
