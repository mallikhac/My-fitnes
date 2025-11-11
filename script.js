document.addEventListener('DOMContentLoaded', () => {
    // Register the service worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                })
                .catch(err => {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }

    const navHome = document.getElementById('nav-home');
    const navWorkouts = document.getElementById('nav-workouts');
    const navDiet = document.getElementById('nav-diet');

    const homeSection = document.getElementById('home-section');
    const workoutsSection = document.getElementById('workouts-section');
    const dietSection = document.getElementById('diet-section');
    const progressSection = document.getElementById('progress-section');

    const sections = [homeSection, workoutsSection, dietSection, progressSection];

    const cardWorkouts = document.getElementById('card-workouts');
    const cardDiet = document.getElementById('card-diet');
    const cardProgress = document.getElementById('card-progress');

    function showSection(sectionToShow) {
        sections.forEach(section => {
            if (section === sectionToShow) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        });

        // Update active nav link
        const navLinks = [navHome, navWorkouts, navDiet];
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        if (sectionToShow === homeSection) {
            navHome.classList.add('active');
        } else if (sectionToShow === workoutsSection) {
            navWorkouts.classList.add('active');
            initializeWorkoutsSection();
        } else if (sectionToShow === dietSection) {
            navDiet.classList.add('active');
            initializeDietSection();
        }
    }

    navHome.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(homeSection);
    });

    navWorkouts.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(workoutsSection);
    });

    navDiet.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(dietSection);
    });

    cardWorkouts.addEventListener('click', () => showSection(workoutsSection));
    cardDiet.addEventListener('click', () => showSection(dietSection));
    cardProgress.addEventListener('click', () => showSection(progressSection));

    // Progress Tracker with localStorage
    const progressForm = document.getElementById('progress-form');
    const currentWeightInput = document.getElementById('current-weight');
    const dailyStepsInput = document.getElementById('daily-steps');

    // Load saved progress
    const savedWeight = localStorage.getItem('currentWeight');
    const savedSteps = localStorage.getItem('dailySteps');

    if (savedWeight) {
        currentWeightInput.value = savedWeight;
    }
    if (savedSteps) {
        dailyStepsInput.value = savedSteps;
    }

    if (progressForm) {
        progressForm.addEventListener('submit', (e) => {
            e.preventDefault();
            localStorage.setItem('currentWeight', currentWeightInput.value);
            localStorage.setItem('dailySteps', dailyStepsInput.value);
            alert('Progress updated and saved!');
        });
    }

    // Show home section by default
    showSection(homeSection);
});
