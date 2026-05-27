from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

app = Flask(__name__)

# conectar com Postgres (nome do serviço no docker)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://user:password@postgres/game'
app.config['JWT_SECRET_KEY'] = 'segredo'

db = SQLAlchemy(app)
jwt = JWTManager(app)

# ---------------------
# MODELOS
# ---------------------

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True)

class Game(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    data = db.Column(db.String)

# ---------------------
# ROTAS
# ---------------------

@app.route('/api/register', methods=['POST'])
def register():
    username = request.json.get('username')

    user = User(username=username)
    db.session.add(user)
    db.session.commit()

    return jsonify({"msg": "Usuário criado"})

@app.route('/api/login', methods=['POST'])
def login():
    username = request.json.get('username')

    user = User.query.filter_by(username=username).first()

    if not user:
        return jsonify({"msg": "Usuário não existe"}), 401

    token = create_access_token(identity=user.id)

    return jsonify(access_token=token)

@app.route('/api/save', methods=['POST'])
@jwt_required()
def save():
    user_id = get_jwt_identity()
    data = request.json.get('data')

    game = Game(user_id=user_id, data=data)
    db.session.add(game)
    db.session.commit()

    return jsonify({"msg": "Salvo"})

@app.route('/api/load', methods=['GET'])
@jwt_required()
def load():
    user_id = get_jwt_identity()

    games = Game.query.filter_by(user_id=user_id).all()

    return jsonify([g.data for g in games])


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)