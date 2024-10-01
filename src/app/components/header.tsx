import Link from "next/link";

export default function Header() {
    return (
        <div className="header">
            <ul className="header-buttons">
               <Link href={"/"}>
                <li>Portfolio</li>
              </Link> 
                <Link href={"/About-us"}>
                <li>About us</li>
                </Link>
               <Link href={"/Contact-us"}>
               <li>Contact us</li>
               </Link> 
               <Link href={"/Jobs"}>
               <li>Jobs</li>
               </Link> 
            </ul>
        </div>
    )
}