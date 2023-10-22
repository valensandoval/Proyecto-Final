document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('contrasena');
    const confirmPasswordInput = document.getElementById('repetir-contrasena');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    emailInput.addEventListener('input', function () {
        const emailMessage = document.getElementById('emailMessage');
        if (!emailRegex.test(emailInput.value)) {
            emailMessage.textContent = 'El correo electrónico no es válido';
        } else {
            emailMessage.textContent = '';
        }
    });

    passwordInput.addEventListener('input', function () {
        const passwordMessage = document.getElementById('contrasenaMessage');
        if (!passwordRegex.test(passwordInput.value)) {
            passwordMessage.textContent = 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número';
        } else {
            passwordMessage.textContent = '';
        }
    });

    confirmPasswordInput.addEventListener('input', function () {
        const confirmPasswordMessage = document.getElementById('repetir-contrasenaMessage');
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordMessage.textContent = 'Las contraseñas no coinciden';
        } else {
            confirmPasswordMessage.textContent = '';
        }
    });

});

document.addEventListener("DOMContentLoaded", function () {
    const contrasenaInput = document.getElementById("contrasena");
    const showPasswordButton = document.getElementById("mostrar1");
    const hidePasswordButton = document.getElementById("ocultar1");

    showPasswordButton.addEventListener("click", function () {
        contrasenaInput.type = "text";
        showPasswordButton.style.display = "none";
        hidePasswordButton.style.display = "inline-block";
    });

    hidePasswordButton.addEventListener("click", function () {
        contrasenaInput.type = "password";
        hidePasswordButton.style.display = "none";
        showPasswordButton.style.display = "inline-block";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const contrasenaInput = document.getElementById("repetir-contrasena");
    const showPasswordButton = document.getElementById("mostrar2");
    const hidePasswordButton = document.getElementById("ocultar2");

    showPasswordButton.addEventListener("click", function () {
        contrasenaInput.type = "text";
        showPasswordButton.style.display = "none";
        hidePasswordButton.style.display = "inline-block";
    });

    hidePasswordButton.addEventListener("click", function () {
        contrasenaInput.type = "password";
        hidePasswordButton.style.display = "none";
        showPasswordButton.style.display = "inline-block";
    });
});


function mostrarInfo(id) {
    var infoElement = document.getElementById(id);
    var infoElements = document.querySelectorAll('.info');
    infoElements.forEach(function (element) {
        if (element !== infoElement) {
            element.style.display = 'none';
        }
    });
    if (infoElement) {
        if (infoElement.style.display === 'block') {
            infoElement.style.display = 'none';
        } else {
            infoElement.style.display = 'block';
        }
    }
}

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
let slideIndex = 0;
let autoSlideInterval;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    if (slideIndex < slides.length - 1) {
        slideIndex++;
    } else {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

function prevSlide() {
    if (slideIndex > 0) {
        slideIndex--;
    } else {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
}

function autoSlide() {
    nextSlide();
}

showSlide(slideIndex);

autoSlideInterval = setInterval(autoSlide, 10000);

document.querySelector("#next").addEventListener("click", function () {
    clearInterval(autoSlideInterval);
    nextSlide();
    autoSlideInterval = setInterval(autoSlide, 10000);
});

document.querySelector("#prev").addEventListener("click", function () {
    clearInterval(autoSlideInterval);
    prevSlide();
    autoSlideInterval = setInterval(autoSlide, 10000);
});
