const logo = document.querySelector('.logo_container')
const mainName = document.querySelector('.name')
const iconWhatsapp = document.querySelector('.whatsapp')
const phone = document.querySelector('.phone')


window.addEventListener('scroll', (e) => {
    if(window.scrollY >= 80) {
        logo.classList.add('hidden_logo')
        mainName.classList.add('hidden_name')
    } else {
        logo.classList.remove('hidden_logo')
        mainName.classList.remove('hidden_name')
    }
})

iconWhatsapp.addEventListener('click', (e) => {
    iconWhatsapp.classList.toggle('deploy_whatsapp')
    phone.classList.toggle('deploy_phone')
    
})