// ���񭵮Ĩ�Ĳ�o�ʵe
function playSound(file, btn) {
  const audio = new Audio(file);
  audio.play();
  
  // �[�W active class Ĳ�o�ʵe
  btn.classList.add('active');
  setTimeout(() => btn.classList.remove('active'), 150);
}

// �j�w���s�ƥ�
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

// �I�����ָ���]�ưʩ��I���^
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
