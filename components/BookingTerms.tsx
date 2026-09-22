export default function BookingTerms() {
  return (
    <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A] sm:text-sm">
            Booking Information
          </p>

          <h2 className="mt-3 font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Deposit, Payment & Cancellation Policy
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
            <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
              Deposit & Payment
            </h3>

            <div className="mt-4 space-y-4 font-inter text-sm leading-7 text-[#1C1208] sm:text-base">
              <p>
                A deposit of 30% of the total package cost is required to
                confirm the booking.
              </p>

              <p>
                The remaining balance must be settled no later than 45 days
                before the start of the safari.
              </p>

              <p>
                Payment instructions for bank transfer, mobile money, or card
                will be provided upon confirmation of the booking.
              </p>
            </div>
          </article>

          <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
            <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
              Cancellation Policy
            </h3>

            <ul className="mt-4 space-y-3 font-inter text-sm leading-7 text-[#1C1208] sm:text-base">
              <li>
                <strong>60+ days before departure:</strong> Full refund less
                administrative fees
              </li>

              <li>
                <strong>30-59 days before departure:</strong> 50% of total cost
                forfeited
              </li>

              <li>
                <strong>15-29 days before departure:</strong> 75% of total cost
                forfeited
              </li>

              <li>
                <strong>Less than 14 days before departure:</strong> 100% of
                total cost forfeited
              </li>
            </ul>
          </article>
        </div>

        <div className="mt-5 rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
          <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
            Currency & General Terms
          </h3>

          <div className="mt-4 space-y-4 font-inter text-sm leading-7 text-[#1C1208] sm:text-base">
            <p>
              Prices may change if government taxes, park fees, or levies are
              revised before travel.
            </p>

            <p>
              All prices are quoted in USD. Payments made in other currencies
              are converted at the prevailing bank exchange rate on the day of
              payment.
            </p>

            <p>
              Danil Scenic Tours reserves the right to adjust the balance
              payable if there are significant fluctuations in exchange rates,
              government taxes, or park fees before travel. Deposits once paid
              are protected against currency changes.
            </p>

            <p>
              Danil Scenic Tours acts as an agent for hotels, airlines, and
              transport companies and is not liable for delays, cancellations,
              or losses beyond its control. Comprehensive travel insurance is
              advised.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
