import AnimatedButton from "./AnimatedBtn";

interface TakeActionsProps {
  text1: string;
  text2?: string;
  title: string;
  btnText: string;
}

const TakeActions: React.FC<TakeActionsProps> = ({
  text1,
  text2,
  title,
  btnText,
}) => {
  return (
    <section className="flex justify-center bg-oof-blue-700 px-8 pt-[216px]">
      <div className="flex max-w-[1376px] flex-col items-center justify-center gap-[48px]">
        <div className="text-center">
          <p className="text-[22px] leading-[33px] text-oof-blue-50">{text1}</p>
          {text2 && (
            <p className="text-[22px] leading-[33px] text-oof-blue-50">
              {text2}
            </p>
          )}
        </div>

        <AnimatedButton btnText={btnText} />

        <h1 className="mb-4 text-balance text-center font-raleway text-[152px] font-bold leading-[152px] tracking-[-2%] text-oof-blue-50">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default TakeActions;
