import { Link } from 'react-router-dom'
import {
    ArrowRight,
    CalendarDays,
    Check,
    Clock3,
    MapPin,
    Scissors,
    Sparkles,
    Star,
} from 'lucide-react'

const services = [
    {
        icon: Sparkles,
        title: 'Knotless Braids',
        description:
            'Beautiful, lightweight knotless braids with a neat, comfortable and long-lasting finish.',
        price: 'R1000',
        duration: '4 hrs',
    },
    {
        icon: Scissors,
        title: 'Silk Press',
        description:
            'Smooth, glossy styling with beautiful movement and shine without chemical relaxers.',
        price: 'R450',
        duration: '1 hr 30 min',
    },
    {
        icon: Sparkles,
        title: 'Kids Cornrows',
        description:
            'Simple and neat cornrows for little ones, styled gently with care and comfort.',
        price: 'R80',
        duration: '45 min',
    },
]

const testimonials = [
    {
        name: 'Lethabo M.',
        text: 'The attention to detail is unmatched. Easily one of the best cuts I have had.',
    },
    {
        name: 'Kopo L.',
        text: 'Professional, welcoming and always consistent. The booking process is incredibly easy.',
    },
    {
        name: 'Kagiso R.',
        text: 'Clean shop, great atmosphere and braiders who actually listen to what you want.',
    },
]

