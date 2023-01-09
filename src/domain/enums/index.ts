export enum EntityStatus {
  ATIVADO = 'ativado',
  DESATIVADO = 'desativado',
}

export enum PedidoStatus {
  AGUARDANDO_PAGAMENTO = 'aguardando_pagamento',
  FINALIZADO = 'finalizado',
  CANCELADO = 'cancelado',
  ESTORNADO = 'estornado',
}

export enum TipoPagamento {
  PIX = 'pix',
  CREDITO = 'credito',
  DEBITO = 'debito',
}

export enum HttpStatus {
  OK = 200,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL = 500,
}
