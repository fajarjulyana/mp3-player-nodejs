const musicList = document.getElementById('musicList');
const audioPlayer = document.getElementById('audioPlayer');

fetch('/api/music')
 .then(response => response.json())
 .then(musicFiles => {
    musicFiles.forEach(musicFile => {
      const listItem = document.createElement('li');
      listItem.textContent = musicFile;
      listItem.addEventListener('click', () => {
        audioPlayer.src = `/music/${musicFile}`;
        audioPlayer.play();
      });
      musicList.appendChild(listItem);
    });
 })
 .catch(error => {
    console.error('Unable to load music files:', error);
 });