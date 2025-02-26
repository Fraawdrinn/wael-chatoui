
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="footer" className="bg-darkened-background min-h-[30vh] w-screen bottom-0 py-4 px-6
    border-t-4 border-[#d0cebe] text-center
    ">
      <h1 className='inline'>Ma présentation vous a convaincu ?&nbsp;</h1>
      <Link href={"#"}>Télécharger mon <span className='underline text-secondary'>CV</span></Link>
      <br /><br /><br />
      {/* <Form /> */}
      <h1 className="text-center ">
        &copy; 2025 Wael CHATOUI. All rights reserved.
      </h1>
    </footer>
  );
}
