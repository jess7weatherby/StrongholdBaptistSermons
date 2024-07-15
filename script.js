document.addEventListener('DOMContentLoaded', function () {
    const sermons = [
      
        { title: 'The Spirit of Strong Hold Baptist Church', file: '1The Spirit of Strong Hold Baptist Church.mp3' },
        { title: 'Life Lessons From Jephtah - Brother John Carter', file: '2Life Lessons From Jephtah - Brother John Carter.mp3' },
        { title: 'Debunking Calvinism - Pastor Steven Anderson', file: '3Debunking Calvinism - Pastor Steven Anderson.mp3' },
        { title: 'Maintain a Strong Hold', file: '4Maintain a Strong Hold.mp3' },
        { title: 'Justified in Your Sin', file: '5Justified in Your Sin.mp3' },
        { title: 'New Leader Same Mission', file: '6New Leader Same Mission.mp3' },
        { title: 'Pride Goeth Before Destruction', file: '7Pride Goeth Before Destruction.mp3' },
        { title: 'Three Guiding Principles', file: '8Three Guiding Principles.mp3' },
        { title: 'Psalm 96 - The Gospel for all Nations', file: '9Psalm 96 - The Gospel for all Nations.mp3' },
        { title: 'The Sin of Being Afraid', file: '10The Sin of Being Afraid.mp3' },
        { title: '1 John 5 - The Trinity', file: '11 1 John 5 - The Trinity.mp3' },
        { title: 'Psalm 95 - Harden Not Your Heart', file: '12 Psalm 95 - Harden Not Your Heart.mp3' },
        { title: '1 John 4 - Believe Not Every Spirit', file: '14 1 John 4 - Believe Not Every Spirit.mp3' },
        { title: 'Pray and be Heard', file: '15 Pray and be Heard.mp3' },
        { title: 'Psalm 94 - The Proud', file: '16Psalm 94 - The Proud.mp3' },
        { title: '1 John 3 - Saved People Can\'t Sin', file: '17 1 John 3 - Saved People Can\'t Sin_.mp3' },
        { title: 'Psalm 93 - The Lord Reigneth', file: '18Psalm 93 - The Lord Reigneth.mp3' },
        { title: 'Improving Our Soulwinning', file: '19Improving Our Soulwinning.mp3' },
        { title: 'Strong Hold Baptist Church - Who We Are', file: 'Strong Hold Baptist Church - Who We Are.mp3' },
        { title: 'Wood Hay and Stubble', file: 'Wood Hay and Stubble.mp3' },
        { title: 'Fortifying Strong Hold Baptist Church', file: 'Fortifying Strong Hold Baptist Church.mp3' }
        
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

    searchBar.addEventListener('input', function () {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredSermons = sermons.filter(sermon => sermon.title.toLowerCase().includes(searchTerm));
        displaySermons(filteredSermons);
    });

    displaySermons(sermons);
});
