import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";
import Slider from "../components/ui/Slider.tsx";
import { useId } from "../sdk/useId.ts";

/**
 * @titleBy alt
 */
export interface Testimonial {
  content?: {
    description?: string;
    avatar?: ImageWidget;
    /** @description Image's alt text */
    alt?: string;
  };
}

export interface Props {
  /**
 * @format rich-text
 * @default Click here to tweak this text however you want.
 */
  title?: string;
  slides?: Testimonial[];
}

const DEFAULT_PROPS = {
  title: "Parceiros que Já Aumentaram suas Vendas com Vida Veg Chef",
  slides: [
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
      },
    },
  ],
};

function SliderItem(
  { slide, id }: { slide: Testimonial; id: string },
) {
  const {
    content,
  } = slide;

  return (
    <div
      id={id}
      class="relative overflow-y-hidden  min-h-[292px]"
    >
      <div class="flex flex-col gap-5 p-5 border border-base-content rounded-large h-full min-h-[464px] max-w-[324px]">
        <div class="flex items-center gap-5 justify-between">
          <Image
            class="object-contain w-14 h-14 "
            alt={content?.alt}
            src={content?.avatar || ""}
            width={85}
            height={50}
          />
          <Icon id="newHeart" width={24} height={24} />
        </div>
        <p class="text-lg">{content?.description}</p>
      </div>
    </div>
  );
}

function Dots({ slides }: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }
          `,
        }}
      />
      {/* <ul class="carousel col-span-full gap-3 z-10">
        {slides?.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div class="py-5">
                <div
                  class="w-2 h-2 rounded-full group-disabled:animate-progress dot"
                />
              </div>
            </Slider.Dot>
          </li>
        ))}
      </ul> */}
    </>
  );
}

function Buttons() {
  return (
    <div class="flex gap-4">
      <div class="flex items-center justify-center z-10 col-start-1 row-start-2">
        <Slider.PrevButton class="flex items-center justify-center btn-circle border border-base-content">
          <Icon
            class="text-base-content"
            size={24}
            id="ArrowRight"
            strokeWidth={3}
          />
        </Slider.PrevButton>
      </div>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-2">
        <Slider.NextButton class="flex items-center justify-center btn-circle border border-base-content">
          <Icon
            class="text-base-content"
            size={24}
            id="ArrowLeft"
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </div>
  );
}

function Carousel(props: Props) {
  const id = useId();
  const { title, slides } = { ...DEFAULT_PROPS, ...props };

  return (
    <div
      id={id}
      class="min-h-min flex flex-col lg:container mx-4 gap-7"
    >
      <div class="flex justify-center lg:text-4xl lg:leading-[48px] text-[28px] text-accent-content font-bold text-start lg:text-center lg:max-w-[600px] lg:mx-auto" dangerouslySetInnerHTML={{ __html: title }} />
      <Slider
        class="carousel carousel-center w-full col-span-full row-span-full gap-6"
        rootId={id}
        // interval={interval && interval * 1e3}
        infinite
      >
        {slides?.map((slide, index) => (
          <Slider.Item
            index={index}
            class="carousel-item max-w-[334px] w-full"
          >
            <SliderItem
              slide={slide}
              id={`${id}::${index}`}
            />
          </Slider.Item>
        ))}
      </Slider>

      {/* <div class="flex justify-between pt-8 lg:px-16">
        {props.dots && <Dots slides={slides} interval={interval} />}{" "}
        {props.arrows && <Buttons />}
      </div>  */}
    </div>
  );
}

export default Carousel;
