
## Criando uma classe em UML
```javascript
+---------------------+
|   umaClasse         |
|---------------------|
| - nome: string      |
| + sobrenome: string |
| # idade: number     |
|---------------------|
| + getNome():string  |
| + getIdade(): number|
| + setNome(): void   |
| + setIdade() void   |
+---------------------+
```

Em UML (Unified Modeling Language), uma classe é um elemento fundamental que representa um tipo de objeto ou entidade no sistema que está sendo modelado. Uma classe descreve as características (atributos) e comportamentos (métodos) dos objetos pertencentes a essa classe. As classes são usadas para modelar a estrutura estática de um sistema orientado a objetos.

A representação gráfica de uma classe em um diagrama de classes UML inclui:

Nome da Classe: O nome da classe é colocado no topo da caixa que a representa.

Atributos: Os atributos são as propriedades da classe, representando características ou dados que os objetos da classe podem ter. Eles são listados abaixo do nome da classe.

Métodos: Os métodos são as operações ou funções que os objetos da classe podem realizar. Eles também são listados abaixo do nome da classe, geralmente separados dos atributos por uma linha horizontal.

Visibilidade (opcional): Pode-se indicar a visibilidade de cada atributo ou método, indicando se é público (+), privado (-), ou protegido (#).