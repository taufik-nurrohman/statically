import React from "react";

function FAQs() {
  return (
    <section className="mt-20 mb-32 max-w-2xl mx-auto">
      <h2 className="text-center font-extrabold text-5xl mx-auto mb-20">
        Frequently Asked Questions
      </h2>
      
      <div className="">
        <article className="border-t border-b">
          <div className="border-l-2 border-transparent">
            <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
              <span className="text-grey-darkest font-thin text-xl">
                What is Statically?
              </span>
              <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
                {/* icon by feathericons.com */}
                <svg aria-hidden="true" fill="none" height={24} stroke="#606F7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                  <polyline points="6 9 12 15 18 9">
                  </polyline>
                </svg>
              </div>
            </header>
          </div>
        </article>
        <article className="border-b">
          <div className="border-l-2 bg-grey-lightest border-indigo">
            <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
              <span className="text-indigo font-thin text-xl">
                How is Statically different from other open source CDN?
              </span>
              <div className="rounded-full border border border-indigo w-7 h-7 flex items-center justify-center bg-indigo">
                {/* icon by feathericons.com */}
                <svg aria-hidden="true" fill="none" height={24} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                  <polyline points="18 15 12 9 6 15">
                  </polyline>
                </svg>
              </div>
            </header>
            <div>
              <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                <ul className="pl-4">
                  <li className="pb-2">
                    consectetur adipiscing elit
                  </li>
                  <li className="pb-2">
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  </li>
                  <li className="pb-2">
                    Viverra orci sagittis eu volutpat odio facilisis mauris
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
        <article className="border-b">
          <div className="border-l-2 border-transparent">
            <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
              <span className="text-grey-darkest font-thin text-xl">
                What can I serve to Statically?
              </span>
              <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
                {/* icon by feathericons.com */}
                <svg aria-hidden="true" fill="none" height={24} stroke="#606F7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                  <polyline points="6 9 12 15 18 9">
                  </polyline>
                </svg>
              </div>
            </header>
          </div>
        </article>
        <article className="border-b">
          <div className="border-l-2 border-transparent">
            <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
              <span className="text-grey-darkest font-thin text-xl">
                Is Statically free?
              </span>
              <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
                {/* icon by feathericons.com */}
                <svg aria-hidden="true" fill="none" height={24} stroke="#606F7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                  <polyline points="6 9 12 15 18 9">
                  </polyline>
                </svg>
              </div>
            </header>
          </div>
        </article>
      </div>

    </section>
  );
}

export default FAQs;