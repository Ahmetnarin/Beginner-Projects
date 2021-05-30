const form = document.querySelector('form');
const productname = document.querySelector('#product');
const quantity = document.querySelector('#qty');
const list = document.querySelector('#list')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const productInput = form.elements.product;
    const quantityInput = form.elements.qty;
    addvalues(productInput.value, quantityInput.value);
    productInput.value = "";
    quantityInput.value = "";
});

const addvalues = (product, quantity) => {
    const newProduct = document.createElement('li');
    newProduct.innerText = `${quantity} ${product}`;
    list.appendChild(newProduct);

}

