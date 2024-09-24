function adicionarEscalacao(){
    const posicao = document.getElementById("posicao").value
    const nome = document.getElementById("name").value
    const numero = document.getElementById("numero").value

    const confirmar = confirm("Deseja escalar "+nome+" na posição de "+posicao+ "?")

    if(confirmar){
        const escalacao = document.getElementById("time")
        const jogadorLi = document.createElement('li')
        jogadorLi.id = "jogador-" + numero
        jogadorLi.innerText = posicao + ": " +nome+"("+numero+")"
        escalacao.appendChild(jogadorLi)

        document.getElementById("posicao").value=""
        document.getElementById("name").value=""
        document.getElementById("numero").value=""
    }
}

function removerJogador(){
    const numeroRemover = document.getElementById('numeroRemover').value
    const jogadorRemover = document.getElementById("jogador-" + numeroRemover)

    const confirmation = confirm("Remover o jogador " + jogadorRemover.innerText + "?")
    if (confirmation){
        document.getElementById("time").removeChild(jogadorRemover)
        document.getElementById("numeroRemover").value=""
    }
}