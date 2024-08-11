import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKraken = ({
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
    <path fill="url(#kraken_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="kraken_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#kraken_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAMpSURBVGje7ZltjuMgDIbnCgvJAVDLAWjKAdIRB0gC97/Kdpo0MWDz1dlKK9VSfrQpT7GxXxzy9fWxj32MsD+EMW0Fda+IwIxzTrxC0HeAo2ZRQujcw+ZmAnObqVaCfBJsI2GfgnNjG0EeBNtGcMBEC6GDhLmFoCHBNRCYB8BimSP0PmGuJxif4KoJgROYGxlCFxLmWoIMCbaW4CITdQQeE8Y6Qh8T5jqCjgm2juBcPhBJAsMIYw2hwwhzDUFihKWGoDGCqyGggFCyUwSGE8ZyAscJUzmhxwlLOUHiBFtOwJciXIwUgQAEed1CUKUEThGm9xF6irC8j0AtZpAQLQT3PgIJ8FOqiaD+HwL/JcLgjx3itM4QJl9mto8JQgcWiq/z7f3p9z6BmZtPkGBHKiJ0bvEJGuQ8X7c44+94xifIkNCDfEusxQRavZgw1azm/TdLGEngRgHhvjKTT+BwU8sTfrbFMcgHWHl5wk9YVUDQQIJMTh8eAhLm5GO5F1GkMHrVzICwLcCQ2DY3pT2ZrRUI64KeOiVXIaGvA8xxbbI6wohUt6wBWEwfqiahUIXpqqKAalSUB8swXH+uyAdBEJiJ/6qbkckpUidDxD1e0sYxVgmlDRHinmgiTDaV1mrf55GtF4yNyKk9h/Gcu/U6/LqU7BdsGJ4UK9dr/TAMqri334vEbFf184UpaEj/8dPBy505S5T0q91gYR/VZWoyS9h9AOm5GMQPirCXxtz7uRn1QQThqC3RQ5k3cShwwgG4wYBaEByVJJzg2hsvHY8cudEEpuEQFmjCAVwIjeJXf8Q670U+mxeoPsslJuhIhiRcBRsJmBVxB3LcVEd9KnbUpY+Yoj4q0DH+3O81SKUrTeBhmJ5OPOOx1SW7UoTtn74H4TdT457l+41tAwrjQJzLWW82dadq5uhAu6ZTNW+UaTkT8wZ1DSdaZ3+MqT6PYoGc8Gqt1qE0S0QmU4Rz5DfD/Mg+692Q78YypTXYLnmOHxczSmuJM09RqrTIuxsNKj9FIAE7ItfDoJ2C1yGpAsKNegd2KiGYXWLQVztXEEuCwBPjH/cvRCQ/9rFfsr/S0BXOO1hKugAAAABJRU5ErkJggg=="
        id="kraken_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgKraken;
