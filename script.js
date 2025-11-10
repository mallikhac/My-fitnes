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
        Monday: { 
            title: 'Chest & Triceps',
            exercises: ['Bench Press (4 sets)', 'Incline Dumbbell Press (3 sets)', 'Chest Dips (3 sets)', 'Tricep Pushdowns (4 sets)', 'Skull Crushers (3 sets)']
        },
        Tuesday: {
            title: 'Back & Biceps',
            exercises: ['Pull-Ups (4 sets)', 'Bent Over Rows (4 sets)', 'Lat Pulldowns (3 sets)', 'Barbell Curls (4 sets)', 'Hammer Curls (3 sets)']
        },
        Wednesday: {
            title: 'Legs & Shoulders',
            exercises: ['Squats (4 sets)', 'Leg Press (4 sets)', 'Romanian Deadlifts (3 sets)', 'Overhead Press (4 sets)', 'Lateral Raises (3 sets)']
        },
        Thursday: {
            title: 'Chest & Triceps',
            exercises: ['Dumbbell Bench Press (4 sets)', 'Machine Chest Fly (3 sets)', 'Close Grip Bench Press (4 sets)', 'Overhead Tricep Extension (3 sets)']
        },
        Friday: {
            title: 'Back & Biceps',
            exercises: ['Deadlifts (4 sets)', 'T-Bar Rows (4 sets)', 'Seated Cable Rows (3 sets)', 'Dumbbell Curls (4 sets)', 'Preacher Curls (3 sets)']
        },
        Saturday: {
            title: 'Legs & Shoulders',
            exercises: ['Lunges (4 sets)', 'Leg Curls (4 sets)', 'Calf Raises (5 sets)', 'Arnold Press (4 sets)', 'Face Pulls (3 sets)']
        },
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
        const dayData = workoutSchedule[day];
        const workoutEl = document.createElement('div');
        
        let exercisesHtml = '<ul>';
        dayData.exercises.forEach(exercise => {
            exercisesHtml += `<li>${exercise}</li>`;
        });
        exercisesHtml += '</ul>';

        workoutEl.innerHTML = `<strong>${day}: ${dayData.title}</strong>${exercisesHtml}`;
        workoutContainer.appendChild(workoutEl);
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
