import Image from 'next/image';

const Bar:React.FC = () => {

  const logoSize = 75;

  return (
    <div className='fixed z-50 top-0 bg-gradient-to-b from-[#adaaa2] to-transparent w-screen flex justify-between'>
      <Image 
          src="/assets/img/WaelLogo.png" 
          alt="Logo" 
          width={logoSize}
          height={logoSize}
          className='cursor-pointer p-2'
        />
        <div className="md:hidden absolute right-0 py-[-50%] translate-y-[40%] p-2">
          <input type="checkbox" role="button" aria-label="Display the menu" className="menu" />
        </div>
    </div>
  );
};

export default Bar;