/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import Card from "./components/Card";
import plans from "./data/pricingData";

function PriceList(){
return(
    <>
    <div className="relative flex flex-col w-full h-full gap-20 px-6 py-20 mt-32 md:px-10 overflow-x-clip">
                <div className="absolute inset-0 w-[110vw] sm:w-[90vw] md:w-[99vw] h-[80vh] sm:h-auto md:h-auto lg:h-[160vh] lg:w-[98.9vw] overflow-x-hidden">
                    <img src="/images/pricebg.svg" className="object-cover w-full h-full" alt="Background Product SVG" />
                </div>
        <div className="flex flex-col gap-10 px-10 text-center md:px-36">
        <h1 className="text-xl font-semibold text-center lg:text-3xl md:text-2xl text-homeblue">Select the best plan for your System</h1>
        <p className="text-sm md:text-lg">From basic to advanced, we have a web hosting plan that's right for you. Compare our options and select the one that meets your needs.</p>
        </div>
        <div className="grid gap-10 pl-2 pr-2 md:pr-0 md:pl-0 lg:grid-cols-3 lg:gap-0">
         {plans.map((plan, index) => (
            <div key={index} className={`w-full max-w-md mx-auto ${
            plan.featured ? "order-first lg:order-none lg:scale-90 lg:transform lg:z-10" : 'lg:transform lg:scale-75'}`}>
                <Card {...plan} key={plan.name}/>
            </div>
        ))}
    </div>
    </div>
    </>
)
}
export default PriceList;