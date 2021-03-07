import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { InitOptions, User } from 'next-auth';
import Providers from 'next-auth/providers';

const options: InitOptions = {
  providers: [
    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.AUTH0_DOMAIN,
    }),
  ],
};

export default (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> => {
  return NextAuth(request, response, options);
};
