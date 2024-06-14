let produtos = [
    { id: 1, nome: 'Macarrao Inst Renata Lamen 85G Galinha', preco: 1.20, imagem: 'https://img.sitemercado.com.br/produtos/38175a72f16670abc81297368a90d3a06ac6cc54a87bf7bdeac4e7b895f2937d_full.jpg' },
    { id: 2, nome: 'Farofa de Mandioca Zaeli Suave 500g', preco: 4.50, imagem: 'https://img.sitemercado.com.br/produtos/c88a3e8b65e4bf20df2a4a6885b877de9c81e4de02776308a7e5b6431fe5ec3b_full.jpg' },
    { id: 3, nome: 'Milho para Pipoca Zaeli 500g', preco: 5.90, imagem: 'https://img.sitemercado.com.br/produtos/a8aac65faa1a920b9f12bbd705cb18f747327829e9b5c4652ffd31c945eb45e9_full.jpg' },
    { id: 4, nome: 'Macarrão Galo 500g', preco: 6.50, imagem: 'https://giassi.vtexassets.com/arquivos/ids/1158185/Macarrao-de-Semola-Ninho-2-Galo-Pacote-500g.png?v=638509674322600000' },
    { id: 5, nome: 'Arroz Martinelli 5Kg', preco: 34.90, imagem: 'https://img.sitemercado.com.br/produtos/09a11535650d037be0385cfb79fe869c4dca5a1ecd3d72fbd8e6d201caa1e342_full.jpg' },
    { id: 6, nome: 'Feijão Preto Martinélli Pacote 1Kg', preco: 9.50, imagem: 'https://img.sitemercado.com.br/produtos/7a212cb08c04c304555551260207a3129bd3231ded369aeb5e05029e8e041ebf_full.jpg' },
    { id: 7, nome: 'Alho', preco: 7.50, imagem: 'https://conteudo.imguol.com.br/blogs/218/files/2019/02/iStock-517895450.jpg' },
    { id: 8, nome: 'Cebola', preco: 4.50, imagem: 'https://hiperideal.vtexassets.com/arquivos/ids/170995/51055.jpg?v=636616549635870000' },
    { id: 9, nome: 'Batata', preco: 5.50, imagem: 'https://www.shutterstock.com/image-photo/new-potato-isolated-on-white-600nw-1910558641.jpg' },
    { id: 10, nome: 'Aperitivo Campari Milano 748ml', preco: 49.99, imagem: 'https://img.sitemercado.com.br/produtos/d58c6361ebe4c48ca896e5f797559e1f47fb7305086df5e8581ceecfc679f03d_full.jpg' },
    { id: 11, nome: 'Coca Cola Lata 350ml', preco: 12.00, imagem: 'https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg' },
    { id: 12, nome: 'Sorvete', preco: 8.00, imagem: 'https://skinabon.com.br/files/1371750/092a52ac071f4c46a2f3897b081b6faa' },
    { id: 13, nome: 'Suco de Laranja 2L', preco: 12.0, imagem: 'https://naturalone.vteximg.com.br/arquivos/ids/157673/SUCO_DE_LARANJA_INTEGRAL_2L_REFRIGERADO_GARRAFA_RECICLAVEL_-_NATURAL_ONE-01.jpg?v=638210558436300000' },
    { id: 14, nome: 'Leite Piracanjuba', preco: 5.90, imagem: 'https://tb0932.vtexassets.com/arquivos/ids/165337-800-auto?v=638197489347830000&width=800&height=auto&aspect=true' },
    { id: 15, nome: 'Guaraná Lata 350ml', preco: 12.90, imagem: 'https://mercantilnovaera.vtexassets.com/arquivos/ids/195393-800-450?v=637793382780370000&width=800&height=450&aspect=true' },
    { id: 16, nome: 'Danoninho', preco: 5.50, imagem: 'https://toninstr.blob.core.windows.net/product/16002-petit-suisse-danoninho-320-g-morango-g.jpg' }
];

let carrinho = [];

function atualizarCatalogo() {
    let catalogo = document.getElementById('product-catalog');
    catalogo.innerHTML = '';

    produtos.forEach(produto => {
        let card = document.createElement('div');
        card.className = 'col-md-4 col-lg-3 product-card';
        card.innerHTML = `
            <div class="card">
                <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
                <div class="card-body">
                    <h5 class="card-title">${produto.nome}</h5>
                    <p class="card-text">Preço: R$ ${produto.preco.toFixed(2)}</p>
                    <button onclick="adicionarAoCarrinho(${produto.id})" class="btn btn-success">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
        catalogo.appendChild(card);
    });
}

function adicionarAoCarrinho(produtoId) {
    let produto = produtos.find(p => p.id === produtoId);
    let itemCarrinho = carrinho.find(item => item.produto.id === produtoId);

    if (itemCarrinho) {
        itemCarrinho.quantidade += 1;
    } else {
        carrinho.push({ produto: produto, quantidade: 1 });
    }

    atualizarCarrinho();
}

function atualizarCarrinho() {
    let cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';

    carrinho.forEach((item, indice) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.produto.nome}</td>
            <td>${item.quantidade}</td>
            <td>R$ ${item.produto.preco.toFixed(2)}</td>
            <td>R$ ${(item.produto.preco * item.quantidade).toFixed(2)}</td>
            <td>
                <button onclick="removerDoCarrinho(${indice})" class="btn btn-danger">Remover</button>
            </td>
        `;
        cartList.appendChild(tr);
    });

    atualizarTotalCarrinho();
}

function removerDoCarrinho(indice) {
    carrinho.splice(indice, 1);
    atualizarCarrinho();
}

function atualizarTotalCarrinho() {
    let total = carrinho.reduce((soma, item) => soma + item.produto.preco * item.quantidade, 0);
    document.getElementById('cart-total').textContent = `Total do Carrinho: R$ ${total.toFixed(2)}`;
}

function abrirCheckout() {
    $('#cartModal').modal('hide');
    $('#checkoutModal').modal('show');
}

document.getElementById('checkout-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let endereco = document.getElementById('endereco').value;
    let telefone = document.getElementById('telefone').value;
    let pagamento = document.querySelector('input[name="pagamento"]:checked').value;

    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        alert(`Compra finalizada com sucesso!\nNome: ${nome}\nEndereço: ${endereco}\nTelefone: ${telefone}\nPagamento: ${pagamento}`);
        carrinho = [];
        atualizarCarrinho();
        $('#checkoutModal').modal('hide');
    }
});

atualizarCatalogo();
