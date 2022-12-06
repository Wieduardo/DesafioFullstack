

## Documentação da API

#### Retorna todos os usuários cadastrados

```http
  GET /users
```
#### Faz o cadastro usuário

```http
  POST /users
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. Nome do usuário |
| `email`      | `string` | **Obrigatório**. Email do usuário |
| `password`      | `string` | **Obrigatório**. Password do usuário |
| `phone`      | `string` | **Obrigatório**. Telefone do usuário |

#### Retorna o token do usuário

```http
  POST /users/login
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | **Obrigatório**. Email do usuário |
| `password`      | `string` | **Obrigatório**. Password do usuário |

#### Retorna informações de um Usuário logado

```http
  GET /users/user
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Authorization`      | `header` | **Obrigatório**. O Token do usuário |

#### Deleta um usuário logado

```http
  DELETE /users/user
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Authorization`      | `header` | **Obrigatório**. O Token do usuário |

#### Faz o patch de um usuário logado

```http
  patch /users
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` |  Nome do usuário |
| `email`      | `string` |  Email do usuário |
| `password`      | `string` | Password do usuário |
| `phone`      | `string` | Telefone do usuário |
| `Authorization`      | `header` | **Obrigatório**. O Token do usuário |

#### Retorna os contatos de um Usuário logado

```http
  GET /contacts
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Authorization`      | `header` | **Obrigatório**. O Token do usuário |

#### Cria um contato para usuário logado

```http
  POST /contacts
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. Nome do usuário |
| `email`      | `string` | **Obrigatório**. Email do usuário |
| `number`      | `string` | **Obrigatório**. Password do usuário |
| `Authorization`      | `header` | **Obrigatório**. O Token do usuário |

#### Deleta um contato de usuário logado

```http
  DELETE /contacts/:contact_id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Authorization`      | `header` | **Obrigatório**. O Token do usuário |
