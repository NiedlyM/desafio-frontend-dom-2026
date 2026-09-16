# Modelos dos componentes

Use estes modelos dentro das template strings do JavaScript. Substitua os textos de exemplo pelos dados indicados. Mantenha as classes: o CSS já está preparado para elas.

## Card do catálogo

Crie um `article`, adicione a classe `book-card` com `classList.add` e use o conteúdo abaixo no seu `innerHTML`. Depois, insira o card em `.products__list` com `appendChild`.

```html
<div class="book-cover book-cover--coral">
  <h3>A Cidade de Papel</h3>
  <small>Marina Duarte</small>
  <b>p.42</b>
</div>
<div class="book-card__details">
  <h3>A Cidade de Papel</h3>
  <span>Marina Duarte</span>
  <div>
    <strong>R$ 39,90</strong>
    <a href="./product.html?id=1">Ver detalhes</a>
  </div>
</div>
```

Troque título e autor por `livro.titulo` e `livro.autor`, o preço por `formatarPreco(livro.preco)`, `coral` por `livro.cor` e o ID do link por `livro.id`.

Dentro da template string, uma substituição fica assim: `<h3>${livro.titulo}</h3>`.

## Detalhes do livro

Use o conteúdo abaixo no `innerHTML` de `.book-detail`, no caminho em que o livro foi encontrado.

```html
<div class="book-detail__cover book-cover book-cover--coral">
  <h1>A Cidade de Papel</h1>
  <small>Marina Duarte</small>
  <b>p.42</b>
</div>
<div class="book-detail__content">
  <h2>A Cidade de Papel</h2>
  <p class="book-detail__author">por Marina Duarte</p>
  <strong class="book-detail__price">R$ 39,90</strong>
  <p class="book-detail__description">Descrição do livro.</p>
  <div class="book-detail__buy">
    <button class="book-detail__add" type="button">Adicionar ao carrinho</button>
  </div>
</div>
```

Substitua os exemplos por `livroSelecionado.titulo`, `livroSelecionado.autor`, `livroSelecionado.cor`, `livroSelecionado.descricao` e `formatarPreco(livroSelecionado.preco)`.

## Item do carrinho

Crie uma `div` com classe `cart__product`. Depois de encontrar o livro pelo ID da entrada do carrinho, use este conteúdo no `innerHTML` da div e insira em `.cart__products`.

```html
<div class="cart-mini-cover book-cover--coral"><b>p.42</b></div>
<div class="cart__product-info">
  <h3>A Cidade de Papel</h3>
  <p>Quantidade: 2</p>
  <strong>R$ 79,80</strong>
</div>
```

Substitua o título e a cor pelos dados do livro, `2` por `item.quantidade` e o preço por `formatarPreco(livro.preco * item.quantidade)`.

Na sprint 3, acrescente ao final do conteúdo da div:

```html
<button class="remove" type="button">Remover</button>
```

Selecione esse botão dentro da div que você acabou de criar para conectar a remoção ao item correto.
