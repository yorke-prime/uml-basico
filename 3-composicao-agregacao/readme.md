
## Composição e Agregação

**Composição:**

- A composição é um tipo forte de associação onde um objeto (todo) é composto por partes e a existência das partes está intimamente ligada à existência do objeto todo.
- Se o objeto todo for destruído, suas partes também serão destruídas.
- Na notação UML, a composição é representada por um losango preenchido no final da linha de associação que aponta para o objeto todo.

### **Exemplo de Composição:**

Na composição, o objeto **`Carro`** é composto pelo objeto **`Motor`**. Se o carro for destruído, o motor também será destruído.

```
+-----------------+            +----------------+
|      Carro      |            |     Motor      |
|-----------------|            |----------------|
| - modelo        |            | - numeroSerie  |
| - cor           |            | - potencia     |
| - motor (comp.) |            +----------------+
+-----------------+

```

Neste exemplo, a classe Carro possui um atributo chamado motor, que é uma composição da classe Motor. Se o objeto Carro for destruído, o objeto Motor associado a ele também será.

**Agregação:**

- A agregação é um tipo mais fraco de associação onde um objeto (todo) é composto por partes, mas as partes podem existir independentemente do objeto todo.
- Se o objeto todo for destruído, as partes ainda podem existir.
- Na notação UML, a agregação é representada por um losango não preenchido no final da linha de associação que aponta para o objeto todo.

### **Exemplo de Agregação:**

Na agregação, o objeto **`Carro`** tem uma relação com o objeto **`Motor`**, mas o motor pode existir independentemente do carro. Se o carro for destruído, o motor ainda pode existir.
```

+-----------------+            +----------------+
|      Carro      |            |     Motor      |
|-----------------|            |----------------|
| - modelo        |            | - numeroSerie  |
| - cor           |            | - potencia     |
| - motor (agreg.)|            +----------------+
+-----------------+

```

Neste exemplo, a classe Carro possui um atributo chamado motor, que é uma agregação da classe Motor. Se o objeto Carro for destruído, o objeto Motor associado a ele ainda pode existir.