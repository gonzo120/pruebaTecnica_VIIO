import request from 'request';

export const getProducts = async (req, res) => {
    
    try {
        request('https://dummyjson.com/carts', function(error, response, body) {
            if (error) {
                // Manejar el error si ocurre
                
                res.status(500).json({ message: 'Error al obtener los productos' });
            } else {
                // Procesar la respuesta si no hay error
                const products = JSON.parse(body);
                res.status(200).json(products);
            }
        });
    } catch (error) {
        // Manejar cualquier error interno
        
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
