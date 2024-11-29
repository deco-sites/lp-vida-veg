import type { ImageWidget } from "apps/admin/widgets.ts";
import Slider from "../components/ui/Slider.tsx";
import { useId } from "../sdk/useId.ts";

interface Props {
    /**
     @title Titulo da sessão 
     * */
    title?: string;
    /**
 @title Subtitulo da sessão 
@format rich-text 
 * */
    subtitle?: string;
    /**
@title Clique no + para adicionar um novo card
* */
    cards?: Card[];
    /**
 @title Configurar CTA 
 * */
    cta?: CTA;
}

/**
 @titleBy label
@format rich-text 
 * */
interface Card {
    /**
     @title Imagem
     @description tamanho da imagem 132x132
     * */
    src?: ImageWidget;
    /**
 @title Texto do card 
 * */
    label?: string;
}

interface CTA {
    label?: string;
    link?: string;
}

const ItemCard = ({ ...props }: Card) => {
    return (
        <>
            <img
                src={props?.src}
                alt={props?.label}
            />
            <p class="text-center max-w-32">
                {props?.label}
            </p>
        </>
    )
}


const OurProducts = ({ ...props }: Props) => {
    const id = useId();
    return (
        <div class="py-12 px-5 lg:px-0">
            <div class="container flex flex-col gap-7 items-center">
                <p class="text-4xl text-center text-accent-content font-bold">{props?.title}</p>
                <p
                    class="text-lg text-primary text-center"
                    dangerouslySetInnerHTML={{ __html: props?.subtitle }}
                />
                <ul class="flex gap-5 justify-center overflow-x-auto scrollbar-none">

                    <Slider
                        class="carousel carousel-center w-full col-span-full row-span-full gap-6"
                        rootId={id}
                    >
                        {props?.cards?.map((item, index) => (
                            <Slider.Item
                                index={index}
                                class="carousel-item w-fit flex items-center flex-col"
                            >
                                <ItemCard key={index} {...item} />
                            </Slider.Item>
                        ))}
                    </Slider>

                </ul>
                <a class='py-4 px-6 bg-primary text-white font-bold rounded-full' href={props?.cta?.link}>{props?.cta?.label}</a>
            </div>
        </div>
    )
}

export default OurProducts


{/* <div class="flex gap-2 overflow-hidden lg:w-3/5">
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
</div> */}