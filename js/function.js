const input = document.getElementById('filtro-nome');
const trs = [...document.querySelectorAll('#lista tbody tr')];

input.addEventListener('input', () => {
  const search = input.value.toLowerCase();
  trs.forEach(el => {
    const matches = el.textContent.toLowerCase().includes(search);
    el.style.display = matches ? 'block' : 'none';
  });
});

/*texto_original = '';

window.onload=function()
{
    texto_original = document.getElementById("texto").innerHTML;
}


function busca_replace()
{
    // Pega o conteúdo original da div com id = texto
    texto = texto_original;
    
    // Pega o termo que se quer buscar
    var termo_busca = document.getElementById("busca").value;
    
    trocar_por = '<span class="destacado">' + termo_busca + '</span>';

    // criando expressão regular com a opção g e o termo_busca pra poder passar para o replace
    var regxp = new RegExp(termo_busca,"g"); 
    
    // Referência: http://stackoverflow.com/questions/494035/how-do-you-use-a-variable-in-a-regular-expression
    
    texto = texto.replace(regxp,trocar_por);
    
    document.getElementById("texto").innerHTML = texto;
}*/