import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

import { useScript } from "@deco/deco/hooks";

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
}

const onLoad = () => {
  const header = document.getElementById("header");

  if (!header) {
    console.warn("Header element not found");
    return;
  }

  const onScroll = () => {
    if (globalThis.scrollY > 20) {
      header.classList.add("bg-primary");
    } else {
      header.classList.remove("bg-primary");
    }
  };

  globalThis.addEventListener("scroll", onScroll);

  globalThis.addEventListener("beforeunload", () => {
    globalThis.removeEventListener("scroll", onScroll);
  });
};

export default function Header({
  logo = {
    src:
      "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/lp-vida-veg/daf54f8b-cdc5-4706-bafb-aeb765b04386/vidaveg-1.png",
    alt: "Logo",
  },
}: Nav) {
  return (
    <header
      id="header"
      class="fixed z-50 top-0 w-full z-50 transition-all duration-300"
    >
      <nav class="justify-center">
        <div class="container lg:px-0 px-4 flex gap-8 items-center justify-center py-4">
          <a href="/">
            <Image src={logo.src || ""} width={61} height={68} alt={logo.alt} />
          </a>
        </div>
      </nav>
      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: useScript(onLoad),
        }}
      />
    </header>
  );
}
