

import type { NextAuthOptions } from 'next-auth';
import { getServerSession as memoGetServerSession } from 'next-auth';
import { cache } from 'react';
import GitHubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../lib/prisma';

export const authOptions: NextAuthOptions = {
    // your configs
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
    ],
    adapter: PrismaAdapter(prisma),
    secret: process.env.SECRET,
}

export const getServerSession = cache(async () => {
  return memoGetServerSession(authOptions);
});
