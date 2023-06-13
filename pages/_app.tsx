import '@/styles/globals.css';
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: {
  Component: React.ComponentType<any>;
  pageProps: { session: Session | null; [key: string]: any };
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
