const containers = document.querySelectorAll('.container');

containers.forEach(container => {
  container.addEventListener('click', () => {
    const description = container.querySelector('.description');
    description.style.display = description.style.display === 'none'? 'block' : 'none';
  });
});