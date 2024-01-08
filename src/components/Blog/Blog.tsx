import React from "react";
import facebook from "../../images/facebook.png";
import linkedIn from "../../images/linkedIn.png";
import x from "../../images/x.png";
import printer from "../../images/printer.png";
import Desktop from "../../images/Desktop.png";
import BlogBox from "../BlogBox/BlogBox";

const Blog = () => {
  return (
    <div className="xs:px-[30px] sm:px-[10px] md:px-[20px] lg:px-[30px] py-[40px] mb-[40px]">
      <div>
        <h1 className="text-[32px] sm:text-[48px] font-semibold leading-[35px] sm:leading-[50px] ">
          Tenolent Template Shortcode and Post Feature that will blow your mind
          that will blow your mind
        </h1>
        <h3 className="text-[24px] mt-[10px] font-semibold leading-[25px] sm:leading-[50px] text-[#606179] w-[95%] lg:w-[80%] xl:w-[75%]">
          Tenonant Blogger Template have some premium and outstanding features
          that don’t have in any template
        </h3>
        <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-between lg:w-[80%] xl:w-[75%] mt-[30px]">
          <div>
            <p className="text-[40px] font-semibold text-center sm:text-left">
              Khizar Khan
            </p>
            <div className="flex flex-row">
              <p className="text-[24px]">January 3rd, 2024</p>
              <p className="text-[24px]"> - 6 min read</p>
            </div>
          </div>
          <div className="flex flex-row mt-[30px] sm:mt-0 justif-center items-center">
            <img
              src={facebook}
              alt="facebook"
              className="w-[48px] h-[48px] mr-[20px]"
            />
            <img
              src={linkedIn}
              alt="linkedIn"
              className="w-[48px] h-[48px] mr-[20px]"
            />
            <img src={x} alt="X" className="w-[48px] h-[48px] mr-[30px]" />
            <img src={printer} alt="print" className="w-[48px] h-[48px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div>
          <div className="lg:w-[80%] xl:w-[85%] mt-[30px]">
            <img src={Desktop} alt="main" />
          </div>
          <div className="lg:w-[80%] xl:w-[85%] mt-[30px]">
            <p className="text-[20px] mb-[20px]">
              Perpetual sincerity out suspected necessary one but provision
              satisfied. Respect nothing use set waiting pursuit nay you
              looking. If on prevailed concluded ye abilities. Address say you
              new but minuter greater. Do denied agreed in innate. Can and
              middletons thoroughly themselves him. Tolerably sportsmen
              belonging in september no am immediate newspaper. Theirs expect
              dinner it pretty indeed having no of. Principle september she
              conveying did eat may extensive.
            </p>
            <p className="text-[20px] mb-[20px]">
              Must you with him from him her were more. In eldest be it result
              should remark vanity square. Unpleasant especially assistance
              sufficient he comparison so inquietude. Branch one shy edward
              stairs turned has law wonder horses. Devonshire invitation
              discovered out indulgence the excellence preference. Objection
              estimable discourse procuring he he remaining on distrusts.
              Simplicity affronting inquietude for now sympathize age. She meant
              new their sex could defer child.
            </p>
            <p className="text-[20px] mb-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-[20px] mb-[20px]">
              The text is a corrupted version of the original and therefore does
              not mean anything inparticular. The book however where it
              originates discusses the philosophical views of Epicureanism,
              Stoicism, and the Platonism of Antiochus of Ascalon.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-[30px] sm:mt-[0] sm:flex-row   sm:justify-between lg:w-[82%]">
            <div className="mb-[30px] sm:mb-[0]">
              <BlogBox />
            </div>
            <div>
              <BlogBox />
            </div>
          </div>
        </div>
        <div className="mt-[22px]">
          <div className="hidden xl:block mb-[50px]">
            <BlogBox />
          </div>
          <div className="hidden xl:block">
            <BlogBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
