import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAxolotl = ({
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
    <path fill="url(#axolotl_svg__a)" d="M0 0h128v128H0z" />
    <defs>
      <pattern
        id="axolotl_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#axolotl_svg__b" transform="scale(.00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAACC/cDDvEN+Az0BQn2CPr8pKUQEAAAV+SURBVHja7VrbloQoDFzuBCRS//+z++C1pxVB6bMPax5nbClzrST8888rr7zyyiuvvLIX0UOkAnTh/78GYCwA+d8BcB4Aif8OgAIQHNn4KwBmoKQCZgkqUXS7f2sAIIvwCw1IHteTP8SnYQYh7fQX63oDcEPyKEkeFgMAsKavD0idcS1eu7ieL2U3AI4VKsXOBlAK8J0AOLK4I8H0AXD3eO7kA+nW8fCkTRcAEffF9QDgMgCrRh1nn45V4QAgy15h+KVKSTU2cD+oBS5ZAEFRjWMG1x9AbosD1x1AY0SmHxQjFy/qwYfo7gBiatLBaUG6DSA3ZgL1E0JiwmMjPAKwJYEKc5ywkhoAw/n5ngIAH2WFCj646dAC4KyYy2gEzW+uMcIuIbvQAqBQSoSFj6ISwC4ZDGgCMJwD4OmzJNpUMLYBSJfuOFQBGNfnvWoCULLB8kVV2citeBsB0BUA35YLVBuAUCC1c0KqZWcrt0otABTAZQDVbDEuL6QWAIQLFci2shwBNCUiRnnGIKi+KLq5YzPVAIwR5qK/lA1FkaeQtUJwrQaCEbY8ZWjpF+QUMVmwqgVA1iSU5iwt/QLN9mJGtQYk7AAA+QxAAyfwbpoZeF7dusIJE2zYQuiBBwJxZlJ5M2kJwPip4uP+wjScn7eisTj1WAKwmEkdMYq1sKMlBp39fJdGCYCdYa5eZp5FwLAVrfnNztoSgLw43qKC72EXtxkg/qFnGbkEQC8ZM54xW2PbDOA/FaABLgGQ65OLCuxnMnD2ngFmBRgLuGIYqqWfMMftRcpEsSBEOezK0PBZlV0AcjkP8AqWLnu88x5ummfKnb7i6r/DRSKy69PLl9gDcn4ibjfG8OrrI3hSRRkArQ6zxvuwn9WqCyrmFc1jW7nRtnGzKpcBkHF2Dr5hjfg5Ms1Y3ZsHLffEOQoXZ//1whQzofTMs/+kPO4HXtyQ/wBAbR8ATyHOJo3sZdEEhDFPmtoFnBbs0SyePzr1BABjgr7wgQA/5+Dt9z7gmVg37RFygLpyQrP9JqGXxMkdvIWVl3yAtjFXLwS8JXBdQUjClsjGHsf7uFUEVcOI9mglPT4/7DLKlGAuKZneEer8XANpM2Ws5IR5HbRRDxuoP5TgGsBWxNFTVD0rNn1P/sNwa3vDzmJN05yQf3d+DQCSxwgsxVguC55jPBqrWyMM1wPQCKM6eovJusjLc8z6sHMYk195ReWA4jCle8BsQXJQdDxgjnsnOzz2AS+EAmQhQ4/zAwfda5sPCCGMP4pjp03JQ2l+4Btids3TckcHWf2iOx73txhOVwfV4/qTgVdhRLjkGokuANTJJixdDae/o6ATAFiWblBlLurcQaagWwCoXx7kWwCKoyj79zND5eKiZWdki7XtI+P6qMus6BaAsbybdXr56sxle/FNAOV5aJBCuMjE0U17/trtWcParsyKLS0vZtuyP2y5wHDRkdmkY+SrpjU8WFzGvlTkxua0AzManq1uU9ccdGd3TL3Pb15e8wOOfnirsHl7bm6PB5TstL6/d6HL8tP7A5JTQDLrFZ6248kJERUUxXsAzHp7UkUhhNNNY6LA0/FLrXCNAORndlODEEIYqnQGpaXYHb/Uq3oAUR10PMtlMsqqIJl40vj3WM/XdkaHlc2TabvdfGQxb2oAHG5kkmueWLt0VhYqp2Q1N4Kurzh/r1AuASgAQX9EvnW3AMj9O7LOlVMyVnpuztf703zzlveizGwnCseZKsOQAfghzlzXi7vipzcEN+4v+F0DGKaYUUDQDxQwDfwGC7CQaescrwFwihMbspKeKEA4AJEnUiZ1bqwFCd4IKl8TvxIGouA/+89aAGNyQtCj84WINgoRczWAV1555ZVXXvk/yr8vE3pHmVRFsAAAAABJRU5ErkJggg=="
        id="axolotl_svg__b"
        width={128}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgAxolotl;
