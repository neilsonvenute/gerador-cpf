import GeraCPF from './modules/GeraCPF.js'
import './assets/css/styles.css'

(function(){
  const gera = new GeraCPF()
  const cpfGerado = document.querySelector('.cpf-gerado')
  cpfGerado.innerHTML = gera.gerarNovoCpf()
})()