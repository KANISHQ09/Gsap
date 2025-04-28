const menuIcon = document.querySelector('#menu-icon');
const closeIcon = document.querySelector('#close-icon');
const tabs = document.querySelector('.tabs');

closeIcon.style.display = 'none';

menuIcon.addEventListener('click', () => {
  tabs.style.display = 'inline-block';
  menuIcon.style.display = 'none';
  closeIcon.style.display = 'inline-block';
});

closeIcon.addEventListener('click', () => {
  tabs.style.display = 'none';
  closeIcon.style.display = 'none';
  menuIcon.style.display = 'inline-block';
});
