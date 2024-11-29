import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { useDevice } from "@deco/deco/hooks";
import SocialLinks, { Social as SocialType } from "site/components/ui/Social.tsx";

export interface Items {
  /** @title Icone do selo */
  /** @description Tamanho do icone 46 x 46 */
  src: ImageWidget;
  /** @title Texto alternativo */
  alt: string;
}

export interface Subscribe {
  /** @format rich-text */
  /** @title Texto newsletter */
  title: string;
}

export interface Social {
  /** @title Escolha uma rede social */
  network: ImageWidget;
  /** @title Link da rede social */
  href: string;
}

export interface Props {
  /** @title Adicionar um logo? */
  logo?: {
    /** @description Tamanho da logo 117 x 115 */
    src?: ImageWidget;
    /** @title Texto alternativo */
    alt?: string;
  };
  /** @title Texto newsletter */
  subscribe?: Subscribe;
  /** @title Logo da agência */
  madeWith?: {
    /** @title Logo da agência */
    /** @description Tamanho da logo 127 x 86 */
    src?: ImageWidget;
    /** @title Link logo da agência */
    href?: string;
    /** @title Texto alternativo logo da agência */
    label?: string;
  };
  /** @title Texto copyright */
  copyright?: string;
  /** @title Clique no + para adicionar novos selos */
  seals?: Items[];
  /** @title Clique no + para adicionar uma nova rede social */
  social?: SocialType[];
}

export default function Footer({
  logo = {
    src: "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/lp-vida-veg/d1ab627c-f887-4444-aa7c-9fc30f0db435/Group.svg",
    alt: "Logo",
  },
  seals,
  subscribe = { title: "Subscribe" },
  madeWith = {
    label: "By:",
    src: "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/lp-vida-veg/4f8bdc48-ea46-4ffb-a63e-0af96f691891/Group-697.svg",
    href: "https://deco.cx",
  },
  copyright = "© 2024 deco.cx. All rights reserved.",
  social = [
    { network: "Facebook", href: "" },
    { network: "Instagram", href: "" },
    { network: "X - Twitter", href: "" },
    { network: "Linkedin", href: "" },
    { network: "Youtube", href: "" },
  ],
}: Props) {
  const device = useDevice();
  const isMobile = device === "mobile";

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div class="bg-primary">
      <div class="container text-sm py-12">
        <div class="flex flex-col">
          <div class="flex flex-col gap-11 justify-between lg:flex-row">
            {/* Logo e Selos */}
            <div class="flex flex-col items-center">
              <Image
                src={logo.src || ""}
                class={`${isMobile ? "w-[61.39px] h-[28px]" : "w-[117.99px] h-[115.86px]"}`}
                alt={logo.alt || "Logo"}
              />
              {!isMobile && seals?.length && (
                <div class="flex gap-6 mt-8">
                  {seals.map((item, index) => (
                    <img
                      key={index}
                      class="w-[46px] h-[46px]"
                      src={item.src}
                      alt={item.alt}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Redes Sociais e Newsletter */}
            <div class="lg:max-w-[303px] flex flex-col">
              <ul class="flex w-full gap-7 justify-center lg:justify-between mb-6 lg:mb-0">
                {social?.map((item, index) => (
                  <li key={index}>
                    <SocialLinks {...item} />
                  </li>
                ))}
              </ul>

              <h4
                dangerouslySetInnerHTML={{ __html: subscribe.title }}
                class="font-semibold text-base mt-[45px] lg:mt-[50px] lg:mb-[30px] mb-[20px] text-center"
              />
              <form class="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
                <div class="border border-base flex p-4 rounded-full w-full">
                  <input
                    type="text"
                    placeholder="Seu nome"
                    class="w-full outline-0 bg-transparent text-base-200 placeholder:text-base-200"
                  />
                </div>
                <div class="border border-base flex p-4 rounded-full lg:max-w-[303px] w-full">
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    class="w-full outline-0 bg-transparent text-base-200 placeholder:text-base-200"
                  />
                  <button
                    type="submit"
                    class="text-accent-content font-bold text-sm bg-transparent"
                    aria-label="Subscribe"
                  >
                    Cadastrar
                  </button>
                </div>
              </form>
              {isMobile && seals?.length && (
                <div class="flex gap-6 mt-8 justify-around py-[45px]">
                  {seals.map((item, index) => (
                    <img
                      key={index}
                      class="w-[46px] h-[46px]"
                      src={item.src}
                      alt={item.alt}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Copyright */}
          <div class="flex flex-col gap-4 items-center justify-between lg:flex-row lg:items-center lg:mt-16 lg:w-fit">
            <span class="text-base-200">{copyright}</span>
            <a
              href={madeWith.href}
              class="flex items-center gap-1"
              target="_blank"
            >
              {!isMobile && (
                <span class="text-base-200">{madeWith.label}</span>
              )}
              <Image
                src={madeWith.src || ""}
                class={`${isMobile ? "w-[127.15px] h-[22.12px]" : "w-[86.91px] h-[15.12px]"}`}
                alt={madeWith.label || "Logo"}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
