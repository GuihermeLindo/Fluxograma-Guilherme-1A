document.querySelectorAll('.btn-proximo').forEach(botao => {
  botao.addEventListener('click', () => {
    const proximoId = botao.getAttribute('data-proximo');

    document.querySelectorAll('.passo').forEach(passo => {
      passo.classList.remove('ativo');
    });

    const proximoPasso = document.getElementById(`passo-${proximoId}`);
    if (proximoPasso) {
      proximoPasso.classList.add('ativo');
    }
  });
});
