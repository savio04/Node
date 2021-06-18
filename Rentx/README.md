# Cadastro de carros

**Requisitos funcionais**  
[ x ] Deve ser possivel cadastrar um carro.  

**Regras de negócio**  
[ x ] Não deve ser possivel cadastrar um carro com uma placa ja existente.  
[ x ] O carro deve ser cadastrado por padrão com disponibilidade de uso.  
[ ] Um carro só pode ser cadastrado por um usuario autorizado (administrador).  


# Listagem de carros

**Requisitos funcionais**  
[ ] Deve ser possivel listar todos os carros disponiveis.  
[ ] Deve ser possivel listar todos os carros disponiveis pelo o nome da cateogria.  
[ ] Deve ser possivel listar todos os carros disponiveis pelo o nome da marca.  
[ ] Deve ser possivel listar todos os carros disponiveis pelo o nome do carro.  

**Regras de negócio**  
[ ] O usario não precisa estar logado no sistema.  


# Cadastro de especificação no carro

**Requisitos funcionais**  
[ ] Deve ser possivel cadastrar um especificação para o carro.  


**Regras de negócio**  
[ ] Não deve ser possivel cadastrar uma especificação para um carro não cadastrado.  
[ ] Não deve ser possivel cadastrar uma especificação ja existente para o mesmo carro.  


# Cadastro de imagens do carro

**Requisitos funcionais**  
[ ] Deve ser possivel cadastrar imagens de um carro.  
[ ] Deve ser possivel listar todos os carros.  

**Requisitos não funcionais**  
[ ] Utilizar o multer para upload de arquivos.  

**Regras de negócio**  
[ ] O usuario pode cadastrar mais de uma imagem para o mesmo carro.  
[ ] A imagem de um carro só pode ser cadastrado por um usuario autorizado(administrador).  



# Aluguel de carros

**Requisitos funcionais**  
[ ] Deve ser possivel cadastrar uma aluguel.  

**Requisitos não funcionais**  
[ ] Utilizar o multer para upload de arquivos.  

**Regras de negócio**  
[ ] O aluguel deve ter duração minima de 24h horas.  
[ ] Não deve ser possivel cadastrar um aluguel caso já exista um aberto para o mesmo usuario.  
[ ] Não deve ser possivel cadastrar um aluguel caso já exista um aberto para o mesmo carro.  