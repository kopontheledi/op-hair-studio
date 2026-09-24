import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  CalendarDays,
  Check,
  CheckCircle2,
  Clock3,
  Scissors,
  UserRound,
} from 'lucide-react'

import { services } from '../data/services'
import { stylists } from '../data/stylists'

/* =========================================================
   STUDIO HOURS
========================================================= */

const OPENING_HOUR = 8
const WEEKDAY_CLOSING_HOUR = 18
const SATURDAY_CLOSING_HOUR = 17

/* =========================================================
   TIME SLOT GENERATOR
========================================================= */

function generateTimeSlots(dateString, serviceDuration) {
  if (!dateString || !serviceDuration) return []

  const selectedDate = new Date(`${dateString}T12:00:00`)
  const day = selectedDate.getDay()

  // Sunday = closed
  if (day === 0) return []

  const closingHour =
    day === 6
      ? SATURDAY_CLOSING_HOUR
      : WEEKDAY_CLOSING_HOUR

  const openingMinutes = OPENING_HOUR * 60
  const closingMinutes = closingHour * 60

  const slots = []

  // Create a slot every 30 minutes.
  // Only include the slot if the service can finish before closing.
  for (
    let minutes = openingMinutes;
    minutes + serviceDuration <= closingMinutes;
    minutes += 30
  ) {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60

    const time = `${String(hours).padStart(2, '0')}:${String(
      mins
    ).padStart(2, '0')}`

    slots.push(time)
  }

  return slots
}

/* =========================================================
   BOOKING PAGE
========================================================= */

