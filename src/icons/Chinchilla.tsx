import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChinchilla = ({
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
    <path fill="url(#chinchilla_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="chinchilla_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#chinchilla_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIC/QDbf7tYAAAJXSURBVGje7dhRcqQgEAbg7N4AhANorQdwKx6ApDyA6H//q+yDOuBINy1WbeWBfkqlKl9+oBlgPj5q1apVq9Z/qV8qKj3Cq1xxghkBrE+ECQDgHggjAGAuFzQAIDsTjNBsAsoF+wOE56N4PpNqE9YHwuN+6LcMbbEw4eEojpUAhkJhfAlLmRAi5EJQwhgJS4kwAdIQacGcAD5EWjhH4EMkBX38a0lPJIV9GuewIu6ecPxdJKz3hBHvo+BCJIT3acyEuAhdh2Q5qfAbRKVCfHXuhpAI8Q0s7oZwCWG2317mYRSH2I/Vi6DFIfaGv64mKSAxCGC9CvQwzvvrOE6uwkQKi1AwyIfQfzhBfWdDGGDgBPUFwFsmhAU8K5zO/lQIC+AQZsGJcw1hAbRZQTMzYQEMWcEwy2EAzJrsyXPTpkOMgN+F9q6whZiAxeaEhuuJBsAuOFLoqbZq92neBfLkNfwmjyJRQmZ/vTawF53+iWG8xjhTQkMDmOOIAyVYYKEEH++alhJ6YOY+7Wz4mb7DOG4ibJhWch5WuiOGIKz0TUwzPTUHYWZvxRPTUzYMSPBCSS1G9HoRvFAYwYteKEmhD831THCiN06ypaJNViaYaKNzQk+Oogm7tFDoo0/d/Ns/IZiwErxAtZSf4mtRibCGdsoIGmwNecGwwCJ48ypJBF7oBRF4YRJE4IVGEIEXlCBCRujZw1MikFcAJxVUdgxZIb0an0ouGOrgFAq668YcwArpefROLvT5IRQIn+qZ4Ft1S3hfyr+t/BuM61J2XSt8NdeqVatWrR9c/wCVkDxzGnSY8AAAAABJRU5ErkJggg=="
        id="chinchilla_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgChinchilla;
