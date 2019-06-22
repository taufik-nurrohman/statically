(function(win, doc, undef) {

    win.STATICALLY_PASTE_DATA = {
        'https?:\\/\\/cdn\\.statically\\.io\\/\\S+': function() {
            alert('Run debug!');
        }
    };

    let input = doc.querySelector('#input'),
        output = doc.querySelector('#output');

    function paste(e) {
        let tasks = win.STATICALLY_PASTE_DATA, r;
        for (let i in tasks) {
            if (this.value.match(r = new RegExp('^' + i + '$'))) {
                setValue(this.value.replace(r, tasks[i]));
                return;
            }
        }
        this.value && setError() || setDefault();
    }

    function setError() {
        input.classList.add('error');
        input.classList.remove('success');
    }

    function setSuccess() {
        input.classList.remove('error');
        input.classList.add('success');
    }

    function setDefault() {
        input.classList.remove('error');
        input.classList.remove('success');
    }

    function setValue(v) {
        // TODO
        // output.value = v;
        v && prompt('Test:', v);
        setSuccess();
    }

    input.addEventListener("input", paste, false);
    input.addEventListener("paste", paste, false);

})(window, document);