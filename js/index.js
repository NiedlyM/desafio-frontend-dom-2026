// Sprint 1 — Pessoa 1: implemente renderizarCatalogo().
function renderizarCatalogo() {
    // 1. Seleciona o container e limpa seu conteúdo
    const container = document.querySelector('.products__list');
    if (!container) return;
    container.innerHTML = '';

    // 2. Percorre a lista de livros (dados.livros)
    dados.livros.forEach(livro => {
        // Cria o elemento do card
        const card = document.createElement('div');
        card.classList.add('product__card'); // Ajuste a classe conforme seu CSS/modelo

        
        card.innerHTML = `
            <div class="book-cover book-cover--coral">
  <h3>${livro.titulo}</h3>
  <small>${livro.autor}</small>
  <b>p.42</b>
</div>
<div class="book-card__details">
  <h3>${livro.titulo}</h3>
  <span>${livro.autor}</span>
  <div>
    <strong>${formatarPreco(livro.preco)}</strong>
    <a href="./product.html?id=${livro.id}">Ver detalhes</a>
  </div>
</div>
        `;

        container.appendChild(card);
    });
}

// Chama a função ao carregar a página
document.addEventListener('DOMContentLoaded', renderizarCatalogo);