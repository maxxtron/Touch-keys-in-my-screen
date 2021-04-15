function t11(event) {
    if (event.code != 'CapsLock') {
        document.querySelector('.key[data="' + event.code + '"]').classList.add('colorKey', 'fontColor');
    }
}

document.querySelector('.i-11').addEventListener('keydown', t11);

function keyUp() {
    document.querySelectorAll('.key').forEach((elem) => {
        if (!elem.classList.contains('capslock')) {
            elem.classList.remove('colorKey', 'fontColor');
        }
    })
}
document.querySelector('.i-11').addEventListener('keyup', keyUp);

function caps(event) {
    if (event.code == 'CapsLock' && !document.querySelector('.capslock').classList.contains('colorKey')) {
        document.querySelector('.capslock').classList.add('colorKey', 'fontColor')
    } else if (event.code == 'CapsLock') {
        document.querySelector('.capslock').classList.remove('colorKey', 'fontColor');
    }
}
document.querySelector('.i-11').addEventListener('keyup', caps);