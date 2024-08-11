import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPanda = ({
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
    <path fill="url(#panda_svg__a)" d="M0 0h129v128H0z" />
    <defs>
      <pattern
        id="panda_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#panda_svg__b" transform="scale(.00775 .00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAANkSURBVGje7ZhrdqUgDIA7rwWIuABPLwuwXhdg72EBKu5/K6M8AySo7Zz5ZX60esUvIYQk8vZ2yy233HLLGflR7cL6demrktTP9dWZS4xQr7ssLQ146hEvimAAG4IEPOyIT4IgVzhAS7+Lv2NuwNqhBO6fr3Yevb192XuvYlUoQT9f9N9JawwvaJ3WhN79kBF2E1Rr5qoSgEEI66Nh+z8jBOGsNxcxQCOkQbuLjCA12A6YtCIoqt0nMeoBXOtICSw4cDNifqypzNyZoHWMGaEOcbBdqjUXaT28SbNfpoQmPK9WSrqgY8EIoyMMFKEKOlBC9+8IzbcJ4rsERnpyPCCMRyb4eGAYgfvVpE3wStDVrL0GUSCoQkT5qC6Z4IxAo9rvLFEkKHpn6Tc7a8LSsT55s6/eB2cEsbv3PKs6DfpMU5ROPSZWVcWoDBOy4OwdnibOAf5AZ1rVZnExprE2F7P9lCV3VaXx3uIEFlkMxk+h6JUrjnkOKhZPEouz85Osm1ppUOiMUqDuiXCPEVii0HoG1tEmOBYjiNgNbvUmWP2DUZQn9dP6A7rSEvrWZ+GRIAgfTtJa0gBHcvNo8GpyAgt49xYkNMYfwo/KCWB4gcALMSlDMpUKJm1XLMcqCjt0b6YdkMjWwhW0ESE0yOgB7tXotwWv/jCfA32xXY0rHVieTOLJb864o3R7Bcn22eAm31megFb/jCDjpJVMLSUMOaFOk1zUXWQEmRNCqp0RbpsScqc9kOYFELqE8CsbWkf1os0S10gQQpoN3SFDk+2UEP6kff0QXuORK+QBwZn7AHMSMFp9/75QhDkOG7B8bbxAJEGnclczF+hSFdcxmrB9R/USzqkJ9fsd9IkFQtpwSPzRMWGxXmH+5iqhteWJ+5urBDP/zta55iuE2hAGvSZfIjCzGEK745jwG/mWkN4PI9LuT8TOAiO2uNIN0WMPsvWQ8JNqX7t4NwAbiQyTtq9cJemKJmBjbAuOf/RkeRJrhl9Psx0k2h4T2f60zNjXwSVBevuLBKS3Hy4BFHF6cMUNOYFdImAnGJemoY7OYc5MongWdGYlUAK/ZALaV8srJqAEfsUE/PtiOL0QFIGdmkfhbDBtO+g6RhNOIPyxH0E4mogKbRJFqKr3AgMeoL7dcsstt9xyy/+Uv0IU0D8W5O1uAAAAAElFTkSuQmCC"
        id="panda_svg__b"
        width={129}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgPanda;
