import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWalrus = ({
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
    viewBox="0 0 129 129"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="url(#walrus_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="walrus_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#walrus_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAMGSURBVGje7dhBupsgEADgd4SKui9f4r7Esq8vZV9F7n+VGhAEZZgxb9c6K2OS32HEQf34uOKKK6644n+Jah83ZWw8Kyi+lYW78THzt4QNgImiwEwc0xuCSgQjTgtNChh9Wuh2grGVYH1ckLovCGwPuErIpah+PLdl5y9YaA7CvAq+JDbJP7BwGIQbhgxb7hAFQR2FIQhTGCUsHMvgCiF9Oh0m1BlBb8Lkc/wBCm1GmLfyzP4I5wQT7feF/g4KHSDsRwfPKJkTxKHC+rywO8vjG0JaII4ID3/AdUPsJ8pUlQXtD+g3xL7G/C0hqsRnhQhzmD/rhhOYJ57FDqOgSr6if32rRblH5QB7cYYUsS7n//Q7Ofvx15wmzMtwBpUVBDEH3szb+Rvja58qTJVgx1E04UNZsOm7buRGMsbXPkXg0v7QnkeZCB0u2MxFG4QqFVRYw0DBNpKhsXNAvU6JTBY+QxWWP8+2bIM7Hzr+liKIZV3klahuj7Ut6LiJUgQ76+7ztgjquHlQhHV11TxNfJ0sRCH0hViozwidvyZjoaUIbbLIjckJXHvHKWHyY48XZaKw/XgT2i8L6qtCY74qKLpgYoF5oUnbDV2ovaCIgswLPFrzKAKPBJe8uO+Xn7IgIqE9rB4UYTgIh9tsRBh93abcHUlFEKboylLZu2xM0NHVnb09LQlqTdR3mOMt7ogIvtzNWrQWupdAhNFN5jlXSE4SdFidDFBITDB+hazzj0wEwRUiV4YBEVg4ErMJK6gMoFBvE08tTA2WAReGZQAi86gwYUKzHasxnMF3lqCwVW7ozHCHBwEK2Sec7IsASJCIwFFBlQGNPvszJIUBFeoyMOPvH1pyCpAgySlAQjkFgQsNcS7AQnEQuxdTWYGdSCEvdNT5CAnIZNi9l8oI69PkDBOfZeHmF5TCWDQHhWgAubaiJdqjunjeHZJ4xhMF6LQy8/IqxCPZJRDBFetnPJFE8tCOCQ/fJ3r/njbskRThyatC3FRJuPV9/6iwYMuveqCSV1xxxRX/avwF3HyWGo6xlhQAAAAASUVORK5CYII="
        id="walrus_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgWalrus;
