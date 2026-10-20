export interface Ticket {
  id: string;
  movieId: string;
  movieTitle: string;
  showtime: string;
  seats: string[];
  totalPrice: number;
  status: 'confirmed' | 'pending' | 'cancelled';
}

export interface CreateTicketDto {
  movieId: string;
  showtime: string;
  seats: string[];
}
