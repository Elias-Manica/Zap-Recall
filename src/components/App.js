import React from "react";
import Body from "./Body/Body";

export default function App() {
  const [react, setReact] = React.useState([
    {
      numb: 1,
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
    },
    {
      question: "O React é __",
      answer: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
      question: "Componentes devem iniciar com __ ",
      answer: "letra maiúscula",
    },
    {
      question: "Podemos colocar __ dentro do JSX",
      answer: "expressões",
    },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      question: "Usamos o npm para __",
      answer: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      question: "Usamos props para __",
      answer: "passar diferentes informações para componentes",
    },
    {
      question: "Usamos estado (state) para __",
      answer:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ]);

  const [html, setHtml] = React.useState([
    {
      question: "Qual target abre o documento em nova aba?",
      answer: "_blank",
    },
    {
      question: "Qual tag que defini o título de uma página em HTML?",
      answer: "<title></title>",
    },
    {
      question: "Qual tag que defini um parágrafo em HTML?",
      answer: "<p></p>",
    },
    {
      question: "Porque colocamos / nas tags?",
      answer: "para fechar as tags",
    },
    {
      question:
        "Quais outras linguagens de programação o HTML deixa você utilizar junto com ela?",
      answer: "CSS e JavaScript",
    },
    {
      question: "Qual tag que pula uma linha em HTML?",
      answer: "<br />",
    },
    {
      question: "Qual tag invoca o CSS no HTML",
      answer: "<style></style>",
    },
    {
      question: "Qual tag invoca o JavaScript no HTML",
      answer: "<script></script>",
    },
  ]);
  const [python, setPython] = React.useState([
    {
      question: "Quais são os tipos primitivos ?",
      answer: "str, bool, int, float",
    },
    {
      question: "Quais objetos são imutáveis em Python?",
      answer: "int, float, bool, string, unicode, tupla",
    },
    {
      question:
        "Qual o nome da função que adiciona elementos ao final da lista?",
      answer: "append()",
    },
    {
      question: "Usando o __ podemos sair fora de um loop",
      answer: "break",
    },
    {
      question: "Como declaramos comentários em python?",
      answer: "#Isso é um comentário",
    },
    {
      question: "Qual função colocamos lista em ordem crescente em Python?",
      answer: ".sorted()",
    },
    {
      question: "Como imprimimos algo no terminal do Python?",
      answer: "print(variavel)",
    },
    {
      question: "Podemos substituir o ELSE IF por __",
      answer: "elif",
    },
  ]);

  return (
    <>
      <Body
        react={react}
        setreact={setReact}
        html={html}
        setHtml={setHtml}
        python={python}
        setPython={setPython}
      />
    </>
  );
}
