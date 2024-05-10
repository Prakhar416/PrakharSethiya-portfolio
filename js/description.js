const resumeWraps = document.querySelectorAll('.resume-wrap');

resumeWraps.forEach(resumeWrap => {
  resumeWrap.addEventListener('click', () => {
    const description = resumeWrap.querySelector('.description');
    description.style.display = description.style.display === 'none'? 'block' : 'none';
  });
});