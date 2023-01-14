import express from 'express'
import { CreateMetodoPagamentoController } from 'presentation/controllers/create-metodo-pagamento-controller'
import { GetMetodosPagamentoController } from 'presentation/controllers/get-metodos-pagamento-controller'
import { UpdateMetodoPagamentoController } from 'presentation/controllers/update-metodo-pagamento-controller'
import { AutenticationAccessKeyValidator } from 'presentation/middlewares/authentication'
import { UpdateMetodoPagamentoValidator } from 'presentation/middlewares/validators/update-metodo-pagamento-validator'
import { getRouteRequestsLimiterByMinutes } from 'utils/limiter'

const router = express.Router()

const routeRequestsLimiter = getRouteRequestsLimiterByMinutes(6, 18)

router.get(
  '/paginado',
  AutenticationAccessKeyValidator.handle,
  GetMetodosPagamentoController.handle,
)

router.post(
  '/create',
  routeRequestsLimiter,
  AutenticationAccessKeyValidator.handle,
  CreateMetodoPagamentoController.handle,
)

router.put(
  '/update',
  routeRequestsLimiter,
  AutenticationAccessKeyValidator.handle,
  UpdateMetodoPagamentoValidator.handle,
  UpdateMetodoPagamentoController.handle,
)

export const metodoPagamentoRoutes = router
