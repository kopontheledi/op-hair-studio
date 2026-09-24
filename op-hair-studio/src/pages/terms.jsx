import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Terms() {
  return (
    <>
      <section className="bg-crown-black py-20 text-white md:py-24">

        <div className="mx-auto max-w-5xl px-5 lg:px-8">

          <p className="mb-4 text-xs font-bold tracking-[0.3em] text-crown-gold">
            THE OP HAIR STUDIO
          </p>

          <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">
            Terms & Conditions
          </h1>

          <p className="mt-5 text-sm text-neutral-400">
            Last updated: September 2026
          </p>

        </div>

      </section>

      <section className="bg-crown-cream py-16 md:py-24">

        <div className="mx-auto max-w-4xl px-5 lg:px-8">

          <div className="bg-white p-7 shadow-sm sm:p-10 md:p-14">

            <p className="leading-8 text-neutral-600">
              By booking an appointment with The OP Hair Studio, you agree to
              the following terms and conditions. These policies help us
              provide a fair and reliable experience for every client.
            </p>

            <div className="mt-10 space-y-10">

              <section>
                <h2 className="font-heading text-2xl font-bold text-crown-black">
                  1. Appointments
                </h2>

                <p className="mt-4 leading-8 text-neutral-600">
                  Appointments are subject to availability. Please ensure that
                  the service, stylist, date and time selected during booking
                  are correct before confirming your appointment.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-crown-black">
                  2. Arrival
                </h2>

                <p className="mt-4 leading-8 text-neutral-600">
                  Clients are encouraged to arrive approximately 10 minutes
                  before their scheduled appointment. Late arrival may reduce
                  the time available for your service.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-crown-black">
                  3. Cancellations
                </h2>

                <p className="mt-4 leading-8 text-neutral-600">
                  If you are unable to attend your appointment, please contact
                  the studio as early as possible so the appointment time can
                  be made available to another client.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-crown-black">
                  4. Pricing
                </h2>

                <p className="mt-4 leading-8 text-neutral-600">
                  Prices displayed on the website are starting prices. Final
                  pricing may vary depending on hair length, density, product
                  usage and the complexity of the requested service.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-crown-black">
                  5. Colour Services
                </h2>

                <p className="mt-4 leading-8 text-neutral-600">
                  Certain colour services may require a consultation or patch
                  test before the appointment. Your stylist may recommend an
                  alternative service where necessary to protect the condition
                  of your hair.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-crown-black">
                  6. Personal Information
                </h2>

                <p className="mt-4 leading-8 text-neutral-600">
                  Information provided when contacting or booking with the
                  studio is used only for appointment and customer service
                  purposes.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-bold text-crown-black">
                  7. Contact
                </h2>

                <p className="mt-4 leading-8 text-neutral-600">
                  Questions regarding appointments or these terms can be sent
                  to hello@theophairstudio.co.za.
                </p>
              </section>

            </div>

            <div className="mt-12 border-t border-neutral-200 pt-8">

              <Link
                to="/"
                className="inline-flex items-center gap-2 font-bold text-crown-gold-dark hover:gap-3"
              >
                <ArrowLeft size={17} />
                Back To Home
              </Link>

            </div>

          </div>

        </div>

      </section>
    </>
  )
}