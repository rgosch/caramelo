const dictionary = {
  cepInputPlaceholder: 'Digite o CEP',
  cepButton: 'Buscar',
  cep: 'CEP',
  state: 'Estado',
  city: 'Cidade',
  addressLine: 'Logradouro',
  errorMask: 'O CEP informado não é válido.',
  errorRequest: 'Não foi possível fazer uma busca com o CEP informado.',
};

export function text(key) {
  return dictionary[key];
}

export default text;
