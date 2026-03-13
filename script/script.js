document.addEventListener('DOMContentLoaded', function() 
    { 
    console.log('DOM fully loaded and parsed'); 

    document.querySelectorAll('.navigation a').forEach(link => { 
    link.addEventListener('mouseover', function() { 
        this.style.color = '#f8b489'; 
    }); 
    link.addEventListener('mouseout', function() { 
        this.style.color = '#b67b73'; 
    }); 
});

document.getElementById('contactForm').addEventListener('submit', function(e) { 
    e.preventDefault(); 
     
    let name = document.getElementById('name').value; 
    let email = document.getElementById('email').value; 
    let message = document.getElementById('message').value; 
     
    console.log('Форма відправлена:'); 
    console.log('Ім\'я:', name); 
    console.log('Email:', email); 
    console.log('Повідомлення:', message); 
     
    // Тут можна додати код для відправки даних на сервер 
     
    alert('Дякуємо за ваше повідомлення!'); 
    this.reset(); 
});
});

let currentSlide = 0; 
const slides = document.querySelectorAll('#imageSlider img'); 
 
function showSlide(n) { 
    slides.forEach(slide => slide.style.display = 'none'); 
    slides[n].style.display = 'block'; 
} 
 
document.getElementById('nextBtn').addEventListener('click', function() { 
    currentSlide = (currentSlide + 1) % slides.length; 
    showSlide(currentSlide); 
}); 
 
document.getElementById('prevBtn').addEventListener('click', function() { 
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; 
    showSlide(currentSlide); 
}); 
 
showSlide(currentSlide);
