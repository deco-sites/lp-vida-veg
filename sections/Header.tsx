import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";


export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
}

export default function Header({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
}: Nav) {
  return (
    <header>
      <nav class="">

        {/* main content */}
        <div class="container lg:px-0 px-4 flex gap-8 items-center justify-between py-4">
          <a href="/">
            <Image src={logo.src || ""} width={100} height={28} alt={logo.alt} />
          </a>
        </div>

      </nav>
    </header>
  );
}
