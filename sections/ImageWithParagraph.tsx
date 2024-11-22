import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";
import { useDevice } from "@deco/deco/hooks";

export interface CTA {
  /** @title Texto do botão */
  text: string;
  /** @title Link do botão */
  href: string;
}

export interface TitleSection {
  /** @title Icone da tag */
  /** @description Tamanho do icone 24x24 */
  icon?: ImageWidget;
  /** @title Texto da tag */
  label?: string;
}

export interface Props {
  /** @title Titulo da sessão */
  titleSection?: TitleSection;
  /**
 * @format rich-text
 * @default Click here to tweak this text however you want.
 */
  /** @title Conteudo da sessão*/
  title?: string;
  /**
* @format rich-text
* @default Click here to tweak this text however you want.
*/
  /** @title Conteudo da sessão*/
  description?: string;
  /** @title Imagem da sessão*/
  /** @description Tamanho da imagem  532x356 */
  src?: ImageWidget;


}


const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f";

export default function ImageWithParagraph({
  title = "Here's an intermediate size heading you can edit",
  // titlePlacement = "left",
  description =
  "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  titleSection,
  src = DEFAULT_IMAGE,
}: Props) {
  const device = useDevice();
  return (
    <div class="bg-base-content py-[48px] lg:py-0">
      <div class="lg:container mx-4 text-sm">
        <div
          class={`flex flex-col lg:flex-row text-left justify-between items-center z-10 `}
        >
          <div class="flex flex-col gap-7 lg:w-2/5">
            <div class="flex items-center gap-1 flex-row">
              <Image src={titleSection?.icon || ''} width={24} height={24} />
              <p class="text-sm font-semibold text-white lg:leading-4">
                {titleSection?.label}
              </p>
            </div>
            <div class="text-4xl leading-6"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            {device === 'mobile' &&
              <img
                width={350}
                height={240}
                class="object-fit z-10 rounded-lg 1/3"
                src={src}
                alt={src}
                decoding="async"
                loading="lazy"
              />
            }
            <div class="text-4xl leading-6" dangerouslySetInnerHTML={{ __html: description }} />
          </div>
          {device === 'desktop' &&
            <div class="py-[37px]">
              <img
                width={532}
                height={356}
                class="object-fit z-10 rounded-lg 1/3 h-[356px]"
                src={src}
                alt={src}
                decoding="async"
                loading="lazy"
              />
            </div>
          }

        </div>
      </div>
    </div>
  );
}
