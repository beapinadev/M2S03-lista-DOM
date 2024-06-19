const produtos = [
    { nome: "Camiseta", valor: 29.99 },
    { nome: "Calça Jeans", valor: 49.99 },
    { nome: "Tênis", valor: 79.99 },
    { nome: "Boné", valor: 14.99 }
];

document.addEventListener('DOMContentLoaded', () => {
    const listaProdutos = document.getElementById('lista-de-produtos');
    
    produtos.forEach(produto => {
        const listaItem = document.createElement('li');
        
        const produtoNome = document.createElement('span');
        produtoNome.className = 'produto-nome';
        produtoNome.textContent = produto.nome;
        
        const produtoPreco = document.createElement('span');
        produtoPreco.className = 'produto-preco';
        produtoPreco.textContent = `R$ ${produto.valor.toFixed(2)}`;
        
        listaItem.appendChild(produtoNome);
        listaItem.appendChild(produtoPreco);
        
        listaProdutos.appendChild(listaItem);
    });
});