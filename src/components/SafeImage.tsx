import React from 'react';

const FALLBACK_SVG = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjE2MDAiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjE2MDBweCIgZmlsbD0iIzA3MDcwNyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmaWxsPSIjYmZhNDUxIiBmb250LWZhbWlseT0iSW50ZXIsIEhlbHZldGljYSwgQXJpYWwiIGZvbnQtc2l6ZT0iMzIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkltYWdlIHVuYXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg==';

export function SafeImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [error, setError] = React.useState(false);

  const handleError = () => {
    if (!error) setError(true);
  };

  const { src, loading = 'lazy', decoding = 'async', ...rest } = props;

  return (
    <img
      {...rest}
      src={error ? FALLBACK_SVG : src}
      loading={loading}
      decoding={decoding}
      onError={handleError}
    />
  );
}
