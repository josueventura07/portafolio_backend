const logo = document.querySelector('.logo_container')
const nameO = document.querySelector('.name')
const mainName = document.querySelector('.name')
const iconWhatsapp = document.querySelector('.whatsapp')
const phone = document.querySelector('.phone')
const iconWhatsapp2 = document.querySelector('.whatsapp2')
const phone2 = document.querySelector('.phone2')
const copyLogo = logo.cloneNode(true)
const copyLogo2 = logo.cloneNode(true)
const projectsContainer = document.querySelector('#projects')
const contactContainer = document.querySelector('#contact')
const copyName = nameO.cloneNode(true)
const copyName2 = nameO.cloneNode(true)
const navBar = document.querySelector('.nav')
const navList = document.querySelectorAll('.nav_list')
const btnHome = document.querySelector('.home')
const btnProjects = document.querySelector('.projects')
const btnContact = document.querySelector('.contact')

const sendingMessage = ((d) => {
    const $form = d.querySelector('.contact_form'),
        $response = d.querySelector('.content_response'),
        $loader = d.querySelector('.loader')

        $form.addEventListener('submit', e => {
            e.preventDefault()
            $loader.classList.remove('none');
            fetch('https://formsubmit.co/ajax/josueandresventura@gmail.com', {
                method: "POST",
                body: new FormData(e.target)
            })
            .then((res) => (res.ok ? res.json() : Promise.reject(res)))
            .then(json => {
                console.log(json);
                location.hash = '#thanks';
                $form.reset();
            })
            .catch(err => {
                console.log(err);
                let message = err.statusText || 'Ocurrio un error al enviar, intenta nuevamente'
                $response.querySelector('h3').innerHtml = `Error ${err.status} : ${message}`
            })
            .finally(() => {
                $loader.classList.add('none');
                setTimeout(() => {
                    location.hash = '#close'
                }, 3000)
            })
        })
})(document)

navList.forEach(element => {
    element.addEventListener('click', (e) => {
        if(e.target.name === 'home') {
            btnHome.classList.add('btnHomeColor')
            btnProjects.classList.remove('btnProjectsColor')
            btnContact.classList.remove('btnContactColor')
        } else if(e.target.name === 'projects') {
            btnProjects.classList.add('btnProjectsColor')
            btnHome.classList.remove('btnHomeColor')
            btnContact.classList.remove('btnContactColor')
        } else if(e.target.name === 'contact') {
            btnContact.classList.add('btnContactColor')
            btnProjects.classList.remove('btnProjectsColor')
            btnHome.classList.remove('btnHomeColor')
        }
    })
})

// inserting elements cloned
projectsContainer.insertAdjacentElement('afterbegin', copyLogo)
navBar.insertAdjacentElement('beforeend', copyName)
contactContainer.insertAdjacentElement('afterbegin', copyLogo2)
navBar.insertAdjacentElement('beforeend', copyName2)

// adding classes to elements cloned
projectsContainer.children[0].setAttribute('class', 'logo_container2 hidden_logo2')
contactContainer.children[0].setAttribute('class', 'logo_container3 hidden_logo3')
navBar.children[2].setAttribute('class', 'name2 hidden_name2')
navBar.children[3].setAttribute('class', 'name3 hidden_name3')

// accessing to classes from elements cloned
const logo2 = document.querySelector('.logo_container2')
const logo3 = document.querySelector('.logo_container3')
const mainName2 = document.querySelector('.name2')
const mainName3 = document.querySelector('.name3')

//adding class to project logo
logo2.children[0].setAttribute('class', 'main_logo2')
logo2.children[1].setAttribute('class', 'mini_logo2')
logo2.children[2].setAttribute('class', 'words_logo2')

//adding class to contact logo
logo3.children[0].setAttribute('class', 'main_logo3')
logo3.children[1].setAttribute('class', 'mini_logo3')
logo3.children[2].setAttribute('class', 'words_logo3')



