
# 🏗️ Backend - Sistema de Cadastro de Obras

## 🚀 Tecnologias Utilizadas
- Node.js
- Express
- MongoDB
- Mongoose
- Nodemailer (para envio de e-mails)

## 📦 Instalação

1. Clone o repositório:
```
git clone https://github.com/seu-usuario/backend-obras.git
```

2. Acesse a pasta:
```
cd backend-obras
```

3. Instale as dependências:
```
npm install
```

4. Crie um arquivo `.env` com as informações:
```
MONGODB_URI=seu_link_do_mongodb
EMAIL_USER=seu_email@gmail.com
EMAIL_PASS=sua_senha_de_email
```

5. Inicie o servidor:
```
node server.js
```

## 🔗 Rotas da API

### 📍 Obras (`/api/obras`)
- **GET /** → Lista todas as obras.
- **POST /** → Cria uma nova obra.
- **GET /:id** → Retorna uma obra pelo ID.
- **PUT /:id** → Atualiza uma obra.
- **DELETE /:id** → Remove uma obra.
- **GET /:id/fiscalizacoes** → Lista fiscalizações de uma obra.

### 📝 Fiscalizações (`/api/fiscalizacoes`)
- **GET /** → Lista todas as fiscalizações.
- **POST /** → Cria uma fiscalização vinculada a uma obra.
- **GET /:id** → Retorna uma fiscalização pelo ID.
- **PUT /:id** → Atualiza uma fiscalização.
- **DELETE /:id** → Remove uma fiscalização.

## 📦 Exemplo de JSON (Obra)
```json
{
  "nome": "Casa A",
  "responsavel": "Marcello",
  "dataInicio": "2024-06-20",
  "dataFim": "2024-09-20",
  "descricao": "Construção de residência",
  "latitude": "-8.0522",
  "longitude": "-34.9286",
  "endereco": "Rua X, Bairro Y, Recife",
  "foto": "base64_da_imagem"
}
```

## 📦 Exemplo de JSON (Fiscalização)
```json
{
  "obraId": "id_da_obra",
  "data": "2024-06-25",
  "status": "Em Dia",
  "observacoes": "Tudo certo",
  "latitude": "-8.0522",
  "longitude": "-34.9286",
  "foto": "base64_da_imagem"
}
```

## 📨 Envio de e-mail
Simulado utilizando Nodemailer.
