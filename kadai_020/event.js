const clickText = document.getElementById('text');
const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', () => {
  clickText.textContent = 'ボタンをクリックしました';
});