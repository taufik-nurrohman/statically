import { Link } from "gatsby";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/free-solid-svg-icons";
import * as Regular from "@fortawesome/free-regular-svg-icons";
import * as Brands from '@fortawesome/free-brands-svg-icons';

import Layout from "../components/layout";
import SEO from "../components/seo";

function FeaturesPage() {
  return(
    <Layout>
      <SEO
        title="Features"
        keywords={[`statically`, `optimization`, `images`, `cdn`, `features`]}
      />

      <section className="bg-gray-900 text-gray-100 pt-20 pb-24">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="font-bold text-4xl max-w-xl mx-auto mt-5 mb-5">
            A suite of modern technologies for fast &amp; better static assets
          </h2>
          <p className="text-lg text-gray-300 mx-auto">
            Statically is a powerful content delivery network designed for the future.
          </p>
        </div>

        <div className="flex content-center flex-wrap text-center max-w-4xl mx-auto">
          <div className="sm:w-1/3 md:w-1/3 lg:w-1/3 mb-4 max-w-sm mx-auto p-2">
            <FontAwesomeIcon
              icon={Icons.faLayerGroup}
              size="4x"
              className="text-gray-600 mx-auto mb-2"
            />
            <h2 className="text-xl max-w-xxs mx-auto font-bold">
              Multi-CDN
            </h2>
            <p className="text-gray-300 mt-2">
              lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
            </p>
          </div>

          <div className="sm:w-1/3 md:w-1/3 lg:w-1/3 mb-4 max-w-sm mx-auto p-2">
            <FontAwesomeIcon
              icon={Icons.faBolt}
              size="4x"
              className="text-gray-600 mx-auto mb-2"
            />
            <h2 className="text-xl max-w-sm mx-auto font-bold">
              Files Optimization
            </h2>
            <p className="text-gray-300 mt-2">
              lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
            </p>
          </div>

          <div className="sm:w-1/3 md:w-1/3 lg:w-1/3 mb-4 max-w-sm mx-auto p-2">
            <FontAwesomeIcon
              icon={Icons.faShieldAlt}
              size="4x"
              className="text-gray-600 mx-auto mb-2"
            />
            <h2 className="text-xl max-w-xxs mx-auto font-bold">
              Robust Security
            </h2>
            <p className="text-gray-300 mt-2">
              lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
            </p>
          </div>
        </div>  

      </section>

      <div className="border-b"></div>

      <section className="mt-20 mb-24 max-w-4xl mx-auto">
        <div className="flex flex-wrap mb-16">
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 mb-20 sm:mb-0">
            <h2 className="font-bold text-4xl md:max-w-sm mb-5">
              All your GitHub, GitLab, Bitbucket, &amp; WordPress files in a CDN
            </h2>
            <p className="text-lg">
              Advantage your development experience with a powerful optimized content delivery network that know your needs.
            </p>
          </div>

          <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 m-auto">
            <Link
            to="/custom"
            >
              <div className="max-w-sm rounded overflow-hidden border border-gray-200 border-solid shadow-lg mx-auto text-center px-6 py-4">
                <FontAwesomeIcon
                  icon={Icons.faCubes}
                  className="integration-logo mx-auto"
                />
                <span className="text-sm mt-5">Repos</span>
              </div>
            </Link>

            <div id="statically-to-you">
              <svg width="20" height="30" viewBox="0 0 20 30" className="fetch"><path d="M10 40 L10 -10"></path></svg>

              <img
                src="https://cdn.statically.io/img/statically.io/static/images/statically.png"
                className="integration-logo mx-auto mb-2"
              />

              <svg width="20" height="30" viewBox="0 0 20 30" className="fetch"><path d="M10 40 L10 -10"></path></svg>

              <div className="text-center">
                <FontAwesomeIcon
                  icon={Regular.faUser}
                  className="integration-logo mx-auto mb-1"
                />
                <span>You</span>
              </div>
            </div>

          </div>
        </div>

        <div className="flex content-center flex-wrap">
          <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm rounded overflow-hidden border mx-auto md:-ml-5">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Unlimited files</div>
              <p className="text-gray-700 text-base">
                Serve any files you want to serve with 100% production-grade environment of modern content delivery network.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm rounded overflow-hidden border mx-auto">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Works with any files</div>
              <p className="text-gray-700 text-base">
                Store your files on a repo, just like you always have. When it's time to share, simply serve with Statically.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm rounded overflow-hidden border mx-auto md:-mr-5">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Built-in optimization</div>
              <p className="text-gray-700 text-base">
                Let our bolt be your speed! Statically serve the optimized version of your static files by default.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b"></div>

      <section className="mt-20 mb-24 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-bold text-4xl max-w-xl mx-auto mt-5 mb-5">
            Discover Our Features
          </h2>
          <p className="text-lg max-w-xl mx-auto">
            lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
          </p>
        </div>

        <div className="flex content-center flex-wrap">
          <Link
            to="/github"
            className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 mb-4 max-w-sm rounded overflow-hidden border hover:shadow-lg mx-auto md:-ml-5">
            <div className="px-6 py-4">
              <FontAwesomeIcon
                icon={Brands.faGithub}
                className="mb-2"
                size="2x"
              />
              <div className="font-bold text-xl mb-2">GitHub</div>
              <p className="text-gray-700 text-base">
                lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
              </p>
            </div>
          </Link>

          <Link
            to="/gitlab"
            className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 mb-4 max-w-sm rounded overflow-hidden border hover:shadow-lg mx-auto">
            <div className="px-6 py-4">
              <FontAwesomeIcon
                icon={Brands.faGitlab}
                className="mb-2"
                size="2x"
              />
              <div className="font-bold text-xl mb-2">GitLab</div>
              <p className="text-gray-700 text-base">
                lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
              </p>
            </div>
          </Link>

          <Link
            to="/bitbucket"
            className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 mb-4 max-w-sm rounded overflow-hidden border hover:shadow-lg mx-auto"
          >
            <div className="px-6 py-4">
              <FontAwesomeIcon
                icon={Brands.faBitbucket}
                className="mb-2"
                size="2x"
              />
              <div className="font-bold text-xl mb-2">Bitbucket</div>
              <p className="text-gray-700 text-base">
                lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
              </p>
            </div>
          </Link>

          <Link
            to="/imgpx"
            className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 mb-4 max-w-sm rounded overflow-hidden border hover:shadow-lg mx-auto md:-mr-5"
          >
            <div className="px-6 py-4">
              <FontAwesomeIcon
                icon={Icons.faImages}
                className="mb-2"
                size="2x"
              />
              <div className="font-bold text-xl mb-2">Imgpx</div>
              <p className="text-gray-700 text-base">
                lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
              </p>
            </div>
          </Link>
        </div>

        <div className="flex content-center flex-wrap">
          <Link
            to="/libs"
            className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 mb-4 max-w-sm rounded overflow-hidden border hover:shadow-lg mx-auto md:-ml-5"
          >
            <div className="px-6 py-4">
              <FontAwesomeIcon
                icon={Brands.faNpm}
                className="mb-2"
                size="2x"
              />
              <div className="font-bold text-xl mb-2">Libs</div>
              <p className="text-gray-700 text-base">
                lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
              </p>
            </div>
          </Link>

          <Link
            to="/wordpress"
            className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 mb-4 max-w-sm rounded overflow-hidden border hover:shadow-lg mx-auto"
          >
            <div className="px-6 py-4">
              <FontAwesomeIcon
                icon={Brands.faWordpress}
                className="mb-2"
                size="2x"
              />
              <div className="font-bold text-xl mb-2">WordPress</div>
              <p className="text-gray-700 text-base">
                lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
              </p>
            </div>
          </Link>

          <Link
            to="/favicons"
            className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 mb-4 max-w-sm rounded overflow-hidden border hover:shadow-lg mx-auto"
          >
            <div className="px-6 py-4">
              <FontAwesomeIcon
                icon={Regular.faFile}
                className="mb-2"
                size="2x"
              />
              <div className="font-bold text-xl mb-2">Favicons</div>
              <p className="text-gray-700 text-base">
                lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
              </p>
            </div>
          </Link>

          <Link
            to="/custom"
            className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 mb-4 max-w-sm rounded overflow-hidden border hover:shadow-lg mx-auto md:-mr-5"
          >
            <div className="px-6 py-4">
              <FontAwesomeIcon
                icon={Icons.faCubes}
                className="mb-2"
                size="2x"
              />
              <div className="font-bold text-xl mb-2">Custom endpoints</div>
              <p className="text-gray-700 text-base">
                lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
              </p>
            </div>
          </Link>
        </div>

      </section>

      <div className="border-b"></div>

      <section className="bg-gray-100 pt-20 pb-20 border-b">
        <div className="flex content-center flex-wrap max-w-5xl mx-auto">
            <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm rounded overflow-hidden mx-auto">
              <div className="px-6 py-4">
                <FontAwesomeIcon
                  icon={Icons.faBolt}
                  className="text-green-400 mb-2"
                  size="2x"
                />
                <div className="font-bold text-lg mb-2">HTTP/2</div>
                <p className="text-gray-700 text-base">
                  lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm rounded overflow-hidden mx-auto">
              <div className="px-6 py-4">
                <FontAwesomeIcon
                  icon={Icons.faCompressArrowsAlt}
                  className="text-indigo-500 mb-2"
                  size="2x"
                />
                <div className="font-bold text-lg mb-2">Brotli &amp; GZip</div>
                <p className="text-gray-700 text-base">
                  lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm rounded overflow-hidden mx-auto">
              <div className="px-6 py-4">
                <FontAwesomeIcon
                  icon={Icons.faGlobe}
                  className="text-green-400 mb-2"
                  size="2x"
                />
                <div className="font-bold text-lg mb-2">450+ Global Datacenters</div>
                <p className="text-gray-700 text-base">
                  lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
                </p>
              </div>
            </div>
          </div>

          <div className="flex content-center flex-wrap max-w-5xl mx-auto">
            <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm rounded overflow-hidden mx-auto">
              <div className="px-6 py-4">
                <FontAwesomeIcon
                  icon={Icons.faMapMarker}
                  className="text-indigo-500 mb-2"
                  size="2x"
                />
                <div className="font-bold text-lg mb-2">Intelligent routing</div>
                <p className="text-gray-700 text-base">
                  lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm rounded overflow-hidden mx-auto">
              <div className="px-6 py-4">
                <FontAwesomeIcon
                  icon={Icons.faLocationArrow}
                  className="text-green-400 mb-2"
                  size="2x"
                />
                <div className="font-bold text-lg mb-2">Anycast DNS</div>
                <p className="text-gray-700 text-base">
                  lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm rounded overflow-hidden mx-auto">
              <div className="px-6 py-4">
                <FontAwesomeIcon
                  icon={Icons.faCopy}
                  className="text-indigo-500 mb-2"
                  size="2x"
                />
                <div className="font-bold text-lg mb-2">SSD powered</div>
                <p className="text-gray-700 text-base">
                  lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
                </p>
              </div>
            </div>
          </div>

      </section>

      <section className="mt-20 mb-24 max-w-4xl mx-auto">
        <div className="flex flex-wrap mb-10">
          <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4">
            <h2 className="font-bold text-3xl md:max-w-sm mb-5">
              An open CDN for you
            </h2>
            <p className="text-lg">
              Advantage your development experience with a powerful optimized content delivery network that know your needs.
            </p>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 m-auto">
            <img
              className="border"
              src="https://cdn.statically.io/ss/statically.io"
            />
          </div>
        </div>

      </section>

      <section className="bg-gray-800 text-gray-100 pt-20 pb-20 border-b">
        <div className="flex content-center flex-wrap max-w-5xl mx-auto">
            <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm rounded overflow-hidden mx-auto">
              <div className="px-6 py-4">
                <FontAwesomeIcon
                  icon={Icons.faUserShield}
                  className="text-indigo-300 mb-2"
                  size="2x"
                />
                <div className="font-bold text-lg mb-2">Security taken seriously</div>
                <p className="text-gray-300 text-base">
                  lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm rounded overflow-hidden mx-auto">
              <div className="px-6 py-4">
                <FontAwesomeIcon
                  icon={Icons.faLock}
                  className="text-teal-300 mb-2"
                  size="2x"
                />
                <div className="font-bold text-lg mb-2">TLS 1.3</div>
                <p className="text-gray-300 text-base">
                  lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm rounded overflow-hidden mx-auto">
              <div className="px-6 py-4">
                <FontAwesomeIcon
                  icon={Icons.faBug}
                  className="text-red-300 mb-2"
                  size="2x"
                />
                <div className="font-bold text-lg mb-2">Malware Detection</div>
                <p className="text-gray-300 text-base">
                  lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
                </p>
              </div>
            </div>
          </div>

          <div className="flex content-center flex-wrap max-w-5xl mx-auto">
            <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm rounded overflow-hidden mx-auto">
              <div className="px-6 py-4">
                <FontAwesomeIcon
                  icon={Icons.faCertificate}
                  className="text-indigo-300 mb-2"
                  size="2x"
                />
                <div className="font-bold text-lg mb-2">Full origin SSL</div>
                <p className="text-gray-300 text-base">
                  lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm rounded overflow-hidden mx-auto">
              <div className="px-6 py-4">
                <FontAwesomeIcon
                  icon={Icons.faShieldAlt}
                  className="text-teal-300 mb-2"
                  size="2x"
                />
                <div className="font-bold text-lg mb-2">Origin shield</div>
                <p className="text-gray-300 text-base">
                  lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mb-3 max-w-sm rounded overflow-hidden mx-auto">
              <div className="px-6 py-4">
                <FontAwesomeIcon
                  icon={Icons.faAngleDoubleRight}
                  className="text-red-300 mb-2"
                  size="2x"
                />
                <div className="font-bold text-lg mb-2">Automatic HTTPS</div>
                <p className="text-gray-100 text-base">
                  lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
                </p>
              </div>
            </div>
          </div>

      </section>

      <section className="mt-20 mb-24 max-w-4xl mx-auto p-0 md:px-8">
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

    </Layout>
  );
}

export default FeaturesPage;