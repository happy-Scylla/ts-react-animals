import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMoose = ({
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
    <path fill="url(#moose_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="moose_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#moose_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAM8SURBVGje7dlLcpwwEAZgu3IBN4J9VBP2IZgD4CkOINB//6tk0TyE1JKA1LiyoBeu8ozmQ8+ehnl7u+OOO+74v+OdHu0fOhmqbeljFUoA+hxQAOg3oQMwnhMqAHYTAMASUdG22a4Un09NRB0A/FyEHwAAIqoZSsbcBgDw2xcKAGjy40cTE0oAMGlhaSMJDVUAMOVnEJMvvM9CfVwoJKHn+Z2iS9JOzSooSTAsGKJB3B28CBXPWQkA2O8oTItQQtyi3E+++Ax5gl2Eitv658DtPjd19iSLutsPRlhGuwgAgMkX+vmjEIV5Aljgv2YT+IUpKfDcNdy05ktuAn8IAwAYhfg8oKm2ltCO0GGNaW4qrgVMtbWEk2F4N3LYcjmpXnAP3Wu5QunIVUTgWRq2hsYVyBG6yOnoAGB0Guqd4HQOKcE6w6WdUB4U4A5iJxTe28gLei+4qxERvAaWPEF5DRoxQTrR+wINwSiJiD4B2zi7etcFTyiFqSyY/aJwmGMo+J3QzuQ18tu+UAbjLJ0ul0IXfMG7inVf6MUuBILfCWf2x7CDkuBPlvvvEC6EJAQbMxY6JgSnIxJfFBWCvS3GduoEwZ9yKaxOCkWecE6MJORn0z1yokBqOAxEhORA7P7QR4QwG22r4H2jRwV6yN0I6t64QNSGRhu2SglB2hPLq1cLUl48J1SAnWejHcT0nxPqtSgbKXb3kBY6oOHJ4AKuOS0Ma+1nSElFTVYAMHG+sFRHKvakEJzR8aygkK8HXi1UyFcUrxa6dHb6FiHML+a7BSHpj+cElfqyOyQI38H2nFAJqfqcUCeqhmMCl+HtHJ+RDZESht3cRW6ckgIEwZwX1pHX54ViV/TNlc0pQe22YRHbUnnB7rbXFWFewO4fBOOe0/HCWvBly+jxPiBAOzv8mtA7VWp//lzw2It4ojx0Np2Drq/lh2bL2heznKGLWW79nFFXs30dCPqkUAJ4DrPwHORiLlvDNCULlroLNQzVQE81jAI0DVdquQKwmh5GTZp+RR4EpwWq1wVUsYfRGaEY5huKR6QWzAq8q57tEH9wmhO2jRl78poVSHWxe5OjApFq2zb+7sf9q8kdd9zx2vgLQbh6WVz//GkAAAAASUVORK5CYII="
        id="moose_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgMoose;
