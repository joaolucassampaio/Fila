//Escreva um programa em javascript para simular uma fila de espera em um consultório médico. 
//O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do 
//nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila
//(pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. 
//O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.


let fila = [] 
let opcao = ""

do {
  let pacientes = ""
  //O código do for abaixo é responsável por adicionar, automaticamente, a posição da fila dos pacientes.
  for (let i = 0; i < fila.length; i++) {
    pacientes += (i + 1) + "º - " + fila[i] + "\n"
  }
  // += responsável por concatenar tudo o que está a esquerda da variável;
  // (i + 1) responsável por ajustar o ínicio da contagem para 1, porque o interpretador lê começando por 0;
  // fila[i] responsável por selecionar o paciente que estiver na posição na qual o i apontar;
  // Note que caso o interpretador apontar para fila[0], (i + 1) dirá que ele é o 1° paciente.

  //Menu
  opcao = prompt(
    "Pacientes:\n" + pacientes +
    "\nEscolha uma ação:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair"
  )

  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Qual é o nome do paciente?")
      fila.push(novoPaciente)
      break
    case "2":
      const pacienteConsultado = fila.shift()
      // Caso não haja nenhum paciente, a fila.shift() irá retornar undefined. Sabendo disso e entendendo que o if ajusta o valor recebido para boolean, considerando True qualquer valor normal e False null e undefined, podemos utilizá-lo para dizer quando não há pacientes na fila. Por exemplo:

      if (!pacienteConsultado) { // Se o valor recebido não for True, ou seja, undefined, mostrar o alerta abaixo.
        alert("Não há pacientes na fila!")
      } else { // Se não (se o valor recebido for True), mostrar o alerta abaixo.
        alert(pacienteConsultado + " foi removido da fila.")
      }
      break
    case "3":
      alert("Encerrando...")
      break
    default:
      alert("Opção inválida!")
      break
  }
} while (opcao !== "3");
