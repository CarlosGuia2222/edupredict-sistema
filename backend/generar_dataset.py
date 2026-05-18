import random
import pandas as pd

random.seed(42)

def calcular_riesgo(estudiante):
    puntos = 0

    if estudiante["Promedio"] < 70:
        puntos += 25

    if estudiante["Faltas"] > 15:
        puntos += 20

    if estudiante["Materias_reprobadas"] >= 3:
        puntos += 20

    if estudiante["Asistencia"] < 75:
        puntos += 20

    if estudiante["Trabaja"] == 1:
        puntos += 8

    if estudiante["Beca"] == 0:
        puntos += 7

    if estudiante["Acceso_internet"] == 0:
        puntos += 7

    if estudiante["Apoyo_familiar"] == 0:
        puntos += 8

    if estudiante["Tiempo_traslado"] > 60:
        puntos += 7

    if estudiante["Creditos_aprobados"] < 40:
        puntos += 6

    return 1 if puntos >= 40 else 0


def generar_estudiante(numero):
    semestre = random.randint(1, 10)

    estudiante = {
        "Estudiante": f"Alumno {numero}",
        "Edad": random.randint(17, 25),
        "Semestre": semestre,
        "Promedio": random.randint(50, 100),
        "Faltas": random.randint(0, 30),
        "Materias_reprobadas": random.randint(0, 6),
        "Asistencia": random.randint(55, 100),
        "Creditos_aprobados": random.randint(20, 220),
        "Tiempo_traslado": random.randint(10, 120),
        "Beca": random.randint(0, 1),
        "Trabaja": random.randint(0, 1),
        "Acceso_internet": random.randint(0, 1),
        "Apoyo_familiar": random.randint(0, 1),
    }

    estudiante["Riesgo_desercion"] = calcular_riesgo(estudiante)

    return estudiante


def main():
    cantidad_estudiantes = 200

    datos = [
        generar_estudiante(i)
        for i in range(1, cantidad_estudiantes + 1)
    ]

    df = pd.DataFrame(datos)

    df.to_csv("edupredict_dataset_mejorado.csv", index=False, encoding="utf-8-sig")

    print("==============================================")
    print("DATASET MEJORADO GENERADO")
    print("==============================================")
    print(f"Archivo creado: edupredict_dataset_mejorado.csv")
    print(f"Total de estudiantes: {len(df)}")
    print("")
    print("Distribución de la variable objetivo:")
    print(df["Riesgo_desercion"].value_counts())
    print("")
    print("Primeros registros:")
    print(df.head())


if __name__ == "__main__":
    main()