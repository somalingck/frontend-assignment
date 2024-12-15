// Add an effect when a box is selected
document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.box').forEach((box) => {
        box.classList.remove('selected');
      });
      radio.closest('.box').classList.add('selected');
    });
  });
  