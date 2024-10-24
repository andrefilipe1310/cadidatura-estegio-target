# Cadidatura estegio target
Repositório dedicado a entrega do desafio para vaga de estágio da target de André Figueiredo

## Descrição
Utilizando html, css e javascript fiz um projeto respondendo todas as perguntas e criando os algoritmos solicitados, tenho mais familiaridade com a linguagem java, porém para deixar o projeto mais visualmente agradável deixei em javascript que também gosto bastante

## Instruções para Abrir o Projeto

Para evitar problemas de CORS ao abrir os arquivos diretamente no navegador, siga os passos abaixo para rodar o projeto usando o **Live Server**:

### Requisitos

- **Extensão Live Server** no VS Code (ou outro editor compatível).
- Navegador web (ex: Chrome, Firefox).

### Passos para Abrir com Live Server

1. Certifique-se de que você já tenha o **Live Server** instalado no seu editor. Se estiver usando o VS Code:
   - Vá para a aba de **Extensões** (ícone de quadrado com linhas no menu lateral).
   - Procure por **Live Server** e instale a extensão.

2. Abra o projeto no seu editor. Você deve ver a estrutura de arquivos no painel lateral.

3. Clique com o botão direito no arquivo **`index.html`** dentro do projeto.

4. No menu suspenso, selecione a opção **"Open with Live Server"**.

5. O navegador será aberto automaticamente, e o projeto estará rodando em um servidor local. Isso evita problemas de CORS que podem ocorrer ao abrir o arquivo diretamente.


## Estrutura do Projeto
```
 /project
├── index.html               # Arquivo HTML principal
├── script.js                # Script principal que importa os módulos
├── modules                  # Pasta contendo módulos separados
│   ├── fibonacci.js         # Módulo para verificação de Fibonacci
│   ├── notifications.js     # Módulo para exibição de notificações
│   └── letterOccurrences.js # Módulo para contagem de letras
```


## Módulos
    ### fibonacci.js
    Contém a função `isFibonacci(num)` que verifica se um número pertence à sequência de Fibonacci.
   [link](https://github.com/andrefilipe1310/cadidatura-estegio-target/blob/main/questions/modules/fibonacci.js)
    ### notifications.js
    Contém a função `notify(divNotification, notification, value, message)` que exibe notificações na interface.
    [link](https://github.com/andrefilipe1310/cadidatura-estegio-target/blob/main/questions/modules/notifier.js)
    ### letterOccurrences.js
    Contém a função `countLetterOccurrences(letterSearch, text)` que conta o número de ocorrências de uma letra em um texto.
    [link](https://github.com/andrefilipe1310/cadidatura-estegio-target/blob/main/questions/modules/letterCounter.js)
