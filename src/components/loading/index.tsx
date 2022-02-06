import React from 'react';
import Image from 'next/image';
/**
 * asset
 */
import Logo from 'public/mix_crop.png';

import styles from 'src/components/loading/styles.module.css';
function Loading() {
  return (
    <div className={styles.root}>
      <div>
        <Image
          src={Logo}
          alt="Empty Logo"
          width={100}
          height={100}
          // layout="fill"
        />
      </div>
      <div>
        <h1 className="mt-4 text-3xl">Loading</h1>
      </div>
    </div>
  );
}

export default Loading;
