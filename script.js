// const menuBtn = document.querySelector('.menu-btn')
// const mainMenu = document.querySelector('#main-menu')


// menuBtn.addEventListener('click', () => {
//     const isExpanded =menuBtn.getAttribute('aria-expanded') === 'true'
//     if(isExpanded) {
//         menuBtn.setAttribute('aria-expanded', false)
//         mainMenu.addEventListener('animationend', () => {
//             mainMenu.classList.add('hide')
//         }, {once: true })
//     }
//     else {
//         mainMenu.classList.remove('hide')
//         menuBtn.setAttribute('aria-expanded', true)

//     }
// })

document.querySelectorAll('.accordion-item h3').forEach(item => {
    item.addEventListener('click', () => {
        const accordionItem = item.parentNode;
        
        // Toggle active class to show/hide content
        accordionItem.classList.toggle('active');
        
        // Close other accordion items
        document.querySelectorAll('.accordion-item').forEach(otherItem => {
            if (otherItem !== accordionItem) {
                otherItem.classList.remove('active');
            }
        });
    });
});
