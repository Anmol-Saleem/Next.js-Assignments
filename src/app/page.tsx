import Image from "next/image";
import pic from "./public/OIG2.jpeg"
export default function Home() {
  return (
<div>
<div className="homeContainer">

  <div className="childContainer">
    <span className="text-4xl">This is me</span>
    <br />
      <span className="text-5xl">Anmol Saleem</span>
      <br />
      <span className="text-5xl">I am a Next.js Developer</span>
      <br />
    
  </div>
  <div style={{ backgroundColor: '#F4CCCC', height: '100vh' }}>

  <div className="absolute bottom-40 right-20 ">
    <Image
    src= {pic}
    alt="Anmol Saleem"
    width={350}
    height={350}
    className="rounded-full"
    />
  </div>
  
    
  
  
</div>
</div>
</div>

  );
}
