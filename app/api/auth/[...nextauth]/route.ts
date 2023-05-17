import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      token: `https://github.com/login/oauth/access_token${
        process.env.NODE_ENV === 'development' ? '?redirect_uri=http://localhost:3000/api/auth/callback/github' : ''
      }`,
    }),
  ],
});
export {handler as GET, handler as POST};
