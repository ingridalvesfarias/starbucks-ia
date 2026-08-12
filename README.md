# ☕ Starbucks Landing Page

Landing page inspirada na Starbucks, feita durante as aulas do **DevClub** e com alterações próprias em cima do projeto original.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🔗 Sobre o projeto

Página promocional de uma linha de bebidas, com:

- Troca de bebida em destaque (imagem + cor de fundo) ao clicar nas miniaturas do menu;
- Layout responsivo, adaptado para desktop, tablet e celular;
- Chat de atendimento integrado via **Botpress**.

## ✨ O que eu mudei em relação à aula

- **Responsividade completa**: o layout original era fixo em pixels; ajustei fontes, imagens e espaçamentos para escalar em qualquer tamanho de tela (`clamp()`, `vw`/`vh`/`vmin`/`vmax`), com breakpoints próprios para tablet e celular;
- **Botão "Clique no SININHO" funcional**: conectei o botão para abrir o webchat do Botpress (`window.botpress.open()`), que na aula ficava sem ação;
- **Círculo decorativo ajustado**: reposicionei e redimensionei o círculo verde de fundo para acompanhar o tamanho da tela sem cobrir o texto e para emoldurar a bebida em destaque;
- **Animação nas miniaturas do menu**: adicionei uma transição suave (elevação + leve zoom) ao passar o mouse sobre os copos pequenos;
- **Correção de estrutura**: movi o `<script>` para dentro do `<body>`, como manda o HTML válido.

## 🗂️ Estrutura de arquivos

```
├── index.html      # Estrutura da página
├── styles.css       # Estilos e responsividade
├── scripts.js        # Troca de imagem/cor e abertura do chat
└── img/              # Logo, copos e imagens do menu
```

## 🛠️ Tecnologias

- HTML5
- CSS3 (Flexbox, `clip-path`, unidades fluidas)
- JavaScript (manipulação do DOM)
- [Botpress](https://botpress.com/) (webchat de atendimento)

## ▶️ Como rodar

Não precisa de instalação — é só abrir o `index.html` no navegador. Se preferir usar um servidor local (recomendado para evitar bloqueios de CORS com algumas fontes/scripts), pode usar a extensão **Live Server** do VS Code, por exemplo.

## 🎓 Créditos

Projeto base desenvolvido a partir das aulas do DevClub.
