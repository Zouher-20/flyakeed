


<script setup>
import { useAmadeus } from "@/stores/amadeus";
import { onMounted, ref } from "vue";

const store = useAmadeus();
const result = ref(true);
const resultsReturn = ref();

// Format date function
const formatDate = (dateTimeString) => {
  const dateTime = new Date(dateTimeString);
  return `${dateTime.getFullYear()}-${(dateTime.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${dateTime.getDate().toString().padStart(2, "0")}`;
};

// Format time function
const formatTime = (dateTimeString) => {
  const dateTime = new Date(dateTimeString);
  return `${dateTime.getHours().toString().padStart(2, "0")}:${dateTime
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${dateTime.getSeconds().toString().padStart(2, "0")}`;
};
onMounted(async () => {
  resultsReturn.value = {
    meta: {
      count: 2,
      links: {
        self: "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2021-11-01&adults=1&max=2",
      },
    },
    data: [
      {
        type: "flight-offer",
        id: "1",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        lastTicketingDate: "2021-11-01",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT14H15M",
            segments: [
              {
                departure: {
                  iataCode: "SYD",
                  terminal: "1",
                  at: "2021-11-01T11:35:00",
                },
                arrival: {
                  iataCode: "MNL",
                  terminal: "2",
                  at: "2021-11-01T16:50:00",
                },
                carrierCode: "PR",
                number: "212",
                aircraft: {
                  code: "333",
                },
                operating: {
                  carrierCode: "PR",
                },
                duration: "PT8H15M",
                id: "1",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "MNL",
                  terminal: "1",
                  at: "2021-11-01T19:20:00",
                },
                arrival: {
                  iataCode: "BKK",
                  at: "2021-11-01T21:50:00",
                },
                carrierCode: "PR",
                number: "732",
                aircraft: {
                  code: "320",
                },
                operating: {
                  carrierCode: "PR",
                },
                duration: "PT3H30M",
                id: "2",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "EUR",
          total: "355.34",
          base: "255.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "355.34",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["PR"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "EUR",
              total: "355.34",
              base: "255.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "1",
                cabin: "ECONOMY",
                fareBasis: "EOBAU",
                class: "E",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
              },
              {
                segmentId: "2",
                cabin: "ECONOMY",
                fareBasis: "EOBAU",
                class: "E",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "2",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        lastTicketingDate: "2021-11-01",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT16H35M",
            segments: [
              {
                departure: {
                  iataCode: "SYD",
                  terminal: "1",
                  at: "2021-11-01T11:35:00",
                },
                arrival: {
                  iataCode: "MNL",
                  terminal: "2",
                  at: "2021-11-01T16:50:00",
                },
                carrierCode: "PR",
                number: "212",
                aircraft: {
                  code: "333",
                },
                operating: {
                  carrierCode: "PR",
                },
                duration: "PT8H15M",
                id: "3",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "MNL",
                  terminal: "1",
                  at: "2021-11-01T21:40:00",
                },
                arrival: {
                  iataCode: "BKK",
                  at: "2021-11-02T00:10:00",
                },
                carrierCode: "PR",
                number: "740",
                aircraft: {
                  code: "321",
                },
                operating: {
                  carrierCode: "PR",
                },
                duration: "PT3H30M",
                id: "4",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "EUR",
          total: "355.34",
          base: "255.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "355.34",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["PR"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "EUR",
              total: "355.34",
              base: "255.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "3",
                cabin: "ECONOMY",
                fareBasis: "EOBAU",
                class: "E",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
              },
              {
                segmentId: "4",
                cabin: "ECONOMY",
                fareBasis: "EOBAU",
                class: "E",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
              },
            ],
          },
        ],
      },
    ],
    dictionaries: {
      locations: {
        BKK: {
          cityCode: "BKK",
          countryCode: "TH",
        },
        MNL: {
          cityCode: "MNL",
          countryCode: "PH",
        },
        SYD: {
          cityCode: "SYD",
          countryCode: "AU",
        },
      },
      aircraft: {
        320: "AIRBUS A320",
        321: "AIRBUS A321",
        333: "AIRBUS A330-300",
      },
      currencies: {
        EUR: "EURO",
      },
      carriers: {
        PR: "PHILIPPINE AIRLINES",
      },
    },
  };
  console.log(resultsReturn.value);
  setTimeout(() => {
    result.value = false;
  }, 2000);
  try {
    const response = await store.getResults({
      currencyCode: "USD",
      originDestinations: [
        {
          id: "1",
          originLocationCode: "NYC",
          destinationLocationCode: "MAD",
          departureDateTimeRange: {
            date: "2023-11-01",
            time: "10:00:00",
          },
        },
      ],
      travelers: [{ id: "1", travelerType: "ADULT" }],
      sources: ["GDS"],
      searchCriteria: {
        maxFlightOffers: 2,
        flightFilters: {
          cabinRestrictions: [
            {
              cabin: "BUSINESS",
              coverage: "MOST_SEGMENTS",
              originDestinationIds: ["1"],
            },
          ],
        },
      },
    });
    result.value = response.data;
    console.log(result.value);
  } catch (error) {
    console.error("Error fetching flight offers:", error);
  }
});
</script>

