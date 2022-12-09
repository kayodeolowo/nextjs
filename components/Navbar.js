import Link from "next/link";


const Navbar = () => {
    return ( <div> 
       <div className="flex justify-between mt-6 px-4 md:px-20"> 
            <div > 
                 <h1> OURHOME </h1>
             </div>


            <div className="flex justify-center space-x-4"> 
               <Link href="/"> <a> Home </a> </Link> 
                <Link href="/About"> <a> About </a> </Link>
                <Link href="/routes/Test"> <a> Test </a> </Link>
            </div>
       </div>
    </div> );
}
 
export default Navbar;