document.addEventListener("DOMContentLoaded", function(){
    const el3 = document.createElement('span');
    el3.setAttribute(
      'style',
      'position:relative;width:1em;height:.5em;border:2px solid green;border-top:none;border-right:none;transform:rotate(-45deg);display:inline-block;top:-0.2em',
    );
    const box3 = document.getElementById('box3');
    box3.prepend(el3);
});
