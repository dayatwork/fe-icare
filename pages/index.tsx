import Image from 'next/image'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import { CheckIcon } from '@heroicons/react/outline'
import { Carousel } from 'react-responsive-carousel'
import MultiCarousel from 'react-multi-carousel'
import { StarIcon } from '@heroicons/react/solid'
import useSWR from 'swr'

import Layout from '@/components/Layout'
import { Service, News, news } from 'mock-data'
import { fetcher } from 'utils'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 40,
  },
}

const services = [
  {
    name: 'Spa',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, reiciendis.',
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=550&q=80',
  },
  {
    name: 'Hair Salon',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, reiciendis.',
    image:
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=550&q=80',
  },
  {
    name: 'Barbershop',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, reiciendis.',
    image:
      'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=550&q=80',
  },
  {
    name: 'Beauty Salon',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, reiciendis.',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=550&q=80',
  },
  {
    name: 'Nail Salon',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, reiciendis.',
    image:
      'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=550&q=80',
  },
  {
    name: 'Massage',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, reiciendis.',
    image:
      'https://images.unsplash.com/photo-1542848284-8afa78a08ccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=550&q=80',
  },
  {
    name: 'Theraphy Centre',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, reiciendis.',
    image:
      'https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=550&q=80',
  },
  {
    name: 'Gym & Fitness',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, reiciendis.',
    image:
      'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=550&q=80',
  },
  {
    name: 'Clinic',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, reiciendis.',
    image:
      'https://images.unsplash.com/photo-1589279003513-467d320f47eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=550&q=80',
  },
  {
    name: 'Hospital',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, reiciendis.',
    image:
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=550&q=80',
  },
]

