import express from "express";

const server = express();
const PORT = 3001;

const games = [
    { id: 1, titulo: "The Witcher 3", genero: "RPG", ano: 2015, multiplayer: false },
    { id: 2, titulo: "Counter-Strike 2", genero: "FPS", ano: 2023, multiplayer: true },
    { id: 3, titulo: "Elden Ring", genero: "RPG", ano: 2022, multiplayer: true },
    { id: 4, titulo: "FIFA 23", genero: "Esporte", ano: 2022, multiplayer: true },
    { id: 5, titulo: "Minecraft", genero: "Sobrevivencia", ano: 2011, multiplayer: true },
    { id: 6, titulo: "Red Dead Redemption 2", genero: "Acao e Aventura", ano: 2018, multiplayer: true },
    { id: 7, titulo: "Grand Theft Auto V", genero: "Acao e Aventura", ano: 2013, multiplayer: true },
    { id: 8, titulo: "God of War Ragnarok", genero: "Acao e Aventura", ano: 2022, multiplayer: false },
    { id: 9, titulo: "Cyberpunk 2077", genero: "RPG", ano: 2020, multiplayer: false },
    { id: 10, titulo: "Valorant", genero: "FPS", ano: 2020, multiplayer: true },
    { id: 11, titulo: "League of Legends", genero: "MOBA", ano: 2009, multiplayer: true },
    { id: 12, titulo: "Stardew Valley", genero: "Simulacao", ano: 2016, multiplayer: true },
    { id: 13, titulo: "Hades", genero: "Roguelike", ano: 2020, multiplayer: false },
    { id: 14, titulo: "The Last of Us Part I", genero: "Acao e Aventura", ano: 2022, multiplayer: false },
    { id: 15, titulo: "Horizon Zero Dawn", genero: "RPG", ano: 2017, multiplayer: false },
    { id: 16, titulo: "Call of Duty: Warzone", genero: "FPS", ano: 2020, multiplayer: true },
    { id: 17, titulo: "Rocket League", genero: "Esporte", ano: 2015, multiplayer: true },
    { id: 18, titulo: "Baldur's Gate 3", genero: "RPG", ano: 2023, multiplayer: true },
    { id: 19, titulo: "Resident Evil 4 Remake", genero: "Terror", ano: 2023, multiplayer: false },
    { id: 20, titulo: "It Takes Two", genero: "Plataforma", ano: 2021, multiplayer: true }
];

server.get("/games", (req, res) => {
    const { genero, multiplayer, ano } = req.query;

    const fgames = games.filter(game => {
        const matchGenero = genero
            ? game.genero.toLowerCase().includes(genero.toLowerCase())
            : true;

        const matchAno = ano
            ? game.ano === Number(ano)
            : true;

        let matchMultiplayer = true;
        if (multiplayer !== undefined) {
            const isMultiplayerQuery = multiplayer === 'true';
            matchMultiplayer = game.multiplayer === isMultiplayerQuery;
        }

        return matchGenero && matchAno && matchMultiplayer;
    });

    return res.json(fgames);
});

server.get("/games/stats", (req, res) => {
    const totalGames = games.length;
    const jogosAntigos = games.filter(game => game.ano < 2020);
    const multiplayerCount = games.filter(game => game.multiplayer === true).length;

    return res.status(200).json({
        totalGames,
        jogosAntigos,
        multiplayerCount
    });
});

server.get("/games/:id", (req, res) => {
    const { id } = req.params;
    const game = games.find(g => g.id === Number(id));

    if (!game) {
        return res.status(404).json({ error: `Jogo não encontrado` })
    }
    res.status(200).json(game)
});

server.listen(PORT, () => {
    console.log(`API para gerenciar lista de jogos rodando na porta ${PORT}`);
});
