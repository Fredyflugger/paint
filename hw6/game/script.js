var board = document.querySelector('.board');
var player = document.querySelector('.gamer');

window.onload = function () {
    let newTable = '';
    for (let i = 0; i < 3; i++) {
        let newRow = '';
        for (let j = 0; j < 3; j++) {
            newRow += `<div class="cell"><div class="inner-cell" data-x="${i}" data-y="${j}"></div></div>`
        }
        newTable += newRow;
    }
    board.innerHTML = newTable;
};

board.addEventListener('click', (evt) => {

    if (evt.target.dataset.x) {
        tableClick (evt.target, evt.target.dataset.x, evt.target.dataset.y);
    }
});

let turn = true; //true - X; false - O
function tableClick (obj, x, y) {
    if (!obj.innerText) {
        obj.innerText = turn ? 'X' : 'O';
        turn = !turn;

        //Как определить выигрыш?
        // ... && ||
    }
}
