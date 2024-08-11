import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlligator = ({
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
    <path fill="url(#alligator_svg__a)" d="M0 0h128v128H0z" />
    <defs>
      <pattern
        id="alligator_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#alligator_svg__b" transform="scale(.00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAABBgn88g74Bwv6/fj0BQMPzvtkoAAAL/SURBVHja7ZrLkqwgDIYH5C6ief+XPQsRvKBIDzk9i3wrqqkivwRDEvvnhyAIgiAIgiAIgiCIPwVrgA9CAgBIMfC3M5EeApSAjBY7Q1zo3ZRQOAIMHNF2m7H6NGUQBHAHF9ZN4OI643hvAVxCAcmfZroKKFoBEIyJ8ozrK8DADdbezZieAtSdFdD6dkp1FCDgA0Q/AQo+QnUTYD8TYLsJcJ8JGLsJ2B80b+7k+Gk8HdBuAk6vd9kjkjM2HH/CEBDOO5KYGWPM374H/0nAKWCOvLuA8dYFjl1csL8SegkAZ+6iki/NjN98DQ/n4BuBaGX4XiiO0UC1CAjGeeiMey1ATRowmN8J4BMg4V8JCB7QGF4IGAARXxcgAJWlJmDAtQ+iIiAg2wf/LIBrbAGwPAoQ6PbBPglQ/ezIyThdPgQPArptQCzLrS6F4wcBnU6AnlNILxSSDwLmjuFui+q6RUCnK+BQBAwtAly3YHdTSQAAAL8X0OkEVKpZdS9AhI1pSkNh0nC0aeiGNPRzHhb6EabBBXrLnLn3aahlTsfS2kuuNAJMR3//QkBayuSuxpRL2zFmNGtyHOLQp+J7O/FHAWOLgHh+lE4J5AIAcWPCltGsjypzmuyOzzofWlq6IRBtS4mcxTsAiBsjU7uH+/S2r+uHQ8LsHvP4p1AsV/Uh135zbnCsK2meHlXz1UPbxoyldsSiWy4jsS4Vw6fMJa7LWylWD8XdWHIfLJRC4dX+43U8AIDJsWvIJziwKQ9F7vxsoUvzYzXsVqeYxoSEA4DOondDr3Zr55ibLw9x9rV3rtjRnFjtOt5t2ofDXySl6BkhuEpa7rAF1AoThZyU1ksz5LIg1GtD1Lx4fFOeIyqIl0qtOMVTML9s0Vgk++Z1k0qhvI2ipU0XHJ79l00qZUeNY7+lTRfeYFv83+vT7YGl2lPSgWEKqHbVBGe4AhhbHg6tCwhfz68E8dI8lgDGlL2kQNIifb6/PQyzcdEZ0pm5/P8FRv8UIQiCIAiCIAiCIIg/xT8d3S33YbUCQgAAAABJRU5ErkJggg=="
        id="alligator_svg__b"
        width={128}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgAlligator;
