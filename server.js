
const express = require('express'); 
const app = express(); 
app.use(express.json()); 
const cors = require('cors');
app.use(cors());
let itens = []; 

// ROTA: CREATE (Criar)
app.post('/usuarios', (req, res) => {
    const novoUsuario = req.body; 
    itens.push(novoUsuario); 
    res.status(201).send('Usuário criado!'); 
});

// ROTA: READ (Ler)
app.get('/usuarios', (req, res) => {
    res.json(itens); 
});

// ROTA: UPDATE (editar)
app.put('/usuarios/:id', (req, res) => {
    const id = req.params.id; 
    const { novoNome } = req.body; 

    // Verifica se o índice existe para evitar erros
    if (usuarios[id]) {
        usuarios[id].nome = novoNome; 
        res.json({ mensagem: "Atualizado com sucesso!" });
    } else {
        res.status(404).json({ erro: "Usuário não encontrado." });
    }
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));