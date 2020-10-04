// 1) O select box abaixo inicia na primeira opção (Selecione o estado). Crie uma funcionalidade para que, quando o usuário escolher uma opção, esta fique guardada em local storage e quando a página for carregada da próxima vez, já inicie com a opção selecionada.
let stateSelect = document.querySelector('#estados');

if ( window.localStorage.stateCountry ) {
    for ( let i = 0; i < stateSelect.length; i++) {
        if ( stateSelect[i].innerHTML === window.localStorage.stateCountry ) {
            stateSelect[i].selected = true;
        }
    }
}

stateSelect.onchange = function() {
    let stateSelectIndex = stateSelect.options.selectedIndex;
    let state = stateSelect.options[stateSelectIndex].textContent;
    window.localStorage.setItem('stateCountry', state);
};

// Sabendo que um pedido feito hoje em um site de e-commerce leva 12 dias para ser entregue com envio express e 18 dias com envio normal, preencha as informações abaixo com as datas no formato DIA-MÊS-ANO após a confirmação do pedido.

document.querySelector('#confirmar_pedido').onclick = function() {
    let dateObject = new Date();
    let day = dateObject.getUTCDate();
    let month = dateObject.getUTCMonth() + 1;
    let year = dateObject.getFullYear().toString();

    let list = document.querySelector('#envios');
    let typeIndex = list.options.selectedIndex;
    let type = list.options[typeIndex].value;

    if ( type === 'normal' ) {
        dateObject.setHours(dateObject.getHours() + (18 * 24));
    } else if ( type === 'express' ) {
        dateObject.setHours(dateObject.getHours() + (12 * 24));
    } else {
        alert('Selecione uma forma de entrega.');
        return;
    }

    let deliveryDay = dateObject.getUTCDate();
    let deliveryMonth = dateObject.getUTCMonth() + 1;
    let deliveryYear = dateObject.getFullYear().toString();

    // Formatação da data
    if ( day < 10 ) {
        day = '0' + day;
    } else if ( month < 10 ) {
        month = '0' + month;
    }

    if ( deliveryDay < 10 ) {
        deliveryDay = '0' + deliveryDay;
    } else if ( deliveryMonth < 10 ) {
        deliveryMonth = '0' + deliveryMonth;
    }

    document.querySelector('#data_pedido').innerHTML = day + '-' + month + '-' + year;
    document.querySelector('#data_entrega').innerHTML = deliveryDay + '-' + deliveryMonth + '-' + deliveryYear;
};

// 3) Faça funcionar o crônometro abaixo. O formato está em horas, minutos, segundos e milisegundos.
document.querySelector('#comecar_parar').onclick = function() {
    let date = new Date(2020, 11, 1, 0, 0, 0, 0);
    window.setInterval(function() { 
        const hours = date.getHours().toString();
        const minutes = date.getMinutes().toString();
        const seconds = date.getSeconds().toString();
        const milliseconds = date.getMilliseconds().toString();
        const out = hours + ':' + minutes + ':' + seconds + ' ' + milliseconds;
    
        document.querySelector('#cronometro').innerHTML = out;

        date.setMilliseconds(date.getMilliseconds() + 4);
    }, 1);
};


// 4) Considere a seguinte tabela de preços de pedágio.
var carros = [

    {
        'placa': 'AAA-0198',
        'caregoria': '1',
    },

    {
        'placa': 'HBP-2837',
        'categoria': '2',
    },

    {
        'placa': 'PLQ-0928',
        'categoria': '4',
    },

    {
        'placa': 'KQE-2093',
        'categoria': '5',
    },

    {
        'placa': 'AMR-9087',
        'categoria': '5',
    },

    {
        'placa': 'BQE-8111',
        'categoria': '3',
    },

    {
        'placa': 'GXL-9001',
        'categoria': '2',
    },

    {
        'placa': 'KPM-7740',
        'categoria': '1',
    }

];

let total = 0;
carros.forEach(function(carro) {
    const categoriaCarro = carro.categoria;

    switch ( categoriaCarro ) {
        case '1':
            total += 11.22;
            break;
        case '2':
            total += 22.45;
            break;
        case '3':
            total += 16.88;
            break;
        case '4':
            total += 33.65;
            break;
        default:
            return 'Esta categoria não existe.'
    }
});
document.querySelector('#faturamento_total').innerHTML = total.toFixed(2);