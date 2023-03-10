import React from 'react'
import { Box } from '@gravis.finance/uikit'

const Icon: React.FC<React.ComponentProps<typeof Box>> = (props) => {
  return (
    <Box as="svg" width="8.1rem" height="8rem" viewBox="0 0 81 80" fill="none" {...props}>
      <rect x="0.333496" width="80" height="80" rx="40" fill="url(#paint0_radial_11805_1376)" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.3079 28.4145C42.0165 27.9587 39.6414 28.1926 37.483 29.0867C35.3245 29.9807 33.4796 31.4948 32.1817 33.4373C30.8837 35.3799 30.1909 37.6637 30.1909 40C30.1909 42.3363 30.8837 44.6201 32.1817 46.5627C33.4797 48.5052 35.3245 50.0192 37.483 50.9133C39.6414 51.8074 42.0165 52.0413 44.3079 51.5855C46.5993 51.1297 48.7041 50.0047 50.3561 48.3527L52.61 50.6066C50.5122 52.7044 47.8395 54.133 44.9298 54.7118C42.02 55.2905 39.004 54.9935 36.2632 53.8582C33.5223 52.7229 31.1796 50.8003 29.5314 48.3335C28.1799 46.3109 27.3451 43.9969 27.0883 41.5937H19.5034V38.4062L27.0883 38.4062C27.3451 36.003 28.1799 33.6891 29.5314 31.6664C31.1796 29.1997 33.5223 27.2771 36.2632 26.1418C39.004 25.0065 42.02 24.7094 44.9298 25.2882C47.8395 25.867 50.5122 27.2956 52.61 29.3934L50.3561 31.6473C48.7041 29.9953 46.5993 28.8703 44.3079 28.4145ZM57.0034 41.5937L38.2534 41.5937V38.4062L57.0034 38.4062V41.5937Z"
        fill="white"
      />
      <defs>
        <radialGradient
          id="paint0_radial_11805_1376"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(40.3335) rotate(90) scale(80)"
        >
          <stop stopColor="#FAFF1C" />
          <stop offset="1" stopColor="#0FBD00" />
        </radialGradient>
      </defs>
    </Box>
  )
}

export default Icon
