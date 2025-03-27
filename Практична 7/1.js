// Отримуємо елементи форми
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const avatarInput = document.getElementById('avatar');
const avatarPreview = document.getElementById('avatarPreview');
const passwordInput = document.getElementById('password');
const userForm = document.getElementById('userForm');
const clearDataButton = document.getElementById('clearData');

// Завантаження даних із localStorage при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
        nameInput.value = userData.name || '';
        emailInput.value = userData.email || '';
        phoneInput.value = userData.phone || '';
        passwordInput.value = userData.password || '';
        if (userData.avatar) {
            avatarPreview.src = userData.avatar;
        }
    }
});

// Збереження даних у localStorage
userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const password = passwordInput.value.trim();
    const avatar = avatarPreview.src;

    // Валідація
    if (!name || !email || !phone || !password) {
        alert('Будь ласка, заповніть усі поля!');
        return;
    }

    const userData = { name, email, phone, avatar, password };
    localStorage.setItem('userData', JSON.stringify(userData));

    alert('Дані успішно збережені!');
});

// Попередній перегляд аватара
avatarInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            avatarPreview.src = reader.result;
        };
        reader.readAsDataURL(file);
    }
});

// Очищення збережених даних
clearDataButton.addEventListener('click', () => {
    if (confirm('Ви впевнені, що хочете видалити всі дані?')) {
        localStorage.removeItem('userData');
        nameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';
        passwordInput.value = '';
        avatarPreview.src = '';
        alert('Дані очищено!');
    }
});

// Виведення даних у консоль
userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
        console.log('Дані користувача:', userData);
    }
});