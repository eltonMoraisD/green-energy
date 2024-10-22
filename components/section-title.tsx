import { cn } from '@/lib/utils';
import { Separator } from './ui/separator';

type SectionTitleProps = {
  sup: string;
  title: string;
  link: string;
  date: number;
  classname?: string;
};

const SectionTitle = (props: SectionTitleProps) => {
  return (
    <>
      <div className={cn('flex justify-between', props.classname)}>
        <h2 className="font-semibold capitalize">
          <sup className="text-gray-400">{props.sup}</sup> {props.title}
        </h2>
        <p>{props.link}</p>
        <p>{props.date}</p>
      </div>
      <Separator className="mt-3" />
    </>
  );
};

export default SectionTitle;
