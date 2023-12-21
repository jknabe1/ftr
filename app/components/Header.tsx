import '@/app/globals.css'
 
const Header = () => {

  

  return (
  <header className="sticky top-0 z-50 box-border border-black border-y-4 dark:bg-transparent-black bg-transparent-white dark:!border-b-solid-grey3 !border-b-transparent-grey backdrop-blur-[5px]">
    <div className="relative w-full px-[16px] sm:px-10 mx-auto k2:max-w-[1680px] xl:max-w-[1440px] max-w-[1280px] flex items-center lg:h-[88px] h-16 justify-between">
    <nav className="justify-center hidden lg:flex flex-2 items-center">
          <div className="relative">
            <a href="/#" className="inline-block hover:!text-solid-red font-medium xl:!px-4 box-border antialiased cursor-pointer inline-flex items-center transition-colors ease-in duration-200 font-medium rounded-[4px] xl:text-base text-sm leading-[22px] xl:px-6 px-4 xl:py-2 py-[10px] dark:hover:text-solid-grey1 hover:text-solid-grey2 dark:text-solid-white text-solid-black focus:outline-1 focus:outline-offset-4 dark:focus:outline-solid-white focus:outline-solid-black"><span className="whitespace-nowrap xl:text-base text-sm leading-[22px] flex items-center gap-[10px]"><div className="flex flex-col relative">
              <div className="flex flex-row items-center">
                <span className="mr-1 ">Services</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 transition-transform">
                  <path d="M3.5 5.75L8 10.25L12.5 5.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    </path>
                    </svg>
                    </div>
                    </div>
                    </span>
                    </a>
                    </div>
                    <div className="relative">
                      <a href="/#" className="inline-block hover:!text-solid-red font-medium xl:!px-4 box-border antialiased cursor-pointer inline-flex items-center transition-colors ease-in duration-200 font-medium rounded-[4px] xl:text-base text-sm leading-[22px] xl:px-6 px-4 xl:py-2 py-[10px] dark:hover:text-solid-grey1 hover:text-solid-grey2 dark:text-solid-white text-solid-black focus:outline-1 focus:outline-offset-4 dark:focus:outline-solid-white focus:outline-solid-black">
                        <span className="whitespace-nowrap xl:text-base text-sm leading-[22px] flex items-center gap-[10px]">
                          <div className="flex flex-col relative">
                            <div className="flex flex-row items-center">
                              <span className="mr-1">Resources</span>
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 transition-transform">
                                <path d="M3.5 5.75L8 10.25L12.5 5.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>
                              </div>
                              </div>
                              </span>
                              </a>
                              </div>
                              </nav>
    <div className="flex-1">
    <a className="hidden lg:flex w-fit" href="/">
      <span className="sr-only">Go to home</span>
  <svg width="74" height="24" viewBox="0 0 76 25" fill="white" xmlns="http://www.w3.org/2000/svg" className="hidden fill-white dark:block mix-blend-difference	">
    <path d="M0 24.1383V3.0076H4.31054V15.1253H4.43111L9.16366 9.18704H13.9866L8.74165 15.3363L14.3785 24.1383H9.58568L6.20959 18.3206L4.31054 20.4608V24.1383H0Z"></path>
    <path d="M15.3085 24.1383V9.18704H18.9257L19.2272 11.0861H19.3477C19.9908 10.4832 20.6942 9.96073 21.4578 9.51862C22.2214 9.05642 23.1157 8.82532 24.1406 8.82532C25.7683 8.82532 26.9439 9.35786 27.6674 10.4229C28.4109 11.488 28.7827 12.965 28.7827 14.854V24.1383H24.3516V15.4268C24.3516 14.3416 24.2009 13.5981 23.8994 13.1961C23.6181 12.7942 23.1559 12.5933 22.5128 12.5933C21.9501 12.5933 21.4678 12.7239 21.0659 12.9851C20.664 13.2263 20.2219 13.578 19.7396 14.0402V24.1383H15.3085Z"></path>
    <path d="M37.7735 24.5C36.829 24.5 35.9146 24.3292 35.0304 23.9876C34.1462 23.6258 33.3625 23.1134 32.6792 22.4502C32.0161 21.7871 31.4835 20.9732 31.0816 20.0086C30.6797 19.0239 30.4787 17.9086 30.4787 16.6627C30.4787 15.4167 30.6797 14.3115 31.0816 13.3469C31.4835 12.3622 32.0161 11.5382 32.6792 10.8751C33.3625 10.2119 34.1462 9.70953 35.0304 9.36791C35.9146 9.00618 36.829 8.82532 37.7735 8.82532C38.718 8.82532 39.6223 9.00618 40.4864 9.36791C41.3706 9.70953 42.1443 10.2119 42.8075 10.8751C43.4907 11.5382 44.0333 12.3622 44.4352 13.3469C44.8372 14.3115 45.0381 15.4167 45.0381 16.6627C45.0381 17.9086 44.8372 19.0239 44.4352 20.0086C44.0333 20.9732 43.4907 21.7871 42.8075 22.4502C42.1443 23.1134 41.3706 23.6258 40.4864 23.9876C39.6223 24.3292 38.718 24.5 37.7735 24.5ZM37.7735 20.9129C38.6778 20.9129 39.3611 20.5311 39.8233 19.7675C40.2855 19.0038 40.5166 17.9689 40.5166 16.6627C40.5166 15.3564 40.2855 14.3215 39.8233 13.5579C39.3611 12.7942 38.6778 12.4124 37.7735 12.4124C36.8491 12.4124 36.1558 12.7942 35.6936 13.5579C35.2515 14.3215 35.0304 15.3564 35.0304 16.6627C35.0304 17.9689 35.2515 19.0038 35.6936 19.7675C36.1558 20.5311 36.8491 20.9129 37.7735 20.9129Z"></path>
    <path d="M53.3785 24.5C52.3335 24.5 51.3589 24.3292 50.4546 23.9876C49.5703 23.6258 48.7967 23.1134 48.1335 22.4502C47.4703 21.7871 46.9478 20.9732 46.566 20.0086C46.1842 19.0239 45.9933 17.9086 45.9933 16.6627C45.9933 15.4167 46.2043 14.3115 46.6263 13.3469C47.0483 12.3622 47.611 11.5382 48.3144 10.8751C49.0378 10.2119 49.8718 9.70953 50.8163 9.36791C51.7608 9.00618 52.7455 8.82532 53.7704 8.82532C54.6948 8.82532 55.5086 8.97604 56.212 9.27747C56.9354 9.57891 57.5785 9.96073 58.1412 10.4229L56.0613 13.2866C55.3579 12.7038 54.6847 12.4124 54.0416 12.4124C52.9565 12.4124 52.1024 12.7942 51.4794 13.5579C50.8565 14.3215 50.545 15.3564 50.545 16.6627C50.545 17.9689 50.8565 19.0038 51.4794 19.7675C52.1225 20.5311 52.9263 20.9129 53.8909 20.9129C54.3732 20.9129 54.8354 20.8124 55.2775 20.6115C55.7397 20.3904 56.1718 20.1292 56.5737 19.8277L58.322 22.7215C57.5785 23.3646 56.7747 23.8268 55.9106 24.1081C55.0464 24.3694 54.2024 24.5 53.3785 24.5Z"></path>
    <path d="M59.7327 24.1383V3.0076H64.0432V15.1253H64.1638L68.8963 9.18704H73.7193L68.4743 15.3363L74.1112 24.1383H69.3183L65.9423 18.3206L64.0432 20.4608V24.1383H59.7327Z"></path>
    <path d="M75.1388 4.04252C75.1388 5.999 73.5527 7.58504 71.5962 7.58504C69.6398 7.58504 68.0537 5.999 68.0537 4.04252C68.0537 2.08604 69.6398 0.5 71.5962 0.5C73.5527 0.5 75.1388 2.08604 75.1388 4.04252Z" fill="#E95744"></path>
    </svg>
    <svg width="74" height="24" viewBox="0 0 76 25" fill="white" xmlns="http://www.w3.org/2000/svg" className="fill-black dark:hidden mix-blend-difference	"><path d="M0 24.1383V3.0076H4.31054V15.1253H4.43111L9.16366 9.18704H13.9866L8.74165 15.3363L14.3785 24.1383H9.58568L6.20959 18.3206L4.31054 20.4608V24.1383H0Z"></path>
    <path d="M15.3085 24.1383V9.18704H18.9257L19.2272 11.0861H19.3477C19.9908 10.4832 20.6942 9.96073 21.4578 9.51862C22.2214 9.05642 23.1157 8.82532 24.1406 8.82532C25.7683 8.82532 26.9439 9.35786 27.6674 10.4229C28.4109 11.488 28.7827 12.965 28.7827 14.854V24.1383H24.3516V15.4268C24.3516 14.3416 24.2009 13.5981 23.8994 13.1961C23.6181 12.7942 23.1559 12.5933 22.5128 12.5933C21.9501 12.5933 21.4678 12.7239 21.0659 12.9851C20.664 13.2263 20.2219 13.578 19.7396 14.0402V24.1383H15.3085Z"></path>
    <path d="M37.7735 24.5C36.829 24.5 35.9146 24.3292 35.0304 23.9876C34.1462 23.6258 33.3625 23.1134 32.6792 22.4502C32.0161 21.7871 31.4835 20.9732 31.0816 20.0086C30.6797 19.0239 30.4787 17.9086 30.4787 16.6627C30.4787 15.4167 30.6797 14.3115 31.0816 13.3469C31.4835 12.3622 32.0161 11.5382 32.6792 10.8751C33.3625 10.2119 34.1462 9.70953 35.0304 9.36791C35.9146 9.00618 36.829 8.82532 37.7735 8.82532C38.718 8.82532 39.6223 9.00618 40.4864 9.36791C41.3706 9.70953 42.1443 10.2119 42.8075 10.8751C43.4907 11.5382 44.0333 12.3622 44.4352 13.3469C44.8372 14.3115 45.0381 15.4167 45.0381 16.6627C45.0381 17.9086 44.8372 19.0239 44.4352 20.0086C44.0333 20.9732 43.4907 21.7871 42.8075 22.4502C42.1443 23.1134 41.3706 23.6258 40.4864 23.9876C39.6223 24.3292 38.718 24.5 37.7735 24.5ZM37.7735 20.9129C38.6778 20.9129 39.3611 20.5311 39.8233 19.7675C40.2855 19.0038 40.5166 17.9689 40.5166 16.6627C40.5166 15.3564 40.2855 14.3215 39.8233 13.5579C39.3611 12.7942 38.6778 12.4124 37.7735 12.4124C36.8491 12.4124 36.1558 12.7942 35.6936 13.5579C35.2515 14.3215 35.0304 15.3564 35.0304 16.6627C35.0304 17.9689 35.2515 19.0038 35.6936 19.7675C36.1558 20.5311 36.8491 20.9129 37.7735 20.9129Z"></path>
    <path d="M53.3785 24.5C52.3335 24.5 51.3589 24.3292 50.4546 23.9876C49.5703 23.6258 48.7967 23.1134 48.1335 22.4502C47.4703 21.7871 46.9478 20.9732 46.566 20.0086C46.1842 19.0239 45.9933 17.9086 45.9933 16.6627C45.9933 15.4167 46.2043 14.3115 46.6263 13.3469C47.0483 12.3622 47.611 11.5382 48.3144 10.8751C49.0378 10.2119 49.8718 9.70953 50.8163 9.36791C51.7608 9.00618 52.7455 8.82532 53.7704 8.82532C54.6948 8.82532 55.5086 8.97604 56.212 9.27747C56.9354 9.57891 57.5785 9.96073 58.1412 10.4229L56.0613 13.2866C55.3579 12.7038 54.6847 12.4124 54.0416 12.4124C52.9565 12.4124 52.1024 12.7942 51.4794 13.5579C50.8565 14.3215 50.545 15.3564 50.545 16.6627C50.545 17.9689 50.8565 19.0038 51.4794 19.7675C52.1225 20.5311 52.9263 20.9129 53.8909 20.9129C54.3732 20.9129 54.8354 20.8124 55.2775 20.6115C55.7397 20.3904 56.1718 20.1292 56.5737 19.8277L58.322 22.7215C57.5785 23.3646 56.7747 23.8268 55.9106 24.1081C55.0464 24.3694 54.2024 24.5 53.3785 24.5Z"></path>
    <path d="M59.7327 24.1383V3.0076H64.0432V15.1253H64.1638L68.8963 9.18704H73.7193L68.4743 15.3363L74.1112 24.1383H69.3183L65.9423 18.3206L64.0432 20.4608V24.1383H59.7327Z"></path>
    <path d="M75.1388 4.04252C75.1388 5.999 73.5527 7.58504 71.5962 7.58504C69.6398 7.58504 68.0537 5.999 68.0537 4.04252C68.0537 2.08604 69.6398 0.5 71.5962 0.5C73.5527 0.5 75.1388 2.08604 75.1388 4.04252Z" fill="#E95744"></path></svg></a><a className="lg:hidden" href="/"><span className="sr-only">Knock Logo</span>
    <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden w-8 h-8 fill-current dark:block mix-blend-difference	">
      <path d="M0.277832 10.774C0.277832 4.82367 5.1015 0 11.0518 0H37.5039C43.4542 0 48.2778 4.82366 48.2778 10.774V37.226C48.2778 43.1763 43.4542 48 37.5039 48H11.0518C5.1015 48 0.277832 43.1763 0.277832 37.226V10.774Z" fill="#FAFAFA"></path><path d="M14.8052 40.1096V8.42053H21.2696V26.5931H21.4504L28.5476 17.6877H35.7805L27.9148 26.9096L36.3682 40.1096H29.1805L24.1175 31.3849L21.2696 34.5945V40.1096H14.8052Z" fill="#000000"></path>
      <path d="M35.8668 12.2055C35.8668 14.3617 34.1189 16.1096 31.9627 16.1096C29.8065 16.1096 28.0586 14.3617 28.0586 12.2055C28.0586 10.0493 29.8065 8.30139 31.9627 8.30139C34.1189 8.30139 35.8668 10.0493 35.8668 12.2055Z" fill="#E95744"></path></svg>
      <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current dark:hidden mix-blend-difference	">
        <path d="M0.277832
         10.774C0.277832 4.82367 5.1015 0 11.0518 0H37.5039C43.4542 0 48.2778 4.82366 48.2778 10.774V37.226C48.2778 43.1763 43.4542 48 37.5039 48H11.0518C5.1015 48 0.277832 43.1763 0.277832 37.226V10.774Z" fill="#000000"></path><path d="M14.8052 40.1096V8.42053H21.2696V26.5931H21.4504L28.5476 17.6877H35.7805L27.9148 26.9096L36.3682 40.1096H29.1805L24.1175 31.3849L21.2696 34.5945V40.1096H14.8052Z" fill="#FAFAFA"></path>
        <path d="M35.8668 12.2055C35.8668 14.3617 34.1189 16.1096 31.9627 16.1096C29.8065 16.1096 28.0586 14.3617 28.0586 12.2055C28.0586 10.0493 29.8065 8.30139 31.9627 8.30139C34.1189 8.30139 35.8668 10.0493 35.8668 12.2055Z" fill="#E95744"></path>
        </svg>
        </a>
        </div>
        
                            <div className="justify-end flex-1 hidden lg:flex">
                                <a href="https://dashboard.knock.app/login" className="inline-block hover:!text-solid-red box-border antialiased cursor-pointer inline-flex items-center transition-colors ease-in duration-200 font-medium rounded-[4px] xl:text-base text-sm leading-[22px] xl:px-6 px-4 xl:py-2 py-[10px] dark:hover:text-solid-grey1 hover:text-solid-grey2 dark:text-solid-white text-solid-black focus:outline-1 focus:outline-offset-4 dark:focus:outline-solid-white focus:outline-solid-black">
                                  <span className="whitespace-nowrap xl:text-base text-sm leading-[22px] flex items-center gap-[10px]">Sign in</span>
                                </a>
                          <a href="https://dashboard.knock.app/signup" className="inline-block box-border antialiased cursor-pointer inline-flex items-center transition-colors ease-in duration-200 font-medium rounded-[4px] xl:text-base text-sm leading-[22px] xl:px-6 px-4 xl:py-2 py-[10px] bg-solid-red text-solid-white  hover:bg-[#E6130F] focus:outline-1 focus:outline-offset-4 focus:outline-solid-red">
                              <span className="whitespace-nowrap xl:text-base text-sm leading-[22px] flex items-center gap-[10px]">Get started</span>
                          </a>
                        </div>
                        <div className="flex items-center justify-center space-x-4 lg:hidden">
                      <button aria-label="Menu" className="px-0 align-top dark:text-solid-white box-border antialiased cursor-pointer inline-flex items-center transition-colors ease-in duration-200 font-medium">
                    <span className="whitespace-nowrap xl:text-base text-sm leading-[22px] flex items-center gap-[10px]"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.125 7.125h15.75M4.125 12h15.75M4.125 16.874h15.75" stroke="currentColor" strokeWidth="2.25" strokeMiterlimit="10" strokeLinecap="round"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </header>

  )
}



export default Header