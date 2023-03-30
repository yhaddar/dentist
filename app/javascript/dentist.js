const typedText = () => {
    let typed = new Typed('.span_text', {
        strings: ["dentist.", "the best dental service."],
        typeSpeed: 60,
        backSpeed: 30,
        loop: true
    }); 
}
typedText();


const scrollTop = ()=> {
    let scrollBtn = document.querySelector('.back');
        scrollBtn.addEventListener('click', () => {
            window.scroll({
                top: 0,
                behavior: "smooth",
        })
    })
}
scrollTop();