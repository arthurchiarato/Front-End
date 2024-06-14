// admin.js
const adminUsername = 'adm';
const adminPassword = 'mudar123';

function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === adminUsername && password === adminPassword) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('admin-panel').style.display = 'block';
        document.getElementById('user-interface').style.display = 'none';
        loadProductList();
    } else {
        alert('Usuário ou senha incorretos.');
    }
}

function logout() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('admin-panel').style.display = 'none';
    document.getElementById('user-interface').style.display = 'block';
}

function loadProductList() {
    const productList = document.getElementById('admin-product-catalog');
    productList.innerHTML = '';

    produtos.forEach((produto, index) => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        col.innerHTML = `
            <div class="card">
                <img class="card-img-top" src="${produto.imagem}" alt="${produto.nome}">
                <div class="card-body">
                    <h5 class="card-title">${produto.nome}</h5>
                    <p class="card-text">Preço: R$ ${produto.preco.toFixed(2)}</p>
                    <button onclick="editProduct(${index})" class="btn btn-warning">Editar</button>
                    <button onclick="deleteProduct(${index})" class="btn btn-danger">Remover</button>
                </div>
            </div>
        `;
        productList.appendChild(col);
    });

    atualizarCatalogo();
}


function addProduct(event) {
    event.preventDefault();
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const image = document.getElementById('product-image').value;

    produtos.push({ id: produtos.length + 1, nome: name, preco: parseFloat(price), imagem: image });
    loadProductList();
    document.getElementById('add-product-form').reset();
    $('#addProductModal').modal('hide');
}

function editProduct(index) {
    const product = produtos[index];
    const name = prompt('Novo nome do produto:', product.nome);
    const price = prompt('Novo preço do produto:', product.preco);
    const image = prompt('Nova URL da imagem do produto:', product.imagem);

    if (name && price && image) {
        produtos[index] = { ...product, nome: name, preco: parseFloat(price), imagem: image };
        loadProductList();
    }
}


function deleteProduct(index) {
    if (confirm('Tem certeza de que deseja remover este produto?')) {
        produtos.splice(index, 1);
        loadProductList();
    }
}

document.getElementById('form-login').addEventListener('submit', login);
document.getElementById('add-product-form').addEventListener('submit', addProduct);

function toggleLoginForm() {
    const loginForm = document.getElementById('login-form');
    if (loginForm.style.display === 'none' || loginForm.style.display === '') {
        loginForm.style.display = 'block';
    } else {
        loginForm.style.display = 'none';
    }
}

document.getElementById('login-icon').addEventListener('click', toggleLoginForm);

function hideLoginIconOnScroll() {
    const loginIcon = document.getElementById('login-icon');
    if (window.scrollY > 50) {
        loginIcon.classList.add('hidden');
    } else {
        loginIcon.classList.remove('hidden');
    }
}

window.addEventListener('scroll', hideLoginIconOnScroll);
