import React from 'react'

import { SvgProps } from '@gravis.finance/uikit'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <g clipPath="url(#clip0_11176_87959)">
        <path
          d="M18.752 14.2504C22.501 3.75043 16.088 0.751427 12.001 0.750427C7.91295 0.750427 1.50095 3.75043 5.24995 14.2504M21.752 23.2504L22.57 17.6874C22.6327 17.261 22.6029 16.8261 22.4825 16.4123C22.3621 15.9985 22.1539 15.6155 21.8722 15.2893C21.5905 14.9632 21.2418 14.7015 20.8498 14.5223C20.4579 14.343 20.0319 14.2503 19.601 14.2504H4.40095C3.97002 14.2508 3.54422 14.3439 3.15242 14.5233C2.76061 14.7027 2.41195 14.9643 2.13009 15.2902C1.84823 15.6162 1.63974 15.999 1.51877 16.4126C1.3978 16.8262 1.36717 17.261 1.42895 17.6874L2.24795 23.2504M15.752 18.7504H18.752M15.752 21.7504H18.752M19.876 9.00043H23.252M4.11795 9.00043H0.751953M16.502 8.25043C16.502 9.07885 15.8304 9.75043 15.002 9.75043C14.1735 9.75043 13.502 9.07885 13.502 8.25043C13.502 7.422 14.1735 6.75043 15.002 6.75043C15.8304 6.75043 16.502 7.422 16.502 8.25043ZM10.502 8.25043C10.502 9.07885 9.83038 9.75043 9.00195 9.75043C8.17353 9.75043 7.50195 9.07885 7.50195 8.25043C7.50195 7.422 8.17353 6.75043 9.00195 6.75043C9.83038 6.75043 10.502 7.422 10.502 8.25043ZM6.00195 18.7504H12.002C12.4162 18.7504 12.752 19.0862 12.752 19.5004V22.5004C12.752 22.9146 12.4162 23.2504 12.002 23.2504H6.00195C5.58774 23.2504 5.25195 22.9146 5.25195 22.5004V19.5004C5.25195 19.0862 5.58774 18.7504 6.00195 18.7504Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_11176_87959">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Icon