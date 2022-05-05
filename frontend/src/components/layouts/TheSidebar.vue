<template>
  <aside class="hidden w-64 bg-gray-800 sm:block">
    <div
      class="
        py-3
        text-2xl
        uppercase
        text-center
        tracking-widest
        bg-gray-900
        border-b-2 border-gray-800
        mb-8
      "
    >
      <router-link to="/dashboard" class="text-primary font-bold"
        >Booko</router-link
      >
    </div>

    <nav class="text-sm text-gray-300">
      <ul class="flex flex-col">
        <li
          class="
            px-4
            py-2
            text-xs
            uppercase
            tracking-wider
            text-gray-500
            font-bold
          "
        >
          Normal Section
        </li>

        <router-link
          v-slot="{ isExactActive, href, navigate }"
          to="/dashboard"
          custom
        >
          <li
            class="px-4 cursor-pointer"
            :class="[
              isExactActive ? 'bg-gray-500 text-gray-800' : 'hover:bg-gray-700',
            ]"
          >
            <a class="py-3 flex items-center" :href="href" @click="navigate">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Dashboard
            </a>
          </li>
        </router-link>

        <!-- User Manage -->
        <li>
          <Disclosure v-slot="{ open }" :default-open="isUserManagementActive">
            <DisclosureButton
              class="px-4 py-3 flex items-center w-full hover:bg-gray-700"
              :class="open ? 'bg-gray-700' : ''"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              User Management

              <span class="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  :class="open ? 'transform rotate-90' : ''"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </DisclosureButton>
            <DisclosurePanel>
              <ul>
                <li>
                  <router-link
                    v-slot="{ isExactActive, href, navigate }"
                    to="/users"
                    custom
                  >
                    <li
                      class="pl-8"
                      :class="[
                        isExactActive
                          ? 'bg-gray-500 text-gray-800'
                          : 'hover:bg-gray-700',
                      ]"
                    >
                      <a
                        class="py-3 flex items-center"
                        :href="href"
                        @click="navigate"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                          />
                        </svg>
                        User List
                      </a>
                    </li>
                  </router-link>
                </li>

                <li>
                  <router-link
                    v-slot="{ isExactActive, href, navigate }"
                    to="/admins"
                    custom
                  >
                    <li
                      class="pl-8"
                      :class="[
                        isExactActive
                          ? 'bg-gray-500 text-gray-800'
                          : 'hover:bg-gray-700',
                      ]"
                    >
                      <a
                        class="py-3 flex items-center"
                        :href="href"
                        @click="navigate"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                          />
                        </svg>
                        Admin List
                      </a>
                    </li>
                  </router-link>
                </li>
              </ul>
            </DisclosurePanel>
          </Disclosure>
        </li>

        <!-- Book Manage -->
        <li>
          <Disclosure v-slot="{ open }" :default-open="isBookManagementActive">
            <DisclosureButton
              class="px-4 py-3 flex items-center w-full hover:bg-gray-700"
              :class="open ? 'bg-gray-700' : ''"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2 fill-current"
                viewBox="0 0 24 24"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path
                  d="M22 24h-17c-1.657 0-3-1.343-3-3v-18c0-1.657 1.343-3 3-3h17v24zm-2-4h-14.505c-1.375 0-1.375 2 0 2h14.505v-2zm0-18h-15v16h15v-16zm-3 3v3h-9v-3h9z"
                />
              </svg>
              Book Management
              <span class="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  :class="open ? 'transform rotate-90' : ''"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </DisclosureButton>
            <DisclosurePanel>
              <ul>
                <li>
                  <router-link
                    v-slot="{ isExactActive, href, navigate }"
                    to="/books"
                    custom
                  >
                    <li
                      class="pl-8"
                      :class="[
                        isExactActive
                          ? 'bg-gray-500 text-gray-800'
                          : 'hover:bg-gray-700',
                      ]"
                    >
                      <a
                        class="py-3 flex items-center"
                        :href="href"
                        @click="navigate"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                          />
                        </svg>
                        Book List
                      </a>
                    </li>
                  </router-link>
                </li>
                <li>
                  <router-link
                    v-slot="{ isExactActive, href, navigate }"
                    to="/category"
                    custom
                  >
                    <li
                      class="pl-8"
                      :class="[
                        isExactActive
                          ? 'bg-gray-500 text-gray-800'
                          : 'hover:bg-gray-700',
                      ]"
                    >
                      <a
                        class="py-3 flex items-center"
                        :href="href"
                        @click="navigate"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                          />
                        </svg>
                        Categories List
                      </a>
                    </li>
                  </router-link>
                </li>
                <li class="px-8 hover:bg-gray-700">
                  <a href="#" class="py-3 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    </svg>
                    Permissions
                  </a>
                </li>
              </ul>
            </DisclosurePanel>
          </Disclosure>
        </li>

        <li class="px-4 hover:bg-gray-700">
          <a href="#" class="py-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              />
            </svg>
            Reports
          </a>
        </li>

        <li
          class="
            px-4
            py-2
            mt-2
            text-xs
            uppercase
            tracking-wider
            text-gray-500
            font-bold
          "
        >
          order section
        </li>
        <!-- Order Manage -->
        <li>
          <Disclosure v-slot="{ open }" :default-open="isBookManagementActive">
            <DisclosureButton
              class="px-4 py-3 flex items-center w-full hover:bg-gray-700"
              :class="open ? 'bg-gray-700' : ''"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2 fill-current"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21.698 10.658l2.302 1.342-12.002 7-11.998-7 2.301-1.342 9.697 5.658 9.7-5.658zm-9.7 10.657l-9.697-5.658-2.301 1.343 11.998 7 12.002-7-2.302-1.342-9.7 5.657zm0-19l8.032 4.685-8.032 4.685-8.029-4.685 8.029-4.685zm0-2.315l-11.998 7 11.998 7 12.002-7-12.002-7z"
                />
              </svg>
              Order Management
              <span class="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  :class="open ? 'transform rotate-90' : ''"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </DisclosureButton>
            <DisclosurePanel>
              <ul>
                <!-- <li>
                  <Disclosure v-slot="{ open }" :default-open="isBookActive">
                    <DisclosureButton
                      class="pl-8 pr-4 py-3 flex items-center w-full hover:bg-gray-700"
                      :class="open ? 'bg-gray-700' : ''"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                      </svg>
                      Users
                      <span class="ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          :class="open ? 'transform rotate-90' : ''"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </DisclosureButton>
                    <DisclosurePanel>
                      <ul>
                        <router-link
                          v-slot="{ isExactActive, href, navigate }"
                          to="/"
                          custom
                        >
                          <li
                            class="pl-12"
                            :class="[
                              isExactActive
                                ? 'bg-gray-500 text-gray-800'
                                : 'hover:bg-gray-700',
                            ]"
                          >
                            <a
                              class="py-3 flex items-center"
                              :href="href"
                              @click="navigate"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                                />
                              </svg>
                              User List
                            </a>
                          </li>
                        </router-link>
                        <li class="pl-12 hover:bg-gray-700">
                          <a href="#" class="py-3 flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                              />
                            </svg>
                            User Detail
                          </a>
                        </li>
                      </ul>
                    </DisclosurePanel>
                  </Disclosure>
                </li> -->
                <router-link
                  v-slot="{ isExactActive, href, navigate }"
                  to="/order-incomplete"
                  custom
                >
                  <li
                    class="pl-8"
                    :class="[
                      isExactActive
                        ? 'bg-gray-500 text-gray-800'
                        : 'hover:bg-gray-700',
                    ]"
                  >
                    <a
                      class="py-2 flex items-center"
                      :href="href"
                      @click="navigate"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                      </svg>
                      Incomplete Order
                      <span
                        class="ml-auto text-xs bg-gray-500 px-2 py-1 rounded-sm"
                        >{{ incomplete_order.length }}</span
                      >
                    </a>
                  </li>
                </router-link>
                <router-link
                  v-slot="{ isExactActive, href, navigate }"
                  to="/order-complete"
                  custom
                >
                  <li
                    class="pl-8"
                    :class="[
                      isExactActive
                        ? 'bg-gray-500 text-gray-800'
                        : 'hover:bg-gray-700',
                    ]"
                  >
                    <a
                      class="py-2 flex items-center"
                      :href="href"
                      @click="navigate"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                      </svg>
                      Complete Order
                      <span
                        class="ml-auto text-xs bg-gray-500 px-2 py-1 rounded-sm"
                        >{{ complete_order.length }}</span
                      >
                    </a>
                  </li>
                </router-link>
              </ul>
            </DisclosurePanel>
          </Disclosure>
        </li>
        <!-- Invoice Manage -->
        <li>
          <Disclosure v-slot="{ open }" :default-open="isBookManagementActive">
            <DisclosureButton
              class="px-4 py-3 flex items-center w-full hover:bg-gray-700"
              :class="open ? 'bg-gray-700' : ''"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2 fill-current"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-10v-1h10v1zm0 2h-10v1h10v-1zm0 3h-10v1h10v-1z"
                />
              </svg>
              Invoice Management
              <span class="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  :class="open ? 'transform rotate-90' : ''"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </DisclosureButton>
            <DisclosurePanel>
              <ul>
                <li>
                  <Disclosure v-slot="{ open }" :default-open="isBookActive">
                    <DisclosureButton
                      class="
                        pl-8
                        pr-4
                        py-3
                        flex
                        items-center
                        w-full
                        hover:bg-gray-700
                      "
                      :class="open ? 'bg-gray-700' : ''"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                      </svg>
                      Users
                      <span class="ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          :class="open ? 'transform rotate-90' : ''"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </DisclosureButton>
                    <DisclosurePanel>
                      <ul>
                        <router-link
                          v-slot="{ isExactActive, href, navigate }"
                          to="/"
                          custom
                        >
                          <li
                            class="pl-12"
                            :class="[
                              isExactActive
                                ? 'bg-gray-500 text-gray-800'
                                : 'hover:bg-gray-700',
                            ]"
                          >
                            <a
                              class="py-3 flex items-center"
                              :href="href"
                              @click="navigate"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                                />
                              </svg>
                              User List
                            </a>
                          </li>
                        </router-link>
                        <li class="pl-12 hover:bg-gray-700">
                          <a href="#" class="py-3 flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                              />
                            </svg>
                            User Detail
                          </a>
                        </li>
                      </ul>
                    </DisclosurePanel>
                  </Disclosure>
                </li>
                <li class="px-8 hover:bg-gray-700">
                  <a href="#" class="py-3 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    </svg>
                    Roles
                  </a>
                </li>
                <li class="px-8 hover:bg-gray-700">
                  <a href="#" class="py-3 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    </svg>
                    Permissions
                  </a>
                </li>
              </ul>
            </DisclosurePanel>
          </Disclosure>
        </li>

        <!-- Payment Manage -->
        <li>
          <router-link
            v-slot="{ isExactActive, href, navigate }"
            to="/payment"
            custom
          >
            <li
              class="px-4"
              :class="[
                isExactActive
                  ? 'bg-gray-500 text-gray-800'
                  : 'hover:bg-gray-700',
              ]"
            >
              <a class="py-3 flex items-center" :href="href" @click="navigate">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12.164 7.165c-1.15.191-1.702 1.233-1.231 2.328.498 1.155 1.921 1.895 3.094 1.603 1.039-.257 1.519-1.252 1.069-2.295-.471-1.095-1.784-1.827-2.932-1.636zm1.484 2.998l.104.229-.219.045-.097-.219c-.226.041-.482.035-.719-.027l-.065-.387c.195.03.438.058.623.02l.125-.041c.221-.109.152-.387-.176-.453-.245-.054-.893-.014-1.135-.552-.136-.304-.035-.621.356-.766l-.108-.239.217-.045.104.229c.159-.026.345-.036.563-.017l.087.383c-.17-.021-.353-.041-.512-.008l-.06.016c-.309.082-.21.375.064.446.453.105.994.139 1.208.612.173.385-.028.648-.36.774zm10.312 1.057l-3.766-8.22c-6.178 4.004-13.007-.318-17.951 4.454l3.765 8.22c5.298-4.492 12.519-.238 17.952-4.454zm-2.803-1.852c-.375.521-.653 1.117-.819 1.741-3.593 1.094-7.891-.201-12.018 1.241-.667-.354-1.503-.576-2.189-.556l-1.135-2.487c.432-.525.772-1.325.918-2.094 3.399-1.226 7.652.155 12.198-1.401.521.346 1.13.597 1.73.721l1.315 2.835zm2.843 5.642c-6.857 3.941-12.399-1.424-19.5 5.99l-4.5-9.97 1.402-1.463 3.807 8.406-.002.007c7.445-5.595 11.195-1.176 18.109-4.563.294.648.565 1.332.684 1.593z"
                  />
                </svg>
                Payment Management
              </a>
            </li>
          </router-link>
        </li>

        <li class="px-4 cursor-pointer hover:bg-gray-700">
          <a href="#" class="py-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Messages
            <span class="ml-auto text-xs bg-gray-500 px-2 py-1 rounded-sm"
              >16</span
            >
          </a>
        </li>

        <li class="px-4 cursor-pointer hover:bg-gray-700">
          <a href="#" class="py-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Calendar
          </a>
        </li>

        <li
          class="
            px-4
            py-2
            mt-2
            text-xs
            uppercase
            tracking-wider
            text-gray-500
            font-bold
          "
        >
          UI Elements
        </li>

        <li class="px-4 cursor-pointer hover:bg-gray-700">
          <router-link :to="{ name: 'card' }" class="py-2 flex items-center">
            <svg
              class="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 3C3.89543 3 3 3.89543 3 5V7C3 8.10457 3.89543 9 5 9H7C8.10457 9 9 8.10457 9 7V5C9 3.89543 8.10457 3 7 3H5Z"
                fill="currentColor"
              />
              <path
                d="M5 11C3.89543 11 3 11.8954 3 13V15C3 16.1046 3.89543 17 5 17H7C8.10457 17 9 16.1046 9 15V13C9 11.8954 8.10457 11 7 11H5Z"
                fill="currentColor"
              />
              <path
                d="M11 5C11 3.89543 11.8954 3 13 3H15C16.1046 3 17 3.89543 17 5V7C17 8.10457 16.1046 9 15 9H13C11.8954 9 11 8.10457 11 7V5Z"
                fill="currentColor"
              />
              <path
                d="M11 13C11 11.8954 11.8954 11 13 11H15C16.1046 11 17 11.8954 17 13V15C17 16.1046 16.1046 17 15 17H13C11.8954 17 11 16.1046 11 15V13Z"
                fill="currentColor"
              />
            </svg>
            Card
          </router-link>
        </li>
        <li
          class="
            px-4
            py-2
            mt-2
            text-xs
            uppercase
            tracking-wider
            text-gray-500
            font-bold
          "
        >
          Pages
        </li>

        <li class="px-4 cursor-pointer hover:bg-gray-700">
          <router-link :to="{ name: 'login' }" class="py-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              />
            </svg>
            Login
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import axios from "axios";

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  },

  data() {
    return {
      all_order: [],
      incomplete_order: [],
      complete_order: [],
    };
  },

  setup() {
    const route = useRoute();

    const isUserManagementActive = computed(() => {
      const names = ["user-list", "user-detail", "roles", "permissions"];

      return names.includes(route.name);
    });

    const isUserActive = computed(() => {
      const names = ["user-list", "user-detail"];

      return names.includes(route.name);
    });

    const isBookManagementActive = computed(() => {
      const names = ["user-list", "user-detail", "roles", "permissions"];

      return names.includes(route.name);
    });

    const isBookActive = computed(() => {
      const names = ["user-list", "user-detail"];

      return names.includes(route.name);
    });

    return {
      route,
      isUserManagementActive,
      isUserActive,
    };
  },

  created() {
    this.getOrder();
  },

  methods: {
    async getOrder() {
      try {
        const response = await axios.get("http://localhost:4000/api/order");
        this.incomplete_order = response.data.filter(
          (order) => order.order_check == null
        );
        this.complete_order = response.data.filter(
          (order) => order.order_check != null
        );
        // foreach change book_createAt format to date format and change book_updateAt format to date format
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
