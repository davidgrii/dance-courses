import { SessionProvider as NextAuthSessionProvider, useSession } from 'next-auth/react';

export const useAppSession = useSession;

export function AppSessionProvider({ children }) {
  return (
    <NextAuthSessionProvider>
      {children}
    </NextAuthSessionProvider>
  );
}