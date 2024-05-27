import React, { Suspense, lazy, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LazyImage = lazy(() => import('./LazyImage'));

const SuspenseImage = (props) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div>
        <h2>404 Not Found</h2>
      </div>
    );
  }

  return (
    <Suspense fallback={<Skeleton width={props.width} height={props.height} />}>
      <LazyImage {...props} onError={() => setHasError(true)} />
    </Suspense>
  );
};

export default SuspenseImage;
