import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWolverine = ({
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
    <path fill="url(#wolverine_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="wolverine_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#wolverine_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAALZSURBVGje7ZhtcqQgEIaTzQlAPACV8QAu4QDOFAcYwftfZf1WELsb/LG7Vb4/kpo4PNJN0x/5+Lh169at/0SfjHFlrJJslhq1flwEER7dqHr4Hv/pZtl6WlmoziqYIJY1/ZLvbqfnAJiITkKEclnh5KPzZBnTyzOIoNcVrgtk1/11EiB0JDUIwRqM8D4nfE0+LM4Xv4YfLUwYnF6drLdyfGZRAj91QP+wpBDOttCfI43AgVOgEapzgqMQag6GAkL4NXynhAgWOYsholo4oKSGCRqN6Dcck5/V5XshSATobnIKAMwPTBMILUigmNGABDZkZq5+QCNgwiweMceqeoA3NEKQqncZH6sXO/mZ6kmtOHuJMwCZsLvmT5ZHYGYrN5mExQ6ZTZg30bB8gljyazaBjSnhEkFHvJBOYFcJ9q8QuOr3rlZPphOKLRDFGk/ffWisTR1CKLbqUsxZbe2hflMIkWRbs4d/xWACkmtrlCDQVI8RDJ6pYQIn1BuYUFLKBaVmvWL+fOrlcHGCi7WUbjGRYoWNEewU48NvvG662KG6LUQhwvzuV+xQZ+e8kXjAz6JGCHgDgcUkGhAWIxRoM4feTYIbEm63mhW4ASGI4B4Gf2rTclQbdgEzFMmTOkgnfs6gZNr9nmXYDrWkbG/8o/NCRJIIlR8+EbMwAvffyY+Hg1Y94y05+IVAEJ7nqsPpEmq3Z7gOyg2JUO3PX4d+pBB4fA9NQgdidpaXoR9JBLF7LQ/9SCLwLaLk6pUmqY8aV7m+ExL9m5UOGlMKoVjsNt3il3diL2emm/yYgiBoTEmEclzzmM0PJgQSYQuJVhwafFpHusbl9N8ll97TinDQTe+K/eIrMwhlWOuSCbw7JqfE3l6HSf7KxNpmzhcm7secmdflzjg87secqVlenZrbC5Oan+RzCNXlqZlHB/ekedNcnppFxI9pBB4zIonAqqMfEwm8TiLcunXrn9EfdCAUTiCcYbAAAAAASUVORK5CYII="
        id="wolverine_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgWolverine;