export default function Booking() {
  const [searchParams] = useSearchParams()

  const [selectedService, setSelectedService] = useState('')
  const [selectedStylist, setSelectedStylist] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')

  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  })

  const [confirmedBooking, setConfirmedBooking] = useState(null)
  const [error, setError] = useState('')

  /* =======================================================
     PRESELECT SERVICE / STYLIST FROM URL
  ======================================================= */

  useEffect(() => {
    const serviceFromUrl = searchParams.get('service')
    const stylistFromUrl = searchParams.get('stylist')

    if (
      serviceFromUrl &&
      services.some((item) => item.id === serviceFromUrl)
    ) {
      setSelectedService(serviceFromUrl)
    }

    if (
      stylistFromUrl &&
      stylists.some((item) => item.id === stylistFromUrl)
    ) {
      setSelectedStylist(stylistFromUrl)
    }
  }, [searchParams])

  /* =======================================================
     SELECTED SERVICE
  ======================================================= */

  const service = useMemo(() => {
    return services.find(
      (item) => item.id === selectedService
    )
  }, [selectedService])

  /* =======================================================
     SELECTED STYLIST
  ======================================================= */

  const stylist = useMemo(() => {
    return stylists.find(
      (item) => item.id === selectedStylist
    )
  }, [selectedStylist])

  /* =======================================================
     MINIMUM BOOKING DATE
  ======================================================= */

  const today = new Date()

  const minimumDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, '0'),
    String(today.getDate()).padStart(2, '0'),
  ].join('-')

  /* =======================================================
     AVAILABLE TIMES
  ======================================================= */

  const availableTimeSlots = useMemo(() => {
    if (!selectedDate || !service) return []

    let slots = generateTimeSlots(
      selectedDate,
      service.duration
    )

    const appointmentDate = new Date(
      `${selectedDate}T12:00:00`
    )

    const now = new Date()

    const isToday =
      appointmentDate.getFullYear() === now.getFullYear() &&
      appointmentDate.getMonth() === now.getMonth() &&
      appointmentDate.getDate() === now.getDate()

    /*
     * If booking for today, remove times
     * that have already passed.
     */
    if (isToday) {
      const currentMinutes =
        now.getHours() * 60 + now.getMinutes()

      slots = slots.filter((time) => {
        const [hours, minutes] = time
          .split(':')
          .map(Number)

        const slotMinutes =
          hours * 60 + minutes

        return slotMinutes > currentMinutes
      })
    }

    return slots
  }, [selectedDate, service])

  /* =======================================================
     CUSTOMER DETAILS
  ======================================================= */

  function handleCustomerChange(event) {
    const { name, value } = event.target

    setCustomer((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  /* =======================================================
     CONFIRM BOOKING
  ======================================================= */

  function handleSubmit(event) {
    event.preventDefault()

    setError('')

    /* Sunday validation */

    if (selectedDate) {
      const bookingDate = new Date(
        `${selectedDate}T12:00:00`
      )

      if (bookingDate.getDay() === 0) {
        setError(
          'The OP Hair Studio is closed on Sundays. Please choose another date.'
        )

        return
      }
    }

    /* Required fields */

    if (
      !selectedService ||
      !selectedStylist ||
      !selectedDate ||
      !selectedTime ||
      !customer.name.trim() ||
      !customer.email.trim() ||
      !customer.phone.trim()
    ) {
      setError(
        'Please complete all required booking details.'
      )

      return
    }

    const chosenService = services.find(
      (item) => item.id === selectedService
    )

    const chosenStylist = stylists.find(
      (item) => item.id === selectedStylist
    )

    if (!chosenService || !chosenStylist) {
      setError(
        'Something went wrong with your selection. Please try again.'
      )

      return
    }

    /*
     * Make sure the selected time is still valid.
     */

    if (!availableTimeSlots.includes(selectedTime)) {
      setError(
        'That appointment time is no longer available. Please select another time.'
      )

      setSelectedTime('')

      return
    }

    /* Appointment start */

    const start = new Date(
      `${selectedDate}T${selectedTime}:00`
    )

    /* Appointment end */

    const end = new Date(
      start.getTime() +
        chosenService.duration * 60 * 1000
    )

    const booking = {
      service: chosenService,
      stylist: chosenStylist,
      date: selectedDate,
      time: selectedTime,
      start,
      end,

      customer: {
        ...customer,
      },
    }

    setConfirmedBooking(booking)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  /* =======================================================
     CONFIRMATION PAGE
  ======================================================= */

  if (confirmedBooking) {
    return (
      <BookingConfirmation
        booking={confirmedBooking}
        onNewBooking={() => {
          setConfirmedBooking(null)

          setSelectedService('')
          setSelectedStylist('')
          setSelectedDate('')
          setSelectedTime('')

          setCustomer({
            name: '',
            email: '',
            phone: '',
            notes: '',
          })

          setError('')

          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }}
      />
    )
  }

  return (
    <>

      <section className="bg-crown-black py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">

          <p className="mb-4 text-xs font-bold tracking-[0.3em] text-crown-gold">
            THE OP HAIR STUDIO
          </p>

          <h1 className="font-heading text-5xl font-bold sm:text-6xl">
            Book Your Appointment
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-neutral-400">
            Choose your service, preferred stylist and
            appointment time. We&apos;ll take care of the rest.
          </p>

        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white">

        <div className="mx-auto max-w-5xl overflow-x-auto px-5">

          <div className="flex min-w-[650px] justify-between py-6">

            {[
              ['01', 'Service'],
              ['02', 'Stylist'],
              ['03', 'Date & Time'],
              ['04', 'Your Details'],
            ].map(([number, label]) => (
              <div
                key={number}
                className="flex items-center gap-3"
              >

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-op-baby-pink text-xs font-bold text-crown-gold-dark">
                  {number}
                </span>

                <span className="text-sm font-semibold text-neutral-600">
                  {label}
                </span>

              </div>
            ))}

          </div>

        </div>

      </section>

      <section className="bg-crown-cream py-16 md:py-24">

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-6xl px-5 lg:px-8"
        >

          <div className="grid gap-10 lg:grid-cols-[1fr_350px]">

            <div className="space-y-8">

              <BookingSection
                number="01"
                title="Choose Your Service"
                icon={<Scissors size={21} />}
              >

                <div className="grid gap-4 sm:grid-cols-2">

                  {services.map((item) => {
                    const selected =
                      selectedService === item.id

                    return (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => {
                          setSelectedService(item.id)
                          setSelectedTime('')
                        }}
                        className={`relative border p-5 text-left transition ${
                          selected
                            ? 'border-crown-gold bg-op-blush shadow-sm'
                            : 'border-neutral-200 bg-white hover:border-crown-gold/60'
                        }`}
                      >

                        {selected && (
                          <span className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-crown-gold text-white">
                            <Check size={14} />
                          </span>
                        )}

                        <div className="pr-8">

                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-crown-gold-dark">
                            {item.category}
                          </p>

                          <h3 className="mt-2 font-heading text-lg font-bold text-crown-black">
                            {item.name}
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-neutral-500">
                            {item.description}
                          </p>

                        </div>

                        <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4">

                          <span className="flex items-center gap-1.5 text-xs text-neutral-400">
                            <Clock3 size={14} />
                            {item.duration} min
                          </span>

                          <strong className="font-heading text-lg text-crown-gold-dark">
                            R{item.price}
                          </strong>

                        </div>

                      </button>
                    )
                  })}

                </div>

              </BookingSection>

              <BookingSection
                number="02"
                title="Choose Your Stylist"
                icon={<UserRound size={21} />}
              >

                <div className="grid gap-4 sm:grid-cols-3">

                  {stylists.map((item) => {
                    const selected =
                      selectedStylist === item.id

                    return (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() =>
                          setSelectedStylist(item.id)
                        }
                        className={`overflow-hidden border text-left transition ${
                          selected
                            ? 'border-crown-gold shadow-md'
                            : 'border-neutral-200 hover:border-crown-gold/60'
                        }`}
                      >

                        <div className="relative h-72 overflow-hidden bg-pink-50 sm:h-64">
  <img
    src={item.image}
    alt={item.name}
    className="h-full w-full object-cover object-top"
  />

  {selected && (
    <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-pink-500 text-white shadow">
      <Check size={15} />
    </span>
  )}
</div>

                        <div className="bg-white p-4">

                          <h3 className="font-heading text-lg font-bold text-crown-black">
                            {item.name}
                          </h3>

                          <p className="mt-1 text-xs text-neutral-500">
                            {item.role}
                          </p>

                        </div>

                      </button>
                    )
                  })}

                </div>

              </BookingSection>

              <BookingSection
                number="03"
                title="Choose Date & Time"
                icon={<CalendarDays size={21} />}
              >

                <div>

                  <label
                    htmlFor="booking-date"
                    className="mb-2 block text-sm font-semibold text-crown-black"
                  >
                    Appointment Date
                  </label>

                  <input
                    id="booking-date"
                    type="date"
                    min={minimumDate}
                    value={selectedDate}
                    onChange={(event) => {
                      setSelectedDate(
                        event.target.value
                      )

                      setSelectedTime('')
                      setError('')
                    }}
                    className="w-full border border-neutral-300 bg-white px-4 py-3.5 outline-none focus:border-crown-gold sm:max-w-sm"
                  />

                  <p className="mt-2 text-xs text-neutral-400">
                    Monday – Saturday. The studio is closed
                    on Sundays.
                  </p>

                </div>

                <div className="mt-8">

                  <label className="mb-3 block text-sm font-semibold text-crown-black">
                    Available Times
                  </label>

                  {!selectedService ? (

                    <p className="bg-[#f8f4f1] p-5 text-sm text-neutral-500">
                      Select a service first to view available
                      appointment times.
                    </p>

                  ) : !selectedDate ? (

                    <p className="bg-[#f8f4f1] p-5 text-sm text-neutral-500">
                      Select a date to view available
                      appointment times.
                    </p>

                  ) : new Date(
                      `${selectedDate}T12:00:00`
                    ).getDay() === 0 ? (

                    <div className="border border-pink-200 bg-[#fff8f5] p-5">

                      <p className="font-semibold text-crown-black">
                        The studio is closed on Sundays.
                      </p>

                      <p className="mt-1 text-sm text-neutral-500">
                        Please choose a date between Monday
                        and Saturday.
                      </p>

                    </div>

                  ) : availableTimeSlots.length === 0 ? (

                    <div className="border border-pink-200 bg-[#fff8f5] p-5">

                      <p className="font-semibold text-crown-black">
                        No available times for this date.
                      </p>

                      <p className="mt-1 text-sm text-neutral-500">
                        Please choose another day.
                      </p>

                    </div>

                  ) : (

                    <>

                      <p className="mb-4 text-xs text-neutral-400">
                        Times shown are based on the{' '}
                        {service.duration}-minute duration of
                        your selected service.
                      </p>

                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

                        {availableTimeSlots.map(
                          (time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => {
                                setSelectedTime(time)
                                setError('')
                              }}
                              className={`border px-4 py-3 text-sm font-semibold transition ${
                                selectedTime === time
                                  ? 'border-crown-gold bg-crown-gold text-crown-black'
                                  : 'border-neutral-200 bg-white text-neutral-600 hover:border-crown-gold'
                              }`}
                            >
                              {time}
                            </button>
                          )
                        )}

                      </div>

                    </>

                  )}

                </div>

              </BookingSection>


              <BookingSection
                number="04"
                title="Your Details"
                icon={<UserRound size={21} />}
              >

                <div className="grid gap-5 sm:grid-cols-2">

                  <FormField
                    label="Full Name"
                    name="name"
                    value={customer.name}
                    onChange={handleCustomerChange}
                    placeholder="Your full name"
                    required
                  />

                  <FormField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={customer.phone}
                    onChange={handleCustomerChange}
                    placeholder="Your contact number"
                    required
                  />

                </div>

                <div className="mt-5">

                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={customer.email}
                    onChange={handleCustomerChange}
                    placeholder="you@email.com"
                    required
                  />

                </div>

                <div className="mt-5">

                  <label
                    htmlFor="notes"
                    className="mb-2 block text-sm font-semibold text-crown-black"
                  >
                    Appointment Notes

                    <span className="ml-1 font-normal text-neutral-400">
                      (optional)
                    </span>

                  </label>

                  <textarea
                    id="notes"
                    name="notes"
                    value={customer.notes}
                    onChange={handleCustomerChange}
                    rows="4"
                    placeholder="Anything you'd like your stylist to know?"
                    className="w-full resize-none border border-neutral-300 bg-white px-4 py-3.5 outline-none focus:border-crown-gold"
                  />

                </div>

              </BookingSection>

            </div>

            <aside className="h-fit lg:sticky lg:top-28">

              <div className="bg-crown-black p-7 text-white">

                <p className="text-xs font-bold tracking-[0.25em] text-crown-gold">
                  YOUR APPOINTMENT
                </p>

                <h2 className="mt-2 font-heading text-2xl font-bold">
                  Booking Summary
                </h2>

                <div className="mt-7 divide-y divide-white/10">

                  <SummaryItem
                    label="Service"
                    value={
                      service?.name ||
                      'Not selected'
                    }
                  />

                  <SummaryItem
                    label="Stylist"
                    value={
                      stylist?.name ||
                      'Not selected'
                    }
                  />

                  <SummaryItem
                    label="Date"
                    value={
                      selectedDate
                        ? formatDisplayDate(
                            selectedDate
                          )
                        : 'Not selected'
                    }
                  />

                  <SummaryItem
                    label="Time"
                    value={
                      selectedTime ||
                      'Not selected'
                    }
                  />

                  <SummaryItem
                    label="Duration"
                    value={
                      service
                        ? `${service.duration} minutes`
                        : '—'
                    }
                  />

                </div>

                {service && (
                  <div className="mt-7 flex items-center justify-between border-t border-white/20 pt-6">

                    <span className="text-neutral-400">
                      Estimated Total
                    </span>

                    <strong className="font-heading text-3xl text-crown-gold">
                      R{service.price}
                    </strong>

                  </div>
                )}

                {error && (
                  <p
                    role="alert"
                    className="mt-6 bg-red-950/50 p-4 text-sm leading-6 text-red-200"
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-7 flex w-full items-center justify-center gap-2 bg-crown-gold px-6 py-4 font-bold text-crown-black bg-crown-black hover:bg-crown-gold hover:text-white"
                >
                  Confirm Booking

                  <CheckCircle2 size={18} />
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-neutral-500">
                  You&apos;ll be able to add your
                  confirmed appointment to your calendar.
                </p>

              </div>

            </aside>

          </div>

        </form>

      </section>
    </>
  )
}

/* =========================================================
   BOOKING CONFIRMATION
========================================================= */

function BookingConfirmation({
  booking,
  onNewBooking,
}) {
  const googleCalendarUrl =
    createGoogleCalendarUrl(booking)

  function downloadCalendar() {
    const content = createICSFile(booking)

    const blob = new Blob([content], {
      type: 'text/calendar;charset=utf-8',
    })

    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')

    link.href = url

    link.download =
      'the-op-hair-studio-appointment.ics'

    document.body.appendChild(link)

    link.click()

    link.remove()

    URL.revokeObjectURL(url)
  }

  return (
    <section className="min-h-[75vh] bg-crown-cream py-16 md:py-24">

      <div className="mx-auto max-w-3xl px-5 lg:px-8">

        <div className="overflow-hidden bg-white shadow-xl">

          <div className="bg-crown-black px-7 py-12 text-center text-white sm:px-12">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-crown-gold text-crown-black">
              <Check
                size={30}
                strokeWidth={2.5}
              />
            </div>

            <p className="mt-6 text-xs font-bold tracking-[0.3em] text-crown-gold">
              APPOINTMENT CONFIRMED
            </p>

            <h1 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
              You&apos;re Booked!
            </h1>

            <p className="mx-auto mt-4 max-w-lg leading-7 text-neutral-400">
              We look forward to welcoming you to The OP
              Hair Studio
              {booking.customer.name
                ? `, ${
                    booking.customer.name.split(
                      ' '
                    )[0]
                  }`
                : ''}
              .
            </p>

          </div>

          <div className="p-7 sm:p-10">

            <div className="bg-op-blush p-6 sm:p-8">

              <p className="text-xs font-bold tracking-[0.2em] text-crown-gold-dark">
                APPOINTMENT DETAILS
              </p>

              <h2 className="mt-3 font-heading text-3xl font-bold text-crown-black">
                {booking.service.name}
              </h2>

              <p className="mt-2 text-neutral-500">
                with {booking.stylist.name}
              </p>

              <div className="mt-7 grid gap-5 border-t border-neutral-200 pt-6 sm:grid-cols-2">

                <div>

                  <span className="block text-xs text-neutral-400">
                    Date
                  </span>

                  <strong className="mt-1 block text-crown-black">
                    {formatDisplayDate(
                      booking.date
                    )}
                  </strong>

                </div>

                <div>

                  <span className="block text-xs text-neutral-400">
                    Time
                  </span>

                  <strong className="mt-1 block text-crown-black">
                    {formatTime(
                      booking.start
                    )}
                    {' – '}
                    {formatTime(
                      booking.end
                    )}
                  </strong>

                </div>

                <div>

                  <span className="block text-xs text-neutral-400">
                    Duration
                  </span>

                  <strong className="mt-1 block text-crown-black">
                    {booking.service.duration}{' '}
                    minutes
                  </strong>

                </div>

                <div>

                  <span className="block text-xs text-neutral-400">
                    Price
                  </span>

                  <strong className="mt-1 block text-crown-black">
                    R{booking.service.price}
                  </strong>

                </div>

              </div>

            </div>

            <div className="mt-7 flex gap-4 border-b border-neutral-200 pb-7">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-crown-black text-crown-gold">
                <Scissors size={18} />
              </div>

              <div>

                <strong className="block text-crown-black">
                  The OP Hair Studio
                </strong>

                <span className="mt-1 block text-sm text-neutral-500">
                  Sandton, Johannesburg, Gauteng
                </span>

              </div>

            </div>

            <div className="mt-8">

              <h3 className="font-heading text-2xl font-bold text-crown-black">
                Add To Your Calendar
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                Save your appointment so you don&apos;t
                forget your visit.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">

                <a
                  href={googleCalendarUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-crown-black px-5 py-4 text-sm font-bold text-white hover:bg-neutral-800"
                >
                  <CalendarDays size={18} />

                  Google Calendar
                </a>

                <button
                  type="button"
                  onClick={downloadCalendar}
                  className="flex items-center justify-center gap-2 border border-crown-black px-5 py-4 text-sm font-bold text-crown-black hover:bg-crown-black hover:text-white"
                >
                  <CalendarDays size={18} />

                  Apple / Outlook
                </button>

              </div>

            </div>

            <button
              type="button"
              onClick={onNewBooking}
              className="mx-auto mt-10 block text-sm font-bold text-crown-gold-dark hover:underline"
            >
              Make Another Booking
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

/* =========================================================
   BOOKING SECTION
========================================================= */

function BookingSection({
  number,
  title,
  icon,
  children,
}) {
  return (
    <section className="bg-white p-6 shadow-sm sm:p-8">

      <div className="mb-7 flex items-center gap-4">

        <div className="flex h-11 w-11 items-center justify-center bg-op-baby-pink text-crown-gold-dark">
          {icon}
        </div>

        <div>

          <p className="text-[10px] font-bold tracking-[0.25em] text-crown-gold-dark">
            STEP {number}
          </p>

          <h2 className="font-heading text-2xl font-bold text-crown-black">
            {title}
          </h2>

        </div>

      </div>

      {children}

    </section>
  )
}

/* =========================================================
   FORM FIELD
========================================================= */

function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-crown-black"
      >
        {label}

        {required && (
          <span className="ml-1 text-crown-gold-dark">
            *
          </span>
        )}

      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full border border-neutral-300 bg-white px-4 py-3.5 outline-none focus:border-crown-gold"
      />

    </div>
  )
}

/* =========================================================
   SUMMARY ITEM
========================================================= */

function SummaryItem({
  label,
  value,
}) {
  return (
    <div className="flex items-start justify-between gap-5 py-4">

      <span className="text-sm text-neutral-500">
        {label}
      </span>

      <strong className="max-w-[180px] text-right text-sm font-semibold text-neutral-200">
        {value}
      </strong>

    </div>
  )
}

/* =========================================================
   DISPLAY DATE
========================================================= */

function formatDisplayDate(dateString) {
  const date = new Date(
    `${dateString}T12:00:00`
  )

  return new Intl.DateTimeFormat('en-ZA', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

/* =========================================================
   DISPLAY TIME
========================================================= */

function formatTime(date) {
  return new Intl.DateTimeFormat('en-ZA', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date)
}

/* =========================================================
   GOOGLE CALENDAR
========================================================= */

function createGoogleCalendarUrl(booking) {
  const title =
    `${booking.service.name} - The OP Hair Studio`

  const details = [
    `Appointment with ${booking.stylist.name}`,
    `Service: ${booking.service.name}`,
    `Duration: ${booking.service.duration} minutes`,
    `Client: ${booking.customer.name}`,

    booking.customer.notes
      ? `Notes: ${booking.customer.notes}`
      : '',
  ]
    .filter(Boolean)
    .join('\n')

  const params = new URLSearchParams({
    action: 'TEMPLATE',

    text: title,

    dates: `${formatGoogleDate(
      booking.start
    )}/${formatGoogleDate(
      booking.end
    )}`,

    details,

    location:
      'The OP Hair Studio, Sandton, Johannesburg, Gauteng',
  })

  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

function formatGoogleDate(date) {
  return date
    .toISOString()
    .replace(/[-:]/g, '')
    .replace(/\.\d{3}/, '')
}

/* =========================================================
   APPLE / OUTLOOK CALENDAR
========================================================= */

function createICSFile(booking) {
  const title = escapeICS(
    `${booking.service.name} - The OP Hair Studio`
  )

  const description = escapeICS(
    [
      `Appointment with ${booking.stylist.name}`,
      `Service: ${booking.service.name}`,
      `Duration: ${booking.service.duration} minutes`,
      `Client: ${booking.customer.name}`,

      booking.customer.notes
        ? `Notes: ${booking.customer.notes}`
        : '',
    ]
      .filter(Boolean)
      .join('\n')
  )

  const location = escapeICS(
    'The OP Hair Studio, Sandton, Johannesburg, Gauteng'
  )

  return [
    'BEGIN:VCALENDAR',

    'VERSION:2.0',

    'PRODID:-//The OP Hair Studio//Booking//EN',

    'CALSCALE:GREGORIAN',

    'METHOD:PUBLISH',

    'BEGIN:VEVENT',

    `UID:${Date.now()}@theophairstudio.co.za`,

    `DTSTAMP:${formatICSDate(
      new Date()
    )}`,

    `DTSTART:${formatICSDate(
      booking.start
    )}`,

    `DTEND:${formatICSDate(
      booking.end
    )}`,

    `SUMMARY:${title}`,

    `DESCRIPTION:${description}`,

    `LOCATION:${location}`,

    'END:VEVENT',

    'END:VCALENDAR',
  ].join('\r\n')
}

function formatICSDate(date) {
  return date
    .toISOString()
    .replace(/[-:]/g, '')
    .replace(/\.\d{3}/, '')
}

function escapeICS(value) {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/\n/g, '\\n')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;')
}