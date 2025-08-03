// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;

// Показываем кнопку "Назад" в интерфейсе Telegram
tg.BackButton.show();

// Обработчик кнопки "Назад"
tg.BackButton.onClick(() => {
    tg.close();
});

// Получаем данные пользователя
const user = tg.initDataUnsafe.user;
const userDataElement = document.getElementById('userData');

if (user) {
    userDataElement.innerHTML = `
        <p>ID: ${user.id}</p>
        <p>Имя: ${user.first_name || 'Не указано'}</p>
        <p>Фамилия: ${user.last_name || 'Не указано'}</p>
        <p>Username: @${user.username || 'Не указан'}</p>
    `;
} else {
    userDataElement.textContent = 'Данные пользователя недоступны';
}

// Обработчики кнопок
document.getElementById('showAlertBtn').addEventListener('click', () => {
    tg.showAlert('Это простое сообщение от MiniApp!');
});

document.getElementById('closeAppBtn').addEventListener('click', () => {
    tg.close();
});

// Можно использовать основную кнопку Telegram
tg.MainButton.setText('Готово');
tg.MainButton.show();
tg.MainButton.onClick(() => {
    tg.showAlert('Основная кнопка нажата!');
});