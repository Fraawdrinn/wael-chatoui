import Form from '@/components/form';

const Footer:React.FC = () => {
  return (
    <footer className="bg-darkened-background min-h-[30vh] w-screen bottom-0 py-4 px-6
    border-t-4 border-[#d0cebe]
    ">
        
      
      <Form />
      <p className="text-center">
        &copy; 2025 Wael CHATOUI. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;