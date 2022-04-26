window.onload = () => {
  
  const input = document.querySelectorAll('.input-limit');
  
  function checkLimitInput() {
    input.forEach(inp => {
      const limit = inp.dataset.limit;
      const span = inp.nextElementSibling;
      span.textContent = `0 / ${limit}`;
    })
  }
  
  checkLimitInput();
  
  function inputCharacterLimit() {
    input.forEach(inp => {
      inp.addEventListener('keyup', function() {
        this.classList.remove('active');
        const value = this.value.length;
        const limit = this.dataset.limit;
        const span = this.nextElementSibling;
        span.textContent = `${value} / ${limit}`;
        this.classList.toggle('active', (value > limit));
      });
    });
  }
  
  inputCharacterLimit();
  
}