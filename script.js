// Mobile nav toggle
(function(){
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav-links');
  if(!toggle || !nav) return;

  toggle.addEventListener('click', ()=>{
    const opened = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', opened);
  });

  // Close menu when a link is clicked (mobile)
  nav.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=>{
    if(nav.classList.contains('open')){
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  }));
})();

// GCash copy button and toast
(function(){
  const copyBtn = document.getElementById('copy-gcash');
  const numberEl = document.getElementById('gcash-number');
  if(!copyBtn || !numberEl) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.id = 'toast';
  document.body.appendChild(toast);

  copyBtn.addEventListener('click', async ()=>{
    const txt = numberEl.textContent.trim();
    try{
      await navigator.clipboard.writeText(txt);
      showToast('Numero na-kopya!');
    }catch(e){
      // fallback
      const ta = document.createElement('textarea');
      ta.value = txt; document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); ta.remove();
      showToast('Numero na-kopya!');
    }
  });

  function showToast(msg){
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(()=> toast.classList.remove('show'), 2200);
  }
})();
