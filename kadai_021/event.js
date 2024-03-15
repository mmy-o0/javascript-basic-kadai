const clickText = document.getElementById('text');
const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', () => {
  setTimeout(() => {
    clickText.textContent = 'ボタンをクリックしました';
  },2000);
});
