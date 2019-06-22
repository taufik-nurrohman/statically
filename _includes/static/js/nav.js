let root = doc.documentElement;
win.addEventListener("scroll", () => {
    let t = win.pageYOffset;
    root.classList[t > 0 ? 'add' : 'remove']('navbar-is-solid');
}, false);