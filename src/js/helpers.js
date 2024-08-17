export  function createTags(input) {
  const tags = input
    .split(',')
    .filter(tag => tag.trim() !== '')
    .map(tag => tag.trim());

  return tags;
}

export function randomSelect(tags) {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = tags[Math.floor(Math.random() * tags.length)];

    isHighlighted=tags[randomTag];

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = tags[Math.floor(Math.random() * tags.length)];
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

