import React from "react";

import Data from "../../assets/data/data.json";

const Cards = () => {
  const cards = Data;
  const cardItems = cards.map((card) => {
    return (
      <div key={card.id} className="card1">
        <div className="card-header">
          {card.cat_name} &middot; {card.item.length}
        </div>

        <div key={card.item.id}>
          {card.item.length === 0 && (
            <div className="no-item">
              <svg
                width="165"
                height="148"
                viewBox="0 0 165 148"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M85.3226 123.613C119.114 123.613 146.509 96.2184 146.509 62.3067C146.509 28.3949 118.993 1 85.3226 1C51.5315 1 24.1366 28.3949 24.1366 62.3067C24.1366 96.2184 51.5315 123.613 85.3226 123.613Z"
                  fill="#E0E6F8"
                />
                <path
                  d="M154.276 42.8823C157.009 42.8823 159.224 40.667 159.224 37.9343C159.224 35.2016 157.009 32.9864 154.276 32.9864C151.543 32.9864 149.328 35.2016 149.328 37.9343C149.328 40.667 151.543 42.8823 154.276 42.8823Z"
                  fill="#E0E6F8"
                />
                <path
                  d="M161.517 23.5733C163.383 23.5733 164.896 22.0604 164.896 20.1942C164.896 18.3279 163.383 16.8151 161.517 16.8151C159.65 16.8151 158.137 18.3279 158.137 20.1942C158.137 22.0604 159.65 23.5733 161.517 23.5733Z"
                  fill="#E0E6F8"
                />
                <path
                  d="M26.9123 22.1193C28.7785 22.1193 30.2914 20.6064 30.2914 18.7402C30.2914 16.8739 28.7785 15.3611 26.9123 15.3611C25.0461 15.3611 23.5332 16.8739 23.5332 18.7402C23.5332 20.6064 25.0461 22.1193 26.9123 22.1193Z"
                  fill="#E0E6F8"
                />
                <path
                  d="M6.27553 87.288C9.74139 87.288 12.551 84.4784 12.551 81.0125C12.551 77.5467 9.74139 74.737 6.27553 74.737C2.80968 74.737 4.57764e-05 77.5467 4.57764e-05 81.0125C4.57764e-05 84.4784 2.80968 87.288 6.27553 87.288Z"
                  fill="#E0E6F8"
                />
                <g filter="url(#filter0_d_1_1831)">
                  <path
                    d="M121.099 107.854H138.619C140.82 107.854 142.706 105.969 142.706 103.769V22.0726C142.706 19.873 140.82 17.9877 138.619 17.9877H121.643"
                    fill="url(#paint0_linear_1_1831)"
                  />
                </g>
                <g filter="url(#filter1_d_1_1831)">
                  <path
                    d="M51.5361 107.854H34.5596C32.3589 107.854 30.4726 105.969 30.4726 103.769V22.0726C30.4726 19.873 32.3589 17.9877 34.5596 17.9877H51.1864"
                    fill="url(#paint1_linear_1_1831)"
                  />
                </g>
                <path
                  d="M42.2831 34.3269H50.7713"
                  stroke="#DADDE2"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M42.2831 45.3245H50.7713"
                  stroke="#DADDE2"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M42.2831 56.6365H50.7713"
                  stroke="#DADDE2"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M42.2831 67.9485H50.7713"
                  stroke="#DADDE2"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M42.2831 89.9436H50.7713"
                  stroke="#DADDE2"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M129.816 34.3269H121.643"
                  stroke="#DADDE2"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M129.816 45.3245H121.643"
                  stroke="#DADDE2"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M129.816 56.6365H121.643"
                  stroke="#DADDE2"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M129.816 67.9485H121.643"
                  stroke="#DADDE2"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M129.816 89.9436H121.643"
                  stroke="#DADDE2"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <g filter="url(#filter2_d_1_1831)">
                  <path
                    d="M117.556 114.767H55.3086C53.1079 114.767 51.2217 112.881 51.2217 110.682V15.7883C51.2217 13.5887 53.1079 11.7034 55.3086 11.7034H117.556C119.756 11.7034 121.643 13.5887 121.643 15.7883V110.682C121.643 112.881 119.756 114.767 117.556 114.767Z"
                    fill="url(#paint2_linear_1_1831)"
                  />
                </g>
                <path
                  d="M110.011 42.4468H66.6262C65.683 42.4468 65.0543 41.8773 65.0543 41.0231V37.3217C65.0543 36.4675 65.683 35.898 66.6262 35.898H110.011C110.954 35.898 111.582 36.4675 111.582 37.3217V41.0231C111.582 41.5926 110.954 42.4468 110.011 42.4468Z"
                  fill="#DAE3F2"
                />
                <path
                  d="M110.011 59.4145H66.6262C65.683 59.4145 65.0543 58.8451 65.0543 57.9909V54.2894C65.0543 53.4352 65.683 52.8657 66.6262 52.8657H110.011C110.954 52.8657 111.582 53.4352 111.582 54.2894V57.9909C111.582 58.8451 110.954 59.4145 110.011 59.4145Z"
                  fill="#DAE3F2"
                />
                <path
                  d="M110.011 76.6964H66.6262C65.683 76.6964 65.0543 76.1269 65.0543 75.2727V71.5713C65.0543 70.7171 65.683 70.1476 66.6262 70.1476H110.011C110.954 70.1476 111.582 70.7171 111.582 71.5713V75.2727C111.582 76.1269 110.954 76.6964 110.011 76.6964Z"
                  fill="#DAE3F2"
                />
                <path
                  d="M110.011 94.2925H92.72C91.7768 94.2925 91.1481 93.7231 91.1481 92.8689V89.1674C91.1481 88.3132 91.7768 87.7437 92.72 87.7437H110.011C110.954 87.7437 111.583 88.3132 111.583 89.1674V92.8689C111.583 93.7231 110.954 94.2925 110.011 94.2925Z"
                  fill="#DAE3F2"
                />
                <path
                  d="M105.547 125.569C105.155 127.237 104.566 129.003 103.879 130.475C102.015 134.106 99.071 136.952 95.4402 138.816C91.7114 140.681 87.2956 141.466 82.8799 140.484C72.4783 138.326 65.8057 128.12 67.9645 117.719C70.1233 107.317 80.2304 100.546 90.632 102.803C94.3608 103.588 97.5991 105.453 100.347 108.004C104.959 112.616 106.921 119.289 105.547 125.569Z"
                  fill="url(#paint3_linear_1_1831)"
                />
                <path
                  d="M92.8889 119.976H88.4732V115.56C88.4732 114.677 87.7863 113.892 86.805 113.892C85.9218 113.892 85.1368 114.579 85.1368 115.56V119.976H80.7211C79.8379 119.976 79.0529 120.663 79.0529 121.644C79.0529 122.625 79.7398 123.312 80.7211 123.312H85.1368V127.728C85.1368 128.611 85.8237 129.396 86.805 129.396C87.6881 129.396 88.4732 128.709 88.4732 127.728V123.312H92.8889C93.7721 123.312 94.5571 122.625 94.5571 121.644C94.5571 120.663 93.7721 119.976 92.8889 119.976Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_d_1_1831"
                    x="99.0987"
                    y="6.98773"
                    width="65.6074"
                    height="133.866"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="11" />
                    <feGaussianBlur stdDeviation="11" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.27 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_1831"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_1831"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_1_1831"
                    x="8.47264"
                    y="6.98773"
                    width="65.0634"
                    height="133.866"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="11" />
                    <feGaussianBlur stdDeviation="11" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.27 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_1831"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_1831"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_1_1831"
                    x="29.2217"
                    y="0.70343"
                    width="114.421"
                    height="147.063"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="11" />
                    <feGaussianBlur stdDeviation="11" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.27 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_1831"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_1831"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1_1831"
                    x1="131.895"
                    y1="15.909"
                    x2="131.895"
                    y2="108.823"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="0.9964" stop-color="#F8F9FC" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1_1831"
                    x1="40.9975"
                    y1="15.909"
                    x2="40.9975"
                    y2="108.823"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="0.9964" stop-color="#F8F9FC" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_1_1831"
                    x1="86.4092"
                    y1="9.31948"
                    x2="86.4092"
                    y2="115.878"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="0.9964" stop-color="#F8F9FC" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_1_1831"
                    x1="67.5412"
                    y1="121.643"
                    x2="105.985"
                    y2="121.643"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7E92B7" />
                    <stop offset="1" stop-color="#969EAE" />
                  </linearGradient>
                </defs>
              </svg>

              <p>Если есть подходящие заявки, перетащите их сюда 🤓</p>
            </div>
          )}

          {/* card.item > 0*/}
          {card.item.map((item) => (
            <div className="card-item" key={item.id}>
              {/* Header Title */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <div className="card-div">
                  <h1>{item.name}</h1>
                  <p>{item.title}</p>
                </div>
                <span
                  style={{
                    transform: "rotate(90deg)",
                    fontSize: "14px",
                    fontweight: 400,
                    lineHeight: "14px",
                    fontFamily: "Roboto",
                  }}
                >
                  &hellip;
                </span>
              </div>

              {/* body */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "20px",
                  alignItems: "center",
                }}
              >
                <span className="status">{item.status}</span>
                <span className="candidates">
                  <svg
                    style={{ marginRight: "6px" }}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.00001 7.33333C7.47277 7.33333 8.66668 6.13943 8.66668 4.66667C8.66668 3.19391 7.47277 2 6.00001 2C4.52725 2 3.33334 3.19391 3.33334 4.66667C3.33334 6.13943 4.52725 7.33333 6.00001 7.33333Z"
                      stroke="#96A09B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.6667 2.08667C11.2403 2.23354 11.7487 2.56714 12.1118 3.03488C12.4748 3.50262 12.6719 4.07789 12.6719 4.67C12.6719 5.26212 12.4748 5.83739 12.1118 6.30513C11.7487 6.77287 11.2403 7.10647 10.6667 7.25334M14 14V12.6667C13.9966 12.0781 13.7986 11.5072 13.4368 11.0429C13.0751 10.5787 12.5699 10.2471 12 10.1M2 14V12.6667C2 11.9594 2.28095 11.2811 2.78105 10.7811C3.28115 10.281 3.95942 10 4.66667 10H7.33333C8.04058 10 8.71885 10.281 9.21895 10.7811C9.71905 11.2811 10 11.9594 10 12.6667V14H2Z"
                      stroke="#96A09B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item.candidates}
                </span>
                <span className="cv">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.33334 2V4.66667C9.33334 4.84348 9.40358 5.01305 9.52861 5.13807C9.65363 5.2631 9.8232 5.33333 10 5.33333H12.6667"
                      stroke="#96A09B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.00001 8.66667H10M11.3333 14H4.66668C4.31305 14 3.97392 13.8595 3.72387 13.6095C3.47382 13.3594 3.33334 13.0203 3.33334 12.6667V3.33333C3.33334 2.97971 3.47382 2.64057 3.72387 2.39052C3.97392 2.14048 4.31305 2 4.66668 2H9.33334L12.6667 5.33333V12.6667C12.6667 13.0203 12.5262 13.3594 12.2762 13.6095C12.0261 13.8595 11.687 14 11.3333 14ZM6.00001 11.3333H10H6.00001Z"
                      stroke="#96A09B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item.cv}
                </span>
              </div>

              {/* user info */}
              <div className="hr-info">
                <img src={item.image} alt="" />
                <div>
                  <span id="rekruter">Рекруитер</span>
                  <span id="hr_name">{item.hr_name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      // </div>
    );
  });

  return <div className="cards">{cardItems}</div>;
};

export default Cards;
