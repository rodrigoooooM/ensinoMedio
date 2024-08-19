var pontos = 30
var inventario = []
 
function explorar(local) {
    if(local == "cidade") {
    let escolha3 = prompt("Você viu um homem perdendo a sua carteira, você deseja devolve-la para ele? (Sim/Não)")
    if(escolha3 == 'Sim') {
    alert('Parabéns, você tem empatia.')
    inventario.push('Empatia')
    }else if(escolha3 == 'Não') {
        pontos -= 25
        alert("Essa não foi uma boa escolha.\nPontos = " + pontos)
    }else{alert("Opção inválida")}
   
    }else if(local == "síria"){
        pontos += 10
        alert('Você fez uma viagem até seu país de origem, a Síria, e isso fez com que você lembre do quanto você lutou para chegar onde está e te motivou a seguir em frente.\nPontos = ' + pontos)
    }else if(local == "vila") {
        pontos += 10
        alert("Você encontrou um judoca que te deu conselhos importantes. \nPontos = " + pontos)
       
    }
 
 
}
function interagirNPC(npc) {
if(npc == 'idoso') {
let escolha1 = prompt('O idoso pediu sua ajuda para atravessar a rua, você deseja ajudá-lo? (Sim/Não)')
if(escolha1 == 'Sim') {
    alert('Como agradecimento, o idoso  lhe deu um amuleto da sorte.')
    inventario.push('Amuleto da sorte')
}else if(escolha1 == 'Não') {
    pontos -= 50
    alert('O idoso te xingou e deu um soco na sua cara! \nPontos =' + pontos)
}else(alert("Opção inválida"))
}else if(npc == 'treinador') {
let escolha2 = prompt('Você encontrou um treinador de judô japonês muito experiente, e ele te ofereceu um treinamento, que aparentemente pode mudar sua carreira. Porém você só poderá participar se ter empatia. \nVocê deseja participar do treinamento? (Sim/Não)')
if(escolha2 == "Sim") {
if(inventario.includes('Empatia') === true) {
pontos += 40
alert("O judoca japonês te ensinou técnicas muito preciosas. \nPontos = " + pontos)
}else if(inventario.includes('Empatia') === false) {
    alert('Você não está pronto para este treinamento, tente explorar mais lugares e ser solidário.')
}
}else if(escolha2 == "Não") {
}else{ alert('Opção inválida')}
}else if(npc == 'judoca') {
alert("Você encontrou um judoca que vai representar a Alemanha nas Olímpiadas chamado Timo, e ele disse que espera te ver lá.")
}else {alert("Opção inválida.")}}
 
function desafios(desafio) {
    if(desafio == 'Timo') {
        alert("Você convidou o atleta alemão Timo, para fazer uma luta treino contra você, e ele aceitou.")
        alert("Começando a luta...")
        if(inventario.includes('Amuleto da sorte') === true) {
            pontos += 60
            alert('PARABÉNS, você ganhou de Timo! \nPontos = ' + pontos)
        }else if(inventario.includes('Amuleto da sorte') === false) {
            pontos -= 25
            alert("Você não conseguiu vencer Timo, mais SORTE da próxima vez...\nPontos = " + pontos)
        }
    }else if(desafio == 'amistoso') {
        let escolha4 = prompt('Seu treinador marcou um amistoso contra o Willian Lima, um judoca brasileiro.\n Você aceita lutar contra ele? (Sim/Não)')
        if(escolha4 == 'Sim') {
            pontos += 20
            alert('Parabéns, você ganhou a luta. \nPontos = ' + pontos)
        }else if(escolha4 == 'Não') {
            pontos += 20
            alert('Seu treinador disse que você não tem escolha, e vai lutar de qualquer jeito.')
            alert('começando a luta...')
            alert('Parabéns, você ganhou a luta. \nPontos = ' + pontos) 
        }else{alert('Opção inválida.')}
 
    }else if(desafio == 'treinador') {
        alert('Você chamou seu treinador para lutar valendo contra você...')
        alert('Ele disse que já está aposentado e não vai lutar contra você')
    }else{alert('Opção inválida.')}
}
 
function mostrarStatus() {
    alert('Pontos = ' + pontos + '\nInventário:\n' + inventario)
}
function jogarNovamente() {
    let jogarDenovo = prompt('Deseja jogar novamente? (Sim/Não)')
    if(jogarDenovo === 'Sim'){ 
        pontos = 30
    iniciarJogo()}else{alert('Fim do jogo.')}}

function iniciarJogo() {
let escolha = prompt("Olá Adnan Khankan, seja bem vindo. O seu objetivo é participar das olímpiadas de Paris 2024, para isso você deve acumular 100 ou mais pontos. Você começa com 30 pontos, e pode ganhar ou perder pontos apartir das suas decisões.\nTodas opções de resposta vão estar entre parentêses, separadas por uma \"/\". Para o aproveitamento pleno do jogo, você deve escrevê-las exatamente como estão nos parentêses.\nVocê deseja começar a jogar? (Sim/Não)")
if(escolha == "Sim") {
while(pontos > 0 && acao != "sair" && pontos < 100) {
 
    var acao = prompt("Oque você deseja fazer? (explorar/interagir/desafios/status/sair)")
   
    if(acao == "explorar") {
    alert("Você está explorando...")
    let local = prompt("Que lugar você deseja explorar? (cidade/síria/vila)")
    explorar(local)
    }else if(acao == 'sair') {
        alert('Você saiu do jogo.')
        jogarNovamente()
    }else if(acao == 'interagir') {
        let npc = prompt('Com quem você deseja interagir? (idoso/treinador/judoca)')
    interagirNPC(npc)
    }else if(acao == 'desafios') {
        let desafio = prompt('Como você deseja se desafiar? (Timo/amistoso/treinador)')
        desafios(desafio)
    }else if(acao == 'status') {
    mostrarStatus()
    }}}else if(escolha == 'Não'){alert('Que pena!\nFim de jogo.')}
    if(pontos >= 100) {
        alert('Parabéns! você se classificou para as olímpiadas de Paris de 2024')
        if(inventario.includes('Empatia', 'Amuleto da sorte') && pontos >= 120) {
            alert("PARABÉNS!!!\nVocê ganhou uma medelha de ouro, representando todos os refúgiados do mundo!")
        }else if(pontos < 120){alert('Infelizmente você não ganhou nenhuma medalha nessas olímpiadas. Mais sorte na próxima vez.')}
    }else if(pontos <= 0) {
        alert('Você perdeu!') 
    jogarNovamente()}}
    
iniciarJogo() 