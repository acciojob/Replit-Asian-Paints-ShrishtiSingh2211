//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  const gridItems = document.querySelectorAll('.grid-item');
  const colorForm = document.getElementById('colorForm');

  function resetGridColors() {
    gridItems.forEach(item => {
      item.style.backgroundColor = 'transparent';
    });
  }

  function changeColor(event) {
    event.preventDefault();
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;
    const block = document.getElementById(blockId);
    if (block) {
      resetGridColors();
      block.style.backgroundColor = color;
    } else {
      alert('Invalid block ID');
    }
  }

  function resetColors() {
    resetGridColors();
    document.getElementById('block_id').value = '';
    document.getElementById('colour_id').value = '#000000';
  }

  colorForm.addEventListener('submit', changeColor);
  document.getElementById('reset_button').addEventListener('click', resetColors);
});
