export const elections = [
  {
    name: 'ELEIÇÃO MUNICIPAL',
    description: 'Prefeito/Vice e Vereador',
    status: 'closed',
    subElections: [
      {
        name: 'Prefeito',
        startDate: new Date().toLocaleDateString('pt-BR', { dateStyle: 'long' }),
        endDate: new Date().toLocaleDateString('pt-BR', { dateStyle: 'long' }),
        candidates: [
          {
            number: 3,
            name: 'Rubens Magro',
            group: 'PPEA Partido Partiu Estado Amapá',
            img: 'https://images.pexels.com/photos/5262378/pexels-photo-5262378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          },
          {
            number: 4,
            name: 'Márcia Marciel Matias',
            group: 'PJG Partido de Jogadores de Golf',
            img: 'https://images.pexels.com/photos/10057623/pexels-photo-10057623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          }
        ]
      },
      {
        name: 'Vereador',
        startDate: new Date().toLocaleDateString('pt-BR', { dateStyle: 'long' }),
        endDate: new Date().toLocaleDateString('pt-BR', { dateStyle: 'long' }),
        candidates: [
          {
            number: 3,
            name: 'Rubens Magro',
            group: 'PPEA Partido Partiu Estado Amapá',
            img: 'https://images.pexels.com/photos/9481527/pexels-photo-9481527.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          },
          {
            number: 4,
            name: 'Márcia Marciel Matias',
            group: 'PJG Partido de Jogadores de Golf',
            img: 'https://images.pexels.com/photos/9716799/pexels-photo-9716799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          }
        ]
      }
    ]
  },
  {
    name: 'ELEIÇÃO ESTADUAL',
    description: 'Governador, Deputado Estadual e Senador',
    status: 'open',
    subElections: [
      {
        name: 'Governador',
        startDate: new Date().toLocaleDateString('pt-BR', { dateStyle: 'long' }),
        endDate: new Date().toLocaleDateString('pt-BR', { dateStyle: 'long' }),
        candidates: [
          {
            number: 3,
            name: 'Rubens Magro',
            group: 'PPEA Partido Partiu Estado Amapá',
            img: 'https://images.pexels.com/photos/9481527/pexels-photo-9481527.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          },
          {
            number: 4,
            name: 'Márcia Marciel Matias',
            group: 'PJG Partido de Jogadores de Golf',
            img: 'https://images.pexels.com/photos/9716799/pexels-photo-9716799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          }
        ]
      },
      {
        name: 'Deputado Estadual',
        startDate: new Date().toLocaleDateString('pt-BR', { dateStyle: 'long' }),
        endDate: new Date().toLocaleDateString('pt-BR', { dateStyle: 'long' }),
        candidates: [
          {
            number: 3,
            name: 'Regina Magro',
            group: 'PPEA Partido Partiu Estado Amapá',
            img: 'https://images.pexels.com/photos/10057623/pexels-photo-10057623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          },
          {
            number: 4,
            name: 'Márcia Marciel Matias',
            group: 'PJG Partido de Jogadores de Golf',
            img: 'https://images.pexels.com/photos/9716799/pexels-photo-9716799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          }
        ]
      },
      {
        name: 'Senador',
        startDate: new Date().toLocaleDateString('pt-BR', { dateStyle: 'long' }),
        endDate: new Date().toLocaleDateString('pt-BR', { dateStyle: 'long' }),
        candidates: [
          {
            number: 3,
            name: 'Regina Magro',
            group: 'PPEA Partido Partiu Estado Amapá',
            img: 'https://images.pexels.com/photos/10057623/pexels-photo-10057623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          },
          {
            number: 4,
            name: 'Márcia Marciel Matias',
            group: 'PJG Partido de Jogadores de Golf',
            img: 'https://images.pexels.com/photos/9716799/pexels-photo-9716799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          }
        ]
      }
    ]
  },
  {
    name: 'ELEIÇÃO FEDERAL',
    description: 'Presidente/Vice e Deputado Federal',
    status: 'open',
    subElections: [
      {
        name: 'Presidente',
        startDate: new Date().toLocaleDateString('pt-BR', { dateStyle: 'long' }),
        endDate: new Date().toLocaleDateString('pt-BR', { dateStyle: 'long' }),
        candidates: [
          {
            number: 3,
            name: 'Rubens Magro',
            group: 'PPEA Partido Partiu Estado Amapá',
            img: 'https://images.pexels.com/photos/5262378/pexels-photo-5262378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          },
          {
            number: 4,
            name: 'Márcia Marciel Matias',
            group: 'PJG Partido de Jogadores de Golf',
            img: 'https://images.pexels.com/photos/9716799/pexels-photo-9716799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          }
        ]
      },
      {
        name: 'Deputado Federal',
        startDate: new Date().toLocaleDateString('pt-BR', { dateStyle: 'long' }),
        endDate: new Date().toLocaleDateString('pt-BR', { dateStyle: 'long' }),
        candidates: [
          {
            number: 3,
            name: 'Rubens Magro',
            group: 'PPEA Partido Partiu Estado Amapá',
            img: 'https://images.pexels.com/photos/9481527/pexels-photo-9481527.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          },
          {
            number: 4,
            name: 'Márcia Marciel Matias',
            group: 'PJG Partido de Jogadores de Golf',
            img: 'https://images.pexels.com/photos/10057623/pexels-photo-10057623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          }
        ]
      }
    ]
  }
]