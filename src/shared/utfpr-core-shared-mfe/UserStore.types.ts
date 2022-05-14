export interface Person {
  id_pessoa: number
  tipo_usuario: number
  nome_pessoa: string
  email: string
  codigo_barra: string
}

export interface UserGeneric {
  id_pessoa: string
  matricula: string
  id_deseg?: string
  id_departamento?: number
}

export interface UserState {
  token: string
  pessoa?: Person
  deseg?: UserGeneric
  professor?: UserGeneric
  vigilante?: UserGeneric
}

export interface UserStoreResponse extends UserState {
  getRegistrationNumber: () => string
  updateUser: (data: UserState) => void
  resetUser: () => void
}

export type UserStoreType = () => UserStoreResponse
