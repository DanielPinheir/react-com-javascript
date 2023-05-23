# React com JavaScript

> Curso básico dede React da plataforma da Alura onde será desenvolvido uma página web simples com React e Javascript. <br>

- A aplicação se chamará **Organo** e vai permitir que a configuremos e cadastremos a organização da nossa empresa.
- Nessas imagens vocês encontrarão o rosto dos nossos instrutores separados pelas Escolas das quais eles fazem parte.
- A ideia é conseguirmos adicionar dinamicamente pessoas a esses times.

> Tasks
### Components
[x] Criação do componente Banner com um *header* contendo a logo e o Banner principal da página;
[x] Criação do componente Botão usando uma Props texto;
[x] Criação do componente Campo retornando uma *div* com *label* e *input* 
[x] Criação do componente Colaborador usando biblioteca "react-icons", capturando props de estilo e funções e retornando uma div com card de colaborador
[x] Criação do componente Formulário importando componentes Botao, Campo e Lista Suspensa; coletando props e utilizando propriedade useState do react para renderizar várias features(nome, cargo, imagem, time, nomeTime, corTime) e retornando um *form* com vários campos para coletar informações do Colaborador.
[x] Criação do componente Time usando biblioteca "hex-to-rgba" para estilizar o card e retorná-lo com a cor selecionada pelo colaborador e o componente Colaborador dentro dele.
[x] Criação do componente ListaSuspensa com *select* e *option* capturando os times dos colaboradores.
[x] Criação do componente Rodape com *footer* contendo uma lista com img e link das redes sociais da Empresa.

### App
[x] Usando metodo useState para setar cores default de acordo com o Time escolhido;
[x] Importação da biblioteca "uuid" para criação de ID's aleatórios; 
[x] Criação de uma base de dados contendo id, nome, favorito, cargo, imagem de foto, time.
[x] Criação daas funções deletarColaborador, cadastrarTime, favoritarColaborador.
[x] Retorno de uam *div* com os componentes da página principal(Banner, Formulário, Time, Rodape)
