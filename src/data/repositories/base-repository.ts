export type Delegate = {
  create: (input: any) => any
  update: (input: any) => any
  delete: (input: any) => any
  findMany: (input: any) => any
  findFirst: (input: any) => any
  count: (input: any) => any
}

export abstract class BaseRepository<
  Entity,
  Repository extends Delegate,
  Create,
  Update,
  FindMany,
  FindFirst,
  Count,
> {
  constructor(protected readonly repository: Repository) {
    this.repository = repository
  }

  async create(data: Create): Promise<Entity> {
    const result = await this.repository.create({ data })
    return result
  }

  async update(id: number, data: Update): Promise<Entity> {
    const result = await this.repository.update({ where: { id }, data })
    return result
  }

  async delete(id: number): Promise<number> {
    const result = await this.repository.delete({ where: { id } })
    return result.id
  }

  async findMany(query?: FindMany): Promise<Entity[]> {
    const results = await this.repository.findMany(query)
    return results
  }

  async findFirst(query?: FindFirst): Promise<Entity | null> {
    const result = await this.repository.findFirst(query)
    return result
  }

  async count(query?: Count): Promise<number> {
    const count = await this.repository.count(query)
    return count
  }

  async existsOne(id: number): Promise<boolean> {
    const result = await this.repository.findFirst({ where: { id } })
    return !!result
  }

  async existsMany(ids: number[]): Promise<boolean> {
    const result = await this.repository.findMany({
      where: { id: { in: ids } },
    })
    return result.length === ids.length
  }
}
