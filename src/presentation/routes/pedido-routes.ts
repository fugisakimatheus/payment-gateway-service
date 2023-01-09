import express from 'express'
import { CreatePedidoController } from 'presentation/controllers/create-pedido-controller'
import { GetPedidosController } from 'presentation/controllers/get-pedidos-controller'
import { UpdatePedidoController } from 'presentation/controllers/update-pedido-controller'
import { AutenticationAccessKeyValidator } from 'presentation/middlewares/authentication'
import { UpdatePedidoValidator } from 'presentation/middlewares/validators/update-pedido-validator'

const router = express.Router()

router.get(
  '/paginado',
  AutenticationAccessKeyValidator.handle,
  GetPedidosController.handle,
)

router.post(
  '/create',
  AutenticationAccessKeyValidator.handle,
  CreatePedidoController.handle,
)

router.put(
  '/update',
  AutenticationAccessKeyValidator.handle,
  UpdatePedidoValidator.handle,
  UpdatePedidoController.handle,
)

export const pedidoRoutes = router
