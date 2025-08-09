var cubeContainer = document.getElementById('cube-container');

function initLRHtml(size, id) {
    var table = document.createElement('table');
    table.setAttribute('id', id.toString());
    
    for (let i = 0; i < size-1; i++) {
        var row = document.createElement('tr');
        var sticker = row.appendChild(document.createElement('td'));
        sticker.setAttribute('id', table.getAttribute('id') + '-' + i);
        sticker.setAttribute('class', 'sticker');

        row.appendChild(sticker);
        table.appendChild(row);
    }

    var row = document.createElement('tr');
    var doubleSticker = row.appendChild(document.createElement('td'));
    doubleSticker.setAttribute('id', table.getAttribute('id') + '-' + (size-1));
    doubleSticker.setAttribute('class', 'double-sticker');
    row.appendChild(doubleSticker);
    table.appendChild(row);

    for (let i = 0; i < size-1; i++) {
        var row = document.createElement('tr');
        var sticker = row.appendChild(document.createElement('td'));
        sticker.setAttribute('id', table.getAttribute('id') + '-' + (i+(size)));
        sticker.setAttribute('class', 'sticker');

        row.appendChild(sticker);
        table.appendChild(row);
    }

    cubeContainer.appendChild(table);

}

function initCubeHtml(size) {
    cubeContainer = document.getElementById('cube-container');
    // left
    initLRHtml(size, 0);
}

window.onload = function() {
    initCubeHtml(3);
}