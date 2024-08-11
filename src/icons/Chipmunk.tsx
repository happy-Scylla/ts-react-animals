import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChipmunk = ({
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
    <path fill="url(#chipmunk_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="chipmunk_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#chipmunk_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAL9AgBGoc7kAAAKESURBVGje7djbsaQgEAbgs1WbAF4CsGYIgKkxAFwIQPTPP5V9GHG8AN3C027Zb2c89RVC0y38/Nxxxx13/CPxS6wh0Yl4MIQKcGVCD0AVCRaALh5DkfAuHYMFyoQeAJKLQQgVluhyBekFlynUADmItNB/hSlLqAHguRBZQg/AifYjqBxBAphEg2RKpIQKW2HMED5LqfpsocIuMgR5FswafxhCjaPw3v45K1Loj8Jw+EFTwuH/4Y4/LBkSFX6DDEcKA0VMhDALchSKGMMLwFxRg6BmcmyoQcQFexJmY4yxxzSLC5/h6/a0fM2wW45EVr8AuG2ZglvysLYblOwXu0HPaxv6lk9KqAIZIITwRQMTKRyX4uGJl58I8i1keD/5dghFCn14P629RJPCKSf9gix2Rwr1KQ/n3ZOR/n6QUcIyhf68G5YFaQFgpoXQ5uy+r8EQglVCr084gg0VOOWfOIbQRmtkCwAMQQZry8wXYmXusWyanHxYF4QnJCqt5gky0XHeLAHAJFPlmiOovkiQmERVJDRPFdjhm8lgZFQksX1m8YS2WKiLhURWjEyhKhYSu4MrRAehuUJ0EIItNMWCb7WnUsUXwsR0RRCNDBWqK4IQ7+XL3m4axzXBJ/l3MCJPsNuanxZqA2dMYkpHQlhzwJjNWXHY98+UsN/TT6PPC8I66+3yZzi3voRQkYcDdGnB0oK6dNaL9G/y2558iQunxdDOTguSBKaL583wPBadN50oFbpSwYlSoSsVZlEqqFLhwbgDYU1jdk46xRFS+0Kz7oIqHpBVHzT3PsrScyBy6qS5fi+3S0Rz7WZvPxO7rsO9n/Q9K9D52De9Bm5ziXdNuOOOO/6j+AsX0lTQhRg5hgAAAABJRU5ErkJggg=="
        id="chipmunk_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgChipmunk;
