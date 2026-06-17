# 🎮 Desafio Express: API de Gerenciamento de Games

Seu objetivo é criar uma API para gerenciar uma lista de jogos. Você usará uma array em memória (assim como fez com os clientes) e aplicará lógica de programação para filtrar e manipular esses dados.

## 🛠️ O Array Inicial de Dados

Adicione esta lista de jogos no topo do seu arquivo:

```javascript
const games = [
    { id: 1, titulo: "The Witcher 3", genero: "RPG", ano: 2015, multiplayer: false },
    { id: 2, titulo: "Counter-Strike 2", genero: "FPS", ano: 2023, multiplayer: true },
    { id: 3, titulo: "Elden Ring", genero: "RPG", ano: 2022, multiplayer: true },
    { id: 4, titulo: "FIFA 23", genero: "Esporte", ano: 2022, multiplayer: true },
    { id: 5, titulo: "Minecraft", genero: "Sobrevivencia", ano: 2011, multiplayer: true }
];
```

---

## 🚀 As Rotas que Você Deve Criar

### 1. Buscar Jogo por ID (Route Params)
*   **Rota:** `GET /games/:id`
*   **Objetivo:** Retornar o jogo correspondente ao ID informado.
*   **Regra de Lógica:** 
    *   Se o jogo existir, retorne o objeto do jogo com status `200`.
    *   Se o ID não existir na lista, retorne a mensagem `"Jogo não encontrado"` com o status HTTP correto para falhas de busca.

### 2. Listagem com Filtros Avançados (Query Params)
*   **Rota:** `GET /games`
*   **Objetivo:** Esta rota deve ser flexível e aceitar três filtros opcionais via Query Params: `genero`, `ano` e `multiplayer`.
*   **Regra de Lógica:**
    *   Se nenhum parâmetro for enviado (`/games`), retorne a lista **completa** de jogos.
    *   Se o usuário filtrar por `/games?genero=RPG`, retorne apenas os jogos de RPG.
    *   Se o usuário filtrar por `/games?multiplayer=true`, retorne apenas jogos multiplayer (atenção: query params chegam como texto `"true"`, você precisará converter para booleano).
    *   **Desafio Extra de Lógica:** Permita combinar os filtros! Exemplo: `/games?genero=RPG&multiplayer=true` deve retornar apenas o Elden Ring.

### 3. Rota de Estatísticas (Lógica Pura)
*   **Rota:** `GET /games/stats`
*   **Objetivo:** Retornar um resumo estatístico da sua lista de jogos.
*   **Regra de Lógica:** Você não vai apenas devolver a array. Você deve calcular e retornar um objeto JSON com:
    1.  `totalGames`: A quantidade total de jogos cadastrados.
    2.  `jogosAntigos`: Uma nova lista apenas com os jogos lançados **antes de 2020**.
    3.  `multiplayerCount`: O número exato de jogos que são multiplayer.

---

## 🧪 Como Testar no Insomnia

1.  Teste a busca de ID com um número que existe (ex: `/games/3`) e com um que não existe (ex: `/games/99`).
2.  Teste a listagem pura (`/games`).
3.  Teste os filtros isolados (`/games?genero=RPG`) e combinados (`/games?ano=2022&multiplayer=true`).
4.  Teste a rota de estatísticas (`/games/stats`) e verifique se os cálculos matemáticos e os filtros internos estão corretos.
