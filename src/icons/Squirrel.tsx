import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSquirrel = ({
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
    <path fill="url(#squirrel_svg__a)" d="M0 0h129v128H0z" />
    <defs>
      <pattern
        id="squirrel_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#squirrel_svg__b" transform="scale(.00775 .00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAIzSURBVGje7dhRcqQgEAbgZPcE7TgHoCoegCQewNRyAIT//lfZBydVYHcrHTJv/o9M+ck0tFK+vFy5cuXKYV5pn4GIiHw9+BEAAMjvRHQijFiJKMCV6ON6APg6FQIy0QBEGQDciTAAIJoqYS4BrCfCBIAGlMKIOu5QGACApkoIO2E5FEYAGFAK+ykgHQoBAKZKmPdCPhKK+30LA1iOhIkLo0ko7xc52iBMghBMAgQBFmEEgPVWCYNJCNu2n0vhxgF9Nbeq06mwqsJ2pXvULqqLqe7qxz9On1Ud7lxQO2u38EkT1O7eF10V1CfMvVFY1KdcaBD+IXnShBuQqg0oCY/qysIdyPXS/UCAn06E9UyI4URIZ0KdnwnfG1IR8pGwdVAsGskJczsStv2wFKvhrcIbgI+yOSTBHwn0+Xjd1YtvEW5A9XaRhOVMqJIEIZqE3C1AEJJNcN2C50K2CYvQLzYhdgtJEFy34E0CniJEm+C7hYULq02IXEg2Ye0WEheyTchcgE1Av+C44G2C7xbiM4RoE9IzhNUmQD6gacKbIDiLIAHwTMiqIAJY+NlGEwYRQGwXJllYueBlQZkCUrMwKgKahbldiLIQNME3CloZ2oWbKkQmJFEYu4W7KqRuIfOfjAL6hYmNOKMwsxFvFEK3wLN0C/ESLqFI/57sF6zdzZK7hbVbWJhQf85uKcNemG2AcI6yAXBM+GufQp/guPDHBHyRcLYPZmAvjM3X53eShCtXrvxq/gPpmvU6il377QAAAABJRU5ErkJggg=="
        id="squirrel_svg__b"
        width={129}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgSquirrel;
