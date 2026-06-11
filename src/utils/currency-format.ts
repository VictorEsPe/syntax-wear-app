/**
 * Formata um valor numérico para o padrão de moeda brasileiro (BRL).
 * 
 * @param value - O valor numérico a ser formatado.
 * @returns Uma string formatada como moeda (ex: R$ 1.234,56).
 */
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};
