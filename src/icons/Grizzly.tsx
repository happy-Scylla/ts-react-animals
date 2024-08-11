import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGrizzly = ({
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
    <path fill="url(#grizzly_svg__a)" d="M0 0h129v128H0z" />
    <defs>
      <pattern
        id="grizzly_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#grizzly_svg__b" transform="scale(.00775 .00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIC/QDbf7tYAAALySURBVGje7ZhblpwgEIYnOckCSukF6MQFdJ9xAaTjAgT//W8lDyCtUsVlPP1mvXnUj5+iLsDHx2WXXXbZu+0HERF9ArAdyaYGAEYTERFHGAAAkBFqBABYLRCe8KYlwug/sDxBrQAs6x/9AMD262MbvrizhCm89yKadUj82UtwIiKCAgDT90HE80WECRIe/acXERFa/6caARwADjF4LzfuOSIM3kHUAug2c3b2RRQ8NAFgCN4/brqzwtG6JjhIAegiQuO0exFmiAj29lqkCZg5wvo+Hh8AMAaR1AJLRLgB8zFw4pn4DxrAcIQQzYNECMGZI0ynCbfTBNEPupDQSoBXygmEOSchiFAcoQ0jyBK2nyxcRNmshFUEG5MhL1ISvAg+L0JuJiU4EUJu3lwKpyUAi1wfFAA8uowE4F8v1Sg5loXoTNXqvH3x/aJchM30rDxA6lmlCCv3TRrLNMiEtnAWi0gYSz0p+aHdDMKsiz60ZoYwblpzw63gsCt3MaHZVfWIYLb1M9v9sxrY7k+78Rg/dGrvS7b7l9vMEKpSE5YhjFUE6Iig6gC4c9W+yuJqP1US4o4zVBIQEWoB0AfCr2pCdyD8rCbMJQQTdk0FhN+JPQu/pVmKCPdE/TVFhCWxvSwj2ET9LSOEXv99wixX8DzhMbr1bMJDLcEtol9LZkWzBOs82NEAwHyHACf/DEHTaxYzsyBLNi/uNAGLCyjNLEg+sxaiviciavqOi8s5Xx80EZFapBNHl69Ri/tVC6mhC+rkg+gTsN3m+Jyqk+drdW2/mN/Qs873zcreze3tm9P7h7pp6LOnA3P6dHB/1+lAVUlg99VTjQSWoGok8OeLsuTwR2eWUHTI8YdrgVCAsDpNyCICQCQcbtOEbU2SQH8zJ9U8IZGlW0CKICJ2gCSBL87H+9skYb3STQEyBAYR3SBnCMfAsPH9cZawQzCAAsIGYbgb7AJCCE/DXn+XEDyCB5QR6Ola+AkCNYdAlAmXXXbZZUf7DxU3x/QTm2QRAAAAAElFTkSuQmCC"
        id="grizzly_svg__b"
        width={129}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgGrizzly;
