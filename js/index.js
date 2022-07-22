let menuIcon = document.getElementById('menu-icon');
let closeMenu = document.getElementById('close-menu');
let menuMobile = document.getElementById('menu-mobile');

menuIcon.addEventListener('click', () => {
    menuMobile.classList.toggle('opened')
});

closeMenu.addEventListener('click', () => {
    menuMobile.classList.toggle('opened')
});

//Selector Function

const selectorFunction = (targetID, boxesClass, targetStyle, boxStyle) => {
    let divTargets = document.getElementById(targetID);
    let targets = [...divTargets.children];
    let boxes = document.getElementsByClassName(boxesClass);
    let skills = [...boxes]
    //console.log({targets, skills});

    targets.forEach(target => {
        target.addEventListener('click', e => {
            let idx = targets.indexOf(e.target)
            console.log(e.target, idx);
            if (!e.target.classList.contains(targetStyle)) {
                for (let i=0; i<targets.length; i++){
                    if (targets[i].classList.contains(targetStyle)){
                        targets[i].classList.remove(targetStyle)
                        skills[i].classList.remove(boxStyle)
                    }
                }
                e.target.classList.add(targetStyle)
                skills[idx].classList.add(boxStyle)
            }
        })
    })
}

//skills selector

selectorFunction('skills-targets', 'skill-box', 'active', 'active')

//Offer Selector

selectorFunction('offer-targets', 'offer-box', 'show', 'active')

//people says

selectorFunction('testimony-targets', 'testimony-box', 'active', 'active')