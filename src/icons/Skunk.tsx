import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSkunk = ({
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
    <path fill="url(#skunk_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="skunk_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#skunk_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAIwSURBVGje7ZjRkaMwEEQ3hZFwAGitALg6AsAuBWBM55/Kfnh9xwI9M8DXVqn/9ZBa0vSIj4+qqqoqU7JQEomfQuQhZIgE3I8TGkAkAN1hQv4mPA4T8E0YjxLCmzCdIqQrgDOEl34zoTlLiOUsof8HIIfSIvxfAzAcIpTpCgC3AuB5hPAXrRRgkgbsUOqECIhkYJRIjdAJPd5zCNQIlRABjA0AtBnMCJUw20l+IjRCXALQ7iSsprBZphTCegqbZUohXIBJLqYRCqEA6LJpBCdEABhsIzghAMBkG6GsAlvaRei3CO3eu9nYJ8IgRPtEmBXGNMIi9KYRe+rkthEWwTbCrPYrI1JKKR3Mix9Tad2EBkR3d+rBQNjJWyhicBJ6Snjlx570X+m5twPZXoevG2Sa3B2p5oSDcIHqhIMQ9GV4enuFgNb5OuB6uAiaEaOLoBkBF0E3wkXQjBhcBM2Ih4ugGTG6CHKewIzIwOQjECOeGYCPEMilsAkxXdU7YRK04cBdTEK2AFJ0gg5o37vMCb02/ta904jvZjDHv4KAnygaVbf045g8GaGZf4spazerzNKZKWr1oaFPu2UedoTQ0wfqItUnVuU8U4harW48U+i1vOjpX5eFCzSzCv3zs+htBkKI5Fm3LlssuwP92bAAPFn/cKG/jhaFs2MEy8hQZs3cJiGrhD951gNxwvZWxDQvnB0nwKVWThIGOUnQe3t7/Njp74tkqbVeKFVVVVVVVVWGvgDEAKn7LjQjAQAAAABJRU5ErkJggg=="
        id="skunk_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgSkunk;
