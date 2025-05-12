const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Aprovado"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="Reprovado"/>';
const atividades = [];
const notas = [];
const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`;
const spanReprovado = `<span class="resultado reprovado">Reprovado</span>`;
const notaMin = parseFloat(prompt('Digite a nota mínima:'));

let linhas = '';
// Adiciona uma nova linha na tabela com os dados do formulário

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    // Adiciona a nova linha na tabela
    atualizaTabela();
    // Atualiza a tabela
    atualizaMediaFinal();
    // Atualiza a média final
});

function adicionaLinha() {
    const inputNomeAtividade =  document.getElementById('nome-atividade');
    const inputNotaAtividade =  document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi adicionada!`);
    } else {
        alert(`Atividade ${inputNomeAtividade.value} adicionada com sucesso!`);
    
    // Verifica se a atividade já foi adicionada

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));
    // Adiciona os valores dos inputs nos arrays

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMin ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;
    // Adiciona a nova linha na tabela
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('resultado-media').innerHTML = mediaFinal >= notaMin ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let soma = 0;

    for (let i = 0; i < notas.length; i++){
        soma += notas[i];
    }

    return soma / notas.length;
}