document.querySelectorAll('.accordion-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    })
  })