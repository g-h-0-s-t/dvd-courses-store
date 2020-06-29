import React from "react";
import {
  FiSlack,
  FiTwitter,
  FiFacebook,
  FiArrowUp,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
function FooterAttachment() {
  return (
    <div className="block relative">
      <svg
        className="absolute fill-currenttext-gray-900 inset-y-0 h-full z-50 fill-current text-green-300 "
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      ></svg>
      <polygon points="50,0 100,0 50,100 0,100" />
    </div>
  );
}
function Footer(props: { attachment?: boolean }) {
  return (
    <div>
      {props.attachment ? <FooterAttachment /> : ""}
      <footer className="py-8 px-12 grid grid-cols-3 bg-gray-900 font-roboto">
        <div>
          <div className="border-b pb-4 border-opacity-25 border-white text-white font-semibold">
            kenty
          </div>
        </div>
        <div>
          <div className="text-blue-500 text-2xl font-bold font-inter text-center">
            K
          </div>
          <div className="text-white opacity-50 text-sm ">
            <div className="flex justify-center mt-4">home</div>
            <div className="flex justify-center mt-4">about</div>
            <div className="flex justify-center mt-4">press</div>
            <div className="flex justify-center text-xl mt-8">
              <FiArrowUp />
            </div>
            <div className="flex justify-center mt-2">to the top</div>
          </div>
        </div>
        <div>
          <div className="flex justify-around text-xl border-b pb-4 mb-6 border-opacity-25 border-white text-gray-100 uppercase tracking-wide mb-2 font-semibold text-sm font-inter">
            <FiMail>
              <a
                className="underline mb-4 lg:text-2xl text-blue-500 text-xl"
                href="mailto:hello@kenty.net"
              >
                hello@kenty.net
              </a>
            </FiMail>
            <FiLinkedin />
            <FiTwitter />
            <FiFacebook />
            <FiSlack />
          </div>
        </div>
        <p className="mt-48 border-t border-white opacity-50 text-white border-opacity-25 pt-4 flex items-end whitespace-no-wrap flex justify-center">
          © kenty limited {new Date().getFullYear()}
        </p>
        <div className="mt-48 flex font-roboto text-xs justify-around capitalize col-start-3 border-t border-white opacity-50 text-white border-opacity-25 pt-4 flex items-end whitespace-no-wrap flex justify-center">
          <p>privacy</p>
          <p>terms of service</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
