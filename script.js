document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('nav.menu');

  menuToggle.addEventListener('click', function () {
    menu.classList.toggle('active');
  });
});

      },
      {
        threshold: 0.1,
      }
    );
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  });
  
