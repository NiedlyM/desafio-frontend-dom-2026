# Guia de apoio — URL e localStorage

Consulte apenas a parte indicada na sua task. Estes são os dois complementos ao conteúdo dos slides.

## Ler o ID da URL

Em `product.html?id=3`, o arquivo é `product.html` e `id=3` informa qual livro mostrar. O catálogo monta esse endereço dinamicamente com o ID de cada livro.

Coloque os passos abaixo em `js/product.js`, na ordem.

### 1. Ler a parte depois do nome da página

```js
const buscaDaUrl = window.location.search;
```

`window.location` contém informações sobre o endereço aberto. `search` devolve a parte que começa com `?`. Nesse exemplo, o resultado é `"?id=3"`.

### 2. Preparar a leitura dos parâmetros

```js
const parametros = new URLSearchParams(buscaDaUrl);
```

`URLSearchParams` é um recurso do navegador que permite ler pares de nome e valor da URL. `new` cria o objeto que fará essa leitura. Não é necessário escrever uma classe.

### 3. Obter o valor de id

```js
const idDoLivro = parametros.get("id");
```

`get("id")` devolve `"3"`, como texto. Sem esse parâmetro, devolve `null`. Como os IDs dos livros também são strings, podemos comparar com `===`.

### 4. Encontrar o objeto do livro

```js
const livroSelecionado = dados.livros.find(function (livro) {
  return livro.id === idDoLivro;
});
```

`find` devolve o primeiro livro com esse ID. Se nenhum corresponder, o resultado é `undefined`.

### 5. Escolher o conteúdo da tela

```js
const areaDetalhes = document.querySelector(".book-detail");
if (!livroSelecionado) {
  areaDetalhes.innerHTML = `
    <h1>Livro não encontrado.</h1>
    <a href="./index.html#catalogo">Voltar ao catálogo</a>
  `;
} else {
  // Preencha a ficha com os dados de livroSelecionado.
  // Depois de criar o HTML, selecione o botão de adicionar.
}
```

Somente o caminho do livro válido deve acessar suas propriedades e selecionar o botão de compra. Teste `?id=1`, `?id=3`, `?id=999` e a página sem parâmetro.

## Salvar e recuperar o carrinho

Uma variável é recriada ao abrir outra página. O `localStorage` guarda **textos** no navegador e permite recuperá-los depois.

As funções abaixo já estão em [`js/apoio.js`](./js/apoio.js). Não é necessário copiá-las: acompanhe a explicação para entender as chamadas usadas nas suas tasks.

### 1. Escolher o nome do dado salvo

```js
const chaveCarrinho = "pagina-42-carrinho";
```

Essa chave identifica o carrinho. As duas páginas precisam usar a mesma chave e abrir no mesmo endereço e porta do Live Server.

### 2. Recuperar o que foi salvo

```js
function lerCarrinho() {
  const textoSalvo = localStorage.getItem(chaveCarrinho);
  if (textoSalvo === null) {
    return [];
  }
  return JSON.parse(textoSalvo);
}
```

- `getItem` procura a chave e devolve seu texto.
- Se a chave não existir, devolve `null`; começamos com um array vazio.
- `JSON.parse` transforma o texto salvo em um array de objetos novamente.

### 3. Inicializar a variável da página

Depois da função anterior, o arquivo de apoio já inicializa:

```js
let carrinho = lerCarrinho();
```

Cada página recupera os dados ao abrir. Não é necessário importar o array da outra página.

### 4. Gravar depois de uma mudança

```js
function salvarCarrinho() {
  const textoCarrinho = JSON.stringify(carrinho);
  localStorage.setItem(chaveCarrinho, textoCarrinho);
}
```

`JSON.stringify` transforma o array em texto. Por exemplo, uma entrada vira `[{"id":"1","quantidade":2}]`. `setItem` grava esse texto na chave escolhida, substituindo o valor anterior.

Chame `salvarCarrinho()` depois de adicionar, remover ou finalizar. Atualizar a tela não salva automaticamente; salvar não atualiza a tela automaticamente.

### 5. Conferir a persistência

Adicione um livro, recarregue e confira o array `carrinho` no console. Depois navegue para a outra página e confira novamente. O exercício não exige sincronização instantânea de abas já abertas.

Consideramos os dados gravados pelo próprio projeto e o armazenamento disponível. Se um teste manual deixar um texto inválido na chave, reinicie apenas os dados do desafio pelo console e recarregue:

```js
localStorage.removeItem("pagina-42-carrinho");
```

## Exibir preços

Use `formatarPreco(livro.preco)` para mostrar um preço e `formatarPreco(total)` para mostrar o total. A função já está em `js/apoio.js` e recebe centavos: `3990` vira `R$ 39,90`.

Os scripts já estão conectados às duas páginas na ordem necessária. Você pode usar `dados`, `carrinho` e as funções de apoio diretamente, sem importar arquivos nem declarar essas variáveis novamente.
