document.addEventListener('DOMContentLoaded', function() {
    const sermons = [
        { title: 'Sermon 1', file: '1Strong Hold Baptist Church - Who We Are.mp3' },
        { title: 'Sermon 2', file: 'sermon2.mp3' },
        { title: 'Sermon 3', file: 'sermon3.mp3' }
    ];

    const sermonList = document.getElementById('sermon-list');
    const audioPlayer = document.getElementById('audio-player');
    const searchBar = document.getElementById('search-bar');

    function displaySermons(sermons) {
        sermonList.innerHTML = '';
        sermons.forEach(sermon => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = sermon.title;
            a.href = '#';
            a.addEventListener('click', (event) => {
                event.preventDefault();
                audioPlayer.src = `audio/${sermon.file}`;
                audioPlayer.play();
            });
            li.appendChild(a);
            sermonList.appendChild(li);
        });
    }

    searchBar.addEventListener('input', function() {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredSermons = sermons.filter(sermon => sermon.title.toLowerCase().includes(searchTerm));
        displaySermons(filteredSermons);
    });

    displaySermons(sermons);
});
