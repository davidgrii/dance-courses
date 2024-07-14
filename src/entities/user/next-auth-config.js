import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';

const user = [{
  email: 'grikurovdavid@gmail.com',
  name: 'David',
  password: '12345678'
}];

export const nextAuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    Credentials({
      credentials: {
        email: { label: 'email', type: 'email', required: true },
        password: { label: 'password', type: 'password', required: true }
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          return null;
        }

        const currentUser = user.find(user => user.email === credentials.email);

        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithoutPass } = currentUser;

          return userWithoutPass;
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/login'
  }
};