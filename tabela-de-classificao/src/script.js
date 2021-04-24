var jogadorA = {
  nome: "Paulo",
  vitorias: 2,
  empates: 5,
  derrotas: 1,
  pontos: 0
}

var jogadorB = {
  nome: "Rafa",
  vitorias: 3,
  empates: 5,
  derrotas: 2,
  pontos: 0
}

jogadorA.pontos = calculaPontos(jogadorA)
jogadorB.pontos = calculaPontos(jogadorB)

function calculaPontos(jogador){
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}

var todosJogadores = [jogadorA, jogadorB]
exibirJogadores(todosJogadores)

function exibirJogadores(jogadores){
  var html = ""
  for( var i=0; i<jogadores.length; i++){
    html+= "<tr><td>" + jogadores[i].nome + "</td>"
    html+= "<td>" + jogadores[i].vitorias + "</td>"
    html+= "<td>" + jogadores[i].empates + "</td>"
    html+= "<td>" + jogadores[i].derrotas + "</td>"
    html+= "<td>" + jogadores[i].pontos + "</td>"
    html+= "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
    html+="<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
    html+="<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
}
function adicionarVitoria(i){
  var jogador = todosJogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadores(todosJogadores)
}
function adicionarEmpate(i){
  var jogador = todosJogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadores(todosJogadores)
}
function adicionarDerrota(i){
  var jogador = todosJogadores[i]
  jogador.derrotas++
  exibirJogadores(todosJogadores)
}