import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

import Slider from "../components/ui/Slider.tsx";
import { useId } from "../sdk/useId.ts";
import Icon from "../components/ui/Icon.tsx";


/**
 * @titleBy title
 */
export interface Post {
  title: string;
  description: string;
  image: ImageWidget;
}

export interface Props {
  /**
* @format rich-text
* @default Click here to tweak this text however you want.
*/
  titleSection?: string;
  /**
 * @format rich-text
 * @default Click here to tweak this text however you want.
 */
  title?: string;
  posts?: Post[];
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

function SlideItem({ post }: { post: Post }) {
  return (
    <div class="rounded-large overflow-hidden max-w-[324px] w-full">
      <div class="p-6 space-y-4 bg-accent-content">
        <div class="space-y-2">
          <h3 class="text-2xl">{post.title}</h3>
          <p class="text-base">{post.description}</p>
        </div>
      </div>
      <div
        class="h-[260px] relative"
        style={{
          backgroundImage: `url(${post.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      </div>
    </div>
  );
}

export default function BlogPosts({
  title = "Here's a component for you to showcase your blog posts",
  titleSection = "Receitas e Dicas Exclusivas",
  posts = [
    {
      title: "Pizza com queijo muçarela Vida Veg",
      description:
        "Use nossa muçarela de castanha de caju em pizzas que vão agradar ao paladar dos seus clientes.",
      image: DEFAULT_IMAGE,
    },
    {
      title: "Pizza com queijo muçarela Vida Veg",
      description:
        "Use nossa muçarela de castanha de caju em pizzas que vão agradar ao paladar dos seus clientes.",
      image: DEFAULT_IMAGE,
    },
    {
      title: "Pizza com queijo muçarela Vida Veg",
      description:
        "Use nossa muçarela de castanha de caju em pizzas que vão agradar ao paladar dos seus clientes.",
      image: DEFAULT_IMAGE,
    }
  ],
}: Props) {
  const id = useId();

  return (
    <div class="container ">
      <div class="flex flex-col lg:flex-row lg:gap-4 justify-between">
        <div class="lg:w-2/5 lg:flex lg:items-center mx-4 py-[48px] lg:py-0">
          <div class="flex flex-col gap-7">
            <div class="flex gap-1 items-center">
              <Icon id="IconFood" width={24} height={24} />
              <p class="font-bold text-sm text-primary">{titleSection}</p>
            </div>
            <div
              class="text-[28px] leading-[36px] lg:text-5xl font-bold "
              dangerouslySetInnerHTML={{ __html: title }} />
          </div>
        </div>
        <div class="flex gap-2 overflow-hidden lg:w-3/5">
          <Slider
            class="carousel carousel-center w-full col-span-full row-span-full gap-6"
            rootId={id}
            infinite
          >
            {posts.map((post, index) => (
              <Slider.Item
                index={index}
                class="carousel-item max-w-[334px] w-full"
              >
                <SlideItem key={post.title} post={post} />
              </Slider.Item>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