export default function Home() {
  const { data } = useSWR<Service[]>(() => `/api/services`, fetcher)
  const { data: dataNews } = useSWR<News[]>(() => `/api/news`, fetcher)

  const promotionServices = data?.filter((service) => service.promotion)

  console.log({ dataNews })

  return (
    <>
      {/* Hero */}
      <section>
        <h2 className="sr-only">Hero</h2>
        <Carousel
          showThumbs={false}
          useKeyboardArrows={true}
          showArrows={false}
          showStatus={false}
        >
          <div className="h-96 tablet:h-[60vh]">
            <Image
              src="/images/hero-1.jpg"
              className="overflow-hidden object-cover filter brightness-75"
              layout="fill"
              alt="hero image"
            />
            <div className="mx-auto max-w-7xl w-full flex justify-center px-2">
              <div className="absolute top-1/2 -translate-y-1/2">
                <div>
                  <div
                    className="text-2xl tablet:text-4xl desktop:text-5xl tablet:leading-[80px] drop-shadow-xl text-white font-bold text-center uppercase font-serif"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0, 0.5)' }}
                  >
                    Get One on One Help
                  </div>
                  <div
                    className="mt-2 tablet:mt-4 mb-1 text-sm sm:text-md tablet:text-2xl drop-shadow-xl text-white flex items-center justify-center px-2 sm:px-0"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0, 0.5)' }}
                  >
                    from a certified counsellors
                  </div>
                  <button className="mt-4 px-4 py-2 border-2 border-white rounded-full text-white hover:bg-white hover:bg-opacity-80 hover:text-gray-800 transition">
                    Find out more
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="h-96 tablet:h-[60vh]">
            <Image
              src="/images/hero-1.jpg"
              className="overflow-hidden object-cover filter brightness-75"
              layout="fill"
              alt="hero image"
            />
            <div className="mx-auto max-w-7xl w-full flex justify-center px-2">
              <div className="absolute top-1/2 -translate-y-1/2">
                <div>
                  <div
                    className="text-2xl tablet:text-4xl desktop:text-5xl tablet:leading-[80px] drop-shadow-xl text-white font-bold text-center uppercase font-serif"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0, 0.5)' }}
                  >
                    Get One on One Help
                  </div>
                  <div
                    className="mt-2 tablet:mt-4 mb-1 text-sm sm:text-md tablet:text-2xl drop-shadow-xl text-white flex items-center justify-center px-2 sm:px-0"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0, 0.5)' }}
                  >
                    from a certified counsellors
                  </div>
                  <button className="mt-4 px-4 py-2 border-2 border-white rounded-full text-white hover:bg-white hover:bg-opacity-80 hover:text-gray-800 transition">
                    Find out more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </section>

      {/* Advertisement */}
      <section className="bg-white py-6 tablet:py-10 desktop:py-16">
        <h2 className="sr-only">Advertisement</h2>
        <Carousel
          showThumbs={false}
          useKeyboardArrows={true}
          showArrows={false}
          showStatus={false}
          className="max-w-7xl mx-auto"
        >
          <div className="aspect-w-3 aspect-h-1">
            <Image
              src="/images/advertisement.png"
              className="overflow-hidden object-contain"
              layout="fill"
              alt="advertisement"
            />
          </div>

          <div className="aspect-w-3 aspect-h-1">
            <Image
              src="/images/advertisement.png"
              className="overflow-hidden object-contain"
              layout="fill"
              alt="advertisement"
            />
          </div>
        </Carousel>
      </section>

      {/* Promotions */}
      <section className="max-w-7xl mx-auto px-4 py-6 tablet:py-10 desktop:py-16">
        <h2 className="text-2xl font-semibold mb-6">Promotions</h2>
        {/* <div className="grid grid-cols-4 gap-6"> */}
        {promotionServices?.length ? (
          <MultiCarousel responsive={responsive}>
            {promotionServices?.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </MultiCarousel>
        ) : null}

        {/* </div> */}
      </section>

      {/* Good News */}
      <section className="max-w-7xl mx-auto px-4 py-6 tablet:py-10 desktop:py-16">
        <h2 className="text-2xl font-semibold mb-6">Good News</h2>
        {news.length ? (
          <MultiCarousel responsive={responsive}>
            {news.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </MultiCarousel>
        ) : null}
      </section>

      {/* Services */}
      <section className="bg-white py-6 tablet:py-10 desktop:py-16">
        <h2 className="max-w-7xl mx-auto px-4 text-2xl font-semibold mb-6">
          Services Available
        </h2>
        <MultiCarousel responsive={responsive}>
          {services?.map((service) => (
            <Link
              href={`/services?category=${service.name}`}
              key={service.name}
            >
              <a className="block shadow-md bg-white relative m-2 lg:m-6">
                <div className="aspect-w-2 aspect-h-3">
                  <Image
                    src={service.image}
                    alt="promotion 1"
                    layout="fill"
                    className="object-cover filter brightness-75 hover:brightness-50 transition"
                  />
                </div>
                <div className="absolute bottom-0 p-4 lg:p-6 text-white">
                  <h3
                    className="mt-2 font-semibold text-md lg:text-3xl text-white"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0, 0.5)' }}
                  >
                    {service.name}
                  </h3>

                  <p
                    className="text-white mt-1 lg:mt-3 text-sm lg:text-lg"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0, 0.5)' }}
                  >
                    {service.text}
                  </p>
                </div>
              </a>
            </Link>
          ))}
        </MultiCarousel>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-6 tablet:py-10 desktop:py-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Why we are better?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-10">
          <div className="md:p-4 rounded-xl shadow-md bg-white mx-2">
            <div className="flex flex-col items-center space-y-4 md:space-y-8 p-6">
              <Image
                src="/images/feature-1.png"
                alt="promotion 1"
                width={100}
                height={100}
              />
              <div className="text-lg text-limeade font-bold max-w-[200px] text-center">
                Best new norm adaptability
              </div>
              <p className="text-center">
                We provides integrated hardware with software system for FREE
                covid-19 assessment to ensure safe environment for both customer
                and staff.
              </p>
            </div>
          </div>
          <div className="md:p-4 rounded-xl shadow-md bg-white mx-2">
            <div className="flex flex-col items-center space-y-4 md:space-y-8 p-6">
              <Image
                src="/images/feature-2.png"
                alt="promotion 1"
                width={100}
                height={100}
              />
              <div className="text-lg text-limeade font-bold max-w-[200px] text-center">
                User convenience & privacy
              </div>
              <p className="text-center">
                Attractive and user friendly UI/UX to excellent experience with
                user privacy protected.
              </p>
            </div>
          </div>
          <div className="md:p-4 rounded-xl shadow-md bg-white mx-2">
            <div className="flex flex-col items-center space-y-4 md:space-y-8 p-6">
              <Image
                src="/images/feature-3.png"
                alt="promotion 1"
                width={100}
                height={100}
              />
              <div className="text-lg text-limeade font-bold max-w-[200px] text-center">
                Ai guided mobile application
              </div>
              <p className="text-center">
                An automated or manual mobile apps using option. Automated
                option ease the user experience in mobile apps where all class
                of people can use it without any prior experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-limeade py-6 tablet:py-10 desktop:py-16">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between space-x-6">
          <p className="text-lg lg:text-3xl text-white max-w-4xl">
            If you are <span className="font-bold uppercase">care</span> and{' '}
            <span className="font-bold uppercase">serious</span> about your{' '}
            <span className="font-bold uppercase">health</span>, Book your
            Healthcare & Wellness services with us now!
          </p>
          <button className="text-lg lg:text-2xl px-4 lg:px-6 py-2 rounded-full border-2 border-white whitespace-nowrap text-white hover:bg-white hover:text-limeade font-bold transition">
            Book Now
          </button>
        </div>
      </section>

      <section className="bg-white py-6 tablet:py-10 desktop:py-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          How we are functioning
        </h2>
        <div className="max-w-5xl mx-auto px-6">
          <div className="aspect-w-3 aspect-h-2">
            <Image
              className="object-cover"
              layout="fill"
              src="/images/how-we-are-functioning.jpg"
              alt="How we are functioning"
            />
          </div>
        </div>
      </section>
      <section className="py-6 tablet:py-10 desktop:py-16 max-w-7xl mx-auto px-10">
        <h2 className="text-2xl font-semibold mb-4 lg:mb-8 text-limeade">
          Best South-East Asia Destination for Healthcare & Wellness
        </h2>
        <p className="max-w-5xl md:text-lg lg:text-xl">
          i-care brings you discounted offers on awesome wellness services
          experience in your city ??? all from a single, convenient mobile apps
          and website Browse through thousands of i-Care Deals and save up to
          80% at your favourite spas, salons, gyms, massage centre and more. Or
          pay your bills quickly and easily with e-wallet and get rewarded with
          up to 30% cashback.(T&C applied)
        </p>
      </section>
      <div className="aspect-w-3 aspect-h-1">
        <Image
          layout="fill"
          src="/images/yoga.jpg"
          alt="Yoga"
          className="object-cover"
        />
      </div>
      <section className="max-w-7xl mx-auto px-6 py-6 tablet:py-10 desktop:pt-24 desktop:pb-16">
        <div className="flex md:space-x-10">
          <div className="hidden md:block aspect-w-1 asect-h-6 w-1/3 h-[700px]">
            <Image
              layout="fill"
              src="/images/mobile-app.png"
              alt="Mobile App"
              className="object-contain"
            />
          </div>
          <div className="px-4 lg:p-10">
            <h2 className="text-2xl font-semibold mb-4 lg:mb-8 text-limeade">
              The only booking Platform that subscription-free
            </h2>
            <ul className="space-y-4">
              <li className="flex space-x-2 items-center">
                <CheckIcon className="w-6 h-6 text-limeade " />
                <p className="md:text-lg flex-1">
                  Free unlimited real-time scheduling
                </p>
              </li>
              <li className="flex space-x-2 items-center">
                <CheckIcon className="w-6 h-6 text-limeade " />
                <p className="md:text-lg flex-1">
                  Free multiple location management
                </p>
              </li>
              <li className="flex space-x-2 items-center">
                <CheckIcon className="w-6 h-6 text-limeade " />
                <p className="md:text-lg flex-1">
                  Free analytics and financial management
                </p>
              </li>
              <li className="flex space-x-2 items-center">
                <CheckIcon className="w-6 h-6 text-limeade " />
                <p className="md:text-lg flex-1">
                  Free staff management and salary payment
                </p>
              </li>
              <li className="flex space-x-2 items-center">
                <CheckIcon className="w-6 h-6 text-limeade " />
                <p className="md:text-lg flex-1">
                  Free in-app payment for user convenince
                </p>
              </li>
              <li className="flex space-x-2 items-center">
                <CheckIcon className="w-6 h-6 text-limeade " />
                <p className="md:text-lg flex-1">
                  Free customer management according to updated SOP by
                  government
                </p>
              </li>
              <li className="flex space-x-2 items-center">
                <CheckIcon className="w-6 h-6 text-limeade " />
                <p className="md:text-lg flex-1">
                  Free one simple solution to everything you need to run your
                  bussiness
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-white px-6 py-6 tablet:py-10 desktop:pt-24 desktop:pb-16">
        <div className="max-w-7xl mx-auto  flex space-x-10 items-center justify-between">
          <div className="p-4 lg:p-10">
            <h2 className="text-2xl font-semibold mb-4 lg:mb-8 text-limeade">
              Free IoT Temperature and Automated hand Sanitizer
            </h2>
            <p className="md:text-xl max-w-xl">
              An temperature scanner with automated hand sanitizer which is
              integrated with mobile apps for Covid-19 risk assessment given
              FREE for our business partners.
            </p>
          </div>
          <div className="hidden md:block aspect-w-1 asect-h-6 w-1/3 h-[700px]">
            <Image
              layout="fill"
              src="/images/hand-sanitizer.png"
              alt="Hand Sanitizer"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-6 tablet:py-10 desktop:py-16">
        <h2 className="text-2xl font-semibold mb-2 text-center">
          What our Customers says
        </h2>
        <p className="text-lg text-center mb-10">
          Hear what our <span className="font-bold">1028</span> satisfied
          customers says about our services
        </p>
        <Marquee
          className="gradien"
          speed={90}
          gradientColor={[229, 231, 235]}
          gradientWidth={70}
        >
          <div className="px-8 py-4 rounded-xl shadow-md bg-white mx-6 max-w-md">
            <div className="flex justify-end mb-4">
              <p className="block text-gray-500 text-sm">12 September 2021</p>
            </div>
            <div className="flex items-center space-x-8">
              <Image
                className="rounded-full object-cover"
                width={100}
                height={100}
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
                alt="photo"
              />
              <div>
                <p className="text-lg text-gray-700">Thomas Enderson</p>
                <p className="text-gray-500 mb-2">Celebrity</p>
                <div className="flex items-center -ml-1">
                  <StarIcon className="w-6 h-6 text-gold" />
                  <StarIcon className="w-6 h-6 text-gold" />
                  <StarIcon className="w-6 h-6 text-gold" />
                  <StarIcon className="w-6 h-6 text-gold" />
                  <StarIcon className="w-6 h-6 text-gold" />
                </div>
              </div>
            </div>
            <div className="bg-gray-100 h-[2px] w-full my-6"></div>
            <div>
              <h4 className="mt-2 font-semibold text-xl mb-2 text-limeade">
                Helps my business a lot!
              </h4>
              <p>{`???Provide best new norm solution to rebirth my business???`}</p>
            </div>
          </div>
          <div className="px-8 py-4 rounded-xl shadow-md bg-white mx-6 max-w-md">
            <div className="flex justify-end mb-4">
              <p className="block text-gray-500 text-sm">12 September 2021</p>
            </div>
            <div className="flex items-center space-x-8">
              <Image
                className="rounded-full object-cover"
                width={100}
                height={100}
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
                alt="photo"
              />
              <div>
                <p className="text-lg text-gray-700">Thomas Enderson</p>
                <p className="text-gray-500 mb-2">Celebrity</p>
                <div className="flex items-center -ml-1">
                  <StarIcon className="w-6 h-6 text-gold" />
                  <StarIcon className="w-6 h-6 text-gold" />
                  <StarIcon className="w-6 h-6 text-gold" />
                  <StarIcon className="w-6 h-6 text-gold" />
                  <StarIcon className="w-6 h-6 text-gold" />
                </div>
              </div>
            </div>
            <div className="bg-gray-100 h-[2px] w-full my-6"></div>
            <div>
              <h4 className="mt-2 font-semibold text-xl mb-2 text-limeade">
                Simple and Easy
              </h4>
              <p>{`???Provide best new norm solution to rebirth my business???`}</p>
            </div>
          </div>
          <div className="px-8 py-4 rounded-xl shadow-md bg-white mx-6 max-w-md">
            <div className="flex justify-end mb-4">
              <p className="block text-gray-500 text-sm">12 September 2021</p>
            </div>
            <div className="flex items-center space-x-8">
              <Image
                className="rounded-full object-cover"
                width={100}
                height={100}
                src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
                alt="photo"
              />
              <div>
                <p className="text-lg text-gray-700">Thomas Enderson</p>
                <p className="text-gray-500 mb-2">Celebrity</p>
                <div className="flex items-center -ml-1">
                  <StarIcon className="w-6 h-6 text-gold" />
                  <StarIcon className="w-6 h-6 text-gold" />
                  <StarIcon className="w-6 h-6 text-gold" />
                  <StarIcon className="w-6 h-6 text-gold" />
                  <StarIcon className="w-6 h-6 text-gold" />
                </div>
              </div>
            </div>
            <div className="bg-gray-100 h-[2px] w-full my-6"></div>
            <div>
              <h4 className="mt-2 font-semibold text-xl mb-2 text-limeade">
                Helps my business a lot!
              </h4>
              <p>{`???Provide best new norm solution to rebirth my business???
`}</p>
            </div>
          </div>
          <div className="px-8 py-4 rounded-xl shadow-md bg-white mx-6 max-w-md">
            <div className="flex justify-end mb-4">
              <p className="block text-gray-500 text-sm">12 September 2021</p>
            </div>
            <div className="flex items-center space-x-8">
              <Image
                className="rounded-full object-cover"
                width={100}
                height={100}
                src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
                alt="photo"
              />
              <div>
                <p className="text-lg text-gray-700">Thomas Enderson</p>
                <p className="text-gray-500 mb-2">Celebrity</p>
                <div className="flex items-center -ml-1">
                  <StarIcon className="w-6 h-6 text-gold" />
                  <StarIcon className="w-6 h-6 text-gold" />
                  <StarIcon className="w-6 h-6 text-gold" />
                  <StarIcon className="w-6 h-6 text-gold" />
                  <StarIcon className="w-6 h-6 text-gold" />
                </div>
              </div>
            </div>
            <div className="bg-gray-100 h-[2px] w-full my-6"></div>
            <div>
              <h4 className="mt-2 font-semibold text-xl mb-2 text-limeade">
                Simple and Easy
              </h4>
              <p>{`???Provide best new norm solution to rebirth my business???
`}</p>
            </div>
          </div>
        </Marquee>
      </section>
    </>
  )
}

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <Link href={`/services/${service.id}`}>
      <a className="block p-4 rounded-xl shadow-md bg-white mx-2">
        {/* Rating */}
        <div className="flex justify-end mb-3">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {Array.from({ length: service?.rating }, (_, i) => i + 1).map(
                (i) => (
                  <StarIcon key={i} className="w-4 h-4 text-gold" />
                )
              )}
            </div>
            <p className="text-sm">{service?.ratedBy} Rated</p>
          </div>
        </div>
        <div className="aspect-w-3 aspect-h-2">
          <Image
            src={service?.image}
            alt="promotion 1"
            layout="fill"
            // className="object-cover"
          />
        </div>
        <h3 className="mt-2 font-semibold text-lg">{service.name}</h3>
        <p className="space-x-2 mt-6">
          <span className="text-lg text-gray-500 line-through">
            RM{service.originalPrice}
          </span>
          <span className="text-lg text-limeade font-semibold">
            RM{service.price}
          </span>
        </p>
        <p className="text-xs text-gray-600 mt-3">{service.location}</p>
      </a>
    </Link>
  )
}

const NewsCard = ({ news }: { news: News }) => {
  return (
    <Link href={`/news/${news.id}`}>
      <a className="block p-4 rounded-xl shadow-md bg-white mx-2">
        <div className="aspect-w-3 aspect-h-2">
          <Image src={news.image} alt="promotion 1" layout="fill" />
        </div>
        <h3 className="mt-2 font-semibold text-lg">{news.title}</h3>

        <p className="text-xs text-gray-600 mt-3">{news.review}</p>
      </a>
    </Link>
  )
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>
}
