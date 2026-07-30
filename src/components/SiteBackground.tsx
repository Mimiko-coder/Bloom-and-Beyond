import Image from "next/image";

export function SiteBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
    >
      <Image
        src="/images/background-wallpaper.jpeg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-beige/82 dark:bg-[#101010]/88" />
      <div className="absolute inset-0 bg-gradient-to-b from-beige/40 via-transparent to-beige/55 dark:from-black/40 dark:to-black/55" />
    </div>
  );
}
