class UserController {

    constructor (userService) {
        // Porque minuscula si la clase comienza en mayuscula?
        this.userService = userService;
    }

    async getUsers (req, res) {
        const users = await this.userService.getUsers();
        // porque retornamos, si antes enviabamos directamente res.something?
        return res.json(users)

    };

//  request tiene un header 'token' con el valor 'r2d2'

    async addUser (req, res) {
        const { body , headers } = req;
        if (body.name && headers.token == "r2d2") {  
            await this.userService.addUser(body.name);
            //this.names.push(body.name);
            //console.log(this.names);
            res.status(200).send("Nombre agregado con exito");
        } else {
            res.status(400).send("Formato no aceptado");
        }

    };

    /* enviaremos un número de índice que representa la posición del array de nombres que queremos modificar. 
    También deberá recibir el nuevo valor a ser ingresado. 
La respuesta de este endpoint tiene que ser un 200 si todo salio bien o un 400 si todo sale mal 
(un ejemplo de que salga todo mal es que llegue vacío 'name') */

    modifyName (req, res) {
        const { id } = req.params;
        const { name } = req.query;
        this.names.splice(id, 1, name);
            
        res.send('Entrada modificada correctamente')
    }

    /* método DELETE en la ruta /delete/:indice, y en el cual enviaremos un número de índice que representa 
        la posición del array de nombres que queremos borrar. */

    deleteName (req,res) {
        const { index } = req.params;
        this.names.splice(index, 1)

        res.send('La entrada ha sido borrada correctamente')
    }
 }

module.exports = UserController;