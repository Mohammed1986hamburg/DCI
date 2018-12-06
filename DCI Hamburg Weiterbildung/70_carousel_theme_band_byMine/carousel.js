
let leftBut = document.querySelector('#but_left');
let rightBut = document.querySelector('#but_right');
let img = document.querySelectorAll('img');
img[0].classList.add('ToShow');


rightBut.addEventListener('click', function () {
   
        for (let j = 0; j < img.length; j++) {

            if (img[j].classList.contains('ToShow')) {
                img[j].classList.remove('ToShow');
                if (j == img.length - 1) { img[0].classList.add('ToShow'); break; }
                else { img[j + 1].classList.add('ToShow'); break; }
            }
        }

    }

)



leftBut.addEventListener('click', function () {

    for (let j = 0; j < img.length; j++) {
        if (img[j].classList.contains('ToShow')) {
            img[j].classList.remove('ToShow');
            if (j == 0) { img[img.length - 1].classList.add('ToShow'); break; }
            else { img[j - 1].classList.add('ToShow'); break; }
        }
    }
}
)


