(function(){"use strict";function e(){let e=innerWidth,i=innerHeight;e<1100||i<600?(t.innerHTML=`<span class="window-size-warning">Your browser window size is <span class="highlight-content hl-red">${e}px X ${i}px</span>. Please adjust your browser window size to ensure optimal functionality. The recommended size is <span class="highlight-content hl-green">1100px X 600px</span>.</span>`,r=!1):(r||(t.innerHTML='<iframe class="preview-iframe" src="https://stackblitz.com/edit/dynamic-colors-from-kpverse?embed=1&file=index.ts&hideDevTools=1&theme=light" frameborder="0" ></iframe>'),r=!0)}let i=document.getElementById("open-live-preview"),n=document.getElementById("dynamic-colors-live-preview"),s=document.getElementById("close-dynamic-colors-preview"),t=document.getElementById("dynamic-colors-preview"),o=!1,r=!1;window.addEventListener("resize",()=>{o&&e()}),i.onclick=(()=>{o=!0,n.classList.add("show"),e()}),s.onclick=(()=>{o=!1,r=!1,n.classList.remove("show"),setTimeout(()=>{t.innerHTML=""},400)})})();