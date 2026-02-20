const express = require('express');
const cors = require('cors');
const fs = require('fs'); // Importa o módulo de arquivos
const path = require('path');

const app = express();
const DATA_FILE = path.join(__dirname, 'usuarios.json'); // Caminho do arquivo

app.use(cors());
app.use(express.json());

// Função auxiliar para ler o arquivo
const lerDados = () => {
    if (!fs.existsSync(DATA_FILE)) return []; // Se o arquivo não existir, retorna array vazio
    const data = fs.readFileSync(DATA_FILE);
    return JSON.parse(data);
};

// Função auxiliar para salvar no arquivo
const salvarDados = (dados) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(dados, null, 2));
};

// --- ROTAS ---

app.get('/usuarios', (req, res) => {
    res.json(lerDados());
});

app.post('/usuarios', (req, res) => {
    const { nome } = req.body;
    
    // [VALIDAÇÃO NO BACKEND]
    if (!nome || nome.trim() === "") {
        return res.status(400).json({ erro: "O nome é obrigatório." });
    }

    const usuarios = lerDados();
    usuarios.push({ nome: nome.trim() });
    salvarDados(usuarios);
    res.status(201).json({ mensagem: "Criado!" });
});

app.put('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const { novoNome } = req.body;
    const usuarios = lerDados();

    if (usuarios[id] && novoNome && novoNome.trim() !== "") {
        usuarios[id].nome = novoNome.trim();
        salvarDados(usuarios);
        res.json({ mensagem: "Atualizado!" });
    } else {
        res.status(400).json({ erro: "Dados inválidos." });
    }
});

app.delete('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const usuarios = lerDados();
    usuarios.splice(id, 1);
    salvarDados(usuarios);
    res.json({ mensagem: "Excluído!" });
});

app.listen(3000, () => console.log("Servidor rodando e salvando em arquivo!"));