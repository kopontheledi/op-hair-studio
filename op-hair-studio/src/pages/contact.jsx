import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  CalendarDays,
} from 'lucide-react'

export default function Contact() {
  return (
    <>
      <section className="bg-crown-black py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">

          <p className="mb-4 text-xs font-bold tracking-[0.3em] text-crown-gold">
            GET IN TOUCH
          </p>

          <h1 className="font-heading text-5xl font-bold sm:text-6xl md:text-7xl">
            We&apos;d Love To
            <br />
            Hear From You.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-neutral-400">
            Have a question about a service or your appointment?
            Get in touch with The OP Hair Studio.
          </p>

        </div>
      </section>
      <section className="bg-crown-cream py-20 md:py-28">

        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">

          <div>

            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-crown-gold-dark">
              VISIT THE STUDIO
            </p>

            <h2 className="font-heading text-4xl font-bold text-crown-black sm:text-5xl">
              Come Say Hello.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-neutral-600">
              Whether you&apos;re ready for a new look or simply have a
              question before booking, our team is happy to help.
            </p>

            <div className="mt-10 space-y-7">

              <div className="flex gap-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#f1ddd5] text-crown-gold-dark">
                  <MapPin size={21} />
                </div>

                <div>
                  <h3 className="font-heading text-lg font-bold text-crown-black">
                    Location
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-neutral-500">
                    Sandton
                    <br />
                    Johannesburg, Gauteng
                  </p>
                </div>

              </div>

              <div className="flex gap-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#f1ddd5] text-crown-gold-dark">
                  <Phone size={21} />
                </div>

                <div>
                  <h3 className="font-heading text-lg font-bold text-crown-black">
                    Call Us
                  </h3>

                  <a
                    href="tel:+27115550147"
                    className="mt-1 block text-sm text-neutral-500 hover:text-crown-gold-dark"
                  >
                    011 555 0147
                  </a>
                </div>

              </div>

              <div className="flex gap-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#f1ddd5] text-crown-gold-dark">
                  <Mail size={21} />
                </div>

                <div>
                  <h3 className="font-heading text-lg font-bold text-crown-black">
                    Email
                  </h3>

                  <a
                    href="mailto:hello@theophairstudio.co.za"
                    className="mt-1 block text-sm text-neutral-500 hover:text-crown-gold-dark"
                  >
                    hello@theophairstudio.co.za
                  </a>
                </div>

              </div>

            </div>

          </div>

          <div className="bg-white p-7 shadow-sm sm:p-10">

            <div className="mb-8 flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center bg-crown-black text-crown-gold">
                <Clock3 size={21} />
              </div>

              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-crown-gold-dark">
                  OPENING HOURS
                </p>

                <h2 className="font-heading text-2xl font-bold text-crown-black">
                  When To Visit
                </h2>
              </div>

            </div>

            <div className="divide-y divide-neutral-200">

              <div className="flex justify-between gap-4 py-5">
                <span className="text-neutral-600">
                  Monday – Friday
                </span>

                <strong className="text-crown-black">
                  08:00 – 18:00
                </strong>
              </div>

              <div className="flex justify-between gap-4 py-5">
                <span className="text-neutral-600">
                  Saturday
                </span>

                <strong className="text-crown-black">
                  08:00 – 17:00
                </strong>
              </div>

              <div className="flex justify-between gap-4 py-5">
                <span className="text-neutral-600">
                  Sunday
                </span>

                <strong className="text-neutral-400">
                  Closed
                </strong>
              </div>

            </div>

            <div className="mt-8 bg-[#f7eee9] p-6">

              <CalendarDays
                size={24}
                className="text-crown-gold-dark"
              />

              <h3 className="mt-4 font-heading text-xl font-bold text-crown-black">
                Ready To Book?
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                Choose your service, preferred stylist and appointment time
                online.
              </p>

              <Link
                to="/booking"
                className="mt-5 inline-flex items-center gap-2 font-bold text-crown-gold-dark hover:gap-3"
              >
                Book Appointment
                <ArrowRight size={17} />
              </Link>

            </div>

          </div>

        </div>

      </section>

      <section className="bg-white py-20 md:py-28">

        <div className="mx-auto max-w-4xl px-5 lg:px-8">

          <div className="mb-12 text-center">

            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-crown-gold-dark">
              SEND A MESSAGE
            </p>

            <h2 className="font-heading text-4xl font-bold text-crown-black sm:text-5xl">
              How Can We Help?
            </h2>

          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault()
              alert(
                'Thank you! Your message has been received by The OP Hair Studio.'
              )
              event.currentTarget.reset()
            }}
            className="grid gap-6"
          >

            <div className="grid gap-6 sm:grid-cols-2">

              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-crown-black"
                >
                  Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full border border-neutral-300 bg-white px-4 py-3.5 outline-none focus:border-crown-gold"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-crown-black"
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="w-full border border-neutral-300 bg-white px-4 py-3.5 outline-none focus:border-crown-gold"
                />
              </div>

            </div>

            <div>
              <label
                htmlFor="contact-phone"
                className="mb-2 block text-sm font-semibold text-crown-black"
              >
                Phone
              </label>

              <input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="Your contact number"
                className="w-full border border-neutral-300 bg-white px-4 py-3.5 outline-none focus:border-crown-gold"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-semibold text-crown-black"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows="6"
                required
                placeholder="How can we help?"
                className="w-full resize-none border border-neutral-300 bg-white px-4 py-3.5 outline-none focus:border-crown-gold"
              />
            </div>

            <button
              type="submit"
              className="w-fit bg-crown-black px-8 py-4 font-bold text-white hover:bg-crown-gold hover:text-crown-black"
            >
              Send Message
            </button>

          </form>

        </div>
      </section>
    </>
  )
}