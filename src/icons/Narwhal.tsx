import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNarwhal = ({
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
    <path fill="url(#narwhal_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="narwhal_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#narwhal_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAI9SURBVGje7dhLkqMwDAbgPsLYhgO4qrMfN+MDJF0+QID//leZRSABWw6WtOnqQpskmy+2JD/g4+OMM35r2CEYVvzJhR6zUoiAVwtXnXABRp3QAdAJDkBQCQbAXSckYNIJkZmIUujBq2cpdODVsxQswGrsUjAAq7EJIfISQQgXsOpJCD1Y9SQEB1ZjE4IFq7EJwSRWIighsupJCT049aSEDpzGpgQHAPOwxJdAMNjH9MUWUkZgDkwhoohvlmBBRHUYlHABGYHXk+1EbWVhjo1EZX8AvGkcBSE8JkFWZPbN+yTgyXRMLcIjDbh1ZDZv7UItfNuZ9SZmtVBsHFVhqg7CNwo+1oixUTCxMZkSYWwUUmNFa8JkWstRE+6utSdqgu9be6IijG8SmeWyInjbvDpIYQ61vZKYBrE2B78cfG9iOjgvjlb4bhqkcAxspkGPIR4K44HQQBwJxg3bSG82/pqQh/uXCXeuYIxLdD3bhTw5EmFPBImwI64iwaayI3jCtlsnmbBds0LBFouLK2zWfRAKr1PgKhW6rK/5gs3KyRee5ZjEgtufOwLhmUu50KsFpxbWaQS5cFELnVqwamFJhEaIaqFXC51acGrB6IWkFqJWeFwHvuVrM22fpAWC3T+tCIS0v0Uodvvl0OALMbvTsYX8wu0V5+YyDbaQX9lHtrBWYv2c2ML638P6RXwDMVLBPau4JuSvULg+iyIU5ldOhUJ4dYZMeLxL+RRl0mxfxnyKBDsMfvejEM4444yfFf8BRMTp39vlJI4AAAAASUVORK5CYII="
        id="narwhal_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgNarwhal;
