
import Icon from "../components/ui/Icon.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

import { useDevice } from "@deco/deco/hooks";

interface Props {
    titlePage?: string;

    /**
* @format rich-text
* @default Click A Vida Veg Chef oferece uma oportunidade especial para
novos clientes! Ao fazer o cadastro, você ganha 15% OFF
no primeiro pedido. Conheça nossa linha de produtos
e faça seu pedido!.
*/
    content?: string;
    cta?: CTA
    src?: ImageWidget;

}
interface CTA {
    label?: string;
    link?: string;
}

export function LoadingFallback() {
    return <div class="skeleton rounded-none h-[130px] lg:h-[109px]" />;
}
const Promotion = ({
    cta, content, src, titlePage
}: Props) => {
    const device = useDevice();
    return (
        <div class="bg-base-content">
            <div class="lg:py-[52px] container flex items-center justify-between flex-col lg:flex-row gap-7 lg:gap-0 px-5 lg:px-0 py-[48px]">
                <div class="flex flex-col gap-7 lg:max-w-[594px]">
                    <div class="flex items-center gap-1">
                        <Icon id="Food-white" width={24} height={24} />
                        <p class="text-base-200 font-bold text-sm">{titlePage}</p>
                    </div>
                    <div class="leading-[30px]" dangerouslySetInnerHTML={{ __html: content }} />
                    <a class="font-bold text-xl text-base-content bg-base-200 w-full h-auto rounded-full py-4 w-full max-w-[350px] flex gap-1 items-center justify-center"
                        href={cta?.link}>
                        <Icon id="PhoneCall" width={24} height={24} />
                        {cta?.label}
                    </a>

                </div>
                <Image src={src || ''}
                    width={device === 'mobile' ? 340 : 612}
                    height={device === 'mobile' ? 240 : 484}
                />
            </div>


        </div>
    )
}

export default Promotion