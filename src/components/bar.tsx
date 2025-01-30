import Image from 'next/image';

export default function Bar() {

  const logoSize = 100;

  return (
    <div className='fixed z-50 top-0 bg-gradient-to-b from-white to-transparent w-screen flex justify-between'>
      <Image 
          src="/assets/img/WaelLogo.png" 
          alt="Logo" 
          width={logoSize}
          height={logoSize}
        />
    </div>
  );
};