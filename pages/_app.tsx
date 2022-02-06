import '../styles/globals.css';

/**
 * React
 */
import React, { useEffect, useState } from 'react';

/**
 * Next
 */
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Image from 'next/image';

/**
 * Library
 */
import NProgress from 'nprogress';
import 'public/nprogress.css';

import Layout from 'src/components/layout';

/**
 * asset
 */
import Logo from 'public/mix_crop.png';
import Loading from 'src/components/loading';

NProgress.configure({
  // minimum: 0.5,
  easing: 'ease',
  // speed: 2500,
  // parent: '#root',
});
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
      setIsLoading(true);
    };
    const handleStop = () => {
      setTimeout(() => {
        NProgress.done();
        setIsLoading(false);
      }, 500);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return isLoading ? (
    <Loading />
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
