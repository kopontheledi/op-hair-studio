import { Link } from 'react-router-dom'
import {
  Mail,
  MapPin,
  Phone,
  Scissors,
  Clock3,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-crown-black text-neutral-400">

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-20">

        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center border border-crown-gold text-crown-gold">
              <Scissors size={21} />
            </div>

            <div>
              <span className="block font-heading text-lg font-bold tracking-wide text-white">
                THE OP
              </span>

              <span className="block text-[9px] font-semibold tracking-[0.3em] text-crown-gold">
                HAIR STUDIO
              </span>
            </div>
          </Link>

          <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-400">
            A modern hair studio where beautiful hair, thoughtful care and
            confidence come together.
          </p>

          <div className="mt-6 flex gap-3">

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center border border-white/15 text-neutral-300 hover:border-crown-gold hover:text-crown-gold"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center border border-white/15 text-neutral-300 hover:border-crown-gold hover:text-crown-gold"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px]"
                fill="currentColor"
              >
                <path d="M13.5 22v-9h3l.5-3h-3.5V8.1c0-.9.3-1.6 1.7-1.6H17V3.8c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V10H7v3h3v9h3.5Z" />
              </svg>
            </a>

          </div>
        </div>

        <div>
          <h3 className="mb-6 font-heading text-lg font-bold text-white">
            Explore
          </h3>

          <div className="flex flex-col gap-3 text-sm">

            <Link
              to="/"
              className="w-fit hover:text-crown-gold"
            >
              Home
            </Link>

            <Link
              to="/services"
              className="w-fit hover:text-crown-gold"
            >
              Services
            </Link>

            <Link
              to="/about"
              className="w-fit hover:text-crown-gold"
            >
              About Us
            </Link>

            <Link
              to="/booking"
              className="w-fit hover:text-crown-gold"
            >
              Book Appointment
            </Link>

            <Link
              to="/contact"
              className="w-fit hover:text-crown-gold"
            >
              Contact
            </Link>

          </div>
        </div>

<div>
  <h3 className="mb-6 font-heading text-lg font-bold text-white">
    Opening Hours
  </h3>

  <div className="space-y-4 text-sm">

    {/* MONDAY - FRIDAY */}
    <div className="flex gap-3">
      <Clock3
        size={17}
        className="mt-0.5 shrink-0 text-crown-gold"
      />

      <div>
        <p className="text-neutral-300">
          Monday – Friday
        </p>

        <p className="mt-1 text-neutral-500">
          08:00 – 18:00
        </p>
      </div>
    </div>

    {/* SATURDAY */}
    <div className="flex gap-3 border-t border-white/10 pt-4">
      <Clock3
        size={17}
        className="mt-0.5 shrink-0 text-crown-gold"
      />

      <div>
        <p className="text-neutral-300">
          Saturday
        </p>

        <p className="mt-1 text-neutral-500">
          08:00 – 17:00
        </p>
      </div>
    </div>

    {/* SUNDAY */}
    <div className="flex gap-3 border-t border-white/10 pt-4">
      <Clock3
        size={17}
        className="mt-0.5 shrink-0 text-crown-gold"
      />

      <div>
        <p className="text-neutral-300">
          Sunday
        </p>

        <p className="mt-1 text-neutral-500">
          Closed
        </p>
      </div>
    </div>

  </div>
</div>

        <div>
          <h3 className="mb-6 font-heading text-lg font-bold text-white">
            Visit The Studio
          </h3>

          <div className="space-y-5 text-sm">

            <div className="flex gap-3">
              <MapPin
                size={18}
                className="mt-0.5 shrink-0 text-crown-gold"
              />

              <div>
                <p className="text-neutral-300">
                  Sandton
                </p>

                <p className="mt-1 text-neutral-500">
                  Johannesburg, Gauteng
                </p>
              </div>
            </div>

            <a
              href="tel:+27115550147"
              className="flex items-center gap-3 hover:text-crown-gold"
            >
              <Phone
                size={18}
                className="shrink-0 text-crown-gold"
              />

              011 555 0147
            </a>

            <a
              href="mailto:hello@theophairstudio.co.za"
              className="flex items-center gap-3 break-all hover:text-crown-gold"
            >
              <Mail
                size={18}
                className="shrink-0 text-crown-gold"
              />

              hello@theophairstudio.co.za
            </a>

          </div>

          <Link
            to="/booking"
            className="mt-7 inline-flex bg-crown-gold px-5 py-3 text-sm font-bold text-crown-black bg-crown-black hover:bg-crown-gold hover:text-white"
          >
            Book Appointment
          </Link>
        </div>

      </div>

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <p>
            © 2026 The OP Hair Studio. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">

            <Link
              to="/terms"
              className="hover:text-crown-gold"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/contact"
              className="hover:text-crown-gold"
            >
              Contact
            </Link>

          </div>

        </div>

      </div>

    </footer>
  )
}