'use client';

import { QueryClientProvider } from "@tanstack/react-query";
import { AppSessionProvider } from '@/entities/user/session';
import { queryClient } from '@/shared/api/query-client';

export const AppProvider = ({ children }) => {
  return (
    <AppSessionProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </AppSessionProvider>
  );
};