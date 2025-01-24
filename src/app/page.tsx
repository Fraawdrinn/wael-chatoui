import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <aside>

        </aside>
        <article>
          <Image 
          src={"/../assets/img/IA-pp.jpg"} 
          alt="Profile picture" 
          width={200} 
          height={200} 
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