export default function Home() {
    return (
        <>

            <section className="relative flex min-h-[calc(100svh-80px)] items-center overflow-hidden bg-crown-black">


                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/barber-hero.jpg')",
                    }}
                />


                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/25" />

                <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">
                    <div className="max-w-4xl">

                        <p className="mb-5 text-xs font-bold tracking-[0.3em] text-crown-gold sm:text-sm">
                            PREMIUM WOMEN&apos;S MAINTENANCE
                        </p>

                        <h1 className="max-w-4xl font-heading text-5xl font-bold leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                            Sharp Cuts.
                            <br />

                            <span className="text-crown-gold">
                                Timeless Confidence.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
                            A beautiful space for women and little ones to feel pampered, confident
                            and cared for. From braids and styling to cuts and colour, every
                            appointment is designed around you.
                        </p>

                        <div className="mt-9 flex flex-col gap-4 sm:flex-row">

                            <Link
                                to="/booking"
                                className="inline-flex items-center justify-center gap-3 bg-crown-gold px-7 py-4 font-bold text-crown-black hover:-translate-y-1 hover:bg-amber-300"
                            >
                                Book Your Appointment
                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                to="/services"
                                className="inline-flex items-center justify-center border border-white/40 px-7 py-4 font-bold text-white hover:border-white hover:bg-white hover:text-black"
                            >
                                Explore Services
                            </Link>

                        </div>

                        <div className="mt-14 flex flex-col gap-4 border-t border-white/20 pt-7 text-sm text-neutral-300 sm:flex-row sm:flex-wrap sm:gap-8">

                            <div className="flex items-center gap-2">
                                <MapPin size={18} className="text-crown-gold" />
                                Sandton, Johannesburg
                            </div>

                            <div className="flex items-center gap-2">
                                <Clock3 size={18} className="text-crown-gold" />
                                Monday – Saturday
                            </div>

                            <div className="flex items-center gap-2">
                                <CalendarDays
                                    size={18}
                                    className="text-crown-gold"
                                />
                                Appointments & Walk-ins
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-crown-cream py-20 md:py-28">
                <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-24 lg:px-8">

                    <div>
                        <p className="mb-4 text-xs font-bold tracking-[0.3em] text-crown-gold-dark">
                            WELCOME
                        </p>

                        <h2 className="font-heading text-4xl font-bold leading-tight text-crown-black sm:text-5xl lg:text-6xl">
                            More Than
                            <br />
                            Just Hair.
                        </h2>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
                            OP Hair Studio is a welcoming space for women and little ones
                            to feel beautiful, confident and cared for.
                        </p>
                    </div>

                    <div className="flex flex-col justify-center">

                        <p className="leading-8 text-neutral-600">
                            From braids and protective styles to cuts, colour and everyday
                            styling, we believe every appointment should be more than just
                            doing your hair. It should be a moment to relax, feel pampered
                            and leave looking and feeling your best.
                        </p>

                        <Link
                            to="/about"
                            className="mt-7 inline-flex w-fit items-center gap-2 font-bold text-crown-gold-dark hover:gap-4"
                        >
                            Discover Our Story
                            <ArrowRight size={17} />
                        </Link>

                    </div>

                </div>
            </section>

            <section className="bg-white py-20 md:py-28">

                <div className="mx-auto max-w-7xl px-5 lg:px-8">

                    <div className="mx-auto mb-14 max-w-2xl text-center">

                        <p className="mb-4 text-xs font-bold tracking-[0.3em] text-crown-gold-dark">
                            OUR SERVICES
                        </p>

                        <h2 className="font-heading text-4xl font-bold text-crown-black sm:text-5xl">
                            Crafted For Your Best Look.
                        </h2>

                        <p className="mt-5 leading-7 text-neutral-500">
                            Beautiful hair services for women and little ones, delivered with
                            care, creativity and attention to every detail.
                        </p>

                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        {services.map((service) => {
                            const Icon = service.icon

                            return (
                                <article
                                    key={service.title}
                                    className="group border border-neutral-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-crown-gold hover:shadow-xl"
                                >

                                    <div className="mb-7 flex h-14 w-14 items-center justify-center bg-crown-cream text-crown-gold-dark">
                                        <Icon size={25} />
                                    </div>

                                    <h3 className="font-heading text-2xl font-bold text-crown-black">
                                        {service.title}
                                    </h3>

                                    <p className="mt-4 min-h-[85px] leading-7 text-neutral-500">
                                        {service.description}
                                    </p>

                                    <div className="mt-7 flex items-end justify-between border-t border-neutral-200 pt-5">

                                        <div>
                                            <span className="block text-xs text-neutral-400">
                                                Duration
                                            </span>

                                            <span className="text-sm font-semibold text-neutral-600">
                                                {service.duration}
                                            </span>
                                        </div>

                                        <div className="text-right">
                                            <span className="block text-xs text-neutral-400">
                                                From
                                            </span>

                                            <strong className="font-heading text-2xl text-crown-gold-dark">
                                                {service.price}
                                            </strong>
                                        </div>

                                    </div>

                                    <Link
                                        to="/booking"
                                        className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-crown-black group-hover:text-crown-gold-dark"
                                    >
                                        Book This Service
                                        <ArrowRight size={16} />
                                    </Link>

                                </article>
                            )
                        })}

                    </div>

                    <div className="mt-12 text-center">

                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 bg-crown-black px-7 py-4 font-bold text-white hover:bg-crown-gold hover:text-crown-black"
                        >
                            View All Services
                            <ArrowRight size={17} />
                        </Link>

                    </div>

                </div>
            </section>

            <section className="grid bg-crown-black lg:grid-cols-2">

                <div
                    className="min-h-[450px] bg-cover bg-center lg:min-h-[700px]"
                    style={{
                        backgroundImage: "url('/images/barber-experience.png')",
                    }}
                />

                <div className="flex items-center px-5 py-20 sm:px-10 lg:px-16 xl:px-24">

                    <div className="max-w-xl">

                        <p className="mb-4 text-xs font-bold tracking-[0.3em] text-crown-gold">
                            THE OP EXPERIENCE
                        </p>

                        <h2 className="font-heading text-4xl font-bold text-white sm:text-5xl">
                            Where Beauty
                            <br />
                            Meets Confidence.
                        </h2>

                        <p className="mt-6 leading-8 text-neutral-300">
                            Step into a warm and welcoming space created for women and little
                            ones. From braids and protective styles to cuts, washes and
                            professional styling, every appointment is centred around care,
                            comfort and helping you feel your best.
                        </p>

                        <div className="mt-10 space-y-5">

                            {[
                                'Experienced professional stylists',
                                'Women & kids hair services',
                                'Braids & protective styling',
                                'Personalised hair consultations',
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-4 border-b border-white/10 pb-5"
                                >
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-crown-gold text-crown-gold">
                                        <Check size={16} />
                                    </span>

                                    <span className="text-neutral-200">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>

                        <Link
                            to="/about"
                            className="mt-9 inline-flex items-center gap-2 border border-white/40 px-7 py-4 font-bold text-white transition hover:border-crown-gold hover:bg-crown-gold hover:text-white"
                        >
                            Meet Our Stylists
                            <ArrowRight size={17} />
                        </Link>

                    </div>

                </div>

            </section>

            <section className="bg-crown-cream py-20 md:py-28">

                <div className="mx-auto max-w-7xl px-5 lg:px-8">

                    <div className="mx-auto mb-14 max-w-2xl text-center">

                        <p className="mb-4 text-xs font-bold tracking-[0.3em] text-crown-gold-dark">
                            CLIENT STORIES
                        </p>

                        <h2 className="font-heading text-4xl font-bold text-crown-black sm:text-5xl">
                            Trusted By Women.
                        </h2>

                    </div>

                    <div className="grid gap-6 md:grid-cols-3">

                        {testimonials.map((testimonial) => (
                            <article
                                key={testimonial.name}
                                className="bg-white p-8 shadow-sm"
                            >

                                <div className="mb-6 flex gap-1 text-crown-gold">

                                    {[...Array(5)].map((_, index) => (
                                        <Star
                                            key={index}
                                            size={17}
                                            fill="currentColor"
                                        />
                                    ))}

                                </div>

                                <p className="font-heading text-lg leading-8 text-neutral-600">
                                    &ldquo;{testimonial.text}&rdquo;
                                </p>

                                <div className="mt-7 border-t border-neutral-200 pt-5">

                                    <strong className="text-sm text-crown-black">
                                        {testimonial.name}
                                    </strong>

                                    <span className="ml-2 text-xs text-neutral-400">
                                        Verified Client
                                    </span>

                                </div>

                            </article>
                        ))}

                    </div>

                </div>
            </section>

            <section className="bg-[#20201e] py-16 md:py-20">

                <div className="mx-auto flex max-w-7xl flex-col gap-9 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">

                    <div>

                        <p className="mb-3 text-xs font-bold tracking-[0.3em] text-crown-gold">
                            READY FOR A FRESH LOOK?
                        </p>

                        <h2 className="font-heading text-4xl font-bold text-white sm:text-5xl">
                            Your Chair Is Waiting.
                        </h2>

                        <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
                            Choose your service, braider and preferred appointment time in
                            just a few simple steps.
                        </p>

                    </div>

                    <Link
                        to="/booking"
                        className="inline-flex shrink-0 items-center justify-center gap-3 bg-crown-gold px-8 py-4 font-bold text-crown-black hover:-translate-y-1 hover:bg-amber-300"
                    >
                        Book Appointment
                        <ArrowRight size={18} />
                    </Link>

                </div>

            </section>
        </>
    )
}