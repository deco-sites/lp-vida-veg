import type { ImageWidget } from "apps/admin/widgets.ts";
import { useDevice } from "@deco/deco/hooks";


export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  /** @title Titulo do Banner */
  title?: string;
  /**
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
   */
  /**
 * @format rich-text
 * @default Click here to tweak this text however you want.
 */
  /** @title Descrição do Banner */
  description?: string;
  /** @title Imagem de fundo mobile */
  /** @description Altura da imagem 600 */
  imageMobile?: ImageWidget;
  /** @title Imagem de fundo desktop */
  /** @description Altura da imagem 750 */
  imageDesktop?: ImageWidget;
}


export default function HeroFlats({
  imageMobile,
  imageDesktop,
  title = "Faz bem para o mundo, faz bem para o seu negócio.",
  description =
  "Se diferencie e destaque o potencial do seu cardápio com produtos saudáveis que atendem às demandas crescentes por alimentação consciente e mais inclusiva.",
}: Props) {
  const device = useDevice();
  return (
    <div style={{
      backgroundImage: `url(${device === 'mobile' ? imageMobile : imageDesktop})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      width: '100%',
      height: ` ${device === 'mobile' ? '600px' : '750px'}`
    }}>

      <div class="container h-full flex items-center">
        <div class="flex flex-col items-center gap-8">
          <div class="flex w-full py-20 mx-5 md:mx-10 z-10 lg:py-36 gap-12 md:gap-20 items-center">
            <div class="lg:mr-auto lg:max-w-[560px] lg:w-full space-y-4 gap-4">
              <div
                class="inline-block lg:text-5xl text-4xl leading-none font-bold"
                dangerouslySetInnerHTML={{
                  __html: title,
                }}
              >
              </div>
              <div class="lg:text-xl lg:mt-6 text-lg"
                dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
