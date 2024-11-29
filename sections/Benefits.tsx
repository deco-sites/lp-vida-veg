import Icon from "../components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  /** @title Titulo da sessão */
  titlePage?: string;
  /** @title Clique no + para adicionar novas tags */
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  /** @title Texto da sessão */
  content?: string;
  tags?: string[];

  /** @title Clique no + para adicionar novos cards de percentual */
  cards?: PercentageProps[];
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
  */
  /** @title Fonte */
  font?: string;
}


/**
 * @titleBy text
 */
interface PercentageProps {
  icon?: ImageWidget;
  text?: string;
}

const Benefits = ({
  cards,
  font,
  tags,
  content,
  titlePage = "Benefícios para seu Negócio",
}: Props) => {
  return (
    <div>
      <div class="container flex lg:justify-between lg:items-center flex-col lg:flex-row">
        <div class="lg:w-2/2 flex flex-col gap-4 mb-8 lg:mb-0">
          <div class="lg:max-w-xl flex flex-col gap-5">
            <div class="flex items-center gap-1">
              <Icon id="Target" width={24} height={24} />
              <p class="text-primary font-bold text-sm">{titlePage}</p>
            </div>
            <div
              class="font-semibold text-2xl lg:text-3xl"
              dangerouslySetInnerHTML={{ __html: content || "" }}
            />
            <div class="flex flex-wrap gap-x-4 gap-y-2">
              {tags?.map((tag, index) => (
                <div key={index} class="flex items-center gap-1 w-full lg:w-fit">
                  <Icon id="IconFood" width={24} height={24} />
                  <p class="text-sm lg:text-base text-primary">{tag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="flex flex-col lg:flex-row gap-7">
            {cards?.map((item) => (
              <div class="flex flex-col items-center">
                {item?.icon && (
                  <Image
                    src={item.icon}
                    class="mb-2 max-h-[135px] h-[135px] min-w-[135px]"
                    width={135}
                    height={135}
                  />
                )}
                <span class="block font-semibold text-dark-green text-center text-sm">{item.text}</span>
              </div>
            ))}
          </div>
          <p class="flex justify-center mt-8 text-center text-base lg:text-lg" dangerouslySetInnerHTML={{ __html: font || "" }} />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
