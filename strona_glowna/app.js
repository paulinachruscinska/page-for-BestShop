'use strict';
const prices = {
    products: 0.5,
    orders: 0.25,
    package: {
        basic: 0,
        professional: 25,
        premium: 60
    },
    accounting: 35,
    terminal: 5
    }


//calculator-calculatedforms--item
const products = document.querySelector('#products');
const productQuantityInput = document.querySelector('.calculator__form--input');
console.log(productQuantityInput);
console.log(productQuantityInput.textContent)
if(productQuantityInput.textContent==undefined){
    products.classList.add('notvisible');
}



// products.children.item(1).textContent= productsInputInfo + " * $" + prices.products;
// products.children.item(2).innerHTML= `${productsInputInfo * prices.products}`;

const orders = document.querySelector('#orders');
const packages = document.querySelector('#package');
const accounting = document.querySelector('#accounting');
const terminal = document.querySelector('#terminal');
console.log(products);
console.log(orders);
console.log(packages);
console.log(accounting);
console.log(terminal);


const ordersInput = document.querySelector('.calculator__form').children.item(1).firstElementChild;
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
    console.log('kliknieto');
    accounting.classList.contains('notvisible')?accounting.classList.remove('notvisible'):accounting.classList.add('notvisible');
}
const handleClickCheckbox2=()=>{
    terminal.classList.contains('notvisible')?terminal.classList.remove('notvisible'):terminal.classList.add('notvisible');
}
checkboxAccounting.addEventListener('click', handleCLickCheckbox1);
checkboxTerminal.addEventListener('click', handleClickCheckbox2);
