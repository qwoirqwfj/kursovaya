const modal = document.getElementById('modal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
const form = document.getElementById('orderForm');
const successMessage = document.getElementById('successMessage');

openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  form.style.display = 'block';
  successMessage.style.display = 'none';
  form.reset();
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.style.display = 'none';
  successMessage.style.display = 'block';
});