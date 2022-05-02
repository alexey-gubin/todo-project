let enterButton = document.querySelector('#enter-button');
let cases = document.querySelector('.single-input-column');
let mainInput = document.querySelector('.main-input');
let elCounter = 0;
let hideButton = document.querySelector('#hide-button');
let arrInputs = [];

enterButton.onclick = function mainButtonClick() {
    if (mainInput.value){
        elCounter += 1;
        let newDiv = document.createElement('div');
        newDiv.id = `d${elCounter}`;
        newDiv.className = 'single-input';
        newDiv.innerHTML += `<input type="text" value="${mainInput.value}" id="t${elCounter}"><input type="checkbox" onclick="checkClick(this.id)" id="c${elCounter}"><i class="fa fa-trash" aria-hidden="true" id="i${elCounter}" onclick="deleteInput(this.id);"></i>`;
        
        arrInputs.push(elCounter);
        newDiv.style.cssText += 'opacity: 0;';

        cases.prepend(newDiv);

        let divOpacity = 0;

        for (let i = 0; i < 50  ; i++) {
            setTimeout( () => {
                divOpacity += 0.02;
                newDiv.style.cssText += `opacity: ${divOpacity};`;
            }, 10*i);
        }

        mainInput.value = '';
    }
}

mainInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') enterButton.onclick();
});

let deleteInput = function(id) {
    let divId = +id.slice(1);
    let element = document.querySelector(`#d${divId}`);
    
    let i = arrInputs.indexOf(divId);
    if (i >= 0) arrInputs.splice(i,1);

    let divOpacity = 1;

        for (let i = 0; i < 50  ; i++) {
            setTimeout( () => {
                divOpacity -= 0.02;
                element.style.cssText += `opacity: ${divOpacity};`;
                if (i === 49) element.remove();
            }, 7*i);

        }
}

let checkClick = function(id) {
    let chxId = id.slice(1);
    let element = document.querySelector(`#c${chxId}`);
    let input = document.querySelector(`#t${chxId}`);
        element.checked 
        ? input.style.textDecoration = 'line-through'
        : input.style.textDecoration = 'none';
}

let hsApproved = function() {
    let counter = 0;
        arrInputs.forEach( i => {
            let checkBox = document.querySelector(`#c${i}`);
            let element = document.querySelector(`#d${i}`);
            if ((checkBox.checked) && (hideButton.innerHTML === '<i class="fa fa-eye-slash" aria-hidden="true"></i> Скрыть выполненные')) {
                element.style.display = 'none'
                counter += 1;
            } else {
                element.style.display = 'flex';
            }    
        });
    ((hideButton.innerHTML === '<i class="fa fa-eye-slash" aria-hidden="true"></i> Скрыть выполненные') && (counter != 0))
        ? hideButton.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i> Показать выполненные'
        : hideButton.innerHTML = '<i class="fa fa-eye-slash" aria-hidden="true"></i> Скрыть выполненные';
}








