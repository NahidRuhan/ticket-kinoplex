import { apiClient } from '@/shared/lib/api-client';
import type { ApiResponse } from '@/shared/types/api.types';
import type { Movie } from '../types/movie.types';

export const movieApi = {
  async getAll(): Promise<Movie[]> {
    const response = await apiClient<ApiResponse<Movie[]>>('/movies');
    return response.data ?? [];
  },

  async getById(id: string): Promise<Movie | null> {
    const response = await apiClient<ApiResponse<Movie>>(`/movies/${id}`);
    return response.data ?? null;
  },
};
