import Image from 'next/image'

import Layout from '@/components/Layout'

export default function About() {
  return (
    <>
      <section className="bg-limeade py-6 md:py-10 px-4">
        <h1 className="text-3xl md:text-4xl text-white mb-4 text-center">
          About i-Care
        </h1>
        <p className="text-white text-center md:text-lg">
          Intelligent Clinical Assessment Rehabilitation and Enrinchment
          (i-Care)
        </p>
      </section>
      <div className="grid grid-cols-3 gap-1 md:gap-6 px-1 md:px-6 mt-4 md:mt-10">
        <div className="aspect-w-3 aspect-h-2">
          <Image
            src="/images/about-1.png"
            alt="Image 1"
            className="object-cover"
            layout="fill"
          />
        </div>
        <div className="aspect-w-3 aspect-h-2">
          <Image
            src="/images/about-2.png"
            alt="Image 2"
            className="object-cover"
            layout="fill"
          />
        </div>
        <div className="aspect-w-3 aspect-h-2">
          <Image
            src="/images/about-3.png"
            alt="Image 3"
            className="object-cover"
            layout="fill"
          />
        </div>
      </div>
      <div className="aspect-w-3 aspect-h-1 relative mt-4 md:mt-10">
        <Image
          src="/images/about-4.png"
          alt="Image 4"
          className="object-cover filter brightness-50"
          layout="fill"
        />
        <div className="max-w-7xl px-6 lg:px-0 mx-auto h-full flex items-center">
          <div>
            <h2 className="text-3xl md:text-5xl text-white font-bold mb-2">
              Our Mission
            </h2>
            <p className="max-w-xs text-white text-lg md:text-xl">
              Assist clinics & wellness centre to manage patient and clients to
              stay healthy
            </p>
          </div>
        </div>
      </div>
      <div className="aspect-w-3 aspect-h-1 relative mt-4 md:mt-10">
        <Image
          src="/images/about-5.png"
          alt="Image 5"
          className="object-cover filter brightness-50"
          layout="fill"
        />
        <div className="max-w-7xl px-6 md:px-0 mx-auto h-full flex items-center md:justify-end">
          <div>
            <h2 className="text-3xl md:text-5xl text-white font-bold mb-2">
              Our Vision
            </h2>
            <p className="max-w-xs text-white text-lg md:text-xl">
              When everyone say iCare for my life
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <Layout className="flex flex-col justify-between min-h-screen bg-white">
      {page}
    </Layout>
  )
}
