# backend/app.py
from flask import Flask, request, jsonify
import csv
from datetime import datetime
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

# Percorso del file CSV per memorizzare i dati
DATA_FILE_PATH = "/Users/gagy/Desktop/fermentai/FermentAI/src/data/data.csv"

# Funzione per gestire l'invio dei dati
@app.route('/api/data', methods=['POST'])
@cross_origin()
def handle_data():
    data = request.json
    data['timestamp'] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    with open(DATA_FILE_PATH, 'a', newline='') as csvfile:
        fieldnames = ['temperature', 'pH', 'humidity', 'timestamp']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        if csvfile.tell() == 0:
            writer.writeheader()  # Scrivi l'header solo se il file è vuoto
        writer.writerow(data)

    return jsonify({'message': 'Dati memorizzati correttamente'})

# Funzione per recuperare lo storico dei dati
@app.route('/api/data/history', methods=['GET'])
@cross_origin()
def get_data_history():
    data = []
    with open(DATA_FILE_PATH, 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            data.append(row)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, port=8080)
