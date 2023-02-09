import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
export interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function Layout({ children, title }: LayoutProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(
    () => window.addEventListener('scroll', () => setScrollY(window.scrollY)),
    []
  );

  return (
    <>
      <Head>
        <title>{title ? title + ' - NES Medical' : 'NES Medical'}</title>
        <meta name="description" content="eCommerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="flex min-h-screen flex-col justify-between font-nunito"
      // style={roboto.style}
      >
        <header
          className={`${scrollY > 20 ? 'sticky top-0 bg-gray-100' : 'absolute top-5'
            } w-full px-5 py-2 shadow-md z-10`}
        >
          <main className="flex justify-between items-center">
            <svg
              viewBox="0 0 500 200"
              className={`w-20 md:w-24 lg:w-28 xl:w-32 ${scrollY > 20 ? 'fill-primary' : 'fill-gray-100'
                }`}
            >
              <path d="M252.44,90.79V29h8.71L281,60.26a174.34,174.34,0,0,1,11.09,20.08l.19-.09c-.74-8.26-.92-15.78-.92-25.4V29h7.52v61.8h-8.07L271.15,59.43A197.27,197.27,0,0,1,259.59,38.8l-.27.09c.46,7.8.64,15.22.64,25.49V90.79Z" />
              <path d="M344.77,61.82h-24V84.1h26.77v6.69H312.77V29h33.38v6.69h-25.4V55.21h24Z" />
              <path d="M356.78,81.07a28.32,28.32,0,0,0,14.31,4c8.16,0,12.93-4.31,12.93-10.55,0-5.78-3.3-9.08-11.65-12.29-10.09-3.57-16.32-8.8-16.32-17.51,0-9.63,8-16.78,20-16.78,6.33,0,10.91,1.47,13.66,3l-2.2,6.51a24.61,24.61,0,0,0-11.74-2.94c-8.43,0-11.64,5.05-11.64,9.26,0,5.78,3.76,8.62,12.29,11.92,10.45,4,15.77,9.08,15.77,18.16,0,9.54-7.06,17.79-21.64,17.79-6,0-12.47-1.74-15.77-3.94Z" />
              <path d="M299.29,169.09c-2.93,1.46-8.8,2.93-16.32,2.93-17.42,0-30.53-11-30.53-31.27,0-19.35,13.11-32.46,32.27-32.46,7.71,0,12.57,1.65,14.68,2.75l-1.93,6.51A29.2,29.2,0,0,0,285,115c-14.49,0-24.12,9.26-24.12,25.49,0,15.13,8.71,24.85,23.75,24.85a31.91,31.91,0,0,0,13-2.57Z" />
              <path d="M309.28,109.3h8v55.11h26.41v6.69H309.28Z" />
              <path d="M360.54,109.3v61.8h-8V109.3Z" />
              <path d="M374.48,171.1V109.3h8.71L403,140.57a174.52,174.52,0,0,1,11.1,20.08l.18-.09c-.73-8.25-.92-15.77-.92-25.4V109.3h7.52v61.8H412.8l-19.62-31.36a195.13,195.13,0,0,1-11.55-20.63l-.28.09c.46,7.8.64,15.22.64,25.49V171.1Z" />
              <path d="M442.78,109.3v61.8h-8V109.3Z" />
              <path d="M499.91,169.09c-2.94,1.46-8.8,2.93-16.32,2.93-17.43,0-30.54-11-30.54-31.27,0-19.35,13.11-32.46,32.28-32.46,7.7,0,12.56,1.65,14.67,2.75l-1.93,6.51A29.13,29.13,0,0,0,485.6,115c-14.48,0-24.11,9.26-24.11,25.49,0,15.13,8.71,24.85,23.75,24.85a31.91,31.91,0,0,0,13-2.57Z" />
              <path d="M100.4,100A103.46,103.46,0,0,1,73.61,0,103.46,103.46,0,0,1,100.4,100Z" />
              <path d="M173.21,26.91A103.45,103.45,0,0,1,100.4,100,103.42,103.42,0,0,1,173.21,26.91Z" />
              <path d="M200.4,126.79A103.43,103.43,0,0,1,100.4,100,103.44,103.44,0,0,1,200.4,126.79Z" />
              <path d="M100.4,100l-.4.11A103.44,103.44,0,0,1,0,73.31,103.44,103.44,0,0,1,100.4,100Z" />
              <path d="M100.4,100a103.48,103.48,0,0,1-73.21,73.21A103.45,103.45,0,0,1,100,100.11Z" />
              <path d="M127.2,200a103.44,103.44,0,0,1-26.8-100A103.46,103.46,0,0,1,127.2,200Z" />
            </svg>
            <nav
              className={`flex gap-5 font-medium ${scrollY > 20 ? 'text-primary' : 'text-gray-100'
                }`}
            >
              <Link
                href="/"
                className="hover:underline hover:underline-offset-8 hover:decoration-4"
              >
                Бидний тухай
              </Link>
              <Link
                href="/"
                className="hover:underline hover:underline-offset-8 hover:decoration-4"
              >
                Үйлчилгээ
              </Link>
              <Link
                href="/"
                className="hover:underline hover:underline-offset-8 hover:decoration-4"
              >
                Зөвөлгөө
              </Link>
              <Link
                href="/"
                className="hover:underline hover:underline-offset-8 hover:decoration-4"
              >
                Холбоо барих
              </Link>
            </nav>
          </main>
        </header>
        <div>{children}</div>
        <footer className="flex justify-center items-center shadow-inner w-full h-10">
          footer
          <div className="grid grid-cols-4 gap-2 w-[678]">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis corrupti sunt dolor possimus, tenetur blanditiis ad vel dolores voluptate praesentium.
            </div>
            <div>
              Lorem ipsum, dolor ddsit amet consectetur adipisicing elit. Nihil, iure.
            </div>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, iure.
            </div>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, iure.
            </div>
          </div>
          <h1 className='text-gray-100 bg-primary p' >Сайн байна уу</h1>
          <PhoneCallbackIcon className='text-orange-900' />
          <div></div>
        </footer>
      </div>
    </>
  );
}
