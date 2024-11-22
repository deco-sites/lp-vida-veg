import Percentage from '../components/ui/Percentage.tsx';
import Icon from "../components/ui/Icon.tsx";
import { useDevice } from "@deco/deco/hooks";

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
    /** @title insira apenas o numero do percentual */
  percentage?: number;
      /** @title insira apenas o texto relacionado a esse percentual */
  text?: string;
}

const Benefits = ({
  cards,
  font,
  tags,
  content,
  titlePage = "Benefícios para seu Negócio",
}: Props) => {
  const device = useDevice();
  return (
    <div>
      <div className="container flex lg:justify-between px-4 lg:items-center flex-col lg:flex-row">
        <div className="lg:w-2/2 flex flex-col gap-7">
          <div className="lg:max-w-[556px] flex flex-col gap-7">
            <div className="flex items-center gap-1">
              <Icon id="Target" width={24} height={24} />
              <p className="text-primary font-bold text-sm">{titlePage}</p>
            </div>
            <div
              className="font-bold text-[28px] text-start"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <div className="flex flex-wrap gap-7">
              {tags?.map((tag, index) => (
                <div key={index} className="flex items-center gap-1 w-full lg:w-fit">
                  <Icon id="IconFood" width={24} height={24} />
                  <p className="text-4 text-primary">{tag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-7 lg:mt-0">
          <div className="lg:flex grid grid-cols-2 gap-7 lg:mb-10">
            {cards?.map((item, index) => (
              <Percentage
                key={index}
                percentage={item?.percentage ? { percentage: item.percentage } : undefined}
                text={item?.text}
              />
            ))}
          </div>
          <p className="flex justify-center mt-8" dangerouslySetInnerHTML={{ __html: font }} />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
