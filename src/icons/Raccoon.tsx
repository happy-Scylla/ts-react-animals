import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRaccoon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 129 128"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="url(#raccoon_svg__a)" d="M0 0h129v128H0z" />
    <defs>
      <pattern
        id="raccoon_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#raccoon_svg__b" transform="scale(.00775 .00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIC/QDbf7tYAAAKVSURBVGje7ddbkqIwGIbhnq7qBfwQFgA2C4A2C4hdLIDDu/+tzAUHI0aSmJupGv4bldJHyOFL8vFx1llnneWrP3KvGmitz3IBRmNfORYyAAaRG8C3SAdAHy4UADD9zq/XfPkcLWylWW8qVOhg1DuljhJqmFtzq1GkjhMGkdwWmkihYBDRKfdQwOMtQBMtmF1LjhLVmxmM0KrL/OtW1fATNaLUOn7q9Y0GKMMF0YBZh7eRpWMkQihgXKm5/faD2ieo9fv1+vQ1NDFCDo10V5ECepHuKkWkoMEI4yowSrY+V5iQAyIg0s0CouL6Yp6HehCpYZrf6ZgRpeY8yoyoeUpkZh4aJlTotkTrlnm5DK4pUNhG5JKX81/XuzF1JHTLdBZlpxv32/EJysoUhqq6wHXNmzFIWIJhrC7zT3Kgre5Z5ResYGg1Rjra+6UpQLCzqexoRGOs0DV+wY7osqAXsK/1fuEhHJUupb7aDzbECZO9jAYLDwlbSrbL/ckvZA8R/QODDYwmfHY7qonM6ueK2IEsO45dDZE56XkIn/C49LtuwSsoTyv4hV2nAkNVVVUZITztpRanTBXgO1lYuyRBWBaeFGFMFub5mSRgkoUpWRiTBZpkYUoWSBfKZKFPFoZkgXTBJAtlstAkC/0/IEzJwvBfCDWM77akatbj1e97val0vx3Qbm8JmrvwvH4HCB22IJmOnVmKR8G1lTme3V244E4YRbDwIuVylzDV7gXDKWiX0MvFuWi5BIVbcA0M4xTyV8Jzrw7uNat7KTy16IuVV4cLxi1wKEzauwP5PBZ6pX27IJ+wHaJf7sS+fMJGmLeFhWjkfUFq4CqJQiuJwvfB6eCzqrZDyG153Qu3wxPKWWedddZZZ72uv12GQx5T4X0IAAAAAElFTkSuQmCC"
        id="raccoon_svg__b"
        width={129}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgRaccoon;
