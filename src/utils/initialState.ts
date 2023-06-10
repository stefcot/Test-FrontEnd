const INITIAL_STATE = {
  app: {
    nfts: [
      {
        id: '1',
        name: 'Origins Sculpture',
        totalMinted: 8,
        price: '2.78',
        like: 195,
        forSale: 3,
        timeLeft: '22 hours',
        isHot: true,
        sellerId: 4321,
        image: '/images/ntfs/sothebys-com.brightspotcdn.jpg',
      },
      {
        id: '2',
        name: 'The Dark Corner Sculpture',
        totalMinted: 5,
        price: '2.93',
        like: 240,
        forSale: 4,
        timeLeft: '16 hours',
        isHot: false,
        sellerId: 9983,
        image: '/images/ntfs/The-Dark-Corner-Sculpture.jpg',
      },
      {
        id: '3',
        name: 'Secret Door',
        totalMinted: 3,
        price: '4.10',
        like: 89,
        forSale: 4,
        timeLeft: '22 hours',
        isHot: true,
        sellerId: 2343,
        image: '/images/ntfs/Jeff-Koons-Play-Doh.jpg',
      },
      {
        id: '4',
        name: 'Ceres Searching',
        totalMinted: 2,
        price: '10.89',
        like: 400,
        forSale: 1,
        timeLeft: '2 days',
        isHot: true,
        sellerId: 2323,
        image: '/images/ntfs/Ceres-Searching.jpg',
      },
      {
        id: '5',
        name: 'Modird Goal',
        totalMinted: 2,
        price: '1.89',
        like: 234,
        forSale: 4,
        timeLeft: '2 days',
        isHot: true,
        sellerId: 9983,
        image:
          '/images/ntfs/sculpture-fleur-d-avril-nature-vegetal-flower-plant-medium-open.jpg',
      },
      {
        id: '6',
        name: 'Ceres Searching',
        totalMinted: 2,
        price: '10.89',
        like: 400,
        forSale: 1,
        timeLeft: '2 days',
        isHot: true,
        sellerId: 2323,
        image: '/images/ntfs/Contemporary-Sculptures-For-The-Home.jpg',
      },
      {
        id: '7',
        name: 'Moroze',
        totalMinted: 10,
        price: '10.89',
        like: 100,
        forSale: 1,
        timeLeft: '1 days',
        isHot: true,
        sellerId: 4982,
        image: '/images/ntfs/tableau-peinture-rico-sab.jpg',
      },
      {
        id: '8',
        name: 'Pickchu',
        totalMinted: 5,
        price: '10.89',
        like: 9,
        forSale: 43,
        timeLeft: '1 days',
        isHot: true,
        sellerId: 4984,
        image: '/images/ntfs/glamor-red-lips-contemporary-art-print.jpg',
      },
    ],
    bestSellers: [
      {
        name: 'Richard Noga',
        id: 2323,
        isVerified: false,
        avatar: '/images/bestSellers/Richard-Noga.jpg',
      },
      {
        name: 'Pingu',
        id: 2343,
        isVerified: true,
        avatar: '/images/bestSellers/Pingu.jpg',
      },
      {
        name: 'DoggieBoy',
        id: 4321,
        isVerified: false,
        avatar: '/images/bestSellers/DoggieBoy.jpg',
      },
      {
        name: 'Julian Co',
        id: 4984,
        isVerified: false,
        avatar: '/images/bestSellers/JulianCo.jpg',
      },
      {
        name: 'Camillo Ferrari',
        id: 9983,
        isVerified: false,
        avatar: '/images/bestSellers/CamilloFerrari.jpg',
      },
      {
        name: 'Ausonia_loi',
        id: 3421,
        isVerified: false,
        avatar: '/images/bestSellers/Ausonia_loi.jpg',
      },
      {
        name: 'Tito',
        id: 4982,
        isVerified: false,
        avatar: '/images/bestSellers/Tito.jpg',
      },
    ],
  },
}

export default INITIAL_STATE
