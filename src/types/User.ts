export type TurnoValues = {
  id_turno: number
  nome_turno: string
}

export type VigilanteValues = {
  id_pessoa: number
  nome_pessoa: string
  email: string
  matricula: string
  turno: number
  senha?: string
}
