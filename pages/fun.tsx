import Container from 'components/Container';
import Image from 'next/image';

export default function Uses() {
  return (
    <Container
      title="Fun Stuff – Ryan Ma"
      description="A quick compilation of fun stuff about me... also a recordbook for myself"
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          My Gear
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          Tech that I use day-to-day. Updated as of 2023-01-01.
        </p>
        {/* <Image
          className="rounded-lg"
          alt={`My computer desk`}
          src={`/static/images/setup.png`}
          width={2164 / 2}
          height={1546 / 2}
          priority
        /> */}
        <div className="prose dark:prose-dark w-full">
          <h3 id="computer-office">SFF Desktop</h3>
          <ul>
            <li>Ryzen 7 5800X</li>
            <li>RTX 3070 Ti</li>
            <li>32GB RAM</li>
            <li>A billion SSDs (500GB + 1TB + 240GB + 2TB)</li>
            <li>Gigabyte B550I Aorus Pro AX</li>
            <li>EVGA 650GM</li>
            <li>NZXT Kraken X63 AIO</li>
            <li>CoolerMaster NR200</li>
          </ul>
          <h3 id="peripherals">Peripherals</h3>
            <li>Monitors:
              <ul>
                <li>Monoprice Dark Matter 27" 1440p 180 Hz</li>
                <li>Gigabyte G27QC 27" 1440p 165 Hz</li>
                <li>LG Ultragear GL650F 27" 1080p 165 Hz</li>
              </ul>
            </li>
            <li>Keyboard: Akko 3068B with Akko Jelly Pink Switches</li>
            <li>Mouse: Razer Basilisk V3</li>
            <li>Headphones: Sennheiser HD 560S</li>
            <li>Microphone: Blue Yeti</li>

          <h3 id="environment">ENV</h3>
          <ul>
            <li>
              OS: Windows 10 Pro and Pop OS 22.04
            </li>
            <li>Laptop: Lenovo Flex 14 (Ryzen 7 5700u)</li>
            <li>Phone: LG V60</li>
          </ul>
        </div>
      </article>
    </Container>
  );
}
