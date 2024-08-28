import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import Heading from '../../components/ui/heading/Heading';


const AboutUs = () => {

  return (
    <div className="my-10">
      <Heading heading="FAQ" />
      <div className="bg-fixed bg-cover bg-center h-[500px] md:h-[500px] w-full bg-parallax">
        <div className="flex flex-col p-5 md:p-10 h-full justify-center w-full">
          <Accordion>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="text-base bg-primary text-white p-3 rounded-lg md:text-lg lg:text-xl">
                  What harsh truths do you prefer to ignore?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="bg-[#2c3833] text-white">
                <p className="text-white p-2 text-sm md:text-base">
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="text-base bg-primary p-3 rounded-lg text-white  md:text-lg lg:text-xl">
                  What harsh truths do you prefer to ignore?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="bg-[#2c3833] text-white">
                <p className="text-white p-2 text-sm md:text-base">
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="text-base bg-primary p-3 rounded-lg text-white  md:text-lg lg:text-xl">
                  What harsh truths do you prefer to ignore?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="bg-[#2c3833] text-white">
                <p className="text-white p-2 text-sm md:text-base">
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="text-base bg-primary text-white p-3 rounded-lg md:text-lg lg:text-xl">
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="bg-[#2c3833] text-white">
                <p className="text-white p-2 text-sm md:text-base">
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>

  );
};

export default AboutUs;