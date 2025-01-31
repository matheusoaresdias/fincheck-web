import illustration from '../../assets/illustration.png';

export function AuthLayout() {
  return (
    <div className="flex w-full h-full">
      <div className="w-1/2 h-full"></div>
      <div className="w-1/2 h-full relative flex justify-center items-center">
        <img
          src={illustration}
          className='object-contain max-w-[656px] max-h-[960px] p-8' alt=""
        />

        <div className='max-w-[656px] bg-red-500 p-10 absolute rounded-b-[32px]'>
          <p>
            Gerencie suas finanças pessoais de uma forma simples com o fincheck, e o melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  );
}
