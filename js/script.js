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
            title: 'Mock Travel Blog',
            description: 'A journey through design and content, capturing the essence of travel in a web experience.',
            image: 'https://images.unsplash.com/photo-1565202619567-3dd2320a1656?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            link: 'https://codepen.io/student-account-bradley-matera/pen/MWLPeVY'
        },
        {
            title: 'Mock Burger Website',
            description: 'Crafting a delicious online presence for a fictional burger joint, focusing on appetite-stimulating designs.',
            image: 'images/heroburger.jpg',
            link: 'https://codepen.io/student-account-bradley-matera/pen/BWVEJ'
        },
        {
            title: 'Mock Fan Page',
            description: 'A project to engage fandom through multimedia content integration, showcasing my ability to create community-centric platforms.',
            image: 'images/gallery-pawnee-harvest-festival.jpg',
            link: 'https://codepen.io/student-account-bradley-matera/pen/WZbVy'
        },
        {
            title: 'YouTube Content',
            description: 'Produced educational content on UI/UX design and basic web development concepts, sharing insights and personal learning milestones.',
            image: 'images/hqdefault.jpg',
            link: 'https://www.youtube.com/channel/UCo4EcyuHEjfSfozw8LrwfZg'
        }
    ];

    const projectContainer = document.querySelector('.grid.md\\:grid-cols-2.gap-8');
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
