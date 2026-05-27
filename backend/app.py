from flask import Flask, request, jsonify
import random

app = Flask(__name__)

# Número secreto para adivinhação
secret_number = random.randint(1, 100)

@app.route('/guess', methods=['POST'])
def guess_number():
    data = request.get_json()
    user_guess = data.get('number')

    if user_guess == secret_number:
        return jsonify({"result": "Parabéns! Você acertou!"})
    elif user_guess < secret_number:
        return jsonify({"result": "O número é maior."})
    else:
        return jsonify({"result": "O número é menor."})

@app.route('/')
def home():
    return "API do jogo de adivinhação está rodando!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
