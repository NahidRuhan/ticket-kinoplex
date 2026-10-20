import type { Ticket } from '../types/ticket.types';

interface TicketCardProps {
  ticket: Ticket;
}

export function TicketCard({ ticket }: TicketCardProps) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
          {ticket.movieTitle}
        </h4>
        <span
          className={`rounded px-2 py-0.5 text-xs font-medium uppercase ${
            ticket.status === 'confirmed'
              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
              : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
          }`}
        >
          {ticket.status}
        </span>
      </div>
      <div className="mt-3 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
        <p>Showtime: {ticket.showtime}</p>
        <p>Seats: {ticket.seats.join(', ')}</p>
        <p className="font-medium text-zinc-900 dark:text-zinc-200">
          Total: ${ticket.totalPrice.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
