const sections = document.querySelectorAll('.section')
const secBtns = document.querySelectorAll('.controls')
const secBtn = document.querySelectorAll('.control')
const allSection = document.querySelector('.main-content')

function PageTransitions(){
    for(let i = 0; i < secBtn.length; i++){
        secBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.is-active');
            currentBtn[0].className = currentBtn[0].className.replace('is-active', '');
            this.className += ' is-active';
        });
    }

    allSection.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            secBtns.forEach((btn) => {
                btn.classList.remove('active')
            })

            e.target.classList.add('active')

            sections.forEach((section) =>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });
}


PageTransitions();