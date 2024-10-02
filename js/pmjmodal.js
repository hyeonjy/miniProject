const myname = "1ruk@ / 박민준";
const typingElement = document.querySelector('.mjname')
i = 0;

function type() {
    let txt = myname[i++]
    typingElement.innerHTML += txt;

    if (i> myname.length) {
        typingElement.textContent = " "
        i = 0
    }
}

setInterval(type, 200)