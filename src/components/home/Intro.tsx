import Image from 'next/image';

export default function IntroScreen() {
  return (
    <div className="h-[70vh] relative bg-primary bg-[url('/pattern.svg')] bg-[length:43.31px_50px] bg-center bg-fixed ">
      <div className="w-full px-2 md:max-w-screen-sm md:px-0 lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl absolute bottom-1/2 right-1/2  translate-x-1/2 translate-y-1/2 h-2/3 grid sm:grid-cols-2 gap-4">
        <div className="relative">
          <Image
            src="/icon-white.svg"
            alt="logo"
            fill
            className="animate-[spin_60s_infinite] opacity-50"
          />
          <Image
            src="/woman.png"
            alt="logo"
            width={300}
            height={300}
            className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 rounded-full"
          />
        </div>
        <div className="grid place-content-center">
          <h1 className="text-4xl text-amber-500 text-center font-bold mb-4">
            Бид таньд туслахдаа үргэлж баяртай байх болно.
          </h1>
          <button className="rounded-full font-semibold bg-amber-500 w-fit block mx-auto px-5 py-1 text-gray-100 shadow-md hover:bg-gray-100 hover:text-amber-500">
            Залгах
          </button>
        </div>
      </div>
    </div>
  );
}
