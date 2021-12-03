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
    promotion: false,
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
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
    promotion: false,
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
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
    promotion: false,
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
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
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 4,
    name: 'Classic Manicure',
    centerId: 2,
    centerName: 'Ana Salon & Spa',
    originalPrice: 698,
    bookingPrice: 10,
    price: 228,
    rating: 5,
    ratedBy: 122,
    location:
      '28 Jalan Eko Botani 3/2, Nusajaya (Taman Eko Botani), 79100, Johor',
    category: ['Beauty Salon'],
    promotion: true,
    image:
      'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 5,
    name: 'Gel Pedicure',
    centerId: 2,
    centerName: 'Ana Salon & Spa',
    originalPrice: 598,
    bookingPrice: 10,
    price: 128,
    rating: 5,
    ratedBy: 202,
    location:
      '28 Jalan Eko Botani 3/2, Nusajaya (Taman Eko Botani), 79100, Johor',
    category: ['Beauty Salon'],
    promotion: true,
    image:
      'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 6,
    name: '1-Hour full Body Massage',
    centerId: 2,
    centerName: 'Ana Salon & Spa',
    originalPrice: 998,
    bookingPrice: 10,
    price: 328,
    rating: 4,
    ratedBy: 73,
    location: 'Taman University (5km)',
    category: ['Spa'],
    promotion: true,
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
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
    image: '/images/centre-1.jpg',
  },
  {
    id: 2,
    name: 'Ana Salon & Spa',
    location:
      '28 Jalan Eko Botani 3/2, Nusajaya (Taman Eko Botani), 79100, Johor',
    facilities: ['wifi', 'parking'],
    category: ['Beauty Salon', 'Spa'],
    rating: 5,
    ratedBy: 885,
    image: '/images/centre-2.jpg',
  },
]

export type News = typeof news[0]

export const news = [
  {
    id: 1,
    title: 'Decrease stress',
    review:
      "Massage is an effective and beneficial treatment to decrease the feeling of stress. Stress is the body's way of responding to physical and emotional demands.",
    image: '/images/news-1.jpg',
    body: `
    <h2>When can massage be used to decrease stress?</h2>
    <p>Massage can be used to treat stress in any circumstance. Stress can be related to emotional or physical events in life, such as, work life, health or sporting performances. Massage can treat all types of stress. Massage can alleviate stress and increase mood by stimulating feel good hormones, stimulating the parasympathetic nervous system and promoting relaxation.</p>
    <h2>How does massage help to decrease stress?</h2>
    <p>Massage is an effective treatment to help decrease stress. Massage helps to decrease stress by lowering the heart rate, relaxing muscles and releasing endorphins.</p>
    <p>Massage helps to decrease stress by lowering the heart rate. Massage increases temperature in the body and promotes relaxation. When the body relaxes, heart rate is reduced. Stress levels are relieved and the feeling of calmness and relaxation increases.</p>
    <p>Massage reduces stress by relaxing muscles and soft tissues in the body. Massage relaxes muscles by increase temperature and blood circulation. An increase of temperature is stimulated by friction against the skin. Increased circulation delivers more blood to the muscles, removing waste products and relieving tension.</p>
    <p>Massage also helps decrease stress by releasing endorphins that calm the peripheral nervous system. The peripheral nervous system is part of the nervous system in the body. The function of the peripheral nervous system is the communication relay between the brain and extremities. Massage stimulates feel good hormones into the peripheral nervous system allowing message of calmness and relaxation to be relayed. When endorphins are released, stress related hormones are decreased therefore the feeling of stress is relieved.</p>
    <h2>What are the benefits of receiving a massage to decrease stress?</h2>
    <p>Massage to decrease stress has many benefits. The benefits of massage for decreased stress include:</p>
    <ul><li>Relaxation</li><li>Pain relief</li><li>Decreased anxiety and depression</li><li>Increased feeling of content and well being</li></ul><h2>Summary</h2><p>Massage helps to reduce and relieve the feeling of stress. Stress can be related to emotional or physical demands. Massage can be used at any time to relax the body. Massage is an effective treatment to decrease other emotions related to stress such as, anxiety and depression. Massage helps decrease stress by lowering the heart rate, promoting relaxation and releasing hormones. Massage therapists at Manchester Physio provide a wide range of massage therapy services to decrease stress</p>
    `,
  },
]
