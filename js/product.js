// Sprint 1 — Pessoa 2: leia o ID e mostre os detalhes.
// Consulte guia-apoio.md e modelos.md.
// Sprint 2 — Pessoa 1: conecte o botão de adicionar.
const buscaDaUrl = window.location.search;

const parametros = new URLSearchParams(buscaDaUrl);

const idDoLivro = parametros.get("id");

const livroSelecionado = dados.livros.find(function (livro) {
  return livro.id === idDoLivro;
});

const areaDeDetalhes = document.querySelector(".book-detail");
if (!livroSelecionado) {
    areaDeDetalhes.innerHTML = `
    <h1>Livro não encontrado.</h1>
    <a href="./index.html#catalogo">Voltar ao catálogo</a>
  `;
} else {
    areaDeDetalhes.innerHTML = `
    <div class="book-detail__cover book-cover book-cover--coral">
  <h1>${livroSelecionado.titulo}</h1>
  <small>${livroSelecionado.autor}</small>
  <b>p.${livroSelecionado.paginas}</b>
</div>
<div class="book-detail__content">
  <h2>${livroSelecionado.titulo}</h2>
  <p class="book-detail__author">por ${livroSelecionado.autor}</p>
  <strong class="book-detail__price">R$ ${formatarPreco(livroSelecionado.preco)}</strong>
  <p class="book-detail__description">${livroSelecionado.descricao}</p>
  <div class="book-detail__buy">
    <button class="book-detail__add" type="button">Adicionar ao carrinho</button>
  </div>
</div>
 `
};
  