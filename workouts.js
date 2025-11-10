document.addEventListener('DOMContentLoaded', () => {
    const workoutSchedule = {
        Monday: { 
            title: 'Chest & Triceps',
            type: 'Strength Training',
            exercises: [
                { name: 'Bench Press (4 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif' },
                { name: 'Incline Dumbbell Press (3 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Incline-Bench-Press.gif' },
                { name: 'Chest Dips (3 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Chest-Dips.gif' },
                { name: 'Tricep Pushdowns (4 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Pushdown.gif' },
                { name: 'Skull Crushers (3 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lying-Triceps-Press.gif' }
            ]
        },
        Tuesday: {
            title: 'Back & Biceps',
            type: 'Strength Training',
            exercises: [
                { name: 'Pull-Ups (4 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif' },
                { name: 'Bent Over Rows (4 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Bent-Over-Barbell-Row.gif' },
                { name: 'Lat Pulldowns (3 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif' },
                { name: 'Barbell Curls (4 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif' },
                { name: 'Hammer Curls (3 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif' }
            ]
        },
        Wednesday: {
            title: 'Legs & Shoulders',
            type: 'Strength & Hypertrophy',
            exercises: [
                { name: 'Squats (4 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Squat.gif' },
                { name: 'Leg Press (4 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Press.gif' },
                { name: 'Romanian Deadlifts (3 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Romanian-Deadlift.gif' },
                { name: 'Overhead Press (4 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Overhead-Dumbbell-Press.gif' },
                { name: 'Lateral Raises (3 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif' }
            ]
        },
        // Add the rest of the days with working links
        Thursday: {
            title: 'Chest & Triceps',
            type: 'Hypertrophy',
            exercises: [
                { name: 'Dumbbell Bench Press (4 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Bench-Press.gif' },
                { name: 'Machine Chest Fly (3 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Pec-Deck-Fly.gif' },
                { name: 'Close Grip Bench Press (4 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Close-Grip-Bench-Press.gif' },
                { name: 'Overhead Tricep Extension (3 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Overhead-Triceps-Extension.gif' }
            ]
        },
        Friday: {
            title: 'Back & Biceps',
            type: 'Strength & Hypertrophy',
            exercises: [
                { name: 'Deadlifts (4 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Deadlift.gif' },
                { name: 'T-Bar Rows (4 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/T-bar-Row.gif' },
                { name: 'Seated Cable Rows (3 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Cable-Row.gif' },
                { name: 'Dumbbell Curls (4 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Curl.gif' },
                { name: 'Preacher Curls (3 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Preacher-Curl.gif' }
            ]
        },
        Saturday: {
            title: 'Legs & Shoulders',
            type: 'Hypertrophy',
            exercises: [
                { name: 'Lunges (4 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lunge.gif' },
                { name: 'Leg Curls (4 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lying-Leg-Curl.gif' },
                { name: 'Calf Raises (5 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Standing-Calf-Raise.gif' },
                { name: 'Arnold Press (4 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Arnold-Press.gif' },
                { name: 'Face Pulls (3 sets)', image: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Face-Pull.gif' }
            ]
        }
    };

    const workoutContainer = document.getElementById('workout-plan');
    for (const day in workoutSchedule) {
        const dayData = workoutSchedule[day];
        const workoutEl = document.createElement('div');
        
        let exercisesHtml = '<ul>';
        dayData.exercises.forEach(exercise => {
            exercisesHtml += `<li>${exercise.name} <img src="${exercise.image}" alt="${exercise.name}" class="exercise-gif"></li>`;
        });
        exercisesHtml += '</ul>';

        workoutEl.innerHTML = `<h2>${day}: ${dayData.title} <em>(${dayData.type})</em></h2>${exercisesHtml}`;
        workoutContainer.appendChild(workoutEl);
    }
});
