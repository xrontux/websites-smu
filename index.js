const acronyms = document.querySelectorAll('.acronym');

for(let a of acronyms) {
  const words = a.innerText.split(' ');
  const text = words.map(w => {
    const firstLetter = w[0];
    const endOfWord = w.substring(1, w.length)
    return (
      `<div class="letter">${firstLetter}</div><div class="word">${endOfWord}</div>`
    )
  }).join('')
  
  a.innerHTML = text;
}