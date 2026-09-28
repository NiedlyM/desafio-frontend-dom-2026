// Sprint 1 — Pessoa 1: implemente renderizarCatalogo().
function renderizarCatalogo() {
    
    const container = document.querySelector('.products__list');
    if (!container) return;
    container.innerHTML = '';

    
    dados.livros.forEach(livro => {
        
        const card = document.createElement('div');
        card.classList.add('product__card'); 

        
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