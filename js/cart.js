// Sprint 2 — Pessoa 2: renderize, abra e feche o carrinho.
// Sprint 3 — Pessoa 1: conecte a remoção de cada item.

 function renderizarCarrinho() {
  const carrinhoContainer = document.querySelector(".cart__products");
  const totalContainer = document.querySelector(".total");

  carrinhoContainer.innerHTML = "";

  if (!carrinho || carrinho.length === 0) {
    const mensagem = document.createElement("p");
    mensagem.textContent = "Seu carrinho está vazio.";
    carrinhoContainer.appendChild(mensagem);
    totalContainer.textContent = formatarPreco(0);
    return;
  }

  let total = 0;

  carrinho.forEach(item => {
    const livro = dados.livros.find(l => l.id === item.id);
    if (!livro) return;

    const subtotal = livro.preco * item.quantidade;
    total += subtotal;
    
    const div = document.createElement("div");
    div.className = "cart__product";
    
    // Renderiza subtotal correto do produto em vez de 'total'
    div.innerHTML = `
      <div class="cart-mini-cover book-cover--coral"><b>p.42</b></div>
      <div class="cart__product-info">
        <h3>${livro.titulo}</h3>
        <p>Quantidade: ${item.quantidade}</p>
        <strong>${formatarPreco(subtotal)}</strong>
      </div>
      <button class="cart__remove" type="button">Remover</button>
    `;

    // Evento atrelado diretamente ao botão do item atual antes de inserir no DOM
    const botaoRemover = div.querySelector(".cart__remove");
    botaoRemover.addEventListener("click", () => {
      carrinho = carrinho.filter(itemCarrinho => itemCarrinho.id !== item.id);
      salvarCarrinho();
      renderizarCarrinho();
    });

    carrinhoContainer.appendChild(div);
  });

  totalContainer.textContent = formatarPreco(total);
}

function abrirCarrinho() {
  const painel = document.querySelector(".cart");
  const fundo = document.querySelector(".cart-backdrop");
  const botao = document.querySelector(".cart-trigger");

  painel.classList.add("cart--active");
  fundo.classList.add("cart-backdrop--active");

  painel.setAttribute("aria-hidden", "false");
  botao.setAttribute("aria-expanded", "true");
}

function fecharCarrinho() {
  const painel = document.querySelector(".cart");
  const fundo = document.querySelector(".cart-backdrop");
  const botao = document.querySelector(".cart-trigger");

  painel.classList.remove("cart--active");
  fundo.classList.remove("cart-backdrop--active");

  painel.setAttribute("aria-hidden", "true");
  botao.setAttribute("aria-expanded", "false");
}

document.querySelector(".cart-trigger").addEventListener("click", abrirCarrinho);
document.querySelector(".cart__close").addEventListener("click", fecharCarrinho);
document.querySelector(".cart-backdrop").addEventListener("click", fecharCarrinho);


