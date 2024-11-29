import { useId } from "../sdk/useId.ts";
import { useScript } from "@deco/deco/hooks";

interface Props {
    /**
     * @title Título da sessão
     */
    title?: string;
    /**
     * @title Subtítulo da sessão
     * @format rich-text
     */
    subtitle?: string;
    /**
     * @title Clique no + para adicionar um novo card
     */
    cards?: Card[];
    /**
     * @title Configurar CTA
     */
    cta?: CTA;
}

interface Card {
    /**
     * @title Imagem
     * @description tamanho da imagem 132x132
     */
    src?: string;
    /**
     * @title Texto do card
     */
    label?: string;
}

interface CTA {
    label?: string;
    link?: string;
}

const ItemCard = ({ src, label }: Card) => (
    <div class="swiper-slide">
        <div class="flex flex-col ">
            <img src={src} alt={label} class="w-32 h-32 object-cover" />
            <p class="text-center max-w-32">{label}</p>
        </div>
    </div>
);

const onLoad = (id: string) => {
    const carousel = document.getElementById(id);
    if (carousel) {
        // @ts-ignore swiper exists
        new Swiper(`#${id} #content > div`, {
            spaceBetween: 12,
            slidesPerView: "auto",
            breakpoints: {
                640: {
                    spaceBetween: 30,
                },
            },
            pagination: {
                clickable: true,
            },
        });
    }
}

const OurProducts = ({ title, subtitle, cards, cta }: Props) => {
    const id = useId();

    return (
        <div id={id} >
            <div class="py-12 px-5 lg:px-0">
                <div class="container flex flex-col gap-7 items-center p-0">
                    {title && <p class="text-4xl text-start lg:text-center text-accent-content font-bold">{title}</p>}
                    {subtitle && (
                        <p
                            class="text-lg text-primary text-start lg:text-center"
                            dangerouslySetInnerHTML={{ __html: subtitle }}
                        />
                    )}
                    <div id={id}
                        class="overflow-hidden">
                        <div id="#content" class="overflow-hidden">
                            <div  class="swiper-wrapper">
                                {cards?.map((item, index) => (

                                    <ItemCard key={index} {...item} />
                                ))}
                            </div>
                        </div>

                    </div>

                    {cta?.label && cta?.link && (
                        <a
                            class="py-4 px-6 bg-primary text-white font-bold rounded-full"
                            href={cta.link}
                        >
                            {cta.label}
                        </a>
                    )}
                </div>

                <script
                    type="module"
                    dangerouslySetInnerHTML={{
                        __html: useScript(onLoad, id),
                    }}
                />
            </div>
        </div>
    );
};



export default OurProducts;
