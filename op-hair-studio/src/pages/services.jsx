import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Sparkles } from 'lucide-react'
import { services } from '../data/services'

export default function Services() {
  const categories = [...new Set(services.map((service) => service.category))]

  return (
    <>
      <section className="relative overflow-hidden bg-crown-black py-24 text-white md:py-32">
        <div className="absolute right-[-100px] top-[-100px] h-96 w-96 rounded-full bg-crown-gold/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-8">
          <p className="mb-4 text-xs font-bold tracking-[0.3em] text-crown-gold">
            OP HAIR STUDIO
          </p>

          <h1 className="font-heading text-5xl font-bold sm:text-6xl md:text-7xl">
            Our Services
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-neutral-400">
            Thoughtful hair care, precision cutting and beautiful styling
            designed around you.
          </p>
        </div>
      </section>

      <section className="bg-crown-cream py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">

          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-crown-gold-dark">
              SERVICE MENU
            </p>

            <h2 className="font-heading text-4xl font-bold text-crown-black sm:text-5xl">
              Find Your Perfect Service.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-neutral-600">
              Every appointment begins with a consultation so your service can
              be tailored to your hair, style and goals.
            </p>
          </div>

          <div className="space-y-16">
            {categories.map((category) => (
              <div key={category}>

                <div className="mb-7 flex items-center gap-5">
                  <Sparkles
                    size={20}
                    className="shrink-0 text-crown-gold-dark"
                  />

                  <h2 className="whitespace-nowrap font-heading text-2xl font-bold text-crown-black sm:text-3xl">
                    {category}
                  </h2>

                  <div className="h-px w-full bg-crown-gold/30" />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {services
                    .filter((service) => service.category === category)
                    .map((service) => (
                      <article
                        key={service.id}
                        className="group bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
                      >
                        <div className="flex items-start justify-between gap-5">

                          <div>
                            <h3 className="font-heading text-xl font-bold text-crown-black sm:text-2xl">
                              {service.name}
                            </h3>

                            <div className="mt-2 flex items-center gap-2 text-xs text-neutral-400">
                              <Clock size={14} />
                              {service.duration} minutes
                            </div>
                          </div>

                          <span className="shrink-0 font-heading text-xl font-bold text-crown-gold-dark sm:text-2xl">
                            R{service.price}
                          </span>

                        </div>

                        <p className="mt-5 leading-7 text-neutral-500">
                          {service.description}
                        </p>

                        <Link
                          to={`/booking?service=${service.id}`}
                          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-crown-gold-dark hover:gap-3"
                        >
                          Book This Service
                          <ArrowRight size={16} />
                        </Link>
                      </article>
                    ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">

          <p className="text-sm leading-7 text-neutral-500">
            Prices shown are starting prices and may vary depending on hair
            length, density and the service required. Your stylist will confirm
            the final price during your consultation.
          </p>

        </div>
      </section>

      <section className="bg-[#2b2321] py-16 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-5 text-center md:flex-row md:text-left lg:px-8">

          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.3em] text-crown-gold">
              FOUND YOUR SERVICE?
            </p>

            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Let&apos;s Create Your Look.
            </h2>
          </div>

          <Link
            to="/booking"
            className="inline-flex items-center gap-3 px-8 py-4 hover:-translate-y-1 font-bold text-crown-black bg-crown-gold hover:bg-crown-gold hover:text-white"
          >
            Book Appointment
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>
    </>
  )
}