import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>🎮 Guess Word Game</h1>
            <p>Bem-vindo ao jogo!</p>
            <li><Link to="/maker">Criar um jogo</Link></li>
            <br />
            <li><Link to="/breaker">Entrar em um jogo</Link></li>
            <br />
            <li><Link to="/login">Login</Link></li>
            <br />
            <li><Link to="/history">Histórico</Link></li>
            <br />
        </div>
    );
};

export default Home;
