document.addEventListener('DOMContentLoaded', () => {
    // Responsive navigation
    const navToggle = document.querySelector('button');
    const navMenu = document.querySelector('nav');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic project loading
    const projects = [
        {
            title: 'Web Developer Portfolio',
            description: 'A portfolio showcasing my web development projects and skills.',
            image: 'https://via.placeholder.com/300',
            link: 'https://codepen.io/student-account-bradley-matera/full/BaMEejV'
        },
        {
            title: 'Mock Travel Blog',
            description: 'A journey through design and content, capturing the essence of travel in a web experience.',
            image: 'https://images.unsplash.com/photo-1565202619567-3dd2320a1656?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            link: 'https://codepen.io/student-account-bradley-matera/full/MWLPeVY'
        },
        {
            title: 'Mock Travel Agency',
            description: 'A fictional travel agency website to demonstrate web development skills.',
            image: 'https://images.unsplash.com/photo-1565202619567-3dd2320a1656?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            link: 'https://codepen.io/student-account-bradley-matera/full/MWLPeVY'
        },
        {
            title: 'Data Visualization Example',
            description: 'A data visualization project showcasing the use of various data representation techniques.',
            image: 'https://via.placeholder.com/300',
            link: 'https://codepen.io/student-account-bradley-matera/full/dyEYbPO'
        },
        {
            title: 'GitHub Travel Portfolio',
            description: 'A travel portfolio and blog hosted on GitHub with an active site.',
            image: 'https://via.placeholder.com/300',
            link: 'https://github.com/BradleyMatera/WDV-119-Bradley-Matera'
        },
        {
            title: 'JS Portfolios',
            description: 'A collection of JavaScript projects demonstrating various programming concepts and techniques.',
            image: 'https://via.placeholder.com/300',
            link: 'https://github.com/BradleyMatera/JS-Portfolios'
        },
        {
            title: 'Best of React',
            description: 'A repository showcasing the best React projects and components I have developed.',
            image: 'https://via.placeholder.com/300',
            link: 'https://github.com/BradleyMatera/best-of-react'
        }
    ];
    
    const projectContainer = document.getElementById('project-container');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project', 'transition', 'duration-500', 'ease-in-out', 'transform', 'hover:-translate-y-1', 'hover:shadow-xl');
        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="rounded-md mb-4 object-cover h-48 w-full">
            <h4 class="font-semibold">${project.title}</h4>
            <p class="text-gray-600 mb-2">${project.description}</p>
            <a href="${project.link}" class="text-blue-500 hover:text-blue-600">View Project →</a>
        `;
        projectContainer.appendChild(projectElement);
    });