export type Service = typeof services[0]

export const services = [
  {
    id: 100,
    name: '30-Minutes full Body Massage Yeo Beuty & Spa',
    centerId: 1,
    centerName: 'Vidiana Spa',
    originalPrice: 468,
    bookingPrice: 10,
    price: 208,
    rating: 4,
    ratedBy: 226,
    location: 'Taman University (5km)',
    category: ['Spa'],
    promotion: true,
  },
  {
    id: 1,
    name: '1-Hour full Body Massage Yeo Beuty & Spa',
    centerId: 1,
    centerName: 'Vidiana Spa',
    originalPrice: 868,
    bookingPrice: 10,
    price: 268,
    rating: 4,
    ratedBy: 116,
    location: 'Taman University (5km)',
    category: ['Spa'],
    promotion: true,
  },
  {
    id: 2,
    name: '2-Hour full Body Massage',
    centerId: 1,
    centerName: 'Vidiana Spa',
    originalPrice: 968,
    bookingPrice: 10,
    price: 368,
    rating: 4,
    ratedBy: 79,
    location: 'Taman University (5km)',
    category: ['Spa'],
    promotion: true,
  },
  {
    id: 3,
    name: '3-Hour full Body Massage',
    centerId: 1,
    centerName: 'Vidiana Spa',
    originalPrice: 998,
    bookingPrice: 10,
    price: 328,
    rating: 4,
    ratedBy: 56,
    location: 'Taman University (5km)',
    category: ['Spa'],
    promotion: true,
  },
  {
    id: 4,
    name: 'Classic Manicure',
    centerId: 2,
    centerName: 'Fresha',
    originalPrice: 698,
    bookingPrice: 10,
    price: 228,
    rating: 5,
    ratedBy: 122,
    location:
      '28 Jalan Eko Botani 3/2, Nusajaya (Taman Eko Botani), 79100, Johor',
    category: ['Beauty Salon'],
    promotion: false,
  },
  {
    id: 5,
    name: 'Gel Pedicure',
    centerId: 2,
    centerName: 'Fresha',
    originalPrice: 598,
    bookingPrice: 10,
    price: 128,
    rating: 5,
    ratedBy: 202,
    location:
      '28 Jalan Eko Botani 3/2, Nusajaya (Taman Eko Botani), 79100, Johor',
    category: ['Beauty Salon'],
    promotion: false,
  },
  {
    id: 6,
    name: '1-Hour full Body Massage',
    centerId: 2,
    centerName: 'Fresha',
    originalPrice: 998,
    bookingPrice: 10,
    price: 328,
    rating: 4,
    ratedBy: 73,
    location: 'Taman University (5km)',
    category: ['Spa'],
    promotion: false,
  },
]

export type Centre = typeof centres[0]

export const centres = [
  {
    id: 1,
    name: 'Vidiana Spa',
    location: 'Taman University (5km)',
    facilities: ['wifi', 'parking', 'wheelchair-access', 'elevator'],
    category: ['Spa'],
    rating: 4,
    ratedBy: 573,
  },
  {
    id: 2,
    name: 'Fresha',
    location:
      '28 Jalan Eko Botani 3/2, Nusajaya (Taman Eko Botani), 79100, Johor',
    facilities: ['wifi', 'parking'],
    category: ['Beauty Salon', 'Spa'],
    rating: 5,
    ratedBy: 885,
  },
]
