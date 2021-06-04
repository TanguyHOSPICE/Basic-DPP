// Change page on nav-item click
let titles = document.querySelectorAll('#navbar .navbar-nav li');

for (let title of titles){
    title.addEventListener('click', function(){
        // Get num of the nav-items
        let num = this.getAttribute('data-tabtitle');
        // Remove class active from main section
        document.querySelector('main section.active').classList.remove('active');
        // Add class active to main section
        document.querySelector('main section#tab'+ num).classList.add('active');
        // Remove class active from nav-item
        document.querySelector('#navbar .navbar-nav li.active').classList.remove('active');
        // Add class active to nav-item
        this.classList.add('active');
    })
}