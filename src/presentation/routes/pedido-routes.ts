import express from 'express'
import { CreatePedidoController } from 'presentation/controllers/create-pedido-controller'
import { GetPedidosController } from 'presentation/controllers/get-pedidos-controller'
import { UpdatePedidoController } from 'presentation/controllers/update-pedido-controller'
import { AutenticationAccessKeyValidator } from 'presentation/middlewares/authentication'
import { UpdatePedidoValidator } from 'presentation/middlewares/validators/update-pedido-validator'
import { getRouteRequestsLimiterByMinutes } from 'utils/limiter'

const router = express.Router()

const routeRequestsLimiterPaginado = getRouteRequestsLimiterByMinutes(10, 40)
const routeRequestsLimiterPersistence = getRouteRequestsLimiterByMinutes(6, 10)

router.get(
  '/paginado',
  routeRequestsLimiterPaginado,
  AutenticationAccessKeyValidator.handle,
  GetPedidosController.handle,
)

router.post(
  '/create',
  routeRequestsLimiterPersistence,
  AutenticationAccessKeyValidator.handle,
  CreatePedidoController.handle,
)

router.put(
  '/update',
  routeRequestsLimiterPersistence,
  AutenticationAccessKeyValidator.handle,
  UpdatePedidoValidator.handle,
  UpdatePedidoController.handle,
)

export const pedidoRoutes = router
