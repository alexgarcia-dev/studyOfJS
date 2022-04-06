/*
  Buscasndo e contando dados em Arrays

  Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios:

    -Contar o número de categorias e o número de livros em cada categoria;
    -Contar o número de autores;
    -Mostrar livros do autor Augusto Cury;
    -Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'Os segredos da mente milionária',
        author: 'T. Harv Eker'
      },
      {
        title: 'O homem mais rico da Babilônia',
        author: 'George S. Clason'
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter'
      }
    ]
  },
  {
    category: 'Inteligência Emocional',
    books: [
      {
        title: 'Você é Insubstituível',
        author: 'Augusto Cury'
      },
      {
        title: 'Ansiedade - Como enfrentar o mal do século',
        author: 'Augusto Cury'
      },
      {
        title: 'Os 7 hábitos das pessoas altamente eficazes',
        author: 'Stephen R. Covey'
      }
    ]
  }
];

const numberOfCategories = booksByCategory.length;

console.log(`Existem ${numberOfCategories} categorias de livros.`);

function numberOfBooks() {
  for (const category of booksByCategory) {
    console.log(
      `Existem ${category.books.length} livros na categoria ${category.category}`
    );
  }
}

numberOfBooks();

function numberOfAuthors() {
  let authors = [];
  for (const category of booksByCategory) {
    for (const book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author);
      }
    }
  }
  console.log(`Existem ${authors.length} autores: ${authors.join(', ')}.`);
}

numberOfAuthors();

function booksOfAuthor(author) {
  let books = [];
  for (const category of booksByCategory) {
    for (const book of category.books) {
      if (book.author === author) {
        books.push(book.title);
      }
    }
  }
  console.log(
    `Existem ${books.length} livros do autor ${author}: ${books.join(', ')}.`
  );
}

booksOfAuthor('Stephen R. Covey');
