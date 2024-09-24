import { faker } from '@faker-js/faker';

export const generateData = {
  getNome: () => faker.person.fullName(), // Gera um nome fictício
  getNumeroWhatsApp: () => {
    // Gera um DDD aleatório entre 11 e 99
    const ddd = Math.floor(Math.random() * (99 - 11 + 1)) + 11;
    const numero = faker.phone.number("9#########"); // Gera um número de telefone
    return `(${ddd}) ${numero.slice(0, 5)}-${numero.slice(5)}`; // Formata o número no padrão (XX) XXXXX-XXXX
  },
};
export const generateAddress = () => {
  return {
    rua: faker.location.street(), // Gera um nome de rua
    numero:faker.number.int({ min: 1, max: 999 }), // Gera um número aleatório entre 1 e 999
    complemento: faker.location.secondaryAddress(), // Gera um complemento aleatório
    pontoDeReferencia: faker.location.secondaryAddress(), // Gera um ponto de referência
  };
};
