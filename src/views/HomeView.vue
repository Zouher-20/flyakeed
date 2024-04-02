<template>
  <div class="bg-primary-light">
    <div class="row py-5 mx-5">
      <div class="col-4">
        <div class="d-flex ms-3 bg-white header-travel">
          <button
            class="d-flex btn-costmize justify-content-center btn btn-primary"
          >
            <div>رحلات</div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 640 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM80.55 341.27c6.28 6.84 15.1 10.72 24.33 10.71l130.54-.18a65.62 65.62 0 0 0 29.64-7.12l290.96-147.65c26.74-13.57 50.71-32.94 67.02-58.31 18.31-28.48 20.3-49.09 13.07-63.65-7.21-14.57-24.74-25.27-58.25-27.45-29.85-1.94-59.54 5.92-86.28 19.48l-98.51 49.99-218.7-82.06a17.799 17.799 0 0 0-18-1.11L90.62 67.29c-10.67 5.41-13.25 19.65-5.17 28.53l156.22 98.1-103.21 52.38-72.35-36.47a17.804 17.804 0 0 0-16.07.02L9.91 230.22c-10.44 5.3-13.19 19.12-5.57 28.08l76.21 82.97z"
              ></path>
            </svg>
          </button>
          <button
            class="d-flex btn-costmize text-primary justify-content-center btn"
          >
            <div>فنادق</div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 576 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M560 64c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16H16C7.16 0 0 7.16 0 16v32c0 8.84 7.16 16 16 16h15.98v384H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h240v-80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v80h240c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-16V64h16zm-304 44.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm0 96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm-128-96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zM179.2 256h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8zM192 384c0-53.02 42.98-96 96-96s96 42.98 96 96H192zm256-140.8c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-96c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="d-flex ms-3 mt-2 bg-white header-travel">
          <button
            class="d-flex btn-costmize justify-content-center btn btn-primary"
          >
            ذهاب فقط
          </button>
          <button
            class="d-flex btn-costmize text-primary justify-content-center btn"
          >
            ذهاب وعودة
          </button>
          <button
            class="d-flex btn-costmize text-primary justify-content-center btn"
          >
            وجهات متعددة
          </button>
        </div>
        <span
          style="color: #ff56a1"
          class="bg-color-white p-1 py-2 translate-top-50 mx-4 d-flex justify-content-end"
          ><svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            class="fs-3 svg-arrwos"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
            ></path></svg
        ></span>

        <div class="mt-1">
          <div>
            <span
              class="color-secondary d-flex g-2"
              style="position: absolute; margin: 3px -13px; color: #ff56a1"
              ><svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 640 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM80.55 341.27c6.28 6.84 15.1 10.72 24.33 10.71l130.54-.18a65.62 65.62 0 0 0 29.64-7.12l290.96-147.65c26.74-13.57 50.71-32.94 67.02-58.31 18.31-28.48 20.3-49.09 13.07-63.65-7.21-14.57-24.74-25.27-58.25-27.45-29.85-1.94-59.54 5.92-86.28 19.48l-98.51 49.99-218.7-82.06a17.799 17.799 0 0 0-18-1.11L90.62 67.29c-10.67 5.41-13.25 19.65-5.17 28.53l156.22 98.1-103.21 52.38-72.35-36.47a17.804 17.804 0 0 0-16.07.02L9.91 230.22c-10.44 5.3-13.19 19.12-5.57 28.08l76.21 82.97z"
                ></path>
              </svg>
              من</span
            >
            <input
              type="text"
              v-model="keywordFrom"
              class="color-primary-dark btn bg-white h-input p-1 px-3 pt-3 w-100 fs-3"
              placeholder="المدينة أو المطار"
              @input="handleInput"
            />
            <div
              v-if="keywordFrom != ''"
              class="z-index-103 bg-white p-absolute w-100 py-2 c-pointer user-select-none shadow ofy-scroll"
              style="height: 50vh; min-width: 280px; overflow-y: auto"
            >
              <div>
                <!-- Loader -->
                <div v-if="isLoading" class="loader">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="50px"
                    height="50px"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid"
                    style="
                      margin: 2em auto;
                      background: none;
                      display: block;
                      shape-rendering: auto;
                    "
                  >
                    <g transform="rotate(0 50 50)">
                      <rect
                        x="47"
                        y="13.5"
                        rx="3"
                        ry="8.5"
                        width="6"
                        height="17"
                        fill="#ff56a1"
                      >
                        <animate
                          attributeName="opacity"
                          values="1;0"
                          keyTimes="0;1"
                          dur="1.3513513513513513s"
                          begin="-1.238738738738739s"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                    </g>
                    <g transform="rotate(30 50 50)">
                      <rect
                        x="47"
                        y="13.5"
                        rx="3"
                        ry="8.5"
                        width="6"
                        height="17"
                        fill="#ff56a1"
                      >
                        <animate
                          attributeName="opacity"
                          values="1;0"
                          keyTimes="0;1"
                          dur="1.3513513513513513s"
                          begin="-1.1261261261261262s"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                    </g>
                    <g transform="rotate(60 50 50)">
                      <rect
                        x="47"
                        y="13.5"
                        rx="3"
                        ry="8.5"
                        width="6"
                        height="17"
                        fill="#ff56a1"
                      >
                        <animate
                          attributeName="opacity"
                          values="1;0"
                          keyTimes="0;1"
                          dur="1.3513513513513513s"
                          begin="-1.0135135135135136s"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                    </g>
                    <g transform="rotate(90 50 50)">
                      <rect
                        x="47"
                        y="13.5"
                        rx="3"
                        ry="8.5"
                        width="6"
                        height="17"
                        fill="#ff56a1"
                      >
                        <animate
                          attributeName="opacity"
                          values="1;0"
                          keyTimes="0;1"
                          dur="1.3513513513513513s"
                          begin="-0.900900900900901s"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                    </g>
                    <g transform="rotate(120 50 50)">
                      <rect
                        x="47"
                        y="13.5"
                        rx="3"
                        ry="8.5"
                        width="6"
                        height="17"
                        fill="#ff56a1"
                      >
                        <animate
                          attributeName="opacity"
                          values="1;0"
                          keyTimes="0;1"
                          dur="1.3513513513513513s"
                          begin="-0.7882882882882883s"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                    </g>
                    <g transform="rotate(150 50 50)">
                      <rect
                        x="47"
                        y="13.5"
                        rx="3"
                        ry="8.5"
                        width="6"
                        height="17"
                        fill="#ff56a1"
                      >
                        <animate
                          attributeName="opacity"
                          values="1;0"
                          keyTimes="0;1"
                          dur="1.3513513513513513s"
                          begin="-0.6756756756756758s"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                    </g>
                    <g transform="rotate(180 50 50)">
                      <rect
                        x="47"
                        y="13.5"
                        rx="3"
                        ry="8.5"
                        width="6"
                        height="17"
                        fill="#ff56a1"
                      >
                        <animate
                          attributeName="opacity"
                          values="1;0"
                          keyTimes="0;1"
                          dur="1.3513513513513513s"
                          begin="-0.5630630630630631s"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                    </g>
                    <g transform="rotate(210 50 50)">
                      <rect
                        x="47"
                        y="13.5"
                        rx="3"
                        ry="8.5"
                        width="6"
                        height="17"
                        fill="#ff56a1"
                      >
                        <animate
                          attributeName="opacity"
                          values="1;0"
                          keyTimes="0;1"
                          dur="1.3513513513513513s"
                          begin="-0.4504504504504505s"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                    </g>
                    <g transform="rotate(240 50 50)">
                      <rect
                        x="47"
                        y="13.5"
                        rx="3"
                        ry="8.5"
                        width="6"
                        height="17"
                        fill="#ff56a1"
                      >
                        <animate
                          attributeName="opacity"
                          values="1;0"
                          keyTimes="0;1"
                          dur="1.3513513513513513s"
                          begin="-0.3378378378378379s"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                    </g>
                    <g transform="rotate(270 50 50)">
                      <rect
                        x="47"
                        y="13.5"
                        rx="3"
                        ry="8.5"
                        width="6"
                        height="17"
                        fill="#ff56a1"
                      >
                        <animate
                          attributeName="opacity"
                          values="1;0"
                          keyTimes="0;1"
                          dur="1.3513513513513513s"
                          begin="-0.22522522522522526s"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                    </g>
                    <g transform="rotate(300 50 50)">
                      <rect
                        x="47"
                        y="13.5"
                        rx="3"
                        ry="8.5"
                        width="6"
                        height="17"
                        fill="#ff56a1"
                      >
                        <animate
                          attributeName="opacity"
                          values="1;0"
                          keyTimes="0;1"
                          dur="1.3513513513513513s"
                          begin="-0.11261261261261263s"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                    </g>
                    <g transform="rotate(330 50 50)">
                      <rect
                        x="47"
                        y="13.5"
                        rx="3"
                        ry="8.5"
                        width="6"
                        height="17"
                        fill="#ff56a1"
                      >
                        <animate
                          attributeName="opacity"
                          values="1;0"
                          keyTimes="0;1"
                          dur="1.3513513513513513s"
                          begin="0s"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                    </g>
                  </svg>
                </div>

                <!-- Display locations -->
                <ul v-if="!isLoading">
                  <li
                    v-for="location in locationCity"
                    :key="location.id"
                    @click="selectLocation(location)"
                  >
                    <div class="d-flex justify-content-between mx-2">
                      <div>
                        {{ location?.name }}
                        <br />
                        <p
                          style="
                            /* opacity: 3; */
                            opacity: 0.5;
                            font-size: 10px;
                          "
                        >
                          {{ location?.address?.countryName }}
                        </p>
                      </div>
                      <div style="font-weight: bold">
                        {{ location.address.cityCode }}
                      </div>
                    </div>
                    <hr />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <span
              style="position: absolute; margin: 3px -13px; color: #ff56a1"
              class="color-secondary d-flex g-2"
              ><svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 640 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM44.81 205.66l88.74 80a62.607 62.607 0 0 0 25.47 13.93l287.6 78.35c26.48 7.21 54.56 8.72 81 1.36 29.67-8.27 43.44-21.21 47.25-35.71 3.83-14.5-1.73-32.71-23.37-54.96-19.28-19.82-44.35-32.79-70.83-40l-97.51-26.56L282.8 30.22c-1.51-5.81-5.95-10.35-11.66-11.91L206.05.58c-10.56-2.88-20.9 5.32-20.71 16.44l47.92 164.21-102.2-27.84-27.59-67.88c-1.93-4.89-6.01-8.57-11.02-9.93L52.72 64.75c-10.34-2.82-20.53 5-20.72 15.88l.23 101.78c.19 8.91 6.03 17.34 12.58 23.25z"
                ></path>
              </svg>
              إلى</span
            ><input
              v-model="keywordTo"
              type="text"
              class="color-primary-dark btn bg-gray-soft h-input to p-1 px-3 pt-3 w-100 fs-3"
              placeholder="المدينة أو المطار"
              value=""
            />
            <div
              v-if="keywordTo != ''"
              class="z-index-103 bg-white p-absolute w-100 py-2 c-pointer user-select-none shadow ofy-scroll"
              style="height: 50vh; min-width: 280px; overflow-y: auto"
            >
              <div>
                <!-- Loader -->
                <div v-if="isLoadingTo" class="loader">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="50px"
                    height="50px"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid"
                    style="
                      margin: 2em auto;
                      background: none;
                      display: block;
                      shape-rendering: auto;
                    "
                  >
                    <g transform="rotate(0 50 50)">
                      <rect
                        x="47"
                        y="13.5"
                        rx="3"
                        ry="8.5"
                        width="6"
                        height="17"
                        fill="#ff56a1"
                      >
                        <animate
                          attributeName="opacity"
                          values="1;0"
                          keyTimes="0;1"
                          dur="1.3513513513513513s"
                          begin="-1.238738738738739s"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                    </g>
                    <g transform="rotate(30 50 50)">
                      <rect
                        x="47"
                        y="13.5"
                        rx="3"
                        ry="8.5"
                        width="6"
                        height="17"
                        fill="#ff56a1"
                      >
                        <animate
                          attributeName="opacity"
                          values="1;0"
                          keyTimes="0;1"
                          dur="1.3513513513513513s"
                          begin="-1.1261261261261262s"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                    </g>
                    <g transform="rotate(60 50 50)">
                      <rect
                        x="47"
                        y="13.5"
                        rx="3"
                        ry="8.5"
                        width="6"
                        height="17"
                        fill="#ff56a1"
                      >
                        <animate
                          attributeName="opacity"
                          values="1;0"
                          keyTimes="0;1"
                          dur="1.3513513513513513s"
                          begin="-1.0135135135135136s"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                    </g>
                    <g transform="rotate(90 50 50)">
                      <rect
                        x="47"
                        y="13.5"
                        rx="3"
                        ry="8.5"
                        width="6"
                        height="17"
                        fill="#ff56a1"
                      >
                        <animate
                          attributeName="opacity"
                          values="1;0"
                          keyTimes="0;1"
                          dur="1.3513513513513513s"
                          begin="-0.900900900900901s"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                    </g>
                    <g transform="rotate(120 50 50)">
                      <rect
                        x="47"
                        y="13.5"
                        rx="3"
                        ry="8.5"
                        width="6"
                        height="17"
                        fill="#ff56a1"
                      >
                        <animate
                          attributeName="opacity"
                          values="1;0"
                          keyTimes="0;1"
                          dur="1.3513513513513513s"
                          begin="-0.7882882882882883s"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                    </g>
                    <g transform="rotate(150 50 50)">
                      <rect
                        x="47"
                        y="13.5"
                        rx="3"
                        ry="8.5"
                        width="6"
                        height="17"
                        fill="#ff56a1"
                      >
                        <animate
                          attributeName="opacity"
                          values="1;0"
                          keyTimes="0;1"
                          dur="1.3513513513513513s"
                          begin="-0.6756756756756758s"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                    </g>
                    <g transform="rotate(180 50 50)">
                      <rect
                        x="47"
                        y="13.5"
                        rx="3"
                        ry="8.5"
                        width="6"
                        height="17"
                        fill="#ff56a1"
                      >
                        <animate
                          attributeName="opacity"
                          values="1;0"
                          keyTimes="0;1"
                          dur="1.3513513513513513s"
                          begin="-0.5630630630630631s"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                    </g>
                    <g transform="rotate(210 50 50)">
                      <rect
                        x="47"
                        y="13.5"
                        rx="3"
                        ry="8.5"
                        width="6"
                        height="17"
                        fill="#ff56a1"
                      >
                        <animate
                          attributeName="opacity"
                          values="1;0"
                          keyTimes="0;1"
                          dur="1.3513513513513513s"
                          begin="-0.4504504504504505s"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                    </g>
                    <g transform="rotate(240 50 50)">
                      <rect
                        x="47"
                        y="13.5"
                        rx="3"
                        ry="8.5"
                        width="6"
                        height="17"
                        fill="#ff56a1"
                      >
                        <animate
                          attributeName="opacity"
                          values="1;0"
                          keyTimes="0;1"
                          dur="1.3513513513513513s"
                          begin="-0.3378378378378379s"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                    </g>
                    <g transform="rotate(270 50 50)">
                      <rect
                        x="47"
                        y="13.5"
                        rx="3"
                        ry="8.5"
                        width="6"
                        height="17"
                        fill="#ff56a1"
                      >
                        <animate
                          attributeName="opacity"
                          values="1;0"
                          keyTimes="0;1"
                          dur="1.3513513513513513s"
                          begin="-0.22522522522522526s"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                    </g>
                    <g transform="rotate(300 50 50)">
                      <rect
                        x="47"
                        y="13.5"
                        rx="3"
                        ry="8.5"
                        width="6"
                        height="17"
                        fill="#ff56a1"
                      >
                        <animate
                          attributeName="opacity"
                          values="1;0"
                          keyTimes="0;1"
                          dur="1.3513513513513513s"
                          begin="-0.11261261261261263s"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                    </g>
                    <g transform="rotate(330 50 50)">
                      <rect
                        x="47"
                        y="13.5"
                        rx="3"
                        ry="8.5"
                        width="6"
                        height="17"
                        fill="#ff56a1"
                      >
                        <animate
                          attributeName="opacity"
                          values="1;0"
                          keyTimes="0;1"
                          dur="1.3513513513513513s"
                          begin="0s"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                    </g>
                  </svg>
                </div>

                <!-- Display locations -->
                <ul v-if="!isLoadingTo">
                  <li
                    v-for="location in locationCity"
                    :key="location.id"
                    @click="selectLocationTo(location)"
                  >
                    <div class="d-flex justify-content-between mx-2">
                      <div>
                        {{ location?.name }}
                        <br />
                        <p
                          style="
                            /* opacity: 3; */
                            opacity: 0.5;
                            font-size: 10px;
                          "
                        >
                          {{ location?.address?.countryName }}
                        </p>
                      </div>
                      <div style="font-weight: bold">
                        {{ location.address.cityCode }}
                      </div>
                    </div>
                    <hr />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="d-flex">
            <div
              class="grow-1 card p-relative d-flex g-2 align-items-center color-primary-dark btn btn-white w-50"
            >
              <div class="text-primary">تاريخ المغادرة</div>
              <div>
                <VueDatePicker v-model="dateFrom"></VueDatePicker>
              </div>
            </div>
            <div
              class="grow-1 card p-relative d-flex g-2 align-items-center color-primary-dark btn btn-white w-50"
            >
              <div class="text-primary">تاريخ العودة</div>
              <VueDatePicker v-model="dateTo"></VueDatePicker>
            </div>
          </div>
          <div class="d-flex">
            <div
              class="grow-1 card p-relative d-flex g-2 align-items-center color-primary-dark btn btn-white w-50"
            >
              <p class="text-primary">بالغ</p>
              <div class="d-flex">
                <div class="">
                  <counter-user
                    @add-one="addAdult()"
                    @minus-one="minusAdult()"
                  />
                </div>
                <div class="fs-4 mt-4 mx-5">
                  <p>{{ adult }}</p>
                </div>
              </div>
            </div>
            <div
              class="grow-1 card p-relative d-flex g-2 align-items-center color-primary-dark btn btn-white w-50"
            >
              <p class="text-primary">طفل</p>
              <div class="d-flex">
                <div class="">
                  <counter-user @add-one="addSons()" @minus-one="minusSons()" />
                </div>
                <div class="fs-4 mt-4 mx-5">
                  <p>{{ sons }}</p>
                </div>
              </div>
            </div>
            <div
              class="grow-1 card p-relative d-flex g-2 align-items-center color-primary-dark btn btn-white w-50"
            >
              <p class="text-primary">رضيع</p>
              <div class="d-flex">
                <div class="">
                  <counter-user @add-one="addBB()" @minus-one="minusBB()" />
                </div>
                <div class="fs-4 mt-4 mx-5">
                  <p>{{ bb }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex mt-1">
            <div class="btn bg-primary text-white w-50">
              <span>السياحية</span>
            </div>
            <div class="btn text-primary bg-white w-50">
              <span>الاعمال</span>
            </div>
            <div class="btn text-primary bg-white w-50">
              <span>الأولى</span>
            </div>
          </div>
          <div class="">
            <button
            @click="searchFlightOffers"
              class="btn mt-2 bg-primary fs-3 text-white w-100 mt-1 hover-opacity"
            >
              ابحث عن رحلة
            </button>
          </div>
        </div>
      </div>
      <div class="col-8"><img src="../assets/airplane.png" alt="" /></div>
    </div>
  </div>
  <div class="row">
    <div
      class="col-6 d-flex justify-content-center align-items-center w-md-100 text-primary-dark"
    >
      <div class="mx-5">
        <div class="text-center my-3">
          <span class="mb-2 fontS-4">التجربة السلسة لسفر الشركات</span>
        </div>
        <div class="text-center">
          <p>
            فلاي أكيد هو حل سفر متكامل للشركات يقدم منتجات سفر للشركات وموظفيها
            ليجمع ما بين أفضل تجارب الحجوزات للموظفين وأفضل تجربة لإدارة حلول
            السفر بالكامل.
          </p>
        </div>
      </div>
    </div>
    <div
      class="col-6 d-flex justify-content-center align-items-center w-md-100 text-primary-dark"
    >
      <img class="phone-img" src="../assets/phone.png" alt="" />
    </div>
  </div>
  <div class="row">
    <div class="col-12 text-center">
      <p class="mb-2 fs-3 text-primary-dark">
        انضم إلى صفوف النخبة لأكثر الشركات إثارة للإعجاب التي تثق بنا
      </p>
    </div>
    <div class="col-12" style="width: 86vw; margin: 0px 8%">
      <div class="image-grid">
        <!-- Loop through imageUrls array -->
        <div
          v-for="(imageUrl, index) in imageUrls"
          :key="index"
          class="image-item"
        >
          <img :src="imageUrl" alt="Image" />
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-12 text-center my-5 pt-5">
      <p class="mb-2 fs-3 text-primary-dark fontS-4">تجارب المستخدمين</p>
    </div>
    <div class="col-12 d-flex" style="width: 75vw; margin: 0px 8%">
      <div v-for="(item, index) in items" :key="index" class="image-grid">
        <div class="item-blog g-2 d-flex p-4 py-5 bg-gray-soft">
          <span class="mx-2"
            ><svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-gray-hove svg-simicolon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"
              ></path></svg
          ></span>
          <span>
            <p class="text-center text-primary-dark">
              {{ item.text }}
            </p>
          </span>
        </div>
        <div class="arrow-down"></div>
        <div>
          <img width="20%" :src="item.imageUrl" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="row pt-5">
    <img src="../assets/Capture.PNG" alt="" />
  </div>
  <div class="row"></div>
</template>
<script>
import { ref, watch } from "vue";
import AlibabCloud from "../assets/AlibabCloud.png";
import StcGroup from "../assets/StcGroup.png";
import JockClub from "../assets/JockClub.png";
import Knowliom from "../assets/Knowliom.png";
import NEOM from "../assets/NEOM.png";
import OM from "../assets/OM.png";
import { useAmadeus } from "../stores/amadeus";
import CounterUser from "../components/CounterUser.vue";
components: {
  CounterUser;
}

export default {
  components: { CounterUser },
  setup() {
    const amadeusStore = useAmadeus();
    const keywordFrom = ref("");
    const keywordTo = ref("");
    const locationCity = ref("");
    const isLoading = ref(false);
    const isLoadingTo = ref(false);
    const dateFrom = ref();
    const dateTo = ref();
    const adult = ref(0);
    const sons = ref(0);
    const bb = ref(0);

    // Watch for changes to the keywordFrom variable
    watch(keywordFrom, async (newKeyword) => {
      // Call searchLocations method when keywordFrom changes

      await searchLocations(newKeyword);
    });
    watch(keywordTo, async (newKeyword) => {
      await searchLocationsTo(newKeyword);
    });

    function selectLocation(location) {
      keywordFrom.value = location.name; // Set the input field value to the selected location's name
    }
    function addAdult() {
      adult.value = adult.value + 1; // Set the input field value to the selected location's name
    }
    function minusAdult() {
      adult.value = adult.value - 1; // Set the input field value to the selected location's name
    }
    function addSons() {
      sons.value = sons.value + 1; // Set the input field value to the selected location's name
    }
    function minusSons() {
      sons.value = sons.value - 1; // Set the input field value to the selected location's name
    }
    function addBB() {
      bb.value = bb.value + 1; // Set the input field value to the selected location's name
    }
    function minusBB() {
      bb.value = bb.value - 1; // Set the input field value to the selected location's name
    }
    function selectLocationTo(location) {
      keywordTo.value = location.name; // Set the input field value to the selected location's name
      isLoadingTo.value = false;
    }
    async function searchFlightOffers() {
      console.log('searchFlightOffers');
      const params = {
      originLocationCode: 'NYC',
        destinationLocationCode: 'LAX',
        departureDate: '2024-04-01',
        adults: 1,
      };
      const flightOffers = await amadeusStore.getResults(params);
      console.log(flightOffers);
    }
    async function searchLocations(keywordFrom) {
      // Check if the keywordFrom is empty
      if (!keywordFrom) {
        console.log("Keyword is empty");
        return; // Exit the function if the keywordFrom is empty
      }

      // Encode the keywordFrom before making the API request
      const encodedKeyword = encodeURIComponent(keywordFrom);
      isLoading.value = true;

      try {
        const locations = await amadeusStore.getLocations(encodedKeyword);
        console.log(locations);
        locationCity.value = locations; // Assign the value to the ref
      } catch (error) {
        console.error("Error fetching locations:", error);
      } finally {
        // Set isLoading to false after the API request is completed
        isLoading.value = false;
      }
    }
    async function searchLocationsTo(keywordTo) {
      // Check if the keywordTo is empty
      if (!keywordTo) {
        console.log("Keyword is empty");
        return; // Exit the function if the keywordTo is empty
      }

      // Encode the keywordTo before making the API request
      const encodedKeyword = encodeURIComponent(keywordTo);
      isLoadingTo.value = true; // Set isLoadingTo to true before making the API request

      try {
        const locations = await amadeusStore.getLocations(encodedKeyword);
        console.log(locations);
        locationCity.value = locations; // Assign the value to the ref
      } catch (error) {
        console.error("Error fetching locations:", error);
      } finally {
        // Set isLoadingTo to false after the API request is completed
        isLoadingTo.value = false;
      }
    }

    // Initial call to searchLocations with empty keywordFrom
    searchLocations("");

    const imageUrls = ref([
      AlibabCloud,
      StcGroup,
      JockClub,
      Knowliom,
      NEOM,
      OM,
    ]);
    const items = ref([
      {
        imageUrl: OM,
        altText: "Alt Text 1",
        text: "كشركة من أهم المزايا الموجودة هي التتبع المباشر التي تساعدنا في معرفة الرحلات المستخدمة ومواعيدها وتكلفتها. -أحمد كونش، عنصر مشع",
      },
      {
        imageUrl: NEOM,
        altText: "Alt Text 2",
        text: "سابقًا كنا نعمل على عمليات ورقية لموافقات السفر والتواصل عن طريق الايميل مع وكلاؤنا. كانت العملية تأخذ وقت طويل وما كان عندنا مراقبة كاملة على اجراءات السفر لكن الآن مع فلاي أكيد الموضوع شفاف عن طريق المنصة. -يعرب الصايغ، فيرجن موبايل",
      },
      {
        imageUrl: Knowliom,
        altText: "Alt Text 3",
        text: "صارت حياتي أسهل مع فلاي أكيد. كنا نستعمل وكالات السفر بس مع فلاي أكيد أقدر استقبل الطلبات بشكل مباشر بدل ما يستنى الموظف يوم أو يومين إلى ما تجيهم الموافقة على السفر. - فودكس",
      },
    ]);

    // Expose
    return {
      imageUrls,
      items,
      keywordFrom,
      keywordTo,
      locationCity,
      isLoading,
      isLoadingTo,
      dateFrom,
      dateTo,
      adult,
      sons,
      bb,
      selectLocation,
      searchLocationsTo,
      selectLocationTo,
      minusAdult,
      addAdult,
      addSons,
      minusBB,
      minusSons,
      addBB,searchFlightOffers
    };
  },
};
</script>
<style scoped>
* {
  font-family: "El Messiri", sans-serif;
}
.location-list {
  max-height: 300px; /* Adjust the height as needed */
  overflow-y: auto;
}
.h-input {
  height: 87px;
}
.svg-arrwos {
  position: absolute;
  margin: 85px 0px;
  background-color: white;
}
.to {
  background-color: #f1f1f1 !important;
}
.btn-costmize {
  width: 50%;
  margin: 1% 1%;
  gap: 0px 10px;
  border-radius: 50px;
  align-items: center;
  height: 40px;
}
.header-travel {
  border-radius: 9em;
  height: 60px;
  padding: 10px;
  align-items: center;
  width: 92%;
}
.width-33 {
  width: 33.3%;
}
.arrow-down {
  /* position: absolute; */
  /* background: red; */
  transform: translateY(-32%);
  border: solid transparent;
  border-width: 21px;
  /* margin: 12px 16px; */
  border-top-color: #f1f1f1;
}
.svg-simicolon {
  font-size: 2.5em;
}
.image-grid {
  display: flex;
  flex-wrap: wrap;
}

.image-item {
  flex: 0 0 calc(15.33% - 20px);
  margin: 16px 16px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.item-blog {
  /* flex: 0 0 calc(33.33% - 20px); */
  height: 274px;
  min-width: 404px;
  border: 1px solid #ddd;
  /* margin: 16px 16px; */
  /* justify-content: center; */
  /* align-items: center; */
  /* display: flex; */
}

.image-item img {
  width: 100%;
  height: auto;
}
.phone-img {
  height: 70%;
}
.fontS-4 {
  font-size: 2em;
  font-weight: bold;
}
</style>
