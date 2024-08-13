let keys = document.querySelector('body .keys');

function createAudio(soundName) {
  let audio = document.createElement('audio');
  audio.style.display = 'none';

  let source = document.createElement('source');
  source.type = 'audio/mpeg';
  source.src = `./sounds/${soundName}.wav`;

  audio.append(source);

  return audio;
}

document.addEventListener('keydown', (e) => {
  for (let key of keys.children) {
    if (key.dataset.key == e.key) {
      key.classList.add('playing');
      let audioTag = createAudio(key.children[1].textContent);
      audioTag.play();
    }
  }
});

document.addEventListener('keyup', (e) => {
  for (let key of keys.children) {
    if (key.dataset.key == e.key) {
      key.classList.remove('playing');
    }
  }
});
