window.addEventListener('keydown', function (e) {
     e.preventDefault();
    let code = e.keyCode.toString();
    console.log(e);
    let location = e.location.toString();
    let keyElement = document.querySelector(`kbd[data-key="${code}"]`);
    if(code === '91'){
                let keyElement = document.querySelector(`img[id="${code}"]`);
                keyElement.src ='img/win_green.png'
     }
     if(code === '93'){
                let keyElement = document.querySelector(`img[id="${code}"]`);
                keyElement.src ='img/menu_green.png'
     }
     if(code === '13' || code === '16' || code === '18' || code === '17'){
            keyElement = document.querySelector(`kbd[data-key="${code+'-'+location}"]`);

     }
    keyElement.style.borderColor ='green'
})

window.addEventListener('keyup', function (e) {
     e.preventDefault();
    let code = e.keyCode.toString();
    let location = e.location.toString();
    let keyElement = document.querySelector(`kbd[data-key="${code}"]`);
     if(code === '91'){
                let keyElement = document.querySelector(`img[id="${code}"]`);
                keyElement.src ='img/win_orange.png'
    }
     if(code === '93'){
                let keyElement = document.querySelector(`img[id="${code}"]`);
                keyElement.src ='img/menu_orange.png'
     }
    if(code === '13' || code === '16' || code === '18' || code === '17'){
            keyElement = document.querySelector(`kbd[data-key="${code+'-'+location}"]`);
     }
    keyElement.style.borderColor ='orange'
})