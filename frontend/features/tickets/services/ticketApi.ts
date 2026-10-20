import { apiClient } from '@/shared/lib/api-client';
import type { ApiResponse } from '@/shared/types/api.types';
import type { Ticket, CreateTicketDto } from '../types/ticket.types';

export const ticketApi = {
  async getAll(): Promise<Ticket[]> {
    const response = await apiClient<ApiResponse<Ticket[]>>('/tickets');
    return response.data ?? [];
  },

  async getById(id: string): Promise<Ticket | null> {
    const response = await apiClient<ApiResponse<Ticket>>(`/tickets/${id}`);
    return response.data ?? null;
  },

  async create(payload: CreateTicketDto): Promise<Ticket | null> {
    const response = await apiClient<ApiResponse<Ticket>>('/tickets', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    return response.data ?? null;
  },
};
