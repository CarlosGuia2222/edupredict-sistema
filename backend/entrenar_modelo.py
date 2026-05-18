import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
from sklearn.neural_network import MLPClassifier
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report


COLUMNAS_ENTRADA = [
    "Edad",
    "Semestre",
    "Promedio",
    "Faltas",
    "Materias_reprobadas",
    "Asistencia",
    "Creditos_aprobados",
    "Tiempo_traslado",
    "Beca",
    "Trabaja",
    "Acceso_internet",
    "Apoyo_familiar",
]


def entrenar_modelo():
    df = pd.read_csv("edupredict_dataset_mejorado.csv")

    X = df[COLUMNAS_ENTRADA]
    y = df["Riesgo_desercion"]

    scaler = MinMaxScaler()
    X_normalizado = scaler.fit_transform(X)

    X_train, X_test, y_train, y_test = train_test_split(
        X_normalizado,
        y,
        test_size=0.20,
        random_state=42,
        stratify=y
    )

    modelos = {
        "MLP_8_4": MLPClassifier(
            hidden_layer_sizes=(8, 4),
            activation="relu",
            solver="adam",
            max_iter=3000,
            random_state=42
        ),
        "MLP_16_8": MLPClassifier(
            hidden_layer_sizes=(16, 8),
            activation="relu",
            solver="adam",
            max_iter=3000,
            random_state=42
        ),
        "MLP_24_12_6": MLPClassifier(
            hidden_layer_sizes=(24, 12, 6),
            activation="relu",
            solver="adam",
            max_iter=3000,
            random_state=42
        ),
    }

    mejor_nombre = None
    mejor_modelo = None
    mejor_precision = 0
    mejores_predicciones = None

    print("==============================================")
    print("ENTRENAMIENTO DE MODELOS MLP")
    print("==============================================")

    for nombre, modelo in modelos.items():
        modelo.fit(X_train, y_train)
        predicciones = modelo.predict(X_test)
        precision = accuracy_score(y_test, predicciones)

        print("")
        print(f"Modelo: {nombre}")
        print(f"Precisión: {round(precision * 100, 2)}%")

        if precision > mejor_precision:
            mejor_precision = precision
            mejor_nombre = nombre
            mejor_modelo = modelo
            mejores_predicciones = predicciones

    print("")
    print("==============================================")
    print("MEJOR MODELO SELECCIONADO")
    print("==============================================")
    print(f"Modelo: {mejor_nombre}")
    print(f"Precisión: {round(mejor_precision * 100, 2)}%")

    print("")
    print("Matriz de confusión:")
    print("Filas = valores reales")
    print("Columnas = predicciones")
    print("Orden: [No riesgo, Riesgo]")
    print(confusion_matrix(y_test, mejores_predicciones, labels=[0, 1]))

    print("")
    print("Reporte de clasificación:")
    print(classification_report(
        y_test,
        mejores_predicciones,
        labels=[0, 1],
        target_names=["No riesgo", "Riesgo"],
        zero_division=0
    ))

    joblib.dump(mejor_modelo, "modelo_edupredict.pkl")
    joblib.dump(scaler, "scaler_edupredict.pkl")
    joblib.dump(COLUMNAS_ENTRADA, "columnas_modelo.pkl")

    print("")
    print("==============================================")
    print("ARCHIVOS GENERADOS")
    print("==============================================")
    print("modelo_edupredict.pkl")
    print("scaler_edupredict.pkl")
    print("columnas_modelo.pkl")


if __name__ == "__main__":
    entrenar_modelo()