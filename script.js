// 播放音效並觸發動畫
function playSound(file, btn) {
  const audio = new Audio(file);
  audio.play();
  
  // 加上 active class 觸發動畫
  btn.classList.add('active');
  setTimeout(() => btn.classList.remove('active'), 150);
}

// 綁定按鈕事件
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const soundFile = button.getAttribute('data-sound');
    playSound(soundFile, button);
  });

  button.addEventListener('touchstart', () => {
    const soundFile = button.getAttribute('data-sound');
    playSound(soundFile, button);
  });
});

// 背景音樂解鎖（滑動或點擊）
function enableBgm() {
  const bgm = document.getElementById('bgm');
  bgm.muted = false;
  bgm.play();
  document.removeEventListener('click', enableBgm);
  document.removeEventListener('touchstart', enableBgm);
  document.removeEventListener('touchmove', enableBgm);
}

document.addEventListener('click', enableBgm, { once: true });
document.addEventListener('touchstart', enableBgm, { once: true });
document.addEventListener('touchmove', enableBgm, { once: true });
