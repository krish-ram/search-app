export function throttled(delay, fn) {
  let lastCall = 0;
  return function(...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
}

export function debounced(delay, fn) {
  let timerId;
  return function(...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  };
}

export function hilite(text, search) {
  const regex = new RegExp(search, "gi");
  text = text.replace(regex, match => {
    return `<span class="text-primary">${match}</span>`;
  });
  return { __html: text };
}

export function checkStringMatch(dataObj, searchTerm) {
  const valueStr = JSON.stringify(Object.values(dataObj)).toLowerCase();
  return valueStr.indexOf(searchTerm.toLowerCase()) > -1;
}

export function handleKeyDown(event) {
  const { cursor } = this.state;
  const result = this.state.modifiedDataList;
  // arrow up/down button should select next/previous list element
  if (event.keyCode === 38 && cursor > 0) {
    this.setState(prevState => ({ cursor: prevState.cursor - 1 }));
  } else if (event.keyCode === 40 && cursor < result.length - 1) {
    this.setState(prevState => ({ cursor: prevState.cursor + 1 }));
  }
}

export function isInViewport(elem, offset = 0) {
  if (!elem) return false;
  const top = elem.getBoundingClientRect().top;
  const height = elem.getBoundingClientRect().height;
  // innerHeight divided by 2, since our menu is only 50%
  const wHeight = window.innerHeight / 2;
  return (
    top + offset >= 0 && top - offset <= wHeight && top + height <= wHeight
  );
}