window.addEventListener('scroll', (e) => {
    
    let sizeScreen = screen.width
    
    if(sizeScreen <= 1400 && sizeScreen >= 1000) {
        if(window.scrollY >= 80) {
            logo.classList.add('hidden_logo')
            mainName.classList.add('hidden_name')
        } else {
            logo.classList.remove('hidden_logo')
            mainName.classList.remove('hidden_name')
            
        }
        
        if(window.scrollY >= 640) {
            logo2.classList.remove('hidden_logo2')
            mainName2.classList.remove('hidden_name2')
        } else if(window.scrollY < 640) {
            logo2.classList.add('hidden_logo2')
            mainName2.classList.add('hidden_name2')
        } 
        
        if(window.scrollY >= 700) {
            logo2.classList.add('hidden_logo2')
            mainName2.classList.add('hidden_name2')
        }
        
        if(window.scrollY >= 1250) {
            logo3.classList.remove('hidden_logo3')
            mainName3.classList.remove('hidden_name3')
        } else if(window.scrollY < 1250) {
            logo3.classList.add('hidden_logo3')
            mainName3.classList.add('hidden_name3')
        }
        
         
} else if(sizeScreen < 1000) {
    if(window.scrollY >= 80) {
        logo.classList.add('hidden_logo')
        mainName.classList.add('hidden_name')
    } else {
        logo.classList.remove('hidden_logo')
        mainName.classList.remove('hidden_name')
        
    }
    
    if(window.scrollY >= 1020) {
        logo2.classList.remove('hidden_logo2')
        mainName2.classList.remove('hidden_name2')
    } else if(window.scrollY < 1020) {
        logo2.classList.add('hidden_logo2')
        mainName2.classList.add('hidden_name2')
    } 
    
    if(window.scrollY >= 1080) {
        logo2.classList.add('hidden_logo2')
        mainName2.classList.add('hidden_name2')
    }
    
    if(window.scrollY >= 1950) {
        logo3.classList.remove('hidden_logo3')
        mainName3.classList.remove('hidden_name3')
    } else if(window.scrollY < 1950) {
        logo3.classList.add('hidden_logo3')
        mainName3.classList.add('hidden_name3')
    }
    
    if(window.scrollY > 2100) {
        logo3.classList.add('hidden_logo3')
        mainName3.classList.add('hidden_name3')
    }
} else if(sizeScreen > 1400) {
    if(window.scrollY >= 80) {
        logo.classList.add('hidden_logo')
        mainName.classList.add('hidden_name')
    } else {
        logo.classList.remove('hidden_logo')
        mainName.classList.remove('hidden_name')
        
    }
    
    if(window.scrollY >= 900) {
        logo2.classList.remove('hidden_logo2')
        mainName2.classList.remove('hidden_name2')
    } else if(window.scrollY < 900) {
        logo2.classList.add('hidden_logo2')
        mainName2.classList.add('hidden_name2')
    } 
    
    if(window.scrollY >= 1080) {
        logo2.classList.add('hidden_logo2')
        mainName2.classList.add('hidden_name2')
    }
    
    if(window.scrollY >= 1800) {
        logo3.classList.remove('hidden_logo3')
        mainName3.classList.remove('hidden_name3')
    } else if(window.scrollY < 1800) {
        logo3.classList.add('hidden_logo3')
        mainName3.classList.add('hidden_name3')
    }
    
    if(window.scrollY > 2100) {
        logo3.classList.add('hidden_logo3')
        mainName3.classList.add('hidden_name3')
    }

}
    
})


iconWhatsapp.addEventListener('click', (e) => {
    iconWhatsapp.classList.toggle('deploy_whatsapp')
    phone.classList.toggle('deploy_phone')
    iconWhatsapp2.classList.remove('deploy_whatsapp2')
    phone2.classList.remove('deploy_phone2')
})

iconWhatsapp2.addEventListener('click', (e) => {
    iconWhatsapp2.classList.toggle('deploy_whatsapp2')
    phone2.classList.toggle('deploy_phone2')
    iconWhatsapp.classList.remove('deploy_whatsapp')
    phone.classList.remove('deploy_phone')
})