import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function SupportStatically() {
  return (
    <Layout>
      <SEO
        title="Support Statically!"
        keywords={[`statically`]}
      />

      <div className="px-4 py-8 md:p-8">
        <section className="mt-20 mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-bold text-4xl max-w-xl mx-auto mt-5 mb-5">
              Support Statically development!
            </h2>
            <p className="text-lg mx-auto">
              lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
            </p>
          </div>
        </section>

        <section className="mt-20 mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-bold text-4xl max-w-xl mx-auto mt-5 mb-5">
              Shop
            </h2>
            <p className="text-lg mx-auto">
              lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
            </p>
          </div>
        </section>

        <section className="mt-20 mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-bold text-4xl max-w-xl mx-auto mt-5 mb-5">
              Become A Sponsors
            </h2>
            <p className="text-lg mx-auto">
              lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
            </p>
          </div>
        </section>

      </div>
    </Layout>
  );
}

export default SupportStatically;