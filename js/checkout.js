// Sprint 3 — Pessoa 2: implemente a finalização simulada.
     function finalizarCompra() {
    if (!carrinho || carrinho.length === 0) {
        alert("O carrinho está vazio.");
        return;
    }

    const total = document.querySelector('.total');
    const totalCompra = total ? total.textContent : "R$ 0,00";

    alert(`Compra simulada com sucesso! Total: ${totalCompra}`);


    carrinho = [];
    
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    renderizarCarrinho();
    fecharCarrinho();
}

document.addEventListener('DOMContentLoaded', () => {
    
    const botaoDeCheckout = document.querySelector('.checkout');
    if (botaoDeCheckout) {
        botaoDeCheckout.addEventListener('click', finalizarCompra);
    }
});