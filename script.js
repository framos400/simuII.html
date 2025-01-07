let anoAtual = 1;

const continentes = [
    { nome: "África", populacao: 120000000, taxaCrescimento: 0.025, recursos: ["Minérios", "Petróleo"] },
    { nome: "Europa", populacao: 100000000, taxaCrescimento: 0.01, recursos: ["Tecnologia", "Petróleo"] },
    { nome: "Ásia", populacao: 400000000, taxaCrescimento: 0.015, recursos: ["Indústria", "Petróleo"] },
    { nome: "Américas", populacao: 300000000, taxaCrescimento: 0.02, recursos: ["Agricultura", "Minérios"] },
    { nome: "Oceania", populacao: 30000000, taxaCrescimento: 0.012, recursos: ["Turismo", "Minérios"] }
];

function iniciarSimulacao() {
    anoAtual++;
    document.getElementById("ano").innerText = anoAtual;

    continentes.forEach(continente => {
        continente.populacao = Math.round(
            continente.populacao * (1 + continente.taxaCrescimento)
        );
    });

    atualizarResultados();
}

function atualizarResultados() {
    const resultados = document.getElementById("resultados");
    resultados.innerHTML = `<h2>Informações do Ano ${anoAtual}</h2>`;
    continentes.forEach(continente => {
        resultados.innerHTML += `
            <p><strong>Continente:</strong> ${continente.nome}</p>
            <p><strong>População:</strong> ${continente.populacao.toLocaleString()}</p>
            <p><strong>Recursos:</strong> ${continente.recursos.join(", ")}</p>
            <hr>
        `;
    });

    if (anoAtual === 2025) {
        resultados.innerHTML += `<h2>Previsão para o Futuro</h2>`;
        resultados.innerHTML += `<p>Baseado nos padrões históricos, avanços tecnológicos podem ocorrer em inteligência artificial, mudanças climáticas terão impacto global, e novas economias podem emergir.</p>`;
    }
}

function gerarRelatorio(tipo) {
    let mensagem = `Relatório por ${tipo}: Dados acumulados até o ano ${anoAtual}.`;
    alert(mensagem); // Pode ser expandido para relatórios detalhados
}
