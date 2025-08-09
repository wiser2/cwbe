var cubeContainer = document.getElementById('cube-container');

function initLRHtml(size, id) {
    var table = document.createElement('table');
    table.setAttribute('id', id.toString());
    
    for (let i = 0; i < size-1; i++) {
        var row = document.createElement('tr');
        var sticker = row.appendChild(document.createElement('td'));
        sticker.id = table.getAttribute('id') + '-' + (i);
        sticker.className = 'sticker';
        sticker.style.width = '50px';

        row.appendChild(sticker);
        table.appendChild(row);
    }

    var row = document.createElement('tr');
    var doubleSticker = row.appendChild(document.createElement('td'));
    doubleSticker.id = table.getAttribute('id') + '-' + (size-1);
    doubleSticker.className = 'double-sticker';
    doubleSticker.style.width = '50px';
    row.appendChild(doubleSticker);
    table.appendChild(row);

    for (let i = 0; i < size-1; i++) {
        var row = document.createElement('tr');
        var sticker = row.appendChild(document.createElement('td'));
        sticker.id = table.getAttribute('id') + '-' + (i+(size));
        sticker.className = 'sticker';
        sticker.style.width = '50px';

        row.appendChild(sticker);
        table.appendChild(row);
    }

    return table;

}

function initUFHtml(size, id) {
    var table = document.createElement('table');
    table.setAttribute('id', id.toString());
    table.setAttribute('class', 'square-face')

    for (let i = 0; i < size; i++) {
        var row = document.createElement('tr');
        for (let j = 0; j < size; j++) {
            var sticker = row.appendChild(document.createElement('td'));
            sticker.id = table.getAttribute('id') + '-' + i + '-' + j;
            sticker.className = 'sticker';
            row.appendChild(sticker);
        }
        table.appendChild(row);
    }

    return table;
}

function initCubeHtml(size) {
    cubeContainer = document.getElementById('cube-container');

    var leftCol = document.getElementById('left-col');
    leftCol.appendChild(initLRHtml(size, '0'));

    document.getElementById('u-stickers').appendChild(initUFHtml(size, '1'));
    document.getElementById('f-stickers').appendChild(initUFHtml(size, '2'));

    var rightCol = document.getElementById('right-col');
    rightCol.appendChild(initLRHtml(size, '3'));

}

window.onload = function() {
    initCubeHtml(3);
}