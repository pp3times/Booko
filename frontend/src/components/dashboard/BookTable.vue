<template>
  <div>
    <div
      v-if="showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <div class="relative w-auto my-6 mx-auto max-w-6xl">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <!--header-->
          <div
            class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
          >
            <h3 class="text-3xl font-semibold">เพิ่มหนังสือ</h3>
            <button
              class="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              @click="toggleModal()"
            >
              <span
                class="text-black opacity-100 h-6 w-6 text-xl block outline-none focus:outline-none"
              >
                X
              </span>
            </button>
          </div>
          <!--body-->
          <div class="relative p-6">
            <!-- <p class="my-4 text-slate-500 text-lg leading-relaxed">
              I always felt like I could do anything. That’s the main thing
              people are controlled by! Thoughts- their perception of
              themselves! They're slowed down by their perception of themselves.
              If you're taught you can’t do anything, you won’t do anything. I
              was taught I could do everything.
            </p> -->
            <div>
              <div
                role="alert"
                class="w-[60rem] flex justify-between flex-row space-x-5"
              >
                <div class="flex flex-col w-1/2">
                  <label
                    for="bookname"
                    class="text-gray-800 text-lg font-bold leading-tight tracking-normal"
                    >ชื่อหนังสือ</label
                  >
                  <input
                    id="bookname"
                    class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-lg border-gray-300 rounded border"
                    placeholder="หนังสือเรียนทดสอบ"
                  />
                  <label
                    for="author"
                    class="text-gray-800 text-lg font-bold leading-tight tracking-normal"
                    >ชื่อผู้แต่ง</label
                  >
                  <input
                    id="author"
                    class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-lg border-gray-300 rounded border"
                    placeholder="ธนวัฒน์"
                  />
                  <label
                    for="page"
                    class="text-gray-800 text-lg font-bold leading-tight tracking-normal"
                    >จำนวนหน้า</label
                  >
                  <input
                    id="page"
                    class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-lg border-gray-300 rounded border"
                    placeholder="20"
                  />
                  <label
                    for="page"
                    class="text-gray-800 text-lg font-bold leading-tight tracking-normal"
                    >หมวดหมู่หนังสือ</label
                  >
                  <!-- <input
                  id="page"
                  class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-lg border-gray-300 rounded border"
                  placeholder="20"
                /> -->
                  <div class="relative mb-5 mt-2">
                    <svg
                      class="w-2 h-2 absolute top-2 right-0 m-4 pointer-events-none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 412 232"
                    >
                      <path
                        d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                        fill="#648299"
                        fill-rule="nonzero"
                      />
                    </svg>
                    <select
                      class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal flex items-center text-lg w-full border-gray-300 rounded border h-10 pl-5 pr-10 bg-white hover:border-gray-400 appearance-none"
                    >
                      <option>Choose a category</option>
                      <option>Red</option>
                      <option>Blue</option>
                      <option>Yellow</option>
                      <option>Black</option>
                      <option>Orange</option>
                      <option>Purple</option>
                      <option>Gray</option>
                      <option>White</option>
                    </select>
                  </div>
                </div>
                <div class="flex flex-col w-1/2">
                  <label
                    for="description"
                    class="text-gray-800 text-lg font-bold leading-tight tracking-normal"
                    >รายละเอียดหนังสือ</label
                  >
                  <textarea
                    name="description"
                    id="description"
                    cols="30"
                    rows="30"
                    class="mb-5 mt-2 py-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-[8.6rem] flex items-center pl-3 text-lg border-gray-300 rounded border"
                    placeholder="lorem"
                  ></textarea>
                  <label
                    for="page"
                    class="text-gray-800 text-lg font-bold leading-tight tracking-normal"
                    >ราคาหนังสือ</label
                  >
                  <input
                    id="page"
                    class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-lg border-gray-300 rounded border"
                    placeholder="20"
                  />
                  <label
                    for="page"
                    class="text-gray-800 text-lg font-bold leading-tight tracking-normal"
                    >จำนวนสต็อกสินค้า</label
                  >
                  <input
                    id="page"
                    class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-lg border-gray-300 rounded border"
                    placeholder="20"
                  />
                </div>

                <!-- <label
                  for="email2"
                  class="text-gray-800 text-lg font-bold leading-tight tracking-normal"
                  >Card Number</label
                >
                <div class="relative mb-5 mt-2">
                  <div
                    class="absolute text-gray-600 flex items-center px-4 border-r h-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-credit-card"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x="3" y="5" width="18" height="14" rx="3" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                      <line x1="7" y1="15" x2="7.01" y2="15" />
                      <line x1="11" y1="15" x2="13" y2="15" />
                    </svg>
                  </div>
                  <input
                    id="email2"
                    class="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-lg border-gray-300 rounded border"
                    placeholder="XXXX - XXXX - XXXX - XXXX"
                  />
                </div>
                <label
                  for="expiry"
                  class="text-gray-800 text-lg font-bold leading-tight tracking-normal"
                  >Expiry Date</label
                >
                <div class="relative mb-5 mt-2">
                  <div
                    class="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-calendar-event"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x="4" y="5" width="16" height="16" rx="2" />
                      <line x1="16" y1="3" x2="16" y2="7" />
                      <line x1="8" y1="3" x2="8" y2="7" />
                      <line x1="4" y1="11" x2="20" y2="11" />
                      <rect x="8" y="15" width="2" height="2" />
                    </svg>
                  </div>
                  <input
                    id="expiry"
                    class="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-lg border-gray-300 rounded border"
                    placeholder="MM/YY"
                  />
                </div>
                <label
                  for="cvc"
                  class="text-gray-800 text-lg font-bold leading-tight tracking-normal"
                  >CVC</label
                >
                <div class="relative mb-5 mt-2">
                  <div
                    class="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-info-circle"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <circle cx="12" cy="12" r="9"></circle>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                      <polyline points="11 12 12 12 12 16 13 16"></polyline>
                    </svg>
                  </div>
                  <input
                    id="cvc"
                    class="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-lg border-gray-300 rounded border"
                    placeholder="MM/YY"
                  />
                </div> -->
                <!-- <div class="flex items-center justify-start w-full">
                  <button
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-lg"
                  >
                    Submit
                  </button>
                  <button
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-lg"
                    onclick="modalHandler()"
                  >
                    Cancel
                  </button>
                </div> -->
                <!-- <button
                  class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                  onclick="modalHandler()"
                  aria-label="close modal"
                  role="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-x"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button> -->
              </div>
            </div>
            <div class="flex w-full justify-center">
              <div
                id="multi-upload-button"
                class="inline-flex w-1/5 text-center items-center px-4 py-2 bg-gray-600 border border-gray-600 rounded-l font-semibold cursor-pointer text-sm text-white tracking-widest hover:bg-gray-500 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
              >
                Click to browse
              </div>
              <div
                class="w-full border border-gray-300 rounded-r-md flex items-center justify-between"
              >
                <span id="multi-upload-text" class="p-2"></span>
                <button
                  id="multi-upload-delete"
                  class="hidden"
                  onclick="removeMultiUpload()"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-current text-red-700 w-3 h-3"
                    viewBox="0 0 320 512"
                  >
                    <path
                      d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <input
              type="file"
              id="multi-upload-input"
              class="hidden"
              multiple
            />
          </div>
          <!--footer-->
          <div
            class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"
          >
            <button
              class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              v-on:click="toggleModal()"
            >
              Close
            </button>
            <button
              class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              v-on:click="toggleModal()"
            >
              บันทึกหนังสือ
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>

    <div class="mt-4 lg:mt-10">
      <div class="bg-indigo-50 rounded-xl p-4 lg:p-10">
        <div class="flex justify-between items-center mb-10">
          <h3 class="text-xl font-bold text-gray-700">รายการหนังสือ</h3>

          <div class="flex space-x-5">
            <button
              class="bg-white text-blue-800 flex space-x-3 items-center px-4 py-2 rounded-md font-semibold focus:outline-none"
            >
              <span>จัดเรียงตาม ..</span>
              <span class="block w-4 pt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </button>
            <div
              class="bg-primary text-white flex items-center px-4 py-2 rounded-md font-semibold focus:outline-none cursor-pointer"
              @click="toggleModal()"
            >
              <span>เพิ่มหนังสือ</span>
            </div>
          </div>
        </div>
        <div class="flex flex-row mt-2">
          <div
            class="flex w-full items-center justify-between bg-white dark:bg-gray-800 px-8 py-6 border-l-4 border-green-500 dark:border-green-300"
          >
            <!-- card -->
            <div class="flex">
              <img
                class="h-40 drop-shadow-xl hover:drop-shadow-2xl transition-all ease-in-out duration-300 cursor-pointer border-1 border-primary rounded object-cover"
                src="https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/f/i/file_107.jpg"
                alt="infamous"
              />

              <div class="flex flex-col ml-6">
                <span class="text-lg font-bold">หนังสือเรียนทดสอบ</span>
                <div class="mt-4 flex">
                  <div class="flex">
                    <svg
                      class="h-5 w-5 fill-current dark:text-gray-300"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 4a4 4 0 014 4 4 4 0 01-4 4
												4 4 0 01-4-4 4 4 0 014-4m0
												10c4.42 0 8 1.79 8
												4v2H4v-2c0-2.21 3.58-4 8-4z"
                      ></path>
                    </svg>
                    <span
                      class="ml-2 text-sm text-gray-600 dark:text-gray-300 capitalize"
                    >
                      ผู้แต่ง
                    </span>
                  </div>

                  <div class="flex ml-6">
                    <svg
                      class="h-5 w-5 fill-current dark:text-gray-300"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19
												19H5V8h14m-3-7v2H8V1H6v2H5c-1.11
												0-2 .89-2 2v14a2 2 0 002 2h14a2 2
												0 002-2V5a2 2 0 00-2-2h-1V1m-1
												11h-5v5h5v-5z"
                      ></path>
                    </svg>
                    <span
                      class="ml-2 text-sm text-gray-600 dark:text-gray-300 capitalize"
                    >
                      สำนักพิมพ์
                    </span>
                  </div>

                  <div class="flex ml-6">
                    <svg
                      class="h-5 w-5 fill-current dark:text-gray-300"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M13 2.05v2.02c3.95.49 7 3.85 7
												7.93 0 3.21-1.92 6-4.72 7.28L13
												17v5h5l-1.22-1.22C19.91 19.07 22
												15.76 22
												12c0-5.18-3.95-9.45-9-9.95M11
												2c-1.95.2-3.8.96-5.32 2.21L7.1
												5.63A8.195 8.195 0 0111 4V2M4.2
												5.68C2.96 7.2 2.2 9.05 2
												11h2c.19-1.42.75-2.77
												1.63-3.9L4.2 5.68M6
												8v2h3v1H8c-1.1 0-2 .9-2
												2v3h5v-2H8v-1h1c1.11 0 2-.89
												2-2v-1a2 2 0 00-2-2H6m6
												0v5h3v3h2v-3h1v-2h-1V8h-2v3h-1V8h-2M2
												13c.2 1.95.97 3.8 2.22
												5.32l1.42-1.42A8.21 8.21 0 014
												13H2m5.11 5.37l-1.43 1.42A10.04
												10.04 0 0011 22v-2a8.063 8.063 0
												01-3.89-1.63z"
                      ></path>
                    </svg>
                    <span
                      class="ml-2 text-sm text-gray-600 dark:text-gray-300 capitalize"
                    >
                      จำนวนหน้า
                    </span>
                  </div>
                </div>

                <div class="mt-4 flex">
                  <button
                    class="flex items-center focus:outline-none border rounded-md py-2 px-6 leading-none transition-all ease-in-out duration-300 border-gray-500 dark:border-gray-600 select-none hover:bg-gray-500 hover:text-white dark-hover:text-gray-200"
                  >
                    <svg class="h-5 w-5 fill-current mr-2" viewBox="0 0 24 24">
                      <path
                        d="M14
												12v7.88c.04.3-.06.62-.29.83a.996.996
												0 01-1.41 0l-2.01-2.01a.989.989 0
												01-.29-.83V12h-.03L4.21 4.62a1 1
												0
												01.17-1.4c.19-.14.4-.22.62-.22h14c.22
												0 .43.08.62.22a1 1 0 01.17
												1.4L14.03 12H14z"
                      ></path>
                    </svg>
                    <span>หมวดหมู่หนังสือ</span>
                  </button>

                  <button
                    class="flex items-center ml-4 focus:outline-none border rounded-md py-2 px-6 leading-none border-primary text-primary transition-all ease-in-out duration-300 hover:border-gray-200 select-none hover:bg-primary hover:text-white"
                  >
                    <svg
                      class="h-5 w-5 fill-current mr-2"
                      viewBox="0 0 576 512"
                    >
                      <path
                        d="M402.3 344.9l32-32c5-5
												13.7-1.5 13.7 5.7V464c0 26.5-21.5
												48-48 48H48c-26.5
												0-48-21.5-48-48V112c0-26.5
												21.5-48 48-48h273.5c7.1 0 10.7
												8.6 5.7 13.7l-32 32c-1.5 1.5-3.5
												2.3-5.7
												2.3H48v352h352V350.5c0-2.1.8-4.1
												2.3-5.6zm156.6-201.8L296.3
												405.7l-90.4 10c-26.2
												2.9-48.5-19.2-45.6-45.6l10-90.4L432.9
												17.1c22.9-22.9 59.9-22.9 82.7
												0l43.2 43.2c22.9 22.9 22.9 60 .1
												82.8zM460.1 174L402 115.9 216.2
												301.8l-7.3 65.3 65.3-7.3L460.1
												174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8
												0L436 82l58.1 58.1
												30.9-30.9c4-4.2 4-10.8-.1-14.9z"
                      ></path>
                    </svg>
                    <span>รายละเอียดหนังสือ</span>
                  </button>
                </div>
              </div>
            </div>

            <div class="flex flex-col -mt-10 xl:mr-20">
              <span class="font-semibold text-green-500 dark:text-green-300">
                ยอดขาย : XXX
              </span>
              <span class="font-semibold text-green-500 dark:text-green-300">
                คงเหลือ : XXX
              </span>
              <span class="text-sm text-gray-700 dark:text-gray-400 mt-2">
                ราคา 200 บาท
              </span>
            </div>
          </div>
          <div
            class="text-center flex flex-col items-center justify-center bg-amber-500 text-white hover:scale-105 transition-all ease-in-out duration-300 ml-1 px-12 cursor-pointer rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z"
              />
            </svg>
          </div>
          <div
            class="text-center flex flex-col items-center justify-center bg-red-500 text-white hover:scale-105 transition-all ease-in-out duration-300 ml-1 px-12 cursor-pointer rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookTable",
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>
