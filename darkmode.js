function switchMode(el) {
  const bodyClass = document.body.classList;
  bodyClass.contains('dark')
    ? (el.innerHTML = '<span class="ico sun" style="font-size: 24px;"></span>', bodyClass.remove('dark'))
    : (el.innerHTML = '<span class="ico moon" style="font-size: 24px;"></span>', bodyClass.add('dark')); 
}
