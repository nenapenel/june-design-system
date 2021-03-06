import * as React from "react";

const SvgWaterBattery = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" {...props}>
    <g fill="currentColor" fillRule="evenodd">
      <path
        d="M13.043 3.973a.464.464 0 0 1-.462-.466V.466c0-.257.207-.466.462-.466h5.5c.256 0 .462.209.462.466v3.041a.464.464 0 0 1-.462.466h-5.5zm5.038-.932V.931h-4.576v2.11h4.576z"
        fillRule="nonzero"
      />
      <path
        d="M9.846 32.05a.464.464 0 0 1-.462-.465V3.535c0-.257.207-.465.462-.465H21.74c.256 0 .462.208.462.466v28.049a.464.464 0 0 1-.462.466H9.846zm11.432-.931V4.002h-10.97v27.117h10.97z"
        fillRule="nonzero"
      />
      <path d="M11.031 30.26h9.524v-5.39h-9.524zM15.811 13.179c-1.611 1.965-1.905 3.22-1.832 3.959a1.809 1.809 0 0 0 3.61-.054c.125-1.628-1.778-3.905-1.778-3.905zm-.584 4.751s-.416.187-.68-.367c0 0-.491-.603.361-2.14 0 0-.402 1.15.416 2.12 0 0 .145.262-.097.387z" />
    </g>
  </svg>
);

export default SvgWaterBattery;
