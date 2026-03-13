document.addEventListener('DOMContentLoaded', function() { 
    console.log('DOM повністю завантажений'); 

    // 1. Анімація посилань навігації
    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => { 
        link.addEventListener('mouseover', function() { 
            this.style.transition = 'color 0.3s ease'; // Додаємо плавність
            this.style.color = '#f8b489'; 
        }); 
        link.addEventListener('mouseout', function() { 
            this.style.color = '#b67b73'; 
        }); 
    });

    // 2. Робота з формою
    // Знаходимо форму за допомогою селектора, оскільки ID може не бути
    const contactForm = document.querySelector('.contact-container form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) { 
            e.preventDefault(); 
             
            // Отримуємо дані
            const name = document.getElementById('name').value; 
            const email = document.getElementById('email').value; 
            const message = document.getElementById('message').value; 
             
            console.log('Дані отримано:', { name, email, message }); 
             
            // Ефект успішної відправки
            alert(`Дякуємо, ${name}! Ваше повідомлення надіслано.`); 
            this.reset(); 
        });
    }
});