import express from 'express'
export let rutas=express.Router()

rutas.post('/api/parqueadero/admin/',insertar)
rutas.get('/api/parqueadero/admin/',buscarTodos)
rutas.get('/api/parqueadero/admin/:id/',buscarPorId)
rutas.put('/api/parqueadero/admin/:id/',editar)

rutas.post('/api/parqueadero/celda/',insertar)
rutas.get('/api/parqueadero/celda/',buscarTodos)
rutas.get('/api/parqueadero/celda/:id/',buscarPorId)
rutas.put('/api/parqueadero/celda/:id/',editar)

rutas.post('/api/parqueadero/vehiculo/',insertar)
rutas.get('/api/parqueadero/vehiculo/',buscarTodos)
rutas.get('/api/parqueadero/vehiculo/:id/',buscarPorId)
rutas.put('/api/parqueadero/vehiculo/:id/globantAdnygit status',editar)