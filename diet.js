document.addEventListener('DOMContentLoaded', () => {
    const dietSuggestions = [
        'Drink at least 8 glasses of water a day.',
        'Include lean protein in every meal.',
        'Eat more fruits and vegetables.',
        'Avoid sugary drinks and snacks.',
        'Opt for whole grains instead of refined grains.',
        'Control your portion sizes.'
    ];

    const suggestionsContainer = document.getElementById('suggestions');
    dietSuggestions.forEach(suggestion => {
        const item = document.createElement('p');
        item.textContent = suggestion;
        suggestionsContainer.appendChild(item);
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
