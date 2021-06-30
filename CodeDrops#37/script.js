// Tamanho do container
const postWrap = document.querySelector(".post-wrap");

// Criando a barra
const bar = document.createElement("div");

// Style
bar.style.height = '4px';
bar.style.width = '500px';
bar.style.backgroundColor = '#6633cc';
bar.style.position = 'fixed';
bar.style.top = '0';
bar.style.left = '0';
bar.style.zIndex = '9999';

// Add Elemento
document.body.append(bar);

// Atualizar a barra


// Verificar o movimento do scroll
document.addEventListener("scroll", () => {
  // Tamanho do box
  const textHeight = postWrap.offsetHeight;

  // Position page
  const pagePositionY = window.pageYOffset;

  // Regra de três
  const updateBar = pagePositionY * 100 / textHeight; 

  bar.style.width = updateBar + "%";
});