import express from 'express'
import { CreateAcessoController } from 'presentation/controllers/create-acesso-controller'
import { UpdateAcessoController } from 'presentation/controllers/update-acesso-controller'
import { AutenticationAccessKeyValidator } from 'presentation/middlewares/authentication'
import { CreateAcessoValidator } from 'presentation/middlewares/validators/create-acesso-validator'
import { UpdateAcessoValidator } from 'presentation/middlewares/validators/update-acesso-validator'
import { getRouteRequestsLimiterByMinutes } from 'utils/limiter'

const router = express.Router()

const routeRequestsLimiter = getRouteRequestsLimiterByMinutes(4, 10)

router.post(
  '/create',
  routeRequestsLimiter,
  AutenticationAccessKeyValidator.handle,
  CreateAcessoValidator.handle,
  CreateAcessoController.handle,
)

router.put(
  '/update',
  routeRequestsLimiter,
  AutenticationAccessKeyValidator.handle,
  UpdateAcessoValidator.handle,
  UpdateAcessoController.handle,
)

export const acessoRoutes = router
