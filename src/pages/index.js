import { Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Integrations from "../components/integrations";
import Solutions from "../components/solutions";
import Reviews from "../components/reviews";
import FAQs from "../components/faqs";
import Social from "../components/social";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`statically`, `open source`, `cdn`, `github`]}
      />

      <div className="px-4 py-8 md:p-8">

        <section className="mb-24 text-center max-w-4xl mx-auto p-0 md:px-8">
          <h1 className="text-3xl font-bold inline-block max-w-3xl my-8 p-3">
            A free, fast, &amp; modern CDN for open source projects, WordPress, images, and any static assets.
          </h1>

          <div className="container mb-20">
            <input className="bg-white focus:outline-none border border-gray-300 rounded-lg py-2 px-4 block w-2/3 appearance-none leading-normal mx-auto shadow-lg focus:shadow-xl text-center" type="url" placeholder="Paste a GitHub, GitLab, Bitbucket file, or Gist URL here!" />
          </div>

          <div className="flex content-center flex-wrap">
            <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm rounded overflow-hidden shadow-lg mx-auto">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Built for developers</div>
                <p className="text-gray-700 text-base">
                  Works with any static assets, support various modification, and optimization.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm rounded overflow-hidden shadow-lg mx-auto">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Unlimited traffics</div>
                <p className="text-gray-700 text-base">
                  No traffic limits or throttling. Files are served via super fast global CDNs.
                </p>
              </div>
            </div>
            
            <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm rounded overflow-hidden shadow-lg mx-auto">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Push to serve</div>
                <p className="text-gray-700 text-base">
                  Integrated with your favorite tools: GitHub, GitLab, Bitbucket, and WordPress SVN.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="italic mb-5">
              Proudly empowered by <strong>world-class</strong> CDN companies
            </h3>

            <div className="flex content-center items-center max-w-xl mx-auto flex-wrap">
              <div className="w-full sm:w-1/2 md:w-1/5 lg:w-1/5 md:ml-3 md:mr-2 p-1">
                <a
                  href="https://www.cdn77.com"
                  className="sponsors-logo"
                >
                  <img
                    src={'images/sponsors/cdn77.svg'}
                  />
                </a>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-1">
                <a
                  href="https://bunnycdn.com"
                  className="sponsors-logo"
                >
                  <img
                    src={'images/sponsors/bunnycdn.svg'}
                  />
                </a>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 md:-mr-3 p-1">
                <a
                  href="https://www.fastly.com"
                  className="sponsors-logo"
                >
                  <img
                    src={'images/sponsors/fastly.svg'}
                  />
                </a>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-1">
                <a
                  href="https://www.cloudflare.com"
                  className="sponsors-logo"
                >
                  <img
                    src={'images/sponsors/cloudflare.svg'}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="border-b"></div>

        <section className="mt-20 mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="max-w-lg font-extrabold text-5xl mx-auto mb-5">
              Everything you need to serve static assets.
            </h2>
            <p className="max-w-2xl mx-auto">
              Serve your open source files quickly, without having to manually configure DNS, SSL, CDN or hosting. Apply various image transformations and manipulations just on the spot.
            </p>
          </div>

          <div className="flex content-center flex-wrap">
            <Link
              to="/network"
              className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl mx-auto"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 max-w-xxs">
                  Fast &amp; secure, from any location
                </div>
                <p className="text-gray-700 text-base">
                  Combining 4 CDN providers into one and pick the fastest for your location.
                </p>
              </div>
            </Link>

            <Link
              to="/features"
              className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl mx-auto"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 max-w-xxs">
                  On-the-fly optimization
                </div>
                <p className="text-gray-700 text-base">
                  Optimize static assets on-the-fly only with URL. Auto-webp, resize, crop, filter for images.
                </p>
              </div>
            </Link>
            
            <Link
              to="/github"
              className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl mx-auto">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 max-w-xxs">
                  Developer friendly
                </div>
                <p className="text-gray-700 text-base">
                  Loads files from git repositories right away with no setup.
                </p>
              </div>
            </Link>
          </div>
        </section>

        <div className="border-b"></div>

        <section className="mt-20 mb-24 max-w-lg mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-extrabold text-5xl mx-auto mb-5">
              Integrations
            </h2>
            <p>
              All your favourite apps and tools, integrated with Statically
            </p>
          </div>

          <Integrations />

        </section>

        <div className="border-b"></div>

        <Solutions />

        <div className="border-b"></div>

        <Reviews />

        <div className="border-b"></div>

        <FAQs />

        <div className="border-b"></div>

        <section className="mt-20 mb-24 max-w-4xl mx-auto">
            <h3 className="text-center italic mb-5">
              Supported by
            </h3>
        
            <div className="flex content-center items-center max-w-xl mx-auto flex-wrap">
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-1">
                <a
                  href="https://www.dediserve.com"
                  className="sponsors-logo"
                >
                  <img
                    className="max-w-xxs mx-auto"
                    src={'images/sponsors/dediserve.svg'}
                  />
                </a>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-1">
                <a
                  href="https://runcloud.io"
                  className="sponsors-logo"
                >
                  <img
                    className="max-w-xxs mx-auto"
                    src={'images/sponsors/runcloud.svg'}
                  />
                </a>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-1">
                <a
                  href="https://updown.io"
                  className="sponsors-logo"
                >
                  <img
                    className="max-w-xxs mx-auto"
                    src={'images/sponsors/updownio.svg'}
                  />
                </a>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-1">
                <a
                  href="https://ns1.com"
                  className="sponsors-logo"
                >
                  <img
                    className="ns1 mx-auto md:mx-0"
                    src={'images/sponsors/ns1.png'}
                  />
                </a>
              </div>
            </div>
        </section>

        <div className="border-b"></div>

        <Social />
      </div>
    </Layout>
  );
}

export default IndexPage;
