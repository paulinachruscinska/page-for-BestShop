//ceny w niebieskich div
const productsPrice = document.querySelector('.products-price');
const ordersPrice = document.querySelector('.orders-price');
const packagePrice = document.querySelector('.package-price');
const accountingPrice = document.querySelector('.accounting-price');
const terminalPrice = document.querySelector('.terminal-price');
const summary = document.querySelector('#summary');
const divSummary = document.querySelector('.calculator__summary')
//działania na inputach
const productsAction = document.querySelector('.products-action');
const ordersAction = document.querySelector('.orders-action');
//niebieskie div
const divProducts = document.querySelector('#div-products');
const divOrders = document.querySelector('#div-orders');
const divPackage = document.querySelector('#div-package');
const divAccounting = document.querySelector('#div-accounting');
const divTerminal = document.querySelector('#div-terminal');
const divCheckBoxes = document.querySelectorAll('.checkboxes');
//inputs
const inputProducts = document.querySelector('#productsquantity');
const inputOrders = document.querySelector('#inputorders');
//checkbox
const checkboxes = document.querySelectorAll('.calculator__checkbox--newsquare');
const checkBoxAccounting = document.querySelector('.calculator__checkbox--newsquare');
const checkboxTerminal = document.querySelector('.checkbox-rental .calculator__checkbox--newsquare');
//select
const select = document.querySelector('.calculator__form--select');
const list = select.querySelector('.select-ul');
const p = select.querySelector('p');
const typeOfPackage = document.querySelector('.type-of-package');

console.log(productsPrice,ordersPrice,packagePrice, accountingPrice,terminalPrice);

function Calculator(){
this.prices = {
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
    this.updateSummary();
}


Calculator.prototype.updateSummary = function (){
    const priceofProducts = Number(productsPrice.textContent);
    const priceofOrders = Number(ordersPrice.textContent);
    const priceofPackage = Number(packagePrice.textContent);
    const priceofAccounting = Number(accountingPrice.textContent);
    const priceofTerminal = Number(terminalPrice.textContent);
    console.log(typeof priceofProducts);
    const summaryArray = [priceofProducts, priceofOrders, priceofPackage, priceofAccounting, priceofTerminal]
    const summaryPrice = summaryArray.reduce((partialSum, price)=>{
        return partialSum + price;
    },0)
   console.log(summaryPrice);
    summary.textContent = summaryPrice;
    if(summary.textContent!=='0'){
        divSummary.classList.remove('notvisible');
    }
}
const newCalculator = new Calculator();
//INPUTS
const eventInputProducts =()=>{
    productsAction.innerHTML = `${inputProducts.value} * $ ${newCalculator.prices.products}`;
    productsPrice.innerHTML = ` ${inputProducts.value * newCalculator.prices.products}`;
    if(divProducts.classList.contains('notvisible')){
        divProducts.classList.remove('notvisible');

    }
    newCalculator.updateSummary()
}
const eventInputOrders =() =>{
    ordersAction.innerHTML = `${inputOrders.value} * $ ${newCalculator.prices.orders}`;
    ordersPrice.innerHTML = ` ${inputOrders.value * newCalculator.prices.orders}`;
    if(divOrders.classList.contains('notvisible')){
        divOrders.classList.remove('notvisible');
    }
    newCalculator.updateSummary()
}
inputProducts.addEventListener('change', eventInputProducts);
inputOrders.addEventListener('change', eventInputOrders);
//SELECT
const eventSelect=(event)=>{
    list.classList.toggle('notactive')
    p.textContent=event.target.textContent;
    p.textContent!=="Choose package"?divPackage.classList.remove('notvisible'): null;
    typeOfPackage.textContent=event.target.textContent;
    if(typeOfPackage.textContent==='Basic'){
        packagePrice.innerHTML = newCalculator.prices.package.basic
    } else if(typeOfPackage.textContent==="Professional"){
        packagePrice.innerHTML  = newCalculator.prices.package.professional
    } else if(typeOfPackage.textContent==="Premium"){
        packagePrice.innerHTML  = newCalculator.prices.package.premium
    }
    newCalculator.updateSummary()
}
select.addEventListener('click', eventSelect)
//CHECKBOXY
const eventCheckboxAccounting = () =>{
        if (divAccounting.classList.contains('notvisible')) {
            divAccounting.classList.remove('notvisible');
            accountingPrice.innerHTML = newCalculator.prices.accounting;
        } else {
           divAccounting.classList.add('notvisible');
           accountingPrice.innerHTML = 0;
}
newCalculator.updateSummary()
}
const eventCheckboxTerminal = () =>{
    if (divTerminal.classList.contains('notvisible')) {
        divTerminal.classList.remove('notvisible');
        terminalPrice.innerHTML = newCalculator.prices.terminal;
    } else {
        divTerminal.classList.add('notvisible');
        terminalPrice.innerHTML = 0;
    }
newCalculator.updateSummary()
}
checkBoxAccounting.addEventListener('click', eventCheckboxAccounting);
checkboxTerminal.addEventListener('click', eventCheckboxTerminal);


