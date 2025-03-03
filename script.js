document.addEventListener('DOMContentLoaded', function () {
    // Элементы DOM
    const progressCircle = document.getElementById('progress-circle');
    const valueInput = document.getElementById('value');
    const animateCheckbox = document.getElementById('animate');
    const hideCheckbox = document.getElementById('hide');
    const progressSvg = document.getElementById('progress-svg');

    // Настройка прогресса
    const maxProgress = 565.48; // Максимальное значение stroke-dashoffset (2π * радиус)
    progressCircle.style.strokeDashoffset = maxProgress; // Начальное значение

    // Обновление прогресса при изменении значения в поле Value
    valueInput.addEventListener('input', function () {
        const value = parseInt(valueInput.value, 10); // Получаем значение из input
        if (value >= 0 && value <= 100) {
            const offset = maxProgress - (maxProgress * value) / 100; // Вычисляем новое значение stroke-dashoffset
            progressCircle.style.strokeDashoffset = offset; // Применяем к дуге
        }
    });

    // Включение/выключение анимации
    animateCheckbox.addEventListener('change', function () {
        if (animateCheckbox.checked) {
            progressSvg.classList.add('animated'); // Добавляем класс для анимации
        } else {
            progressSvg.classList.remove('animated'); // Убираем класс для анимации
        }
    });

    // Скрытие/показ блока прогресса
    hideCheckbox.addEventListener('change', function () {
        if (hideCheckbox.checked) {
            progressSvg.style.display = 'none'; // Скрываем блок
        } else {
            progressSvg.style.display = 'block'; // Показываем блок
        }
    });
});