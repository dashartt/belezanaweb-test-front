# 🚀 Bem vindo ao projeto Belezanaweb Test Front!

## Introdução

O teste consiste em um checkout simples contendo 3 passos (carrinho, pagamento e sucesso) de acordo com esse [layout](https://projects.invisionapp.com/prototype/font-test-cji0j0khf005c1t0132358e8k)

Shopping cart             |  Payment                    |  Post purchase
:-------------------------:|:-------------------------:|:-------------------------:
![](https://github.com/jonatasqueirozlima/belezanaweb-test-front/blob/main/assets/img1.png)  |  ![](https://github.com/jonatasqueirozlima/belezanaweb-test-front/blob/main/assets/img2.png) | ![](https://github.com/jonatasqueirozlima/belezanaweb-test-front/blob/main/assets/img3.png)

<details>
<summary><strong> Tecnologias utilizadas </strong></summary>

Frontend:

<ul> 
  <li> React c/ Typescript</li>
  <li> TailwindCSS</li>
  <li> React-router-dom</li>
</ul>
</details>

<details>
<summary><strong> Critérios do projeto </strong></summary>

### Requerimentos:

- Pixel perfect ([nesse link](https://projects.invisionapp.com/prototype/font-test-cji0j0khf005c1t0132358e8k), você pode inspecionar para ver espaçamentos, fonte, tamanho, etc)
- A aplicação precisa ser responsiva, utilizando o conceito de mobile-first. Use sua imaginação para entregar uma experiência boa no desktop.

### Observações:

1. Carrinho:

   - Consuma o [esse endpoint](https://www.mocky.io/v2/5b15c4923100004a006f3c07) e liste os itens, bem como o resumo;

2. Pagamento:

   - Exiba um form com campos de cartão de crédito com validação em cada campo;
   - Habilite o botão de Finalizar Pedido apenas se o form estiver válido;

3. Sucesso:
   - Todo o conteúdo deverá ser exibido a partir dos dados persistidos;

### O que iremos avaliar:

- Organização do código;
- Mensagens e mudanças nos commits;
- Composição/reutilização de componentes;
- Testes unitários;
- O motivo de ter escolhido cada tech da stack;

</details>

---

## 👨‍💻 Rodando o projeto👨

<details>
  
<summary><strong>Como rodar?</strong></summary>
  
1. Clone o repositório com o comando: <br/>
  `git clone git@github.com:jonatasqueirozlima/belezanaweb-test-front.git`;
2. Entre na pasta do repositório: <br/>
  `cd belezanaweb-test-front`
2. Inicie a aplicação com o comando:
 - `docker-compose up -d --build`
3. Acessar a seguinte URL: <br/>
  http://localhost:3000/

</details>

---

## 🥷 Próximos passos</h2>

- Adicionar validações no formulário de pagamento
- Controle de rotas, impedir que acesse /post-purchase sem antes realizar /payment
- Testes unitários
