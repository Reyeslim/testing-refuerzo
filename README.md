# 🧪 Testing con Jest y Mongoose

## 🚀 Descripción del Proyecto

Esta aplicación es un entorno de pruebas diseñado para aprender los fundamentos del testing automatizado en el backend. El objetivo es pasar de las pruebas manuales en Postman a tests automáticos que aseguren que nuestros modelos de Mongoose y nuestras rutas de Express funcionan correctamente sin necesidad de una base de datos real.

---

## 🎯 Funcionalidades

### ✅ 1. Validación de modelos (Mongoose)

- Comprobación de que los esquemas obligan a cumplir las reglas (campos obligatorios).
- Verificación de que los datos se guardan correctamente en la base de datos.

### ✅ 2. Entorno de pruebas aislado

- Uso de un servidor de MongoDB en memoria que se crea y se destruye en cada sesión de test.
- Los tests no "ensucian" ni dependen de la base de datos de producción o local.

### ✅ 3. Tests de integración (API)

- Simulación de peticiones HTTP (GET, POST) mediante Supertest.
- Validación de códigos de estado (201 Created, 400 Bad Request) y del cuerpo de las respuestas JSON.

### ✅ 4. Ciclo de vida del test (Hooks)

- Configuración automática del entorno antes de empezar (`beforeAll`).
- Limpieza de datos entre pruebas para asegurar la independencia de cada test.

### ✅ 5. Feedback en tiempo real

- Configuración de Jest en modo **watch** para recibir resultados inmediatos mientras se escribe el código.

---

## 🛠️ Tecnologías utilizadas

- Node.js y Express
- Mongoose (ODM)
- Jest (Testing framework)
- Supertest (Peticiones HTTP para tests)
- MongoDB Memory Server (DB en memoria)
