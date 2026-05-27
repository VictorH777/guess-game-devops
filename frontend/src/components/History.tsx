import React, { useEffect, useState } from 'react';

function History() {
  const [games, setGames] = useState<string[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      const token = localStorage.getItem('token');

      const res = await fetch('/api/load', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await res.json();
      setGames(data);
    };

    fetchGames();
  }, []);
  
    return (
    <div>
        <h1>Histórico</h1>

        {games.length === 0 ? (
        <p>Nenhum jogo salvo ainda.</p>
        ) : (
        games.map((game, index) => (
            <p key={index}>{game}</p>
        ))
        )}
    </div>
    );
}

export default History;