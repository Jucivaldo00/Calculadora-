function calculateCalories() {
    const weight = parseFloat(document.getElementById('weight').value);
    const duration = parseFloat(document.getElementById('duration').value);
    const exerciseType = parseFloat(document.getElementById('exerciseType').value);
    
    if (isNaN(weight) || isNaN(duration)) {
        document.getElementById('result').innerText = 'Por favor, insira valores válidos.';
        return;
    }
    
    const caloriesBurned = (weight * exerciseType * duration) / 60;
    document.getElementById('result').innerText = `Calorias queimadas: ${caloriesBurned.toFixed(2)} kcal`;
}
