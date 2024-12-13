const links = document.querySelectorAll('.navigation');

function setActiveLink(link) {
  links.forEach(item => item.classList.remove('active'));

  link.classList.add('active');
}

links.forEach(link => {
  link.addEventListener('click', () => setActiveLink(link));
});

document.addEventListener('DOMContentLoaded', () => {
  const defaultActive = document.querySelector('.navigation.active');
  if (defaultActive) defaultActive.classList.add('active');
});

function showCategory(categoryId) {
  const categories = document.querySelectorAll('.food-menu');
  categories.forEach(category => category.style.display = 'none');

  document.getElementById(categoryId).style.display = 'flex';
}

document.querySelectorAll('nav a').forEach(anchor => {
anchor.addEventListener('click', function (e) {
  const targetId = this.getAttribute('href');
  
  if (targetId.startsWith('#')) {
    e.preventDefault();  

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });

      const menuCategories = document.querySelectorAll('.menu-category');
      menuCategories.forEach(category => {
        category.classList.remove('active');
      });

      targetElement.classList.add('active');
    }
  }
});
});

document.addEventListener('DOMContentLoaded', () => {
const specialtyCategory = document.getElementById('specialty');
if (specialtyCategory) {
  specialtyCategory.classList.add('active');
  window.scrollTo({
    top: specialtyCategory.offsetTop - 80, 
    behavior: 'smooth'
  });
}
});


 document.addEventListener('DOMContentLoaded', () => {
            const images = document.querySelectorAll('.food img');
            
            images.forEach((img) => {
                // Dynamically set image paths
                img.src = `./images/products/${img.dataset.image}`;

                // Fallback for broken images
                img.onerror = () => {
                    console.error(`Image not found: ${img.src}`);
                    img.src = './images/placeholder.png'; // Replace with a default image
                };

                // Debugging: Log image paths
                console.log(`Loading image: ${img.src}`);
            });
        });
    </script>

document.querySelectorAll('.dropdown > a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const dropdownMenu = this.nextElementSibling;

    dropdownMenu.style.display =
      dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });
});


