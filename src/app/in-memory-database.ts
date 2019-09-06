import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories = [
      { id: 1, nome: 'Moradia', description: 'Pagamentos de Contas da Casa'},
      { id: 2, nome: 'Saúde', description: 'Plano de Saúde e Remédios'},
      { id: 3, nome: 'Lazer', description: 'Cinema, parques, praia, etc'},
      { id: 4, nome: 'Salário ', description: 'Recebimento de Salário'},
      { id: 5, nome: 'Freelas', description: 'Trabalhos como freelancer'}
    ];

    return { categories };
  }

}