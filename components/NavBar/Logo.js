import React from "react";
import { Box, Text, Circle, Icon } from "@chakra-ui/react";
import Link from "next/link";

const Logo_from_figma = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 107 111"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M53.4997 11.5484C56.3909 11.4566 59.2589 12.2053 61.8411 13.4591L86.865 27.3522C89.2347 28.9503 91.2133 31.026 92.6641 33.435C94.1144 35.8441 95.0017 38.5285 95.2637 41.301V68.9774C94.9943 71.7479 94.1036 74.43 92.6538 76.8376C91.204 79.2457 89.2292 81.3228 86.865 82.9261L61.8411 96.8198C59.2539 98.054 56.386 98.6443 53.4997 98.5353C50.5971 98.63 47.7139 98.0412 45.1015 96.8198L20.135 83.3138C17.7707 81.7104 15.796 79.6334 14.3462 77.2253C12.8964 74.8171 12.0056 72.1355 11.7362 69.3645V41.6886C11.9982 38.9157 12.8855 36.2317 14.3358 33.8227C15.7866 31.4136 17.7653 29.3379 20.135 27.7398L45.1015 13.3196C47.7079 12.0768 50.5917 11.469 53.4997 11.5484ZM53.4997 1.0047C48.5715 0.922889 43.7021 2.04634 39.3487 4.27038L14.3822 18.1635C10.275 20.7462 6.85494 24.2202 4.39724 28.3058C1.93905 32.3915 0.511974 36.9751 0.230713 41.6886V69.3645C0.511974 74.078 1.93905 78.6617 4.39724 82.7478C6.85494 86.8335 10.275 90.307 14.3822 92.8896L39.3487 106.783C43.7065 108.99 48.5764 110.095 53.4997 109.993C58.4057 110.097 63.2573 108.993 67.5939 106.783L92.6177 92.8896C96.7249 90.307 100.145 86.8335 102.603 82.7478C105.061 78.6617 106.488 74.078 106.769 69.3645V41.6886C106.488 36.9751 105.061 32.3915 102.603 28.3058C100.145 24.2202 96.7249 20.7462 92.6177 18.1635L67.5939 4.27038C63.2628 2.04159 58.4107 0.917657 53.4997 1.0047Z"
      // fill="#414042"
      fill="white"
    />
    <path
      d="M52.6543 1C52.6598 1.70894 53.2203 73.962 53.4998 110"
      // stroke="#414042"
      stroke="white"
      stroke-width="4"
    />
    <path
      d="M34.1682 67C32.7627 67 31.3689 66.7593 29.9867 66.2778C28.6046 65.7963 27.6091 65.2575 27 64.6614L28.8623 61.3942C29.3543 61.8298 30.1156 62.2884 31.1463 62.7698C32.2005 63.2284 33.2077 63.4577 34.1682 63.4577C35.4097 63.4577 36.417 63.1711 37.1901 62.5979C37.9865 62.0247 38.3848 61.2337 38.3848 60.2249C38.3848 59.4453 38.1739 58.769 37.7523 58.1958C37.3306 57.6226 36.8153 57.1526 36.2062 56.7857C35.5971 56.3959 34.7304 55.9259 33.606 55.3757C32.2707 54.7337 31.3571 54.2522 30.8652 53.9312C28.5929 52.4409 27.4568 50.3774 27.4568 47.7407C27.4568 45.5626 28.1947 43.9004 29.6705 42.754C31.1463 41.5847 33.0086 41 35.2575 41C37.6703 41 39.72 41.6764 41.4067 43.0291L39.5443 46.1587C39.0993 45.7002 38.4668 45.3104 37.6469 44.9894C36.8504 44.6455 35.9954 44.4735 35.0818 44.4735C33.9105 44.4735 32.9852 44.7372 32.3059 45.2646C31.65 45.769 31.322 46.5256 31.322 47.5344C31.322 48.2452 31.5328 48.8871 31.9545 49.4603C32.3761 50.0106 32.9032 50.4921 33.5357 50.9048C34.1916 51.3175 35.0701 51.8219 36.1711 52.418C37.2252 52.9912 38.0334 53.4497 38.5956 53.7937C39.1578 54.1146 39.6849 54.5044 40.1768 54.963C40.8562 55.5591 41.4067 56.2698 41.8283 57.0952C42.25 57.9206 42.4608 58.8263 42.4608 59.8122C42.4608 61.3483 42.0977 62.6552 41.3715 63.7328C40.6688 64.8104 39.6849 65.6243 38.4199 66.1746C37.1784 66.7249 35.7611 67 34.1682 67Z"
      fill="white"
    />
    <path
      d="M60.6141 41.3783H65.0766L72.807 58.746L80.5726 41.3783H85L73.0882 66.6561H72.5611L60.6141 41.3783Z"
      fill="white"
    />
  </svg>
);

const Logo = (props) => {
  return (
    <Link href="/">
      <Box cursor="pointer" >
      <Logo_from_figma {...props} />
      </Box>
    </Link>
  );
};

export default Logo;
