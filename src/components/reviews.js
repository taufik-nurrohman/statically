import React from "react";

function Reviews() {
  return (
    <section className="mt-20 mb-24 max-w-4xl mx-auto">
      <h2 className="text-center font-extrabold text-5xl mx-auto mb-20">
        What people say about Statically?
      </h2>

      <div className="flex content-center flex-wrap">
        <a
          href="https://twitter.com"
          className="sm:w-1/3 md:w-1/3 lg:w-1/3 mb-4 max-w-sm mx-auto border border-gray-200 border-solid shadow-lg hover:shadow-2xl rounded-lg p-6 md:-ml-5"
          target="_blank"
        >
          <div className="mb-4">
            lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
          </div>
          <div className="md:flex">
            <img className="h-12 w-12 rounded-full mx-auto md:mx-0 md:mr-4" src="https://cdn.statically.io/img/github.com/fransallen.png" />
            <div className="text-center md:text-left">
              <h2 className="text-lg">Frans Allen</h2>
              <div className="text-sm text-gray-600">@fransallen</div>
            </div>
          </div>
        </a>

        <a
          href="https://twitter.com"
          className="sm:w-1/3 md:w-1/3 lg:w-1/3 mb-4 max-w-sm mx-auto border border-gray-200 border-solid shadow-lg hover:shadow-2xl rounded-lg p-6"
          target="_blank"
        >
          <div className="mb-4">
            lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
          </div>
          <div className="md:flex">
            <img className="h-12 w-12 rounded-full mx-auto md:mx-0 md:mr-4" src="https://cdn.statically.io/img/github.com/leonstafford.png" />
            <div className="text-center md:text-left">
              <h2 className="text-lg">Leon Stafford</h2>
              <div className="text-sm text-gray-600">@leonvolunteers</div>
            </div>
          </div>
        </a>

        <a
          href="https://twitter.com"
          className="sm:w-1/3 md:w-1/3 lg:w-1/3 mb-4 max-w-sm mx-auto border border-gray-200 border-solid shadow-lg hover:shadow-2xl rounded-lg p-6 md:-mr-5"
          target="_blank"
        >
          <div className="mb-4">
            lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
          </div>
          <div className="md:flex">
            <img className="h-12 w-12 rounded-full mx-auto md:mx-0 md:mr-4" src="https://cdn.statically.io/img/github.com/ayesh.png" />
            <div className="text-center md:text-left">
              <h2 className="text-lg">Ayesh Karunaratne</h2>
              <div className="text-sm text-gray-600">@ayeshlive</div>
            </div>
          </div>
        </a>
      </div>

    </section>
  );
}

export default Reviews;