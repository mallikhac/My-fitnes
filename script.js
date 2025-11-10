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
            type: 'Strength Training',
            exercises: [
                { name: 'Bench Press (4 sets)', image: 'https://i.imgur.com/5s2bY2E.gif' },
                { name: 'Incline Dumbbell Press (3 sets)', image: 'https://i.imgur.com/1n1d6gD.gif' },
                { name: 'Chest Dips (3 sets)', image: 'https://i.imgur.com/y1g4V2D.gif' },
                { name: 'Tricep Pushdowns (4 sets)', image: 'https://i.imgur.com/S7n2bT6.gif' },
                { name: 'Skull Crushers (3 sets)', image: 'https://i.imgur.com/j7n8gT3.gif' }
            ]
        },
        Tuesday: {
            title: 'Back & Biceps',
            type: 'Strength Training',
            exercises: [
                { name: 'Pull-Ups (4 sets)', image: 'https://i.imgur.com/U8d5Q9k.gif' },
                { name: 'Bent Over Rows (4 sets)', image: 'https://i.imgur.com/t4g7b9j.gif' },
                { name: 'Lat Pulldowns (3 sets)', image: 'https://i.imgur.com/t4g7b9j.gif' },
                { name: 'Barbell Curls (4 sets)', image: 'https://i.imgur.com/t4g7b9j.gif' },
                { name: 'Hammer Curls (3 sets)', image: 'https://i.imgur.com/t4g7b9j.gif' }
            ]
        },
        // ... (I'll add placeholders for the other days for brevity, but you get the idea)
        Wednesday: {
            title: 'Legs & Shoulders',
            type: 'Strength & Hypertrophy',
            exercises: [
                { name: 'Squats (4 sets)', image: 'https://i.imgur.com/t4g7b9j.gif' },
                { name: 'Leg Press (4 sets)', image: 'https://i.imgur.com/t4g7b9j.gif' },
                { name: 'Romanian Deadlifts (3 sets)', image: 'https://i.imgur.com/t4g7b9j.gif' },
                { name: 'Overhead Press (4 sets)', image: 'https://i.imgur.com/t4g7b9j.gif' },
                { name: 'Lateral Raises (3 sets)', image: 'https://i.imgur.com/t4g7b9j.gif' }
            ]
        },
        Thursday: {
            title: 'Chest & Triceps',
            type: 'Hypertrophy',
            exercises: [
                { name: 'Dumbbell Bench Press (4 sets)', image: 'https://i.imgur.com/t4g7b9j.gif' },
                { name: 'Machine Chest Fly (3 sets)', image: 'https://i.imgur.com/t4g7b9j.gif' },
                { name: 'Close Grip Bench Press (4 sets)', image: 'https://i.imgur.com/t4g7b9j.gif' },
                { name: 'Overhead Tricep Extension (3 sets)', image: 'https://i.imgur.com/t4g7b9j.gif' }
            ]
        },
        Friday: {
            title: 'Back & Biceps',
            type: 'Strength & Hypertrophy',
            exercises: [
                { name: 'Deadlifts (4 sets)', image: 'https://i.imgur.com/t4g7b9j.gif' },
                { name: 'T-Bar Rows (4 sets)', image: 'https://i.imgur.com/t4g7b9j.gif' },
                { name: 'Seated Cable Rows (3 sets)', image: 'https://i.imgur.com/t4g7b9j.gif' },
                { name: 'Dumbbell Curls (4 sets)', image: 'https://i.imgur.com/t4g7b9j.gif' },
                { name: 'Preacher Curls (3 sets)', image: 'https://i.imgur.com/t4g7b9j.gif' }
            ]
        },
        Saturday: {
            title: 'Legs & Shoulders',
            type: 'Hypertrophy',
            exercises: [
                { name: 'Lunges (4 sets)', image: 'https://i.imgur.com/t4g7b9j.gif' },
                { name: 'Leg Curls (4 sets)', image: 'https://i.imgur.com/t4g7b9j.gif' },
                { name: 'Calf Raises (5 sets)', image: 'https://i.imgur.com/t4g7b9j.gif' },
                { name: 'Arnold Press (4 sets)', image: 'https://i.imgur.com/t4g7b9j.gif' },
                { name: 'Face Pulls (3 sets)', image: 'https://i.imgur.com/t4g7b9j.gif' }
            ]
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
            exercisesHtml += `<li>${exercise.name} <img src="${exercise.image}" alt="${exercise.name}" class="exercise-gif"></li>`;
        });
        exercisesHtml += '</ul>';

        workoutEl.innerHTML = `<strong>${day}: ${dayData.title}</strong> <em>(${dayData.type})</em>${exercisesHtml}`;
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
