let terminer = false;
let symboleJoueurActuel = '';
let partieFinie;
const grid00 = document.getElementById('cell-0-0');
const grid01 = document.getElementById('cell-0-1');
const grid02 = document.getElementById('cell-0-2');
const grid10 = document.getElementById('cell-1-0');
const grid11 = document.getElementById('cell-1-1');
const grid12 = document.getElementById('cell-1-2');
const grid20 = document.getElementById('cell-2-0');
const grid21 = document.getElementById('cell-2-1');
const grid22 = document.getElementById('cell-2-2');

grid00.onclick = function () {
    jouer(0, 0);
}
grid01.onclick = function () {
    jouer(0, 1);
}
grid02.onclick = function () {
    jouer(0, 2);
}
grid10.onclick = function () {
    jouer(1, 0);
}
grid11.onclick = function () {
    jouer(1, 1);
}
grid12.onclick = function () {
    jouer(1, 2);
}
grid20.onclick = function () {
    jouer(2, 0);
}
grid21.onclick = function () {
    jouer(2, 1);
}
grid22.onclick = function () {
    jouer(2, 2);
}

let divt;

function init() {
    const symbolx = 'x';
    const symbolo = 'o';
    const randomplayer = Math.floor(Math.random() * 2);
    if (randomplayer === 0) {
        symboleJoueurActuel = symbolx;
    } else {
        symboleJoueurActuel = symbolo;
    }

    partieFinie = false;

    divt = document.createElement('div');
    divt.id = 'tour-de-jouer';
    divt.innerHTML = `Tour de : ${symboleJoueurActuel}`;
    document.body.appendChild(divt);
}

init();

function jouer(x, y) {
    if (terminer === true) {
        return;
    }
    const cases = document.getElementById(`cell-${x}-${y}`);
    if (cases.innerHTML === '') {
        cases.innerHTML = symboleJoueurActuel;
        victoire();
        if (terminer === true) {
            alert('Victoire de : ' + symboleJoueurActuel);
            divt.remove();
            let recommencer = document.createElement('a');
            recommencer.id = 'recommencer';
            recommencer.innerHTML = `recommencer`;
            recommencer.onclick = function() {
                location.reload();
            };
            document.body.appendChild(recommencer); 
        }
        else {
            matchNul();
            if (matchNul() === true) {
                alert('Match nul');
                location.reload();
            }
        }
        if (symboleJoueurActuel === 'x') {
            symboleJoueurActuel = 'o';
        } else {
            symboleJoueurActuel = 'x';
        }

        const tourDiv = document.getElementById('tour-de-jouer');
        tourDiv.innerHTML = `Tour de : ${symboleJoueurActuel}`;
    }
}

function matchNul() {
    let toutesCasesPleines = true;
    if (grid00.innerHTML !== '' && grid01.innerHTML !== '' && grid02.innerHTML !== '' && grid10.innerHTML !== '' && grid11.innerHTML !== '' && grid12.innerHTML !== '' && grid20.innerHTML !== '' && grid21.innerHTML !== '' && grid22.innerHTML !== '') {
        return toutesCasesPleines = true;
    }
    return toutesCasesPleines = false;
}

function victoire() {
    if (grid00.innerHTML === symboleJoueurActuel && grid01.innerHTML === symboleJoueurActuel && grid02.innerHTML === symboleJoueurActuel) {
        return terminer = true;
    }
    if (grid10.innerHTML === symboleJoueurActuel && grid11.innerHTML === symboleJoueurActuel && grid12.innerHTML === symboleJoueurActuel) {
        return terminer = true;
    }
    if (grid20.innerHTML === symboleJoueurActuel && grid21.innerHTML === symboleJoueurActuel && grid22.innerHTML === symboleJoueurActuel) {
        return terminer = true;
    }
    if (grid00.innerHTML === symboleJoueurActuel && grid10.innerHTML === symboleJoueurActuel && grid20.innerHTML === symboleJoueurActuel) {
        return terminer = true;
    }
    if (grid01.innerHTML === symboleJoueurActuel && grid11.innerHTML === symboleJoueurActuel && grid21.innerHTML === symboleJoueurActuel) {
        return terminer = true;
    }
    if (grid02.innerHTML === symboleJoueurActuel && grid12.innerHTML === symboleJoueurActuel && grid22.innerHTML === symboleJoueurActuel) {
        return terminer = true;
    }
    if (grid00.innerHTML === symboleJoueurActuel && grid11.innerHTML === symboleJoueurActuel && grid22.innerHTML === symboleJoueurActuel) {
        return terminer = true;
    }
    if (grid02.innerHTML === symboleJoueurActuel && grid11.innerHTML === symboleJoueurActuel && grid20.innerHTML === symboleJoueurActuel) {
        return terminer = true;
    }

    return;
}