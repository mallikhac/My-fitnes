function initializeWorkoutsSection() {
    const exercisesByMuscle = {
        chest: [
            { name: 'Bench Press', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif' },
            { name: 'Incline Dumbbell Press', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Incline-Bench-Press.gif' },
            { name: 'Chest Dips', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Chest-Dips.gif' },
            { name: 'Dumbbell Flyes', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Fly.gif' },
            { name: 'Push-Ups', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Push-up.gif' },
            { name: 'Cable Crossover', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crossover.gif' },
            { name: 'Pec Deck Machine', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Pec-Deck-Fly.gif' }
        ],
        triceps: [
            { name: 'Tricep Pushdowns', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Pushdown.gif' },
            { name: 'Skull Crushers', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lying-Triceps-Press.gif' },
            { name: 'Close Grip Bench Press', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Close-Grip-Bench-Press.gif' },
            { name: 'Overhead Tricep Extension', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Overhead-Triceps-Extension.gif' },
            { name: 'Tricep Dips', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Bench-Dips.gif' }
        ],
        back: [
            { name: 'Pull-Ups', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif' },
            { name: 'Bent Over Rows', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Bent-Over-Barbell-Row.gif' },
            { name: 'Lat Pulldowns', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif' },
            { name: 'Deadlifts', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Deadlift.gif' },
            { name: 'T-Bar Rows', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/T-bar-Row.gif' },
            { name: 'Seated Cable Rows', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Cable-Row.gif' }
        ],
        biceps: [
            { name: 'Barbell Curls', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif' },
            { name: 'Hammer Curls', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif' },
            { name: 'Dumbbell Curls', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Curl.gif' },
            { name: 'Preacher Curls', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Preacher-Curl.gif' },
            { name: 'Concentration Curls', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Concentration-Curl.gif' }
        ],
        legs: [
            { name: 'Squats', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Squat.gif' },
            { name: 'Leg Press', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Press.gif' },
            { name: 'Romanian Deadlifts', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Romanian-Deadlift.gif' },
            { name: 'Lunges', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lunge.gif' },
            { name: 'Leg Curls', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lying-Leg-Curl.gif' },
            { name: 'Calf Raises', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Standing-Calf-Raise.gif' }
        ],
        shoulders: [
            { name: 'Overhead Press', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Overhead-Dumbbell-Press.gif' },
            { name: 'Lateral Raises', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif' },
            { name: 'Arnold Press', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Arnold-Press.gif' },
            { name: 'Face Pulls', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Face-Pull.gif' },
            { name: 'Front Raises', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Front-Dumbbell-Raise.gif' }
        ]
    };

    const weeklyPlan = {
        Monday: { title: 'Chest & Triceps', muscles: ['chest', 'triceps'], counts: [3, 2] },
        Tuesday: { title: 'Back & Biceps', muscles: ['back', 'biceps'], counts: [3, 2] },
        Wednesday: { title: 'Legs & Shoulders', muscles: ['legs', 'shoulders'], counts: [3, 2] },
        Thursday: { title: 'Chest & Triceps', muscles: ['chest', 'triceps'], counts: [3, 2] },
        Friday: { title: 'Back & Biceps', muscles: ['back', 'biceps'], counts: [3, 2] },
        Saturday: { title: 'Legs & Shoulders', muscles: ['legs', 'shoulders'], counts: [3, 2] },
        Sunday: { title: 'Rest Day', muscles: [], counts: [] }
    };

    function getRandomExercises(muscle, count) {
        const exercises = exercisesByMuscle[muscle];
        const shuffled = [...exercises].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    const workoutContainer = document.getElementById('workout-plan');
    // Clear the container before adding new workouts
    workoutContainer.innerHTML = '';
    for (const day in weeklyPlan) {
        const dayData = weeklyPlan[day];
        const workoutEl = document.createElement('div');
        workoutEl.classList.add('workout-day');

        let exercisesHtml = '<ul>';
        if (dayData.muscles.length > 0) {
            dayData.muscles.forEach((muscle, index) => {
                const count = dayData.counts[index];
                const selectedExercises = getRandomExercises(muscle, count);
                selectedExercises.forEach(exercise => {
                    exercisesHtml += `<li>${exercise.name} (3-4 sets) <img src="${exercise.image}" alt="${exercise.name}" class="exercise-gif"></li>`;
                });
            });
        } else {
            exercisesHtml += '<li>Time to recover and build muscle!</li>';
        }
        exercisesHtml += '</ul>';

        workoutEl.innerHTML = `<h2>${day}: ${dayData.title}</h2>${exercisesHtml}`;
        workoutContainer.appendChild(workoutEl);
    }
}
