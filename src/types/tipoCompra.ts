export type TipoCompra = {
// Dados de Entrega
    nomeCompleto: string;
    email: string;
    endereco: string;
    cidade: string;
    cep: string;

// Dados de Pagamento
    cartaoNome: string;
    cartaoNumero: string;
    cartaoValidade: string;
    cartaoCVC: string;
}