import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Error() {
    return (
        <>
            <Header />
            <div className="bottom-0 bg-purple-200 h-[600px]">
                <h1 className="text-center text-5xl text-orange-700 font-bold ">ERROR</h1>
            </div>
            <div className="bottom-0 absolute w-full">
                <Footer />
            </div>
        </>
    )
}

export default Error;
