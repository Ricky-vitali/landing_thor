window.onload = function () {

    /* Buscar menu*/
    document.getElementById('menu').addEventListener('click', function (edit) {
        var targetName = event.target.tagName;


        if (targetName !== 'A' && targetName !== 'I') {
            return;
        }
        /* Le saco el check al checkbox*/

        document.getElementById('check').checked = false;
    });
}