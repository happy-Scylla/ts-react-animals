import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWombat = ({
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
    <path fill="url(#wombat_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="wombat_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#wombat_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAG8SURBVGje7dhNbsMgEAXgHCGAs6+VZl+SeF9XYl/bvPtfpQs3iQ0MzJRVJd7KipRPw7OMfw6HlpaWlpaWln8Ylc15AAAs1+2PR76g1/8DgLdl4YRrOAC2sQwBIzHAmi+G4MkBdlNkhNcQ0QAAgL4sLL/HBsksZQHr4R1ExrJglVLaUQB8zxEMMpmLwkSv4FVmVpiHPICxJBTjqwXYamGuFkALA7jLIIR3JoCZEAwXgCcExxaQFjo+AJsUBoEwpQQtALCkBMki4FOCZBFAShABeIsFIxM+YqGrFi4y4TsWHADPd2JBrztk93ehqxYuqF2FQ2WTGrWCqRZO1cJQLaBWENeAz0AQ1xBdWUO1IAbCPUpeQ7hPymsI9+qLWAjvF04s2GqhDwTxyYzu3Z24yFAQ7w5TdPeXDpF4CjoLi0w9gejbXVAk9SRmbo5ZZO5djzPKlH9b1Jwis4LhFJkVnheqpxbkFVOYlFLqlih3KQjPi2R8naJ7WCRP6Hc/b4axBWG7WprmCEso7OiMYHZFkjRHsAGwpzPCKV1kSDOEqMgnXfqK8mh8pgRfEhxV5J4WfMkh6OOhpaWlpaWlRZofI0qwfBNtipMAAAAASUVORK5CYII="
        id="wombat_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgWombat;
