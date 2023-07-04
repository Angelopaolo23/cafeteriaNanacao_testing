const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
    describe("Obteniendo resultados de get /cafes", () => {
        it("Devolviendo un status 200", async () => {
            const response = await request(server).get('/cafes').send();
            const status = response.statusCode;
            expect(status).toBe(200)
        });
        it("Devolviendo un Array", async () => {
            const {body: cafes} = await request(server).get('/cafes').send();
            expect(cafes).toBeInstanceOf(Array)
        });
        it("Devolviendo minimo un objeto dentro del array", async () => {
            const {body: cafes} = await request(server).get('/cafes').send();
            expect(cafes.length).toBeGreaterThanOrEqual(1)
        });
    });
    describe("Probando ruta post /cafes", () => {
        it("Agregando un cafe a la base de datos y retorna un status 201", async () => {
            const cafePrueba =  {
                "id": 10,
                "nombre": "Frappuccino"
            };
            const {body: inventarioCafes, statusCode: status} = await request(server).post('/cafes').send(cafePrueba);
            expect(inventarioCafes).toContainEqual(cafePrueba);
            expect(status).toBe(201)
        });
    });
    describe("Probando ruta delete /cafes/:id", () => {
        it("Obteniendo un status 404 al usar un id inexistente para eliminar", async () => {
            const jwt = "token";
            const {body: inventarioCafes} = await request(server).get('/cafes').send();
            
            let inexistenteID;
            do {
                inexistenteID = Math.floor(Math.random() * 100) + 1;
            } while (inventarioCafes.some(cafe => cafe.id === inexistenteID));

            const { statusCode: status } = await request(server).delete(`/cafes/${inexistenteID}`).set("Authorization", jwt).send();
            expect(status).toBe(404)
        });
    });
    describe("Probando ruta put /cafes/:id", () => {
        it("Obteniendo un status 400 al actualizar cafe con IDs distintos entregados por params y payload", async () => {
            const cafeActualizado = {
                "id": 4,
                "nombre": "Frappuccino"
            };
            const {statusCode: status} = await request(server).put('/cafes/6').send(cafeActualizado);
            expect(status).toBe(400)
        });
    });
    
    
    
    
});
