import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Heart,
  Scissors,
  Sparkles,
  Star,
} from 'lucide-react'
import { stylists } from '../data/stylists'

const values = [
  {
    icon: Heart,
    title: 'Care',
    text: 'Every appointment begins with listening. Your hair, comfort and confidence come first.',
  },
  {
    icon: Scissors,
    title: 'Craft',
    text: 'We combine professional technique with thoughtful attention to every detail.',
  },
  {
    icon: Sparkles,
    title: 'Confidence',
    text: 'Our goal is simple: for you to leave feeling even better than when you arrived.',
  },
]

export default function About() {
  return (
    <>
      <section className="bg-crown-black py-24 text-white md:py-32">

        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">

          <p className="mb-4 text-xs font-bold tracking-[0.3em] text-crown-gold">
            ABOUT THE OP
          </p>

          <h1 className="font-heading text-5xl font-bold sm:text-6xl md:text-7xl">
            Beauty With Intention.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-neutral-400">
            A modern hair studio built around beautiful hair, genuine care
            and the confidence that comes from feeling like yourself.
          </p>

        </div>
      </section>

      <section className="bg-crown-cream py-20 md:py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-24 lg:px-8">

          <div className="relative">

            <img
              src="/images/about-studio.jpg"
              alt="Interior of The OP Hair Studio"
              className="h-[500px] w-full object-cover sm:h-[620px]"
            />

            <div className="absolute -bottom-6 right-4 bg-crown-gold p-6 text-crown-black sm:right-[-20px] sm:p-8">
              <strong className="block font-heading text-4xl">
                9+
              </strong>

              <span className="text-xs font-bold uppercase tracking-widest">
                Years of Craft
              </span>
            </div>

          </div>

          <div>

            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-crown-gold-dark">
              OUR STORY
            </p>

            <h2 className="font-heading text-4xl font-bold leading-tight text-crown-black sm:text-5xl">
              Hair That Feels
              <br />
              Like You.
            </h2>

            <p className="mt-7 leading-8 text-neutral-600">
              The OP Hair Studio was created from a simple belief: visiting
              your stylist should feel personal, comfortable and exciting.
            </p>

            <p className="mt-5 leading-8 text-neutral-600">
              We wanted to create a studio where professional technique meets
              genuine connection — a space where clients can relax, be heard
              and leave with hair that feels beautifully their own.
            </p>

            <p className="mt-5 leading-8 text-neutral-600">
              Whether you&apos;re coming in for a subtle refresh, a completely
              new look or your regular appointment, we approach every service
              with the same care and attention.
            </p>

            <Link
              to="/booking"
              className="mt-8 inline-flex items-center gap-3 px-7 py-4 font-bold text-white bg-crown-black hover:bg-crown-gold hover:text-crown-black"
            >
              Visit The Studio
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>
      </section>

      <section className="bg-white py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mx-auto mb-14 max-w-2xl text-center">

            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-crown-gold-dark">
              WHAT MATTERS TO US
            </p>

            <h2 className="font-heading text-4xl font-bold text-crown-black sm:text-5xl">
              The OP Standard.
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {values.map((value) => {
              const Icon = value.icon

              return (
                <article
                  key={value.title}
                  className="border border-neutral-200 p-8 text-center sm:p-10"
                >

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f7e8e3] text-crown-gold-dark">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 font-heading text-2xl font-bold text-crown-black">
                    {value.title}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-500">
                    {value.text}
                  </p>

                </article>
              )
            })}

          </div>

        </div>
      </section>

      <section className="bg-[#f7eee9] py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mx-auto mb-14 max-w-2xl text-center">

            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-crown-gold-dark">
              MEET THE TEAM
            </p>

            <h2 className="font-heading text-4xl font-bold text-crown-black sm:text-5xl">
              The Hands Behind The Hair.
            </h2>

            <p className="mt-5 leading-7 text-neutral-600">
              Meet the stylists bringing experience, creativity and care to
              every appointment.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {stylists.map((stylist) => (
              <article
                key={stylist.id}
                className="group bg-white"
              >

                <div className="overflow-hidden">

                  <img
                    src={stylist.image}
                    alt={`${stylist.name}, ${stylist.role}`}
                    className="h-[430px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>

                <div className="p-7">

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-crown-gold-dark">
                    {stylist.role}
                  </p>

                  <h3 className="mt-2 font-heading text-2xl font-bold text-crown-black">
                    {stylist.name}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-xs text-neutral-400">
                    <Star
                      size={14}
                      className="text-crown-gold"
                      fill="currentColor"
                    />

                    {stylist.experience}
                  </div>

                  <p className="mt-5 text-sm leading-7 text-neutral-500">
                    {stylist.bio}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">

                    {stylist.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="bg-crown-cream px-3 py-1.5 text-xs font-semibold text-neutral-600"
                      >
                        {specialty}
                      </span>
                    ))}

                  </div>

                  <Link
                    to={`/booking?stylist=${stylist.id}`}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-crown-gold-dark hover:gap-3"
                  >
                    Book With {stylist.name.split(' ')[0]}
                    <ArrowRight size={16} />
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      <section className="bg-crown-black py-20">

        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">

          <p className="mb-4 text-xs font-bold tracking-[0.3em] text-crown-gold">
            YOUR HAIR. YOUR MOMENT.
          </p>

          <h2 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Ready For Your Next Look?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-neutral-400">
            Book your appointment and let our team create a look that feels
            completely you.
          </p>

          <Link
            to="/booking"
            className="mt-8 inline-flex items-center gap-3 px-8 py-4 hover:-translate-y-1 font-bold text-crown-black bg-crown-black hover:bg-crown-gold hover:text-white"
          >
            Book Your Appointment
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>
    </>
  )
}