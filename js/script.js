const btMudar = document.getElementById('btMudar');
const body = document.querySelector('body');
const cores = [
    '#08ACED', '#1E3BC5', '#642C91', 
    '#912590', '#EE1B24', '#F16321', 
    '#F8921E', '#FDC10F', '#FDEF03', 
    '#8CC53B', '#04A450', '#07A999', 
    '#FFFFFF', '#121212', '#878787'
];
let cor = ''; // guarda a cor de fundo
let ultimaCor = ''; // guarda a última cor de fundo

function mudarCor() {
    const h1 = document.getElementById('h1');
    const main = document.getElementById('main');
    let aleatorio = '';

    // escolhe uma cor aleatória do vetor cores, garantindo que a mesma cor não seja escolhida mais de uma vez consecutiva
    do {
        aleatorio = Math.floor(Math.random() * cores.length);
        cor = cores[aleatorio];
    } while (cor === ultimaCor)
 
    body.style.backgroundColor = cor;
    ultimaCor = cor;
    btMudar.style.backgroundColor = cor;

    // ajustes para visualização em tela
    if (cor === '#FFFFFF' || cor === '#FDEF03') {
        h1.style.color = '#121212';
        btMudar.style.color = '#121212'
    } else {
        h1.style.color = '#FFFFFF';
        btMudar.style.color = '#FFFFFF';
    }

    if (cor === '#FFFFFF') {
        main.style.border = '1.6px solid rgba(0, 0, 0, 0.5)';
        btMudar.style.border = '1.6px solid rgba(0, 0, 0, 0.5)';
    } else {
        main.style.borderColor = 'transparent';
        btMudar.style.borderColor = 'transparent';
    }
}