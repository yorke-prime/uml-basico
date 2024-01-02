## Herança

A herança é um conceito fundamental utilizado para representar a relação de especialização/generalização entre classes. A herança permite que uma classe, chamada de classe derivada ou subclasse, herde atributos e comportamentos de outra classe, chamada de classe base ou superclasse


```
+----------------+   
|     SHAPE      |  
|----------------|  
| - cor          | 
| - preencher()  |  
+----------------+
         ^
         | (herança)
         |
+-----------------+
|     Circle      |
|-----------------|
| - diâmetro      |
| - raio          |
| - calcularÁrea()|
+-----------------+

```
- **`Shape`** é a classe base ou superclasse, que contém atributos comuns a todas as formas, como a cor, e um método **`preencher()`**.
- **`Circle`** é outra subclasse de **`Shape`**, adicionando atributos específicos (**`diâmetro`** e **`raio`**) e também um método **`calcularÁrea()`**.

Assim, o **`Retângulo`** herda as características comuns de **`Forma`**, e adiciona suas próprias características específicas.