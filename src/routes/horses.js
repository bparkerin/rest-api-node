const { Router } = require('express');
const router = Router();
const _ = require('underscore');


const horses = require('../sample.json');
console.log(horses);


//GET METHOD API
router.get('/', (req, res) => {
    res.json(horses);
});


//POST METHOD API
router.post('/', (req, res) => {
    const { Reproductor, Microchip, Servicios, Precio, Prestaciones, Propietario, Vendedor }= req.body;
    if (Reproductor && Microchip && Servicios && Precio && Prestaciones && Propietario && Vendedor) {
        const id = horses.length + 1;
        const newHorse = {...req.body, id};
        console.log(newHorse);
        //res.json('saved');
        horses.push(newHorse);
        res.json(horses);
    } else {
        //res.send('Wrong Request');
        res.status(500).json({error: 'Ops! Something is wrong!'});
    }
});


//PUT METHOD API
router.put('/:id', (req, res) => {
    const {id} = req.params;
    const { Reproductor, Microchip, Servicios, Precio, Prestaciones, Propietario, Vendedor }= req.body;
    if (Reproductor && Microchip && Servicios && Precio && Prestaciones && Propietario && Vendedor) {
        _.each(horses, (horse, i) => {
            if (horse.id == id) {
                horse.Reproductor = Reproductor;
                horse.Microchip = Microchip;
                horse.Servicios = Servicios;
                horse.Precio = Precio;
                horse.Prestaciones = Prestaciones;
                horse.Propietario = Propietario;
                horse.Vendedor = Vendedor;
            }
        });
        res.json(horses);
    } else {
        res.status(500).json({error: 'All the fields are require.'});
    }
});



//DELETE METHOD API
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    //res.send('deleted');
    _.each(horses, (horse, i) => {
        if (horse.id == id) {
            horses.splice(i, 1);
        }
    });
    res.send(horses);
});


module.exports = router;


