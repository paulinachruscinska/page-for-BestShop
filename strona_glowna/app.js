'use strict';
const totalPrices = [5, 6, 8 ];
console.log(totalPrices);
const prices = {
    products: 0.5,
    orders: 0.25,
    package: {
        basic: 0,
        professional: 25,
        premium: 60
    },
    accounting: 35,
    terminal: 50
    }


//products
const products = document.querySelector('#products');
const productQuantityInput = document.querySelector('#productsquantity');
const quantityProduct = products.children.item(1);
const quantityProductTotal = products.children.item(2);
const changeInput=()=>{
    quantityProduct.textContent = productQuantityInput.value;
    quantityProductTotal.textContent = parseFloat(productQuantityInput.value ) * parseFloat(prices.products);

    if (productQuantityInput.value.length>0){
        products.classList.remove('notvisible')
    } else {
        products.classList.add('notvisible')
    }
}
productQuantityInput.addEventListener('change', changeInput)
//orders
const orders = document.querySelector('#orders');
const quantityOrder = orders.children.item(1);
const quantityOrderTotal = orders.children.item(2);
const ordersInput = document.querySelector('.calculator__form').children.item(1).firstElementChild;
const changeOrder=()=>{
    quantityOrder.textContent = ordersInput.value;
    quantityOrderTotal.textContent = parseFloat(quantityOrder.textContent)*parseFloat(prices.orders)
    totalPrices.push(parseFloat(quantityOrderTotal.textContent));
    if (ordersInput.value.length>0){
        orders.classList.remove('notvisible')
    } else {
        orders.classList.add('notvisible')
    }
}
ordersInput.addEventListener('change', changeOrder)
const packages = document.querySelector('#package');
const accounting = document.querySelector('#accounting');
const terminal = document.querySelector('#terminal');
console.log(products);
console.log(orders);
console.log(packages);
console.log(accounting);
console.log(terminal);



console.log(ordersInput);

//select
const select = document.querySelector('.calculator__form--select')
const list = select.querySelector('.select-ul');
const p = select.querySelector('p');
const typeOfPackage = document.querySelector('.type-of-package');
const priceOfPackage = document.querySelector('.package-price strong');
function handleClick(event){
    list.classList.toggle('notactive')
    p.textContent=event.target.textContent;
    p.textContent!=="Choose package"?packages.classList.remove('notvisible'): null;
    typeOfPackage.textContent=event.target.textContent;
    if( p.textContent === 'Basic'){
        totalPrices.push(prices.package.basic)
    } else if (p.textContent === "Professional"){
        totalPrices.push(prices.package.professional)
    } else if(p.textContent === "Premium"){
        totalPrices.push(prices.package.premium)
    }
    if(typeOfPackage.textContent==='Basic'){
        priceOfPackage.textContent = prices.package.basic
    } else if(typeOfPackage.textContent==="Professional"){
        priceOfPackage.textContent = prices.package.professional
    } else if(typeOfPackage.textContent==="Premium"){
        priceOfPackage.textContent = prices.package.premium
    }

}
select.addEventListener('click', handleClick);

//checkbox
const checkboxAccounting = document.querySelector('.calculator__checkbox--newsquare');
const checkboxTerminal = document.querySelector('.checkbox-rental .calculator__checkbox--newsquare')
console.log(checkboxAccounting);
const handleCLickCheckbox1=()=>{
    accounting.classList.contains('notvisible')?accounting.classList.remove('notvisible'):accounting.classList.add('notvisible');
}
const handleClickCheckbox2=()=>{
    terminal.classList.contains('notvisible')?terminal.classList.remove('notvisible'):terminal.classList.add('notvisible');
}
checkboxAccounting.addEventListener('click', handleCLickCheckbox1);
checkboxTerminal.addEventListener('click', handleClickCheckbox2);

//summary
const calculatorSummary =document.querySelector(".calculator__summary");
const summary = calculatorSummary.children.item(1)
const sum =(array) => {
    const sum1 = array.reduce((partialSum, price)=>{
        return partialSum + price
    }, 0)
    return sum1;
}
console.log(sum(totalPrices));