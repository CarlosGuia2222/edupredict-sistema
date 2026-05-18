from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)

modelo = joblib.load("modelo_edupredict.pkl")
scaler = joblib.load("scaler_edupredict.pkl")
columnas_modelo = joblib.load("columnas_modelo.pkl")


def obtener_nivel(probabilidad):
    if probabilidad >= 70:
        return "Alto"
    elif probabilidad >= 40:
        return "Medio"
    else:
        return "Bajo"


def obtener_resultado(nivel):
    if nivel == "Alto":
        return "Riesgo alto de deserción"
    elif nivel == "Medio":
        return "Riesgo medio de deserción"
    else:
        return "Sin riesgo crítico de deserción"


def detectar_factores(datos):
    factores = []

    if datos["Promedio"] < 70:
        factores.append("Promedio académico bajo")

    if datos["Faltas"] > 15:
        factores.append("Cantidad elevada de faltas")

    if datos["Materias_reprobadas"] >= 3:
        factores.append("Varias materias reprobadas")

    if datos["Asistencia"] < 75:
        factores.append("Porcentaje de asistencia bajo")

    if datos["Trabaja"] == 1:
        factores.append("El estudiante trabaja mientras estudia")

    if datos["Beca"] == 0:
        factores.append("No cuenta con beca o apoyo económico")

    if datos["Acceso_internet"] == 0:
        factores.append("No cuenta con acceso a internet")

    if datos["Apoyo_familiar"] == 0:
        factores.append("Apoyo familiar limitado")

    if datos["Tiempo_traslado"] > 60:
        factores.append("Tiempo de traslado elevado")

    if datos["Creditos_aprobados"] < 40:
        factores.append("Bajo avance académico en créditos")

    if not factores:
        factores.append("No se detectaron factores críticos importantes")

    return factores


@app.route("/", methods=["GET"])
def inicio():
    return jsonify({
        "mensaje": "Backend de EduPredict funcionando correctamente",
        "modelo": "MLPClassifier",
        "estado": "activo"
    })


@app.route("/predict", methods=["POST"])
def predecir():
    try:
        datos = request.get_json()

        estudiante = {
            "Edad": int(datos["edad"]),
            "Semestre": int(datos["semestre"]),
            "Promedio": float(datos["promedio"]),
            "Faltas": int(datos["faltas"]),
            "Materias_reprobadas": int(datos["materias_reprobadas"]),
            "Asistencia": float(datos["asistencia"]),
            "Creditos_aprobados": int(datos["creditos_aprobados"]),
            "Tiempo_traslado": int(datos["tiempo_traslado"]),
            "Beca": int(datos["beca"]),
            "Trabaja": int(datos["trabaja"]),
            "Acceso_internet": int(datos["acceso_internet"]),
            "Apoyo_familiar": int(datos["apoyo_familiar"]),
        }

        entrada = pd.DataFrame([estudiante], columns=columnas_modelo)
        entrada_normalizada = scaler.transform(entrada)

        prediccion = int(modelo.predict(entrada_normalizada)[0])
        probabilidades = modelo.predict_proba(entrada_normalizada)[0]

        probabilidad_riesgo = round(float(probabilidades[1]) * 100, 2)

        nivel = obtener_nivel(probabilidad_riesgo)
        resultado = obtener_resultado(nivel)
        factores = detectar_factores(estudiante)

        return jsonify({
            "prediccion": prediccion,
            "resultado": resultado,
            "probabilidad": probabilidad_riesgo,
            "nivel": nivel,
            "factores": factores
        })

    except Exception as error:
        return jsonify({
            "error": "No se pudo realizar la predicción",
            "detalle": str(error)
        }), 400


if __name__ == "__main__":
    app.run(debug=True, port=5000)