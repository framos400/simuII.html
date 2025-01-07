let anoAtual = 1;

const continentes = [
    { nome: "África", populacao: 120000000, taxaCrescimento: 0.025, recursos: ["Minérios", "Petróleo"] },
    { nome: "Europa", populacao: 100000000, taxaCrescimento: 0.01, recursos: ["Tecnologia", "Petróleo"] },
    { nome: "Ásia", populacao: 400000000, taxaCrescimento: 0.015, recursos: ["Indústria", "Petróleo"] },
    { nome: "Américas", populacao: 300000000, taxaCrescimento: 0.02, recursos: ["Agricultura", "Minérios"] },
    { nome: "Oceania", populacao: 30000000, taxaCrescimento: 0.012, recursos: ["Turismo", "Minérios"] }
];

const historico = []; // Histórico de anos

function iniciarSimulacao() {
    const anosPular = parseInt(document.getElementById("anosPular").value, 10) || 1;
    for (let i = 0; i < anosPular; i++) {
        anoAtual++;
        continentes.forEach(continente => {
            continente.populacao = Math.round(
                continente.populacao * (1 + continente.taxaCrescimento)
            );
        });
        salvarAno(); // Salva os dados do ano no histórico
    }
    document.getElementById("ano").innerText = anoAtual;
    atualizarResultados();
}

function salvarAno() {
    const dadosAno = {
        ano: anoAtual,
        continentes: JSON.parse(JSON.stringify(continentes)) // Copia profunda
    };
    historico.push(dadosAno);
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
}

function gerarRelatorio(tipo) {
    let anosParaMostrar = [];
    if (tipo === "ano") {
        anosParaMostrar = historico.slice(-1); // Mostra o último ano
    } else if (tipo === "decada") {
        anosParaMostrar = historico.filter(h => h.ano % 10 === 0);
    } else if (tipo === "seculo") {
        anosParaMostrar = historico.filter(h => h.ano % 100 === 0);
    } else if (tipo === "milenio") {
        anosParaMostrar = historico.filter(h => h.ano % 1000 === 0);
    }

    exibirRelatorio(anosParaMostrar);
}

function exibirRelatorio(anos) {
    const conteudoRelatorio = document.getElementById("conteudoRelatorio");
    conteudoRelatorio.innerHTML = ""; // Limpa o conteúdo anterior

    anos.forEach(dado => {
        conteudoRelatorio.innerHTML += `<h3>Ano: ${dado.ano}</h3>`;
        dado.continentes.forEach(continente => {
            conteudoRelatorio.innerHTML += `
                <p><strong>Continente:</strong> ${continente.nome}</p>
                <p><strong>População:</strong> ${continente.populacao.toLocaleString()}</p>
                <p><strong>Recursos:</strong> ${continente.recursos.join(", ")}</p>
                <hr>
            `;
        });
    });

    document.getElementById("relatorio").classList.remove("hidden");
}

function fecharRelatorio() {
    document.getElementById("relatorio").classList.add("hidden");
}
