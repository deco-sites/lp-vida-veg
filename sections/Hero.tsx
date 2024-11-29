import type { ImageWidget } from "apps/admin/widgets.ts";
import { useDevice } from "@deco/deco/hooks";


export interface Props {
  /**
  /** @title Titulo do Banner */
  title?: string;
  /** 
  /** @title subtitulo do Banner */
  subtitle?: string;
  /** @title Imagem de fundo mobile */
  /**
   *  * @format rich-text */
  paragraph?: string;
  /**
 * @format rich-text
 * @default Click here to tweak this text however you want.
 */
  /** @title Imagem de fundo mobile */
  /** @description Altura da imagem 600 */
  imageMobile?: ImageWidget;
  /** @title Imagem de fundo desktop */
  /** @description Altura da imagem 750 */
  imageDesktop?: ImageWidget;
  /** @title Tags */
  /** @description Para adicionar nova tag clique no + */
  tagline?: TaglineProps[];
}
/** @titleBy text */
interface TaglineProps {
  /** @title Texto da tag */
  text?: string;
}

const Tagline = ({ ...props }: TaglineProps) => {
  return (
    <>
      <p class="text-xs p-2 lg:p-3 border border-white rounded-full bg-[#A1C342] text-white w-fit">{props?.text}</p>
    </>
  )
}


export default function HeroFlats({
  imageMobile,
  tagline,
  imageDesktop,
  title = "Chegou Vida Veg Chef",
  subtitle = "Faz bem para o mundo, faz bem para o seu negócio",
  paragraph = "Se diferencie e destaque o potencial do seu cardápio com produtos saudáveis e plant-based.",
}: Props) {
  const device = useDevice();
  return (
    <div style={{
      backgroundImage: `url(${device === 'mobile' ? imageMobile : imageDesktop})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      width: '100%',
      height: ` ${device === 'mobile' ? '700px' : '750px'}`
    }}>

      <div class="lg:container lg:mx-auto mx-4 h-full flex items-start lg:items-center">
        <div class="flex flex-col items-center gap-8 justify-end h-full lg:justify-center">
          <div
            class={`flex w-full xl:container md:mx-10 z-10  lg:py-36 gap-12 md:gap-20 items-center `}
          >
            <div
              class={`lg:mr-auto lg:max-w-[58%] lg:w-full flex flex-col gap-5`}
            >
              <p
                class="inline-block  lg:text-6xl text-4xl font-bold text-white">
                {title}
              </p>
              <ul class='flex flex-wrap lg:flex-nowrap gap-3'>
                {tagline?.map((item) => (
                  <li class="w-fit">

                    <Tagline {...item} />
                  </li>
                ))}
              </ul>
              <p
                class="inline-block  lg:text-6xl text-4xl font-bold text-white">
                {subtitle}
              </p>
              <p
                class="inline-block text-base lg:text-xl leading-none font-medium lg:leading-[64px]"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
         
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
