
// Menu Mobile

document.querySelector('#hamburguer-icon .table .table-cell img').onclick = function () {
  document.querySelector('#sliding-header-menu-outer').style.right = "0";
};

document.querySelector('.close-icon').onclick = function () {
  document.querySelector('#sliding-header-menu-outer').style.right = "-320px";
};


// About us Tab

var aboutUs = {
  "Missão": "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  "Visão": "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  "Valores": "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
};

var unselected_color = "#646872";
var selected_color = "#2A2D34";

var about_tags = document.querySelectorAll('.single-tab');

about_tags.forEach(function (tag) {
  tag.onclick = function () {
    // Tira a cor de seleção de todos as abas
    about_tags.forEach(function (t) {
      t.style.backgroundColor = unselected_color;
      tag.style.fontWeight = 'normal';
    });

    // Cor de seleção da aba selecionada
    tag.style.backgroundColor = selected_color;
    tag.style.fontWeight = 'bold';

    document.querySelector('#box-text').innerHTML = aboutUs[this.innerHTML];
  };
});


// Slider de serviços

var our_services = [
  {
    'title': 'Webdesign',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Marketing Digital',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];


// Data Footer



  
   


   