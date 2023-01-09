import express from 'express'

import { acessoRoutes } from './acesso-routes'
import { metodoPagamentoRoutes } from './metodo-pagamento-routes'
import { pedidoRoutes } from './pedido-routes'

const router = express.Router()

router.use('/acesso', acessoRoutes)
router.use('/pedido', pedidoRoutes)
router.use('/metodo-pagamento', metodoPagamentoRoutes)

export default router
