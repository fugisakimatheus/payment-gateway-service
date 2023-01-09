import { acessoRepository } from '../acesso-repository'

describe('Tests - Acesso Repository', () => {
  const sut = acessoRepository

  test('Deve retornar o primeiro acesso encontrado pela query baseado no id', async () => {
    const result = await sut.findFirst({ where: { id: 1 } })

    const acesso = {
      nome: 'Acesso 1',
      login: 'teste',
      status: 'ativado',
      arquivado: false,
    }

    expect(result).toMatchObject(acesso)
  })
})
