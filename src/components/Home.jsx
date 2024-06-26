import React from "react";
import imageCover from "../img/ImageCover.jpeg";
import imgsecond from "../img/second3.jpg";
import imgthird from "../img/third3.jpg";
import iconOne from "../img/icon1.jpg";
import iconTwo from "../img/icon2.jpg";

function Home() {
  return (
    <div>
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-black">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-black">
            Intelligent Preventive Maintenance Solution
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-black">
            Discover the power of AI driven Failure Prediction and Maintenance Scheduling tool for all your assets
          </p>
          
        </div>
        <img
          src={imageCover}
          className="w-full mb-2"
          alt="Description of image 1"
          style={{ width: "100%", height: "100vh",opacity: 0.5 }}
        />
      </div>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-extrabold text-gray-900 text-center">
            Why Choose Our Preventive Maintenance Solution?

          </h2>
          <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            <div class="flex flex-col text-center items-center">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-full bg-sky-900 text-white">
                  <img src={iconOne} />
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    class="p-2"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.808 4.057a.75.75 0 0 1 .92-.527l3.116.849a.75.75 0 0 1 .528.915l-.823 3.121a.75.75 0 0 1-1.45-.382l.337-1.281a23.484 23.484 0 0 0-3.609 3.056.75.75 0 0 1-1.07.01L6 8.06l-3.72 3.72a.75.75 0 1 1-1.06-1.061l4.25-4.25a.75.75 0 0 1 1.06 0l1.756 1.755a25.015 25.015 0 0 1 3.508-2.85l-1.46-.398a.75.75 0 0 1-.526-.92Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg> */}
                </div>
              </div>
              <div class="mt-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Reduces downtime
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Accurately predicts asset failure basis IoT sensor data readings. Helps eliminate down time and loss of sales

                </p>
              </div>
            </div>
            <div className="flex flex-col text-center items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-sky-900 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    class="p-2"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.58 1.077a.75.75 0 0 1 .405.82L9.165 6h4.085a.75.75 0 0 1 .567 1.241l-6.5 7.5a.75.75 0 0 1-1.302-.638L6.835 10H2.75a.75.75 0 0 1-.567-1.241l6.5-7.5a.75.75 0 0 1 .897-.182Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="mt-6">
                <h3 class="text-lg font-medium text-gray-900">Quicker</h3>
                <p class="mt-2 text-base text-gray-500">
                  AI-driven insights enable swift decision-making, ensuring
                  rapid response to maintenance requirements.
                </p>
              </div>
            </div>
            <div class="flex flex-col text-center items-center">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-full bg-sky-900 text-white">
                  <img src={iconTwo} />
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    class="p-2"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.5 1.709a.75.75 0 0 0-1 0 8.963 8.963 0 0 1-4.84 2.217.75.75 0 0 0-.654.72 10.499 10.499 0 0 0 5.647 9.672.75.75 0 0 0 .694-.001 10.499 10.499 0 0 0 5.647-9.672.75.75 0 0 0-.654-.719A8.963 8.963 0 0 1 8.5 1.71Zm2.34 5.504a.75.75 0 0 0-1.18-.926L7.394 9.17l-1.156-.99a.75.75 0 1 0-.976 1.138l1.75 1.5a.75.75 0 0 0 1.078-.106l2.75-3.5Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg> */}
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Saving
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Save cost by avoiding unnecessary breakdowns and losses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="cardGridStack" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="title-container col-12 mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">
              Our Vessel Maintenance Services
            </h2>
          </div> */}
          <div className="card-grid-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="wp-block-aero-cards col-span-1">
              <a
                class="card-container block"
                href=""
                target="_self"
                rel="noopener"
              >
                <div className="card-image-block h-72">
                  <img
                    class="img-fluid h-full object-cover"
                    src="https://wayl.eu/media/maintenance-wayl-1.jpg"
                    alt="GE Aerospace Image"
                  />
                </div>
                <div className="card-body mt-4">
                  <h4 className="card-title heading-200 mb-2 font-bold text-center">
                    Remaining Useful Life 
                  </h4>
                  <p class="card-sub-text body-2 text-center">
                    Predict when an asset requires change or maintenance based on anomalous senor data

                  </p>
                </div>
              </a>
            </div>
            <div className="wp-block-aero-cards col-span-1">
              <a
                className="card-container block"
                href=""
                target="_self"
                rel="noopener"
              >
                <div class="card-image-block h-72">
                  <img
                    class="img-fluid h-full object-cover"
                    src={imgsecond}
                    alt="GE Aerospace Image"
                  />
                </div>
                <div class="card-body mt-4">
                  <h4 class="card-title heading-200 mb-2 font-bold text-center">
                    Asset Failure Prediction

                  </h4>
                  <p class="card-sub-text body-2 text-center">
                    Predict when an asset will fail based on past Iot sensor readings and failure occurrences

                  </p>
                </div>
              </a>
            </div>
            <div className="wp-block-aero-cards col-span-1">
              <a
                className="card-container block"
                href=""
                target="_self"
                rel="noopener"
              >
                <div className="card-image-block h-72">
                  <img
                    class="img-fluid h-full object-cover"
                    src={imgthird}
                    alt="GE Aerospace Image"
                  />
                </div>
                <div class="card-body mt-4">
                  <h4 class="card-title heading-200 mb-2 font-bold text-center">
                    Asset Maintenance Planning

                  </h4>
                  <p class="card-sub-text body-2 text-center">
                    Schedule Future Maintenance of assets predicted basis service record and probability of failure

                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
         <div className="mt-4 mb-4 flex justify-center items-center">
            <a
              href="/uploadForm"
              className=" bg-sky-900 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-sky-950"
            >
              Get Started
            </a>
          </div>
    </div>
  );
}

export default Home;
