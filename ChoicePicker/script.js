const textarea = document.getElementById('textarea');
const tagsEl = document.getElementById('tags');

textarea.addEventListener('keyup', (event) => {
    createTags(event.target.value);

    if(event.key === 'Enter'){
        setTimeout(() => {
            event.target.value = '';
        }, 10);
        randomSelect();
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '' ).map(tag => tag.trim());
    console.log(tags)

    tagsEl.innerHTML='';

    tags.forEach(tag => {
        const t = document.createElement('span');
        t.classList.add('tag');
        t.innerText = tag;
        tagsEl.append(t);

    })
}

function randomSelect() {
    const times = 30;
    const int = 100;
    
    const interval = setInterval(() => {
    const randomTag = pickrRandomTag();
    highlightTag(randomTag);

    setTimeout(() => {
    unHighlightTag(randomTag)

    }, int);
  }, int);
    setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
     const randomTag = pickrRandomTag();
        highlightTag(randomTag);
        
    }, int);
}, int * times);
}
   

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}


