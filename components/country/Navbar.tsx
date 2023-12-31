import Image from 'next/image';
const Navbar = () => {
  return (
    <>
      <div className="bg-white w-full p-2">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="col-span-1 sm:w-full">
            <div className="w-full flex flex-wrap">
              <div className="md:w-1/2 sm:w-full md:px-2">
                <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-right">
                  <a className="flex md:font-medium text-gray-900 title-font md:w-1/2 sm:w-full md:ml-20 sm:mr-10">
                    <Image src="/Ellipse.png" alt="logo" height={96} width={96} />
                  </a>
                </div>
              </div>
              <div className="">
                <span className="text-[32px] font-inter">Afghanisthan</span>
                <br />
                <span className="text-[16px] text-[#646464] font-inter">Continent:Asia</span>
              </div>
            </div>
          </div>
          <div className="col-span-3 px-12">
            <div className="md:w-full">
              <button className="h-[100px] w-[116px] rounded-lg text-neutral-600 text-white bg-[#195883] duration-[400ms,700ms] transition-[color,box-shadow]">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 6C11.3726 6 6 11.3726 6 18C6 18.5827 6.04153 19.1557 6.1218 19.7162C6.54502 19.5801 6.98796 19.5068 7.43643 19.5005C8.2424 19.4891 9.03664 19.6944 9.73614 20.0949C10.4356 20.4955 11.0147 21.0765 11.4128 21.7774C11.8109 22.4783 12.0135 23.2732 11.9993 24.0792C11.9851 24.8851 11.7547 25.6724 11.3322 26.3589C11.1014 26.7339 10.8178 27.0713 10.4918 27.3614C12.5474 29.0123 15.1584 30 18 30C24.6274 30 30 24.6274 30 18C30 11.3726 24.6274 6 18 6ZM7.2827 28.4947C10.0054 31.2749 13.8013 33 18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 22.0833 4.63157 25.7855 7.27835 28.4903L7.27814 28.4945C7.27966 28.4946 7.28118 28.4947 7.2827 28.4947ZM8.39944 25.2004C8.54977 25.0878 8.67819 24.9475 8.7774 24.7863C8.91824 24.5575 8.99504 24.295 8.99977 24.0264C9.0045 23.7577 8.93698 23.4928 8.80427 23.2591C8.67157 23.0255 8.47854 22.8318 8.24538 22.6983C8.01221 22.5648 7.74747 22.4964 7.47881 22.5001C7.28617 22.5029 7.09659 22.5427 6.92019 22.6166C7.30635 23.5423 7.80514 24.4093 8.39944 25.2004ZM15 10.5C14.1716 10.5 13.5 11.1716 13.5 12C13.5 12.8284 14.1716 13.5 15 13.5C15.8284 13.5 16.5 12.8284 16.5 12C16.5 11.1716 15.8284 10.5 15 10.5ZM10.5 12C10.5 9.51472 12.5147 7.5 15 7.5C17.4853 7.5 19.5 9.51472 19.5 12C19.5 14.4853 17.4853 16.5 15 16.5C12.5147 16.5 10.5 14.4853 10.5 12ZM23.25 19.5C22.0074 19.5 21 20.5074 21 21.75C21 22.9926 22.0074 24 23.25 24C24.4926 24 25.5 22.9926 25.5 21.75C25.5 20.5074 24.4926 19.5 23.25 19.5ZM18 21.75C18 18.8505 20.3505 16.5 23.25 16.5C26.1495 16.5 28.5 18.8505 28.5 21.75C28.5 24.6495 26.1495 27 23.25 27C20.3505 27 18 24.6495 18 21.75Z"
                      fill="white"
                    />
                  </svg>
                </div>
                Geography
              </button>
              <button className="h-[100px] w-[116px] rounded-lg text-neutral-600 hover:text-white hover:bg-[#195883] duration-[400ms,700ms] transition-[color,box-shadow]">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.78398 5.16079C9.33309 4.45451 11.0797 4.30924 12.7242 4.74988C13.5244 4.96429 13.9992 5.7868 13.7848 6.587C13.5704 7.3872 12.7479 7.86207 11.9477 7.64766C10.976 7.38728 9.94389 7.47312 9.02851 7.89047C8.11313 8.30781 7.37148 9.03065 6.93076 9.93501C6.49005 10.8394 6.37772 11.8689 6.61306 12.847C6.84839 13.8251 7.41672 14.6909 8.22057 15.2958C8.65667 15.624 8.8801 16.1631 8.80397 16.7036C8.72783 17.244 8.36415 17.7005 7.85436 17.8954C6.83535 18.2851 5.89923 18.8869 5.11297 19.6731C4.84808 19.938 4.60418 20.2199 4.38229 20.5161C3.91995 21.1334 3.95009 21.6504 4.19341 22.1135C4.48073 22.6602 5.14091 23.2271 6.07474 23.5208C6.86499 23.7694 7.3041 24.6116 7.05551 25.4018C6.80692 26.1921 5.96478 26.6312 5.17453 26.3826C3.64182 25.9004 2.26369 24.8904 1.53776 23.509C0.767831 22.0439 0.809793 20.2815 1.98117 18.7176C2.28812 18.3078 2.62545 17.918 2.99165 17.5518C3.55626 16.9872 4.1768 16.4914 4.84022 16.0696C4.30623 15.3151 3.91572 14.4608 3.69629 13.5488C3.29803 11.8935 3.48812 10.1512 4.23395 8.62078C4.97978 7.09033 6.23488 5.86706 7.78398 5.16079ZM26.9709 7.89047C26.0555 7.47312 25.0235 7.38728 24.0517 7.64766C23.2515 7.86207 22.429 7.3872 22.2146 6.587C22.0002 5.7868 22.4751 4.96429 23.2753 4.74988C24.9198 4.30924 26.6663 4.45451 28.2154 5.16079C29.7646 5.86706 31.0196 7.09033 31.7655 8.62078C32.5113 10.1512 32.7014 11.8935 32.3031 13.5488C32.0837 14.4608 31.6932 15.3151 31.1592 16.0696C31.8226 16.4914 32.4432 16.9872 33.0078 17.5518C33.374 17.918 33.7113 18.3078 34.0183 18.7176C35.1896 20.2815 35.2316 22.0439 34.4617 23.509C33.7357 24.8904 32.3576 25.9004 30.8249 26.3826C30.0347 26.6312 29.1925 26.1921 28.9439 25.4018C28.6953 24.6116 29.1344 23.7694 29.9247 23.5208C30.8585 23.2271 31.5187 22.6602 31.806 22.1135C32.0493 21.6504 32.0795 21.1334 31.6171 20.5161C31.3953 20.2199 31.1513 19.938 30.8865 19.6731C30.1002 18.8869 29.1641 18.2851 28.1451 17.8954C27.6353 17.7005 27.2716 17.244 27.1955 16.7036C27.1193 16.1631 27.3428 15.624 27.7789 15.2958C28.5827 14.6909 29.151 13.8251 29.3864 12.847C29.6217 11.8689 29.5094 10.8394 29.0687 9.93501C28.6279 9.03065 27.8863 8.30781 26.9709 7.89047ZM17.9999 10.5C15.6067 10.5 13.6666 12.4401 13.6666 14.8333C13.6666 17.2266 15.6067 19.1667 17.9999 19.1667C20.3931 19.1667 22.3332 17.2266 22.3332 14.8333C22.3332 12.4401 20.3931 10.5 17.9999 10.5ZM22.865 20.3206C24.3791 18.9772 25.3332 17.0167 25.3332 14.8333C25.3332 10.7832 22.05 7.5 17.9999 7.5C13.9498 7.5 10.6666 10.7832 10.6666 14.8333C10.6666 17.0167 11.6207 18.9772 13.1348 20.3206C12.1106 20.8354 11.1653 21.514 10.3396 22.3398C9.97342 22.706 9.63609 23.0957 9.32914 23.5055C8.6412 24.424 8.31725 25.4476 8.37429 26.4806C8.43046 27.4978 8.84885 28.4085 9.44699 29.1437C10.624 30.5904 12.5976 31.5001 14.6666 31.5001H21.3333C23.4023 31.5001 25.3759 30.5904 26.5529 29.1437C27.151 28.4085 27.5694 27.4978 27.6256 26.4806C27.6826 25.4476 27.3587 24.424 26.6707 23.5055C26.3638 23.0957 26.0265 22.706 25.6603 22.3398C24.8345 21.514 23.8892 20.8354 22.865 20.3206ZM17.9999 22.1667C15.9224 22.1667 13.93 22.992 12.4609 24.4611C12.196 24.726 11.9521 25.0078 11.7303 25.304C11.4249 25.7117 11.3551 26.0505 11.3697 26.3152C11.3852 26.5958 11.5039 26.9183 11.7741 27.2504C12.3337 27.9382 13.4219 28.5001 14.6666 28.5001H21.3333C22.578 28.5001 23.6661 27.9382 24.2258 27.2504C24.496 26.9183 24.6147 26.5958 24.6301 26.3152C24.6448 26.0505 24.575 25.7117 24.2696 25.304C24.0477 25.0078 23.8038 24.726 23.5389 24.4611C22.0699 22.992 20.0775 22.1667 17.9999 22.1667Z"
                      fill="black"
                    />
                  </svg>
                </div>
                People&
                <br />
                Society
              </button>
              <button className="h-[100px] w-[116px] rounded-lg text-neutral-600 hover:text-white hover:bg-[#195883] duration-[400ms,700ms] transition-[color,box-shadow]">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9 3C9.82843 3 10.5 3.67157 10.5 4.5H30C30.6067 4.5 31.1536 4.86546 31.3858 5.42597C31.618 5.98649 31.4897 6.63166 31.0607 7.06066L24.6213 13.5L31.0607 19.9393C31.4897 20.3683 31.618 21.0135 31.3858 21.574C31.1536 22.1345 30.6067 22.5 30 22.5H10.5V31.5C10.5 32.3284 9.82843 33 9 33C8.17157 33 7.5 32.3284 7.5 31.5V4.5C7.5 3.67157 8.17157 3 9 3ZM10.5 19.5H26.3787L21.4393 14.5607C20.8536 13.9749 20.8536 13.0251 21.4393 12.4393L26.3787 7.5H10.5V19.5Z"
                      fill="black"
                    />
                  </svg>
                </div>
                Gavernment
              </button>
              <button className="h-[100px] w-[116px] rounded-lg text-neutral-600 hover:text-white hover:bg-[#195883] duration-[400ms,700ms] transition-[color,box-shadow]">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.5 6C6.67157 6 6 6.67157 6 7.5V28.5C6 29.3284 6.67157 30 7.5 30H28.5C29.3284 30 30 29.3284 30 28.5V7.5C30 6.67157 29.3284 6 28.5 6H7.5ZM3 7.5C3 5.01472 5.01472 3 7.5 3H28.5C30.9853 3 33 5.01472 33 7.5V28.5C33 30.9853 30.9853 33 28.5 33H7.5C5.01472 33 3 30.9853 3 28.5V7.5ZM26.5607 12.4393C27.1464 13.0251 27.1464 13.9749 26.5607 14.5607L22.0607 19.0607C21.7794 19.342 21.3978 19.5 21 19.5H15.6213L11.5607 23.5607C10.9749 24.1464 10.0251 24.1464 9.43934 23.5607C8.85355 22.9749 8.85355 22.0251 9.43934 21.4393L13.9393 16.9393C14.2206 16.658 14.6022 16.5 15 16.5H20.3787L24.4393 12.4393C25.0251 11.8536 25.9749 11.8536 26.5607 12.4393Z"
                      fill="black"
                    />
                  </svg>
                </div>
                Economy
              </button>
              <button className="h-[100px] w-[116px] rounded-lg text-neutral-600 hover:text-white hover:bg-[#195883] duration-[400ms,700ms] transition-[color,box-shadow]">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 3C18.8284 3 19.5 3.67157 19.5 4.5V7.5C19.5 8.32843 18.8284 9 18 9C17.1716 9 16.5 8.32843 16.5 7.5V4.5C16.5 3.67157 17.1716 3 18 3ZM28.6066 7.3934C29.1924 7.97918 29.1924 8.92893 28.6066 9.51472L26.4853 11.636C25.8995 12.2218 24.9497 12.2218 24.364 11.636C23.7782 11.0503 23.7782 10.1005 24.364 9.51472L26.4853 7.3934C27.0711 6.80761 28.0208 6.80761 28.6066 7.3934ZM7.3934 7.3934C7.97918 6.80761 8.92893 6.80761 9.51472 7.3934L11.636 9.51472C12.2218 10.1005 12.2218 11.0503 11.636 11.636C11.0503 12.2218 10.1005 12.2218 9.51472 11.636L7.3934 9.51472C6.80761 8.92893 6.80761 7.97919 7.3934 7.3934ZM18 14.25C15.9289 14.25 14.25 15.9289 14.25 18C14.25 20.0711 15.9289 21.75 18 21.75C20.0711 21.75 21.75 20.0711 21.75 18C21.75 15.9289 20.0711 14.25 18 14.25ZM11.25 18C11.25 14.2721 14.2721 11.25 18 11.25C21.7279 11.25 24.75 14.2721 24.75 18C24.75 21.7279 21.7279 24.75 18 24.75C14.2721 24.75 11.25 21.7279 11.25 18ZM3 18C3 17.1716 3.67157 16.5 4.5 16.5H7.5C8.32843 16.5 9 17.1716 9 18C9 18.8284 8.32843 19.5 7.5 19.5H4.5C3.67157 19.5 3 18.8284 3 18ZM27 18C27 17.1716 27.6716 16.5 28.5 16.5H31.5C32.3284 16.5 33 17.1716 33 18C33 18.8284 32.3284 19.5 31.5 19.5H28.5C27.6716 19.5 27 18.8284 27 18ZM11.636 24.364C12.2218 24.9497 12.2218 25.8995 11.636 26.4853L9.51472 28.6066C8.92893 29.1924 7.97918 29.1924 7.3934 28.6066C6.80761 28.0208 6.80761 27.0711 7.3934 26.4853L9.51472 24.364C10.1005 23.7782 11.0503 23.7782 11.636 24.364ZM24.364 24.364C24.9497 23.7782 25.8995 23.7782 26.4853 24.364L28.6066 26.4853C29.1924 27.0711 29.1924 28.0208 28.6066 28.6066C28.0208 29.1924 27.0711 29.1924 26.4853 28.6066L24.364 26.4853C23.7782 25.8995 23.7782 24.9497 24.364 24.364ZM18 27C18.8284 27 19.5 27.6716 19.5 28.5V31.5C19.5 32.3284 18.8284 33 18 33C17.1716 33 16.5 32.3284 16.5 31.5V28.5C16.5 27.6716 17.1716 27 18 27Z"
                      fill="black"
                    />
                  </svg>
                </div>
                Energy
              </button>
              <button className="h-[100px] w-[116px] rounded-lg text-neutral-600 hover:text-white hover:bg-[#195883] duration-[400ms,700ms] transition-[color,box-shadow]">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 6C11.3726 6 6 11.3726 6 18C6 18.5827 6.04153 19.1557 6.1218 19.7162C6.54502 19.5801 6.98796 19.5068 7.43643 19.5005C8.2424 19.4891 9.03664 19.6944 9.73614 20.0949C10.4356 20.4955 11.0147 21.0765 11.4128 21.7774C11.8109 22.4783 12.0135 23.2732 11.9993 24.0792C11.9851 24.8851 11.7547 25.6724 11.3322 26.3589C11.1014 26.7339 10.8178 27.0713 10.4918 27.3614C12.5474 29.0123 15.1584 30 18 30C24.6274 30 30 24.6274 30 18C30 11.3726 24.6274 6 18 6ZM7.2827 28.4947C10.0054 31.2749 13.8013 33 18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 22.0833 4.63157 25.7855 7.27835 28.4903L7.27814 28.4945C7.27966 28.4946 7.28118 28.4947 7.2827 28.4947ZM8.39944 25.2004C8.54977 25.0878 8.67819 24.9475 8.7774 24.7863C8.91824 24.5575 8.99504 24.295 8.99977 24.0264C9.0045 23.7577 8.93698 23.4928 8.80427 23.2591C8.67157 23.0255 8.47854 22.8318 8.24538 22.6983C8.01221 22.5648 7.74747 22.4964 7.47881 22.5001C7.28617 22.5029 7.09659 22.5427 6.92019 22.6166C7.30635 23.5423 7.80514 24.4093 8.39944 25.2004ZM15 10.5C14.1716 10.5 13.5 11.1716 13.5 12C13.5 12.8284 14.1716 13.5 15 13.5C15.8284 13.5 16.5 12.8284 16.5 12C16.5 11.1716 15.8284 10.5 15 10.5ZM10.5 12C10.5 9.51472 12.5147 7.5 15 7.5C17.4853 7.5 19.5 9.51472 19.5 12C19.5 14.4853 17.4853 16.5 15 16.5C12.5147 16.5 10.5 14.4853 10.5 12ZM23.25 19.5C22.0074 19.5 21 20.5074 21 21.75C21 22.9926 22.0074 24 23.25 24C24.4926 24 25.5 22.9926 25.5 21.75C25.5 20.5074 24.4926 19.5 23.25 19.5ZM18 21.75C18 18.8505 20.3505 16.5 23.25 16.5C26.1495 16.5 28.5 18.8505 28.5 21.75C28.5 24.6495 26.1495 27 23.25 27C20.3505 27 18 24.6495 18 21.75Z"
                      fill="white"
                    />
                  </svg>
                </div>
                Communication
              </button>
              <button className="h-[100px] w-[116px] rounded-lg text-neutral-600 hover:text-white hover:bg-[#195883] duration-[400ms,700ms] transition-[color,box-shadow]">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 6C11.3726 6 6 11.3726 6 18C6 24.6274 11.3726 30 18 30C24.6274 30 30 24.6274 30 18C30 11.3726 24.6274 6 18 6ZM3 18C3 9.71573 9.71573 3 18 3C26.2843 3 33 9.71573 33 18C33 26.2843 26.2843 33 18 33C9.71573 33 3 26.2843 3 18ZM18 12C14.6863 12 12 14.6863 12 18C12 21.3137 14.6863 24 18 24C21.3137 24 24 21.3137 24 18C24 14.6863 21.3137 12 18 12ZM9 18C9 13.0294 13.0294 9 18 9C22.9706 9 27 13.0294 27 18C27 22.9706 22.9706 27 18 27C13.0294 27 9 22.9706 9 18ZM15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18Z"
                      fill="black"
                    />
                  </svg>
                </div>
                Military and Security
              </button>
              <button className="h-[100px] w-[116px] rounded-lg text-neutral-600 hover:text-white hover:bg-[#195883] duration-[400ms,700ms] transition-[color,box-shadow]">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 6C11.3726 6 6 11.3726 6 18C6 24.6274 11.3726 30 18 30C24.6274 30 30 24.6274 30 18C30 11.3726 24.6274 6 18 6ZM3 18C3 9.71573 9.71573 3 18 3C26.2843 3 33 9.71573 33 18C33 26.2843 26.2843 33 18 33C9.71573 33 3 26.2843 3 18ZM24.364 11.636C24.7365 12.0086 24.8863 12.5493 24.7585 13.0605L22.6372 21.5458C22.5028 22.0832 22.0832 22.5028 21.5458 22.6372L13.0605 24.7585C12.5493 24.8863 12.0086 24.7365 11.636 24.364C11.2635 23.9914 11.1137 23.4507 11.2415 22.9395L13.3628 14.4542C13.4972 13.9168 13.9168 13.4972 14.4542 13.3628L22.9395 11.2415C23.4507 11.1137 23.9914 11.2635 24.364 11.636ZM16.055 16.055L14.7583 21.2417L19.945 19.945L21.2417 14.7583L16.055 16.055Z"
                      fill="black"
                    />
                  </svg>
                </div>
                Transport
              </button>
              <button className="h-[100px] w-[116px] rounded-lg text-neutral-600 hover:text-white hover:bg-[#195883] duration-[400ms,700ms] transition-[color,box-shadow]">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 6C11.3726 6 6 11.3726 6 18C6 24.6274 11.3726 30 18 30C24.6274 30 30 24.6274 30 18C30 11.3726 24.6274 6 18 6ZM3 18C3 9.71573 9.71573 3 18 3C26.2843 3 33 9.71573 33 18C33 26.2843 26.2843 33 18 33C9.71573 33 3 26.2843 3 18ZM24.364 11.636C24.7365 12.0086 24.8863 12.5493 24.7585 13.0605L22.6372 21.5458C22.5028 22.0832 22.0832 22.5028 21.5458 22.6372L13.0605 24.7585C12.5493 24.8863 12.0086 24.7365 11.636 24.364C11.2635 23.9914 11.1137 23.4507 11.2415 22.9395L13.3628 14.4542C13.4972 13.9168 13.9168 13.4972 14.4542 13.3628L22.9395 11.2415C23.4507 11.1137 23.9914 11.2635 24.364 11.636ZM16.055 16.055L14.7583 21.2417L19.945 19.945L21.2417 14.7583L16.055 16.055Z"
                      fill="black"
                    />
                  </svg>
                </div>
                Terrorism
              </button>
              <button className="h-[100px] w-[116px] rounded-lg text-neutral-600 hover:text-white hover:bg-[#195883] duration-[400ms,700ms] transition-[color,box-shadow]">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.91 3.05721C20.5196 3.23041 20.9545 3.76801 20.9967 4.40031L21.6533 14.2501H27.75C28.3119 14.2501 28.8267 14.5641 29.0838 15.0637C29.3409 15.5633 29.2972 16.1647 28.9706 16.622L17.7206 32.3719C17.3523 32.8876 16.6996 33.1162 16.09 32.943C15.4804 32.7698 15.0455 32.2322 15.0033 31.5999L14.3467 21.7501H8.25001C7.68812 21.7501 7.17336 21.4361 6.91625 20.9365C6.65915 20.4369 6.70282 19.8355 7.02941 19.3782L18.2794 3.62824C18.6477 3.11257 19.3004 2.884 19.91 3.05721ZM11.1648 18.7501H15.75C16.5397 18.7501 17.1942 19.3624 17.2467 20.1503L17.7176 27.2147L24.8352 17.2501H20.25C19.4603 17.2501 18.8059 16.6378 18.7533 15.8499L18.2824 8.78548L11.1648 18.7501Z"
                      fill="black"
                    />
                  </svg>
                </div>
                Transnational Issues
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