<template>
  <div>
    <nav
      class="navbar navbar-expand-lg d-flex justify-content-around navbar-light bg-primary-darker"
    >
      <a class="navbar-brand text-white" href="#"
        ><button type="button" class="btn text-white btn-outline">
          تغيير البحث
        </button></a
      >
      <a class="navbar-brand text-white" href="#"
        ><div>Navbar</div>
        <span class="text-primary-dark">العودة</span>
      </a>
      <a class="navbar-brand text-white" href="#"
        ><div>Navbar</div>
        <span class="text-primary-dark">الذهاب</span>
      </a>
      <a class="navbar-brand text-white" href="#"
        ><div>Navbar</div>
        <span class="text-primary-dark">الذهاب</span>
      </a>
      <a class="navbar-brand text-white" href="#"
        ><img width="30px" src="../assets/right-arrow-svgrepo-com.svg" alt=""
      /></a>
    </nav>
  </div>
  <div
    class="d-flex justify-content-center align-items-center mt-5"
    v-if="result"
  >
    <div class="loader">
      <span style="--i: 1"></span>
      <span style="--i: 2"></span>
      <span style="--i: 3"></span>
      <span style="--i: 4"></span>
      <span style="--i: 5"></span>
      <span style="--i: 6"></span>
      <span style="--i: 7"></span>
      <span style="--i: 8"></span>
      <span style="--i: 9"></span>
      <span style="--i: 10"></span>
      <span style="--i: 11"></span>
      <span style="--i: 12"></span>
      <span style="--i: 13"></span>
      <span style="--i: 14"></span>
      <span style="--i: 15"></span>
      <span style="--i: 16"></span>
      <span style="--i: 17"></span>
      <span style="--i: 18"></span>
      <span style="--i: 19"></span>
      <span style="--i: 20"></span>
      <div class="plane">
        <div class="icon"></div>
      </div>
    </div>
  </div>
  <div
    v-if="!result"
    class="d-flex justify-content-between bg-primary-light px-5"
  >
    <div>
      <div class="d-flex mx-3 mt-5">
        <div class="text-secondary mx-2">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 640 512"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM80.55 341.27c6.28 6.84 15.1 10.72 24.33 10.71l130.54-.18a65.62 65.62 0 0 0 29.64-7.12l290.96-147.65c26.74-13.57 50.71-32.94 67.02-58.31 18.31-28.48 20.3-49.09 13.07-63.65-7.21-14.57-24.74-25.27-58.25-27.45-29.85-1.94-59.54 5.92-86.28 19.48l-98.51 49.99-218.7-82.06a17.799 17.799 0 0 0-18-1.11L90.62 67.29c-10.67 5.41-13.25 19.65-5.17 28.53l156.22 98.1-103.21 52.38-72.35-36.47a17.804 17.804 0 0 0-16.07.02L9.91 230.22c-10.44 5.3-13.19 19.12-5.57 28.08l76.21 82.97z"
            ></path>
          </svg>
        </div>
        <div class="text-primary-text fs-5">
          رحلة الذهاب ({{ resultsReturn.data.length }}) من النتائج
        </div>
      </div>
      <div class="d-flex">
        <div class="container">
          <div class="row">
            <div
              class="d-flex col-12"
              v-for="(flight, index) in resultsReturn.data"
              :key="flight.id"
            >
              <div
                class="card mb-3 px-2 justify-content-center align-items-center"
              >
                <div class="flight-info row">
                  <div class="col-12 text-center">
                    <p class="text-primary-text">
                      {{ flight.price.total }} {{ flight.price.currency }}
                    </p>
                  </div>
                  <div
                    class="col-12 d-flex align-items-center justify-content-end"
                  >
                    <button class="btn btn-primary w-100">اختيار</button>
                  </div>
                </div>
              </div>

              <div class="card mb-3">
                <div class="card-body">
                  <!-- Display flight price -->

                  <!-- Display flight details -->
                  <div class="flight-details row">
                    <div class="col-12">
                      <h2>
                        Flight:
                        <span class="text-primary-dark"> {{ index + 1 }}</span>
                      </h2>
                    </div>
                    <div class="details col-12">
                      <div class="row">
                        <div class="col-2">
                          <p><strong>From</strong></p>
                          <p class="text-primary-text">
                            {{
                              flight.itineraries[0].segments[0].departure
                                .iataCode
                            }}
                          </p>
                        </div>
                        <div class="col-2">
                          <p><strong>To</strong></p>
                          <p class="text-primary-text">
                            {{
                              flight.itineraries[0].segments[
                                flight.itineraries[0].segments.length - 1
                              ].arrival.iataCode
                            }}
                          </p>
                        </div>
                        <div class="col-2">
                          <p><strong>Date</strong></p>
                          <p
                            class="text-primary-text"
                            style="white-space: nowrap"
                          >
                            {{
                              formatDate(
                                flight.itineraries[0].segments[0].departure.at
                              )
                            }}
                          </p>
                        </div>
                        <div class="col-2">
                          <p><strong>Time</strong></p>
                          <p class="text-primary-text">
                            {{
                              formatTime(
                                flight.itineraries[0].segments[0].departure.at
                              )
                            }}
                          </p>
                        </div>
                        <div class="col-2">
                          <p>
                            <strong style="white-space: nowrap"
                              >Carrier Code</strong
                            >
                          </p>
                          <p class="text-primary-text">
                            {{ flight.itineraries[0].segments[0].carrierCode }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-5 ">
        <p
            class="text-primary-text"
            style="    text-align: end;
    padding: 5% 20% 0% 0%;"
          >
            خطوط الطيران
          </p>
      <div

        class="col-12 "
        v-for="(flight, index) in resultsReturn.data"
        :key="flight.id"
      >
        <!-- Display flight price -->
        <div>
        

          <div class="d-flex justify-content-around align-items-center">
            <div class="mx-2 d-flex">
              <div>
                <p style="white-space: nowrap">
                  {{ flight.price.total }} {{ flight.price.currency }}
                </p>
              </div>
            </div>
               <div class="mx-2 d-flex d-flex  align-items-center">
              <div>
                <p style="white-space: nowrap">Flight {{ index + 1 }}</p>
              </div>
              <div class="px-3">
                <p style="white-space: nowrap">
              <img width="20px" src="../assets/noun-true-1896685.svg" alt="" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.loader {
  position: relative;
  width: 100px;
  height: 100px;
}
.container {
  padding: 20px;
}

.card {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.loader span {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(calc(18deg * var(--i)));
}
.loader span::before {
  content: "";
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #0a0f57;
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(5px);
  transform: scale(0);
  animation: load 2s linear infinite;
  animation-delay: calc(0.1s * var(--i));
}
@keyframes load {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  10% {
    transform: scale(1.2);
    opacity: 1;
  }
  80%,
  100% {
    transform: scale(0);
    opacity: 0;
  }
}
.plane {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  animation: rotate 2s linear infinite;
  animation-delay: -1.5s;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.plane .icon {
  font-size: 50px;
  color: #0a0f57;
  position: absolute;
  top: -10px;
  left: 80px;
  transform: rotate(45deg);
}
.btn-outline {
  border: 1px solid white;
  width: 190px;
}
</style>

