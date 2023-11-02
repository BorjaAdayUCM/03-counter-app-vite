import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await', () => { 
    
    test('getImagen deve devolver la URL de una imagen', async() => { 
        
        const URL = await getImagen();

        expect(typeof URL).toBe('string');

     })

 })