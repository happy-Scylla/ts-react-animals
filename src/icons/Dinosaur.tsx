import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDinosaur = ({
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
    viewBox="0 0 128 128"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="url(#dinosaur_svg__a)" d="M0 0h128v128H0z" />
    <defs>
      <pattern
        id="dinosaur_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#dinosaur_svg__b" transform="scale(.00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAJ4SURBVGje7dhBcqQwDAXQHGGMYR8q4QDE+ABMFfsJtu5/lVlAjDES6NObLNAq1VW8tmTJpvP29sQTT/yeMFlUzjmjjD8MYCciiu1toJqIiCjcBpbnicabgF+fVy7hAHxSivYOUG/P63IogGpZ/EBERDMOrBvQL4WMOLAWsF//aFHgp4DrClRFyAGbNnDQb2QGVHQIDJiOQI8A3fF5zUYmgElAtZEJ4Bag2cgEeBb4RoC+CqZr7Q4ICPBdk5nGBswhA2JHjkKRyvhiEa9zSEDNA6QGDL8NlzlkreyWGLBmPB6qFsvhCFRYDsy9gA0UA3goBwUwokAD5cAANdRLDGChXuLeD6B50ACnM80BHslBBUQM+ITO1uthumiFA2DB+6EELHqssG8oyNFYAI0AyGVkgNB3wBVVADXFL3YdUVvED6mSI9CJbCkDAhigjDww6buRB7x+CTzAtsP8KhABwOoHggf4kYh6wOhnUgAm9RIEQP+2IQDCWEc1IL0xjVpAONmY37MCIB1tx3YUAEPas00CvHYJEtCJSxh1gHg8l3WUgFoEiiQkwMrAPgkJMCfALgkRmE6EoAH8CZCXQQSaM4D+vgpsgghY0gkicBynMHGVFIG0jzE9UZixPwd+tmH06SvLtILTAKmrw/pPsn28XwFzSiYYY4wrgX9XNWjTaK9VcxMEzNuObg2c/TaM7xfbOG5zEYDLNX1tzLoSBOps9Ks7wPKt+Y6AQJePbX0D8LtL4CYw79YDAvtbyN4C4v6IxABbHN8NBFjnhnwBlXMDAtTl/YG28jp95fGoB3xx9sNAU7xJVChQOefcV/bBhys/YYAnnnjiid8R/wF1Z1N9IIj7LQAAAABJRU5ErkJggg=="
        id="dinosaur_svg__b"
        width={128}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgDinosaur;
