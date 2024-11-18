import type { ImageWidget } from "apps/admin/widgets.ts";
import { useDevice } from "@deco/deco/hooks";


export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
   */
  /**
 * @format rich-text
 * @default Click here to tweak this text however you want.
 */
  description?: string;
  imageMobile?: ImageWidget;
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

      <div class="lg:container lg:mx-auto mx-4 h-full flex items-center">
        <div class="flex flex-col items-center gap-8">
          <div
            class={`flex w-full xl:container py-20 mx-5 md:mx-10 z-10  lg:py-36 gap-12 md:gap-20 items-center`}
          >
            <div
              class={`lg:mr-auto lg:max-w-[560px] lg:w-full space-y-4 gap-4`}
            >
              <div
                class="inline-block  lg:text-[60px] text-5xl leading-none font-medium lg:leading-[64px]"
                dangerouslySetInnerHTML={{
                  __html: title,
                }}
              >
              </div>
              <div class="lg:text-xl lg:mt-6 lg:leading-6 text-[17px]"
                dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
