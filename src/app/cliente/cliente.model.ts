export interface Cliente{
    id_cliente?: number,
    nome: string,
    email: string,
    telefone: number,
    ddd: number,
    cpfCnpj: string,
    dataNascimento: string,
    sexo: string,
    cep: string,
    endereco: string,
    complemento: string,
    numero: number,
    bairro: string,
    carros:any[]     
}

export interface Carro{
    id_carro?: number,
    cor: string,
    marca: string,
    modelo: string,
    placa: string
}