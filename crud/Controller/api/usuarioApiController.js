var Usuario = require('../../models/usuario')
module.exports = {
    listar: function (req, res){
        Usuario.find(function (err, usuarios){
            if(!usuarios){ res.json({msg: 'usuarios no encontrado'})}
            res.json({msg: 'usuarios encontrados', data: usuarios})
        })
    },
    crear: function (req, res){ 
        const usuarioNuevo = new Usuario({
            nombre: req.body.nombre,
            apellido:req.body.apellido
        })

        usuarioNuevo.save(function(err,userSave){
            if(err){ return res.json({msg:'error al guardar'})}
            res.json({msg:'usuario guardado con exito'})

        })
    },
    actualizar: function (req, res){
        Usuario.findOneAndUpdate({_id: req.body.id},{nombre:req.body.nombreNew},function (err,usuarioUpdpate){
            if(err) res.json({msg:err})
            res.json({msg:"actualizado", dataActualizada: usuarioUpdpate})
        })
    },
    eliminar: function (req, res){
        Usuario.findById(req.body.id,function (err,usuario){
            if(!usuario){ res.json({msg: 'usuario no encontrado para eliminar'})}
            usuario.remove(function(err,usuarioEliminado){
                if(err){ res.json({msg:'error al eliminar'})}
                res.json({msg: 'delete exitoso!', data_eliminada: usuarioEliminado})
            });
        })
    }
}