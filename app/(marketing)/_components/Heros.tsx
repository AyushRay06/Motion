import Image from "next/image"

export const Heros = () => {
  return (
    <div className="flex flex-col item-center justifify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src="/banner.jpg"
            fill
            className="object-contain dark:hidden"
            alt="Hero"
          />
          <Image
            src="/black.jpg"
            fill
            className="object-contain hidden dark:block"
            alt="Hero"
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            src="/banner2.jpg"
            fill
            className="object-contain dark:hidden"
            alt="banner2"
          />
          <Image
            src="/black.jpg"
            fill
            className="object-contain hidden dark:block"
            alt="banner2"
          />
        </div>
      </div>
    </div>
  )
}
