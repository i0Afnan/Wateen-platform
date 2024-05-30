'use client';

// internal
import CustomLink from '@/app/components/ui/customLink';
// external
import { Box } from '@mui/material';

export default function Logo() {
  return (
    <Box component={CustomLink} href="/">
      <svg
        width="135"
        height="40"
        viewBox="0 0 135 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M109.335 16.6593H95.0273C94.8382 16.6593 94.6936 16.4908 94.7222 16.3042C94.8469 15.4949 95.0962 14.7324 95.4691 14.017C95.8975 13.1979 96.448 12.4876 97.1224 11.8857C97.7965 11.2841 98.5685 10.8126 99.4382 10.4715C100.308 10.1316 101.236 9.96089 102.222 9.96089C103.208 9.96089 104.133 10.1348 104.995 10.4828C105.858 10.8307 106.623 11.3062 107.289 11.907C107.956 12.509 108.5 13.2193 108.92 14.0387C109.287 14.7534 109.527 15.5101 109.64 16.3081C109.667 16.4933 109.522 16.6593 109.335 16.6593ZM112.639 17.7034C112.639 17.1587 112.6 16.6274 112.522 16.1088C112.394 15.2608 112.161 14.4472 111.824 13.6691C111.28 12.4148 110.537 11.3203 109.595 10.3849C108.924 9.71953 108.174 9.15308 107.345 8.68557C107.01 8.49639 106.661 8.32352 106.3 8.1666C105.046 7.62298 103.701 7.35081 102.265 7.35081C100.845 7.35081 99.5035 7.61972 98.2426 8.15573C96.9807 8.69246 95.8826 9.42488 94.9476 10.3527C94.0122 11.2804 93.2697 12.3716 92.7181 13.6252C92.1676 14.8795 91.8849 16.2172 91.8704 17.6378C91.8704 18.0151 91.9932 18.33 92.2397 18.5841C92.4865 18.8378 92.8054 18.9646 93.1968 18.9646H109.617C109.616 18.9661 109.616 18.9672 109.616 18.9686C109.793 18.9686 109.933 19.1165 109.924 19.2926C109.811 21.5098 109.318 23.6611 108.455 25.7018C107.979 26.8286 107.389 27.9154 106.702 28.9324C106.021 29.9399 105.239 30.8872 104.378 31.7483C103.517 32.6094 102.57 33.3911 101.563 34.0717C100.546 34.7585 99.4589 35.3485 98.3322 35.825C95.9877 36.8166 93.4969 37.3193 90.9285 37.3193C88.3601 37.3193 85.8692 36.8166 83.5248 35.825C82.3981 35.3485 81.3112 34.7585 80.2943 34.0717C79.2871 33.3911 78.3398 32.6094 77.4787 31.7483C77.4762 31.7457 77.4736 31.7436 77.4711 31.741C77.4095 31.6791 77.3424 31.6251 77.2714 31.5787C77.0536 31.4181 76.7854 31.3228 76.4951 31.3228C75.7656 31.3228 75.1745 31.9219 75.1745 32.6612C75.1745 32.8786 75.226 33.0838 75.3169 33.2653C75.3775 33.398 75.4619 33.5226 75.5721 33.6328C75.5757 33.6364 75.5789 33.6401 75.5829 33.6437C76.5647 34.6255 77.6451 35.517 78.7939 36.2929C79.954 37.0768 81.1945 37.7502 82.4807 38.2941C85.1571 39.4259 87.9995 40 90.9285 40C93.8575 40 96.6999 39.4259 99.3763 38.2941C100.662 37.7502 101.903 37.0768 103.063 36.2929C104.212 35.517 105.293 34.6255 106.274 33.6437C107.256 32.6619 108.147 31.5816 108.923 30.4327C109.707 29.2727 110.381 28.0321 110.924 26.7459C112.057 24.0695 112.63 21.2271 112.63 18.2981C112.63 18.2554 112.63 18.2126 112.63 18.1698C112.636 18.0155 112.639 17.86 112.639 17.7034Z"
          fill="#FF7600"
        />
        <path
          d="M0.122377 1.91387C-0.0370839 1.55182 -0.040708 1.20028 0.111504 0.859255C0.263717 0.518589 0.521391 0.275412 0.883801 0.13081C1.21722 -0.0141544 1.55788 -0.0181408 1.9058 0.119576C2.25371 0.257654 2.5074 0.507717 2.66686 0.870489L12.2363 23.0747L16.7596 12.6572L12.1272 1.91387C11.9678 1.55182 11.9605 1.20028 12.1055 0.859255C12.2504 0.518589 12.5041 0.275412 12.8665 0.13081C13.2 -0.0141544 13.5442 -0.0181408 13.8998 0.119576C14.2549 0.257654 14.5122 0.507717 14.6717 0.870489L18.2385 9.19977L21.8485 0.870489C22.0083 0.521851 22.258 0.275412 22.5991 0.13081C22.9394 -0.0141544 23.284 -0.0141544 23.6319 0.13081C23.9799 0.275412 24.2303 0.518589 24.3821 0.859255C24.5343 1.20028 24.5311 1.55182 24.3713 1.91387L19.7393 12.6354L24.219 23.0747L33.8537 0.870489C34.0132 0.521851 34.2593 0.275412 34.593 0.13081C34.9265 -0.0141544 35.2744 -0.0141544 35.6368 0.13081C35.9851 0.275412 36.2311 0.518589 36.3761 0.859255C36.5211 1.20028 36.5138 1.55182 36.3547 1.91387L25.5241 26.9894C25.4081 27.2797 25.2233 27.4971 24.9696 27.6417C24.7155 27.7871 24.451 27.8516 24.1756 27.8375C23.9288 27.8375 23.6896 27.765 23.458 27.62C23.226 27.4754 23.0521 27.2648 22.9358 26.9894L18.2385 16.0935L13.5406 26.9894C13.4247 27.2648 13.2511 27.4754 13.0191 27.62C12.7868 27.765 12.5407 27.8375 12.2798 27.8375C11.9891 27.8516 11.7213 27.7871 11.4749 27.6417C11.2284 27.4971 11.0472 27.2797 10.9313 26.9894L0.122377 1.91387Z"
          fill="white"
        />
        <path
          d="M37.6529 17.7464C37.6529 18.7905 37.8522 19.773 38.2509 20.6935C38.6495 21.614 39.1895 22.4189 39.8712 23.1075C40.5529 23.7961 41.3575 24.3437 42.2852 24.7492C43.213 25.1555 44.2136 25.3584 45.2864 25.3584C46.3595 25.3584 47.3597 25.1555 48.2878 24.7492C49.2152 24.3437 50.0202 23.7961 50.7019 23.1075C51.3832 22.4189 51.9196 21.614 52.311 20.6935C52.7024 19.773 52.8981 18.7905 52.8981 17.7464C52.8981 16.6885 52.7024 15.6948 52.311 14.7674C51.9196 13.8396 51.3832 13.0311 50.7019 12.3421C50.0202 11.6535 49.2152 11.1099 48.2878 10.7109C47.3597 10.3123 46.3595 10.1129 45.2864 10.1129C44.2281 10.1129 43.2347 10.3123 42.3073 10.7109C41.3792 11.1099 40.5707 11.6535 39.8821 12.3421C39.1935 13.0311 38.6495 13.8396 38.2509 14.7674C37.8522 15.6948 37.6529 16.6885 37.6529 17.7464ZM34.9127 17.7464C34.9127 16.3112 35.1845 14.9591 35.7281 13.6906C36.2721 12.4222 37.0147 11.3198 37.9577 10.3847C38.8996 9.44971 40.0017 8.71003 41.2632 8.16606C42.5244 7.62244 43.8657 7.35099 45.2864 7.35099C46.707 7.35099 48.041 7.61954 49.2881 8.15555C50.5348 8.69191 51.6264 9.42072 52.5614 10.3412C53.4968 11.2621 54.2361 12.3457 54.7797 13.5928C55.3233 14.8395 55.6096 16.1735 55.6386 17.5942V17.638V17.7464V26.4239C55.6386 26.8153 55.5045 27.1488 55.2363 27.4242C54.9674 27.6996 54.6384 27.8377 54.2466 27.8377C53.8552 27.8377 53.5323 27.6996 53.279 27.4242C53.0249 27.1488 52.8981 26.8153 52.8981 26.4239L52.8767 24.5535C51.9196 25.6121 50.7925 26.4671 49.495 27.1198C48.1972 27.7725 46.7943 28.0983 45.2864 28.0983C43.8657 28.0983 42.5244 27.8265 41.2632 27.2828C40.0017 26.7389 38.8996 25.9999 37.9577 25.0645C37.0147 24.1291 36.2721 23.0314 35.7281 21.7702C35.1845 20.5087 34.9127 19.1674 34.9127 17.7464Z"
          fill="white"
        />
        <path
          d="M64.62 7.37251H67.5124C67.9041 7.37251 68.2303 7.50334 68.4916 7.76427C68.7522 8.02521 68.8826 8.34413 68.8826 8.72104C68.8826 9.1273 68.7522 9.46072 68.4916 9.72129C68.2303 9.98222 67.9041 10.1131 67.5124 10.1131H64.62V26.4893C64.62 26.8666 64.4859 27.1848 64.2177 27.4457C63.9491 27.707 63.627 27.8375 63.2501 27.8375C62.8731 27.8375 62.5542 27.707 62.2929 27.4457C62.032 27.1848 61.9019 26.8666 61.9019 26.4893V10.1131H59.5093C59.132 10.1131 58.8098 9.97932 58.542 9.71042C58.2731 9.44259 58.139 9.1128 58.139 8.72104C58.139 8.34413 58.2731 8.02521 58.542 7.76427C58.8098 7.50334 59.132 7.37251 59.5093 7.37251H61.9019V1.34816C61.9019 0.957117 62.032 0.634571 62.2929 0.380522C62.5542 0.127197 62.8731 -9.53674e-06 63.2501 -9.53674e-06C63.627 -9.53674e-06 63.9491 0.127197 64.2177 0.380522C64.4859 0.634571 64.62 0.957117 64.62 1.34816V7.37251Z"
          fill="white"
        />
        <path
          d="M134.213 26.4892C134.213 26.8809 134.082 27.2067 133.821 27.4677C133.56 27.7286 133.234 27.8594 132.843 27.8594C132.466 27.8594 132.147 27.7286 131.885 27.4677C131.624 27.2067 131.494 26.8809 131.494 26.4892V17.3988V17.2897C131.465 14.9699 130.947 13.1901 129.939 11.9503C128.931 10.7109 127.522 10.0912 125.709 10.0912C124.825 10.0912 123.995 10.2651 123.219 10.613C122.443 10.961 121.762 11.4433 121.175 12.0594C120.587 12.6759 120.12 13.4043 119.772 14.2451C119.424 15.0863 119.235 15.9927 119.207 16.9632V26.4457C119.207 26.8371 119.073 27.1669 118.804 27.4351C118.536 27.7036 118.213 27.8377 117.836 27.8377C117.459 27.8377 117.137 27.7036 116.869 27.4351C116.6 27.1669 116.466 26.8371 116.466 26.4457V8.7209C116.466 8.344 116.604 8.02145 116.88 7.75327C117.155 7.48545 117.481 7.35099 117.858 7.35099C118.235 7.35099 118.554 7.48545 118.815 7.75327C119.076 8.02145 119.207 8.344 119.207 8.7209V11.0479C120.062 9.94658 121.073 9.05795 122.24 8.38386C123.407 7.70978 124.658 7.37237 125.992 7.37237C127.238 7.37237 128.366 7.60504 129.373 8.06856C130.381 8.53281 131.244 9.19602 131.962 10.0586C132.679 10.9215 133.23 11.9656 133.615 13.1901C133.999 14.4155 134.198 15.7817 134.213 17.2897V17.3988V26.4892Z"
          fill="white"
        />
        <path
          d="M72.1885 16.6593C72.2755 15.7312 72.5288 14.8578 72.9496 14.0387C73.37 13.2193 73.914 12.509 74.5812 11.907C75.2473 11.3062 76.0127 10.8307 76.8752 10.4828C77.7378 10.1348 78.6619 9.96089 79.648 9.96089C80.6342 9.96089 81.5616 10.1316 82.4321 10.4715C83.3019 10.8126 84.0738 11.284 84.7479 11.8857C85.4223 12.4876 85.9728 13.1979 86.4008 14.017C86.8285 14.836 87.093 15.7171 87.1945 16.6593H72.1885ZM89.1523 13.6252C88.6007 12.3716 87.8577 11.2804 86.9227 10.3527C85.9877 9.42488 84.8892 8.69245 83.6277 8.15572C82.3668 7.61972 81.0256 7.35081 79.6045 7.35081C78.1694 7.35081 76.8241 7.62298 75.5706 8.1666C75.2016 8.32642 74.8468 8.50327 74.5051 8.6968C73.6842 9.16214 72.9409 9.7246 72.2755 10.3849C71.3329 11.3203 70.5903 12.4148 70.0463 13.6691C69.668 14.5418 69.4212 15.4587 69.3063 16.419C69.2559 16.8387 69.2309 17.2667 69.2309 17.7034C69.2309 17.7469 69.2313 17.7904 69.2316 17.8339C69.2284 17.9883 69.2266 18.143 69.2266 18.2981C69.2266 21.2271 69.8003 24.0695 70.9324 26.7459C71.1002 27.142 71.28 27.5342 71.4717 27.9209C71.4717 27.9209 71.6453 28.4228 71.9555 28.6424L71.957 28.6435C72.4361 29.0577 73.1627 29.0755 73.6737 28.6547C74.1213 28.2865 74.2706 27.6911 74.0897 27.1797C74.0716 27.129 74.0502 27.0786 74.0256 27.0297C74.0191 27.0177 74.0126 27.005 74.0064 26.9927C73.7882 26.5698 73.586 26.1385 73.4015 25.7018C72.4966 23.5622 71.999 21.3 71.9189 18.9686H72.2541C72.2541 18.9671 72.2538 18.9661 72.2538 18.9646H88.6731C89.0649 18.9646 89.3835 18.8378 89.6306 18.5841C89.8767 18.33 89.9999 18.0151 89.9999 17.6378C89.9854 16.2172 89.7028 14.8795 89.1523 13.6252Z"
          fill="white"
        />
        <path
          d="M95.2522 3.20319C95.2196 3.17819 95.1841 3.15536 95.1432 3.13796C95.1406 3.13651 95.1381 3.13542 95.1355 3.1347C93.8881 2.59833 92.5548 2.32978 91.1338 2.32978C91.0537 2.32978 90.9751 2.33377 90.8957 2.33558C90.82 2.33776 90.7446 2.3374 90.6688 2.34102C89.25 2.40988 87.9305 2.74221 86.7109 3.33801C86.708 3.3391 86.7055 3.34055 86.703 3.34163C86.6635 3.36121 86.6287 3.38549 86.5971 3.4123C86.3536 3.61815 86.3543 4.01354 86.6207 4.22737C86.7084 4.29767 86.7921 4.37233 86.8773 4.44517C86.9335 4.49374 86.9911 4.5394 87.0462 4.58905C87.3372 4.85107 87.6115 5.12904 87.8699 5.42187C88.0127 5.58423 88.2334 5.63968 88.4382 5.57626C89.2384 5.27147 90.0864 5.11165 90.9812 5.09534C91.8662 5.07142 92.7117 5.19029 93.5177 5.45376C93.7254 5.50667 93.9432 5.44108 94.0784 5.27183C94.3223 4.96705 94.5821 4.67603 94.8605 4.40024C94.913 4.34805 94.9688 4.29912 95.0225 4.24839C95.104 4.17119 95.1845 4.09255 95.2682 4.01826C95.5237 3.79211 95.5052 3.39708 95.2522 3.20319Z"
          fill="white"
        />
      </svg>
    </Box>
  );
}
