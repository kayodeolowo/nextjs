const about = () => {
    return ( <div> 
        <h1 className="text-center font-bold text-4xl"> this is about us </h1>

    <p> Create two directories pages and public at the root of your application:

pages - Associated with a route based on their file name. For example pages/about.js is mapped to /about
public - Stores static assets such as images, fonts, etc. Files inside public directory can then be referenced by y  </p> 
    
    </div> );
}
 
export default about;