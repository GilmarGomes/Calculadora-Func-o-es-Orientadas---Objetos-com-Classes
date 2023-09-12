class Calculator {
  constructor() {
    this.numeroInput1 = document.querySelector("#numero");
    this.numeroInput2 = document.querySelector("#numero2");
    this.resultado = document.querySelector("#resultado");

    document
      .querySelector("#adicao")
      .addEventListener("click", () => this.adicao());
    document
      .querySelector("#subtracao")
      .addEventListener("click", () => this.subtracao());
    document
      .querySelector("#multiplicacao")
      .addEventListener("click", () => this.multiplicacao());
    document
      .querySelector("#divisao")
      .addEventListener("click", () => this.divisao());
  }

  adicao() {
    const numero = parseFloat(this.numeroInput1.value);
    const numero2 = parseFloat(this.numeroInput2.value);

    if (!isNaN(numero) && !isNaN(numero2)) {
      this.resultado.innerHTML = `<p>A soma é ${numero + numero2}</p>`;
    } else {
      alert("Por favor, preencha os campos.");
    }
  }

  subtracao() {
    const numero = parseFloat(this.numeroInput1.value);
    const numero2 = parseFloat(this.numeroInput2.value);

    if (!isNaN(numero) && !isNaN(numero2)) {
      this.resultado.innerHTML = `<p>A subtração é ${numero - numero2}</p>`;
    } else {
      alert("Por favor, preencha os campos.");
    }
  }

  multiplicacao() {
    const numero = parseFloat(this.numeroInput1.value);
    const numero2 = parseFloat(this.numeroInput2.value);

    if (!isNaN(numero) && !isNaN(numero2)) {
      this.resultado.innerHTML = `<p>A multiplicação é ${numero * numero2}</p>`;
    } else {
      alert("Por favor, preencha os campos.");
    }
  }

  divisao() {
    const numero = parseFloat(this.numeroInput1.value);
    const numero2 = parseFloat(this.numeroInput2.value);

    if (!isNaN(numero) && !isNaN(numero2) && numero2 !== 0) {
      this.resultado.innerHTML = `<p>A divisão é ${(numero / numero2).toFixed(
        1
      )}</p>`;
    } else if (numero2 === 0) {
      alert("Não é possível dividir por zero.");
    } else {
      alert("Por favor, preencha os campos.");
    }
  }
}

new Calculator();
