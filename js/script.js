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
            image: 'https://via.placeholder.com/300/1f2937/ffffff?text=Portfolio', // Example image URL
            link: 'https://codepen.io/student-account-bradley-matera/full/BaMEejV'
        },
        {
            title: 'Mock Travel Blog',
            description: 'A journey through design and content, capturing the essence of travel in a web experience.',
            image: 'https://via.placeholder.com/300/3b82f6/ffffff?text=Travel+Blog', // Example image URL
            link: 'https://codepen.io/student-account-bradley-matera/full/MWLPeVY'
        },
        {
            title: 'Mock Travel Agency',
            description: 'A fictional travel agency website to demonstrate web development skills.',
            image: 'https://via.placeholder.com/300/3b82f6/ffffff?text=Travel+Agency', // Example image URL
            link: 'https://codepen.io/student-account-bradley-matera/full/MWLPeVY'
        },
        {
            title: 'Data Visualization Example',
            description: 'A data visualization project showcasing the use of various data representation techniques.',
            image: 'https://via.placeholder.com/300/10b981/ffffff?text=Data+Viz', // Example image URL
            link: 'https://codepen.io/student-account-bradley-matera/full/dyEYbPO'
        },
        {
            title: 'GitHub Travel Portfolio',
            description: 'A travel portfolio and blog hosted on GitHub with an active site.',
            image: 'https://via.placeholder.com/300/ef4444/ffffff?text=GitHub+Travel+Portfolio', // Example image URL
            link: 'https://github.com/BradleyMatera/WDV-119-Bradley-Matera'
        },
        {
            title: 'JS Portfolios',
            description: 'A collection of JavaScript projects demonstrating various programming concepts and techniques.',
            image: 'https://via.placeholder.com/300/f59e0b/ffffff?text=JS+Portfolios', // Example image URL
            link: 'https://github.com/BradleyMatera/JS-Portfolios'
        },
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
});
