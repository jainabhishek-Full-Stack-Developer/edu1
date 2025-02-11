import Coursescontent from "../Coursescontent/Coursescontent";
import Faqcontent from "../Faqcontent/Faqcontent";
import Herosection from "../Herosection/Herosection";
import Joinnowcontent from "../Joinnowcontent/Joinnowcontent";
import Mainstudentwrapper from "../Mainstudentwrapper/Mainstudentwrapper";
import Testimonial from "../Testimonial/Testimonial";
import Whychooseus from "../Whychooseus/Whychooseus";

const Homecontent = () => {
    return (
        <>
            <Mainstudentwrapper>
                <Herosection />
                <Coursescontent />
                <Whychooseus />
                <Testimonial />
                <Joinnowcontent />
                <Faqcontent />
            </Mainstudentwrapper>
        </>
    )
}

export default Homecontent;
