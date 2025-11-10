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

    const workoutSchedule = {
        Monday: 'Chest & Triceps',
        Tuesday: 'Back & Biceps',
        Wednesday: 'Legs & Shoulders',
        Thursday: 'Chest & Triceps',
        Friday: 'Back & Biceps',
        Saturday: 'Legs & Shoulders',
    };

    const dietSuggestions = [
        'Drink at least 8 glasses of water a day.',
        'Include lean protein in every meal.',
        'Eat more fruits and vegetables.',
        'Avoid sugary drinks and snacks.',
        'Opt for whole grains instead of refined grains.',
        'Control your portion sizes.'
    ];

    const workoutContainer = document.getElementById('workout-schedule');
    for (const day in workoutSchedule) {
        const workout = document.createElement('div');
        workout.innerHTML = `<strong>${day}:</strong> ${workoutSchedule[day]}`;
        workoutContainer.appendChild(workout);
    }

    const suggestionsContainer = document.getElementById('suggestions');
    dietSuggestions.forEach(suggestion => {
        const item = document.createElement('p');
        item.textContent = suggestion;
        suggestionsContainer.appendChild(item);
    });

    const progressForm = document.getElementById('progress-form');
    progressForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Progress updated!');
    });

    const intakeForm = document.getElementById('intake-form');
    const intakeList = document.getElementById('intake-list');
    const totalCaloriesEl = document.getElementById('total-calories');
    let totalCalories = 0;

    intakeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const foodItem = document.getElementById('food-item').value;
        const calories = parseInt(document.getElementById('calories').value);

        if (foodItem && calories) {
            const listItem = document.createElement('li');
            listItem.textContent = `${foodItem}: ${calories} calories`;
            intakeList.appendChild(listItem);

            totalCalories += calories;
            totalCaloriesEl.textContent = totalCalories;

            document.getElementById('food-item').value = '';
            document.getElementById('calories').value = '';
        }
    });
});
