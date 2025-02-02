
/* ПРОКРУТКА САЙТА*/

// script.js
document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector('.content');

    // Создаем кнопку
    const button = document.createElement('button');
    button.innerText = 'Сменить цвет фона';
    button.style.marginTop = '20px';
    content.appendChild(button);

    // Обработчик события для кнопки
    button.addEventListener('click', () => {
        // Случайный цвет
        const randomColor = `hsl(${Math.random() * 360}, 100%, 90%)`;
        document.body.style.backgroundColor = randomColor;
    });
});





