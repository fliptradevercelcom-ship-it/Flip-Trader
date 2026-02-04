import React from "react";
const CustomersSay = ({ data }) => {
  return (
    <div>
      <div className="inn_container py-3 md:py-18 ">
        <div className="md:pb-6 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-3 md:gap-6">
          <div className="text-center md:text-left">
            <h5 className="text-2xl md:text-3xl text-white">
              Our customers say
            </h5>
            <h3 className="text-3xl md:text-4xl text-primary font-semibold pt-2.5">
              Excellent
            </h3>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h5 className="text-2xl text-white underline mb-2">3.4 out of</h5>

            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="h-10 w-10 text-[#00B67A]"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.088 3.355a1 1 0 00.95.69h3.53c.969 0 1.371 1.24.588 1.81l-2.857 2.076a1 1 0 00-.364 1.118l1.089 3.356c.3.921-.755 1.688-1.54 1.118l-2.857-2.076a1 1 0 00-1.175 0l-2.857 2.076c-.785.57-1.84-.197-1.54-1.118l1.089-3.356a1 1 0 00-.364-1.118L2.893 8.782c-.783-.57-.38-1.81.588-1.81h3.53a1 1 0 00.95-.69l1.088-3.355z" />
              </svg>

              <h5 className="text-2xl text-white font-medium">Trustpilot</h5>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-0 xl:grid-cols-4 pt-8">
          {data.map((data, index) =>
            <div
              key={index}
              className={`xl:relative border border-white px-10 py-14 flex flex-col gap-8 h-full rounded-[50px] ${data.class}  ${index %
                2 ===
              0
                ? "bg-black"
                : "bg-[#E2E2FF]"}`}
            >
              <div
                className={`text-start flex flex-col justify-center gap-4 m-auto max-w-[330px] xl:relative ${index ===
                0
                  ? ""
                  : "left-[10%]"}`}
              >
                <h5
                  className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium ${index %
                    2 ===
                  0
                    ? "text-white"
                    : "text-primary"}`}
                  dangerouslySetInnerHTML={{ __html: data.title }}
                />
                <span
                  className={`list_text font-light font_ternary leading-6 xl:leading-[28px] ${index %
                    2 ===
                  0
                    ? "text-white"
                    : "text-secondary"}`}
                >
                  {data.description}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomersSay;
