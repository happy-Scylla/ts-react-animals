import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChameleon = ({
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
    <path fill="url(#chameleon_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="chameleon_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#chameleon_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAL7SURBVGje7ZlbltsgDIanPe0CsJ0F0NQLYJwsIMxhAQa0/610YjtcbEDInL5Fj7l8+SV0w/n4eNvb3vaf7AdL2R9WNozQK9NE6G4AtoVwhaedJ/QK2gg3gCbCFaCJ0N+hjXADaCJcAdoIf6GR0O0B5Iwa9wRyVn//6KRCgiYSegAee/IgEi6L6jAdOJEwwvzdES71YTgQ7t8EYEO9E0lCqAGVsCcMa+zdkVpOJHRbBqlqH/YEtQqPEnuaPusJh5Jw9jVNooLwE4pmBUr4BYhJjPD7+aEiQlcQBFnF3guEAAKNJEaw2GnaAYumxqsbM4522jtRRKLbK5qIBGGgiUjNLEwETsBEPPC5eafkRJLQUWKZnv5jmTDjhI7gRmaHGevdOEd44AQkJUxrHKKkShPQChUYAavP8DzTBKwywkCcyskoEElCjxNEmTDghLlMwJslGN5K8JvFaYI7jvOEV79sIGzncabLxW2ihbAWeRPBNhOWSLQRdDMBioRn5l+nxVQplnmCr76+6EaewFP95msnyJYILFHr8vVAIJgcWYJJSHjtgp0KApElzEcJfpn0CJ0mRGNJpbbRztd4liD2EuR2o18XdDcW84T9j0l/oZbh6zxHsLsRLEM5j+ANkSOYWIKMT4B73JwjzJEEudsI9OZqiSBCCfIwyLgrvyyBBxJk0DwndlVrJDZJJkcIJMggL8QWD+MCkSMY/yUZxFS7FHEVmyNol0wyzCzu5PAyYVqPQoWpPAY7+WVxp0RImQpqpT9FiJrOki9EQh+tsmcJpokw7AjilaNzLeEStq3uSehbCMsjp+EEQfvcsG7JEBSC8bmhXW2SCNY78XAdmFEI4AjWtQvLKPng+reSLgyaRtDscIeZGakuLDvMc8FItRncr8by7E7ZPVqFe2R/yB6GGyMK2WGyodwQfvYwAsHN8Gm64btc0kbKPpm0jrLTFk6jcq8uxrJqt6+MhCATOlV9x6nyw7AThPABbvmuV6HCVP+ndrBp+X7m6cHb3rbZP1AqE63tpeG6AAAAAElFTkSuQmCC"
        id="chameleon_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgChameleon;
