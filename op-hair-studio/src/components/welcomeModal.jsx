import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Gift, Sparkles, X } from 'lucide-react'

export default function WelcomeModal() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!show) return

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setShow(false)
      }
    }

    document.addEventListener('keydown', handleEscape)

    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [show])

  if (!show) return null

  function closeModal() {
    setShow(false)
  }

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        flex items-start justify-center
        overflow-y-auto
        bg-black/60
        px-4 pb-10 pt-20
        backdrop-blur-sm
        sm:pt-24
      "
      onClick={closeModal}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="special-title"
        onClick={(event) => event.stopPropagation()}
        className="
          relative
          w-full max-w-[520px]
          overflow-hidden
          rounded-[28px]
          bg-white
          shadow-2xl
        "
      >
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close September special"
          className="
            absolute right-4 top-4 z-50
            flex h-11 w-11
            items-center justify-center
            rounded-full
            bg-white
            text-pink-600
            shadow-lg
            transition
            hover:scale-105
            hover:bg-pink-50
          "
        >
          <X size={21} strokeWidth={2.5} />
        </button>

        <div
          className="
            relative
            overflow-hidden
            bg-gradient-to-br
            from-pink-400
            via-pink-500
            to-fuchsia-600
            px-7 pb-10 pt-12
            text-center text-white
            sm:px-10
          "
        >
          <div
            className="
              absolute -left-12 -top-12
              h-36 w-36
              rounded-full
              bg-white/10
            "
          />

          <div
            className="
              absolute -bottom-16 -right-10
              h-44 w-44
              rounded-full
              bg-white/10
            "
          />

          <Sparkles
            className="
              absolute left-8 top-8
              text-pink-100/50
            "
            size={30}
          />

          <Sparkles
            className="
              absolute bottom-8 right-8
              text-pink-100/50
            "
            size={25}
          />

          <div className="relative z-10">
            <div
              className="
                mx-auto
                flex h-16 w-16
                items-center justify-center
                rounded-full
                bg-white
                text-pink-500
                shadow-lg
              "
            >
              <Gift size={28} />
            </div>

            <p
              className="
                mt-6
                text-xs font-bold
                uppercase
                tracking-[0.3em]
                text-pink-100
              "
            >
              September Special
            </p>

            <h2
              id="special-title"
              className="
                mt-3
                font-heading
                text-3xl font-bold
                leading-tight
                text-white
                sm:text-4xl
              "
            >
              Braids, Beauty
              <br />
              & A Little Extra
            </h2>
          </div>
        </div>

        <div
          className="
            bg-white
            px-7 py-8
            text-center
            sm:px-10
          "
        >
          <p
            className="
              mx-auto
              max-w-sm
              text-[15px]
              leading-7
              text-neutral-600
            "
          >
            Book any{' '}
            <strong className="font-bold text-pink-600">
              braiding service
            </strong>{' '}
            and wash your hair with us this September and
            receive a
          </p>

          <div
            className="
              my-6
              rounded-2xl
              border border-pink-100
              bg-pink-50
              px-6 py-5
            "
          >
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-pink-500
              "
            >
              Complimentary
            </p>

            <p
              className="
                mt-2
                font-heading
                text-3xl font-bold
                text-pink-700
              "
            >
              FREE Manicure 💅
            </p>

            <p className="mt-1 text-sm text-neutral-500">
              of your choice
            </p>
          </div>

          <p className="text-sm italic text-neutral-500">
            Because you deserve a little extra pampering. 💕
          </p>

          <Link
            to="/booking"
            onClick={closeModal}
            className="
              mt-7
              flex w-full
              items-center justify-center
              gap-2
              rounded-full
              bg-pink-500
              px-6 py-4
              text-sm font-bold
              text-white
              shadow-lg shadow-pink-200
              transition
              hover:-translate-y-0.5
              hover:bg-pink-600
            "
          >
            <Sparkles size={17} />

            Book The Special
          </Link>

          <button
            type="button"
            onClick={closeModal}
            className="
              mt-4
              text-xs font-semibold
              text-neutral-400
              transition
              hover:text-pink-500
            "
          >
            Maybe later
          </button>

          <p
            className="
              mx-auto
              mt-5
              max-w-sm
              text-[10px]
              leading-5
              text-neutral-400
            "
          >
            Valid during September 2026. Braiding service
            and hair wash must be booked together.
          </p>
        </div>
      </div>
    </div>
  )
}