function getSelectedText() {
    var selectedText = '';

    // window.getSelection
    if (window.getSelection) {
        selectedText = window.getSelection();
    }
    // document.getSelection
    else if (document.getSelection) {
        selectedText = document.getSelection();
    }
    // document.selection
    else if (document.selection) {
        selectedText =
            document.selection.createRange().text;
    } else return;
}

const para = document.querySelector('.para');
// console.log(para);
para.addEventListener('mouseup', () => {
    const text = window.getSelection().toString();
    console.log(text);
});