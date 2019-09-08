import { Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
  return (
    <Layout>
      <SEO
        title="About"
        keywords={[`statically`]}
      />

      <div className="">

        <section className="text-center mt-20 mb-24 max-w-4xl mx-auto p-0 md:px-8">
          <h2 className="inline-block mt-8">
            <img
              className="h-20"
              src={'images/statically.png'}
            />
          </h2>
        </section>

        <div class="border-b"></div>

        <section className="mt-20 mb-24 max-w-4xl mx-auto p-0 md:px-8">
          <div className="text-center mb-20">
            <span className="font-bold text-purple-500">OUR MISSION</span>
            <h2 className="font-bold text-5xl mx-auto mt-5 mb-5">
              Our mission is to make static files easy to manage and fast to deliver.
            </h2>
            <p className="mx-auto">
              We help files distribution <strong>faster, smaller, reliable, and more efficient</strong> than ever.
            </p>
          </div>

          <div className="flex content-center flex-wrap">
            <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm rounded overflow-hidden mx-auto">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Fast</div>
                  <p className="text-gray-700 text-base">
                    For fast files delivery from any location.
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm rounded overflow-hidden mx-auto">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Easy</div>
                  <p className="text-gray-700 text-base">
                    No traffic limits or throttling. Files are served via super fast global CDNs.
                  </p>
                </div>
              </div>
              
              <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm rounded overflow-hidden mx-auto">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Secure &amp; Reliable</div>
                  <p className="text-gray-700 text-base">
                    Backed by the world-leading DNS, CDN, &amp; Cloud computing companies makes our infrastructure fast, reliable, and secure.
                  </p>
                </div>
              </div>
          </div>
        </section>

        <div className="border-b"></div>

        <section className="mt-20 mb-24 max-w-6xl mx-auto p-0 md:px-8">
          <div className="text-center mb-20">
            <h2 className="font-bold text-5xl mx-auto mt-5 mb-5">
              Our Team
            </h2>
          </div>

          <div className="flex content-center flex-wrap">
            <div className="sm:w-1/3 md:w-1/3 lg:w-1/3 mb-4 max-w-sm mx-auto p-6">
              <img className="w-16 h-16 rounded-full md:mx-0 md:mr-4 mb-2" src="https://cdn.statically.io/img/github.com/fransallen.png" />
              <h2 className="text-2xl font-bold">
                Frans Allen
                <img
                  className="w-6 h-6 inline-block rounded-full ml-2 border" src="https://cdn.statically.io/misc/flags/id.png"
                  title="Indonesia"
                />
              </h2>
              <a
                href="https://twitter.com/fransallen"
                className="text-sm text-red-500"
                target="_blank"
              >
                @fransallen
              </a>
              <p className="mt-2">
                lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
              </p>
            </div>

            <div className="sm:w-1/3 md:w-1/3 lg:w-1/3 mb-4 max-w-sm mx-auto p-6">
              <img className="w-16 h-16 rounded-full md:mx-0 md:mr-4 mb-2" src="https://cdn.statically.io/img/github.com/tovic.png" />
              <h2 className="text-2xl font-bold">
                Taufik Nurohman
                <img
                  className="w-6 h-6 inline-block rounded-full ml-2 border" src="https://cdn.statically.io/misc/flags/id.png"
                  title="Indonesia"
                />
              </h2>
              <a
                href="https://twitter.com/fransallen"
                className="text-sm text-red-500"
                target="_blank"
              >
                @tovic
              </a>
              <p className="mt-2">
                lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
              </p>
            </div>

            <div className="sm:w-1/3 md:w-1/3 lg:w-1/3 mb-4 max-w-sm mx-auto p-6">
              <img className="w-16 h-16 rounded-full md:mx-0 md:mr-4 mb-2" src="https://cdn.statically.io/img/github.com/leonstafford.png" />
              <h2 className="text-2xl font-bold">
                Leon Stafford
                <img
                  className="w-6 h-6 inline-block rounded-full ml-2 border" src="https://cdn.statically.io/misc/flags/au.png"
                  title="Melbourne"
                />
              </h2>
              <a
                href="https://twitter.com/fransallen"
                className="text-sm text-red-500"
                target="_blank"
              >
                @leonvolunteers
              </a>
              <p className="mt-2">
                lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
              </p>
            </div>
          </div>  

        </section>

        <div className="border-b"></div>

        <section className="mt-20 mb-24 max-w-4xl mx-auto p-0 md:px-12">
          <div className="flex content-center items-center flex-wrap">
            <div className="sm:w-1/2 md:w-1/2 lg:w-1/2 mb-4 mx-auto p-4 text-center sm:text-left">
              <h2 className="text-4xl max-w-xl font-bold">Want to contribute for this project?</h2>
            </div>

            <div className="sm:w-1/2 md:w-1/2lg:w-1/2 mb-4 mx-auto p-4 text-center">
              <Link
                to="/support-statically"
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              >
                Become A Backer
              </Link>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}

export default AboutPage;
