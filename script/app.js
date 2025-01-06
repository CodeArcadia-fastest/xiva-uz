// Rasimlarni massivga olsih
const images = [
    { url: './photos/xiva-ichan-qala-1.jpg', text: "O‘ZBEKISTON RESPUBLIKASI FANLAR AKADEMIYASI – XORAZM MA’MUN AKADEMIYASI" },
    { url: './photos/xiva-ichan-qala-2.jpg', text: "XORAZM VILOYATIDAGI GILXOMASHYODAN TIKLANGAN" },
    { url: './photos/xiva-ichan-qala-3.jpg', text: "ME’MORIY OBIDALAR BO‘YICHA" },
    { url: './photos/xiva-ichan-qala-4.jpg', text: "MA’LUMOTLAR BAZASI" }
];

// rasim indexsi
let currentImageIndex = 0;

// funksiya rasm va text
function changeBackgroundImage() {
    const header = document.querySelector('header');
    const headerText = document.querySelector('.header-bosh-yozuv');

    // rasm va text olmashuvi
    header.style.backgroundImage = `url(${images[currentImageIndex].url})`;
    headerText.textContent = images[currentImageIndex].text;

    // yabgi rasimga index olmashuvi
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// har 5 sekunda ishga tushishi
setInterval(changeBackgroundImage, 5000);

// algaritm
let isSearchActive = true;

// funksiya
function toggleSearch() {
    const searchInput = document.querySelector('.nav-search-input');
    const loginButton = document.querySelector('.nav-login-button');
    const select = document.querySelector('select');
    const logo = document.querySelector('.nav-logo');
    const menu = document.querySelector('.menu');
    const button = document.querySelector('.nav-search-button');

    if (isSearchActive) {
        // qidiruvni yopish

        
        select.style.display = "none";
        searchInput.style.display = "inline-block";
        logo.style.display = "none";
        loginButton.style.display = "none";
        menu.style.display = "flex";
        button.textContent = "X";
    } else {
        // ochish
        searchInput.style.display = "none";
        select.style.display = "inline-block";
        logo.style.display = "inline-block";
        loginButton.style.display = "inline-block";
        menu.style.display = "none";
        button.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';
    }

    // Переключаем состояние
    isSearchActive = !isSearchActive;
}


// Обработчик события для кнопки поиска
document.querySelector('.nav-search-button').addEventListener('click', toggleSearch);

// Инициализация начального фона
changeBackgroundImage();
