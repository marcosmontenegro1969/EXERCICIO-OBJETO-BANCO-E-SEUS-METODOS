    class Banco {
      constructor(conta, saldo, tipoConta, agencia) {
        this.conta = conta;
        this.saldo = saldo;
        this.tipoConta = tipoConta;
        this.agencia = agencia;
      }

      buscarSaldo() {
        return this.saldo;
      }

      deposito(valor) {
        this.saldo += valor;
        return this.saldo;
      }

      saque(valor) {
        if (valor > this.saldo) {
          return 'Saldo insuficiente';
        }

        this.saldo -= valor;
        return this.saldo;
      }

      obterNumeroEAgencia() {
        return `${this.conta} - ${this.agencia}`;
      }
    }

    const minhaConta = new Banco('666797614', 0, 'Corrente', '68');

    function atualizarSaldo() {
      const saldoInput = document.getElementById('saldo');
      saldoInput.value = minhaConta.buscarSaldo();
    }

    function realizarDeposito() {
      const depositoInput = document.getElementById('depositoInput');
      const valor = parseFloat(depositoInput.value);
      
      if (!isNaN(valor)) {
        minhaConta.deposito(valor);
        atualizarSaldo();
      } else {
        alert('Por favor, insira um valor válido.');
      }
      depositoInput.value = "";
    }

    function realizarSaque() {
      const saqueInput = document.getElementById('saqueInput');
      const valor = parseFloat(saqueInput.value);
      
      if (!isNaN(valor)) {
        minhaConta.saque(valor);
        atualizarSaldo();
      } else {
        alert('Por favor, insira um valor válido.');
      }
      saqueInput.value = "";
    }

    function mostrarOcultarInformacoes() {
      const numeroContaInput = document.getElementById('numeroConta');
      const botaoNumeroConta = document.querySelector('button[onclick="mostrarOcultarInformacoes()"]');
      
      if (numeroContaInput.type === 'password') {
        numeroContaInput.type = 'text';
        numeroContaInput.value = minhaConta.obterNumeroEAgencia();
        botaoNumeroConta.textContent = 'Esconder Informações';
      } else {
        numeroContaInput.type = 'password';
        numeroContaInput.value = minhaConta.conta;
        botaoNumeroConta.textContent = 'Mostrar Informações';
      }
    }

    atualizarSaldo();
