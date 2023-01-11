import validator from 'validator';
import '/style.css';

const btnValidate = document.querySelector('button');
const input = document.querySelector('input');
const select = document.querySelector('select');
const result = document.querySelector('h3');

btnValidate.addEventListener('click', (event) => {
    event.preventDefault();
    const selectValue = select.value;
    if(selectValue === 'Email') {
        if(validator.isEmail(input.value)) {
            result.innerHTML = 'O endereço de e-mail é válido';
        } else {
            result.innerHTML = 'O endereço de e-mail é inválido';
        }
    } else if (selectValue === 'CPF') {
        if(validator.isTaxID(input.value, 'pt-BR')) {
            result.innerHTML = 'O CPF é válido';
        } else {
            result.innerHTML = 'O CPF é inválido';
        }
    } else if (selectValue === 'Porta') {
        if(validator.isPort(input.value)) {
            result.innerHTML = 'É um número de porta';
        } else {
            result.innerHTML = 'Não é um número de porta';
        }
    } else if (selectValue === 'Cartão de Crédito') {
        if(validator.isCreditCard(input.value)) {
            result.innerHTML = 'É um número de cartão de crédito';
        } else {
            result.innerHTML = 'Não é um número de cartão de crédito';
        }
    } else {
        if(validator.isIP(input.value)) {
            result.innerHTML = 'É um endereço de IP';
        } else {
            result.innerHTML = 'Não é um endereço de IP';
        }
    }
});
