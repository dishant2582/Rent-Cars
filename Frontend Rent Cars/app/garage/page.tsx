"use client"

import React from 'react'
import CardGrid from '../components/GarageCarCards'

import { useState } from 'react'; // Assuming you have a Card component to display car details
import FilterSidebar from '../components/FilterSidebar';
import GarageCarCard from '../components/GarageCarCards';
import AlertGreen from '../components/AlertGreen';
import AlertRed from '../components/AlertRed';

// Example Car Data
const cards = [
  {
    id: 1,
    name: "Maruti Suzuki Swift",
    fuel: "Petrol",
    transmission: "Manual",
    rating: 4.5,
    description: "A compact, stylish, and fuel-efficient hatchback.",
    images: [
      "https://zoomcar-assets.zoomcar.com/661850/HostCarImage/host_car_image_6618509b5c256e-9df5-431b-8467-d38958ee4e2d20240617-31-mxjm01.jpg",
      "https://zoomcar-assets.zoomcar.com/683241/HostCarImage/host_car_image_6832413dab9820-e002-47ba-8833-f486dab4b21020240617-34-17hkor0.jpg",
      "https://zoomcar-assets.zoomcar.com/683240/HostCarImage/host_car_image_6832406ce499d5-cd05-4e13-9c55-4ecb9f18844b20240617-32-17hw1nv.jpg",
      "https://zoomcar-assets.zoomcar.com/683240/HostCarImage/host_car_image_6832406ce499d5-cd05-4e13-9c55-4ecb9f18844b20240617-32-17hw1nv.jpg",
    ],
    type: "Hatchback",
    price: 600000,
  },
  {
    id: 2,
    name: "Renault Triber 2024",
    fuel: "Petrol",
    transmission: "Manual",
    rating: 4.2,
    description: "A spacious and versatile compact MPV with great mileage.",
    images: [
      "https://zoomcar-assets.zoomcar.com/796874/HostCarImage/RackMultipart20241021-35-1u591mja3f05c7c-9c24-432f-910b-6b80985f6d41.jpg",
      "https://zoomcar-assets.zoomcar.com/796868/HostCarImage/RackMultipart20241021-39-1ua10ib24ff706c-04ae-433f-9303-286e541dab35.jpg",
      "https://zoomcar-assets.zoomcar.com/796883/HostCarImage/RackMultipart20241021-32-fofwkved6b41f3-2dbc-4320-85dc-49b77260a48b.jpg",
      "https://zoomcar-assets.zoomcar.com/796871/HostCarImage/RackMultipart20241021-35-hyn7py93e0ef29-145b-46b9-8374-fb9efb927443.jpg",
    ],
    type: "MPV",
    price: 800000,
  },
  {
    id: 3,
    name: "Tata Safari 2022",
    fuel: "Diesel",
    transmission: "Automatic",
    rating: 4.5,
    description: "A robust SUV with spacious interiors and advanced safety features.",
    images: [
      "https://images10.gaadi.com/usedcar_image/4225089/original/processed_38459f28333ba837ee3d13f0fffe3e6a.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4225089/original/d64f00dcb453a3affb47f79bc82bec70.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4225089/original/processed_7c938e1c77bad02481b92f49477b2a68.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4225089/original/835e510d43e7d9d98ba8ed83ca517e59.jpg?imwidth=640",
    ],
    type: "SUV",
    price: 1600000,
    
  },
  {
    id: 4,
    name: "Tata Punch 2022",
    fuel: "Petrol",
    transmission: "Manual",
    rating: 4.3,
    description: "A compact SUV with modern features and off-road capabilities.",
    images: [
      "https://zoomcar-assets.zoomcar.com/733147/HostCarImage/RackMultipart20240814-30-gog5b56e6fe4d-fe4e-46d2-8e3d-8f1114de0f43.jpg",
      "https://zoomcar-assets.zoomcar.com/733163/HostCarImage/RackMultipart20240814-33-ty1av10612a166-1066-4d05-a9df-e97ad5c7a96d.jpg",
      "https://zoomcar-assets.zoomcar.com/733183/HostCarImage/RackMultipart20240814-54-14ichgz0c8fb96f-9a8e-49eb-9ebd-527c2279f036.jpg",
      "https://zoomcar-assets.zoomcar.com/733154/HostCarImage/RackMultipart20240814-36-1i7xr2x9668ff9a-d819-4063-b20b-92ef906f0f3a.jpg",
    ],
    type: "SUV",
    price: 700000,
  },
  {
    id: 5,
    name: "Honda Amaze 2021",
    fuel: "Diesel",
    transmission: "Automatic",
    rating: 4.0,
    description: "A compact sedan with excellent fuel efficiency.",
    images: [
      "https://zoomcar-assets.zoomcar.com/786499/HostCarImage/RackMultipart20241009-38-f5zn1aa2d5d3c9-03d6-46bc-b381-687b8b6b40d4.jpg",
      "https://zoomcar-assets.zoomcar.com/790434/HostCarImage/RackMultipart20241013-32-1z13y0wd131c4eb-a765-4152-af97-f07e71a46d8a.jpg",
      "https://zoomcar-assets.zoomcar.com/790435/HostCarImage/RackMultipart20241013-34-nel81112f48a12-72b1-4f99-8ffb-3f6d04c81acd.jpg",
      "https://zoomcar-assets.zoomcar.com/790433/HostCarImage/RackMultipart20241013-60-2dx9zt91d0fff6-fe01-4711-aced-2268e355efbd.jpg",
    ],
    type: "Sedan",
    price: 700000,
  },
  {
    id: 6,
    name: "Renault Kwid 2019",
    fuel: "Petrol",
    transmission: "Manual",
    rating: 4.1,
    description: "A small city car with a stylish design and good performance.",
    images: [
      "https://zoomcar-assets.zoomcar.com/762265/HostCarImage/RackMultipart20240915-38-5810at766361f9-4c24-4f50-8df5-13309b3fc823.jpg",
      "https://zoomcar-assets.zoomcar.com/762290/HostCarImage/RackMultipart20240915-32-99nalm626c43e2-91dc-41c5-a3ee-db09baa451c8.jpg",
      "https://zoomcar-assets.zoomcar.com/762304/HostCarImage/RackMultipart20240915-32-1a7njh8bab6f312-7ba0-4026-ac22-416f01b87be3.jpg",
      "https://zoomcar-assets.zoomcar.com/762295/HostCarImage/RackMultipart20240915-32-1a89d33a2d692bf-3b95-4762-95b8-6152e106f650.jpg",
    ],
    type: "Hatchback",
    price: 400000,
  },
  {
    id: 7,
    name: "Hyundai I20 2023",
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.6,
    description: "A premium hatchback with advanced features and a stylish design.",
    images: [
      "https://zoomcar-assets.zoomcar.com/447472/HostCarImage/host_car_image_44747214ba1aee-2694-4f42-8cbc-2ec1683c5c4720231101-41-65ph3.jpg",
      "https://zoomcar-assets.zoomcar.com/450103/HostCarImage/host_car_image_4501031e36c229-9c08-4014-9b59-b175344285e420231103-42-ns380r.jpg",
      "https://zoomcar-assets.zoomcar.com/450116/HostCarImage/host_car_image_450116950dfa3d-913c-4702-b1fc-04c19d9383ca20231103-29-agcco0.jpg",
      "https://zoomcar-assets.zoomcar.com/444746/HostCarImage/host_car_image_4447464e366d50-14c2-4d78-89eb-7b881a3e5f5d20231030-29-16ktopt.jpg",
    ],
    type: "Hatchback",
    price: 750000,
  },
  {
    id: 8,
    name: "Tata Punch 2022",
    fuel: "Petrol",
    transmission: "Manual",
    rating: 4.3,
    description: "A compact SUV with modern features and off-road capabilities.",
    images: [
      "https://zoomcar-assets.zoomcar.com/733147/HostCarImage/RackMultipart20240814-30-gog5b56e6fe4d-fe4e-46d2-8e3d-8f1114de0f43.jpg",
      "https://zoomcar-assets.zoomcar.com/733163/HostCarImage/RackMultipart20240814-33-ty1av10612a166-1066-4d05-a9df-e97ad5c7a96d.jpg",
      "https://zoomcar-assets.zoomcar.com/733183/HostCarImage/RackMultipart20240814-54-14ichgz0c8fb96f-9a8e-49eb-9ebd-527c2279f036.jpg",
      "https://zoomcar-assets.zoomcar.com/733154/HostCarImage/RackMultipart20240814-36-1i7xr2x9668ff9a-d819-4063-b20b-92ef906f0f3a.jpg",
    ],
    type: "SUV",
    price: 700000,
  },
  {
    id: 9,
    name: "Hyundai Exter 2024",
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.5,
    description: "A perfect city car with a stylish look and efficient fuel consumption.",
    images: [
      "https://zoomcar-assets.zoomcar.com/743537/HostCarImage/RackMultipart20240826-36-66p60451f43a4f-2ed5-4bc9-8af7-638520a2f895.jpg",
      "https://zoomcar-assets.zoomcar.com/743538/HostCarImage/RackMultipart20240826-39-1hh9m2a42972a5d-5412-4789-b258-f1800e3b4d71.jpg",
      "https://zoomcar-assets.zoomcar.com/743541/HostCarImage/RackMultipart20240826-36-3s6xqdbf73086a-2a48-4b54-8cfb-f3504052cb56.jpg",
      "https://zoomcar-assets.zoomcar.com/743545/HostCarImage/RackMultipart20240826-36-1vxb0gv1247c78c-8c87-4bf3-bc2e-128d1b29c868.jpg",
    ],
    type: "SUV",
    price: 1000000,
  },
  {
    id: 10,
    name: "Renault Kiger 2021",
    fuel: "Diesel",
    transmission: "Manual",
    rating: 4.0,
    description: "An adventurous car with a robust design and strong performance.",
    images: [
      "https://zoomcar-assets.zoomcar.com/787447/HostCarImage/RackMultipart20241010-32-150629oc1d95ded-02b6-42d5-8b2a-ba92f3643f9f.jpg",
      "https://zoomcar-assets.zoomcar.com/787448/HostCarImage/RackMultipart20241010-35-1iiqun77313a2bd-0140-4e52-8282-8279ffd397fb.jpg",
      "https://zoomcar-assets.zoomcar.com/787450/HostCarImage/RackMultipart20241010-38-i7o98593440db1-c2a2-46c8-989b-129d0db99deb.jpg",
      "https://zoomcar-assets.zoomcar.com/787452/HostCarImage/RackMultipart20241010-32-2g1j9q60ce8730-d6ac-4ac8-b749-0bbc958b0eb5.jpg",
    ],
    type: "SUV",
    price: 850000,
  },
  {
    id: 11,
    name: "Renault Duster 2020",
    fuel: "Diesel",
    transmission: "Manual",
    rating: 4.5,
    description: "An off-road beast with excellent mileage and spacious interiors.",
    images: [
      "https://zoomcar-assets.zoomcar.com/205328/HostCarImage/host_car_image_2053281d5677db-f7d5-4c33-890a-713fb808e1e620240816-36-10pmz24.jpg",
      "https://zoomcar-assets.zoomcar.com/209730/HostCarImage/host_car_image_2097300b4863e2-eb5f-44ea-ba51-9a37ce90b37b20230329-66-94yh4q.jpg",
      "https://zoomcar-assets.zoomcar.com/432184/HostCarImage/host_car_image_4321840f165272-609d-4d4e-8964-33b295ae610520240815-30-182smo1.jpg",
      "https://zoomcar-assets.zoomcar.com/245259/HostCarImage/host_car_image_2452596ba1f6f5-1fa8-4f3a-885c-9340773ded4f20240108-32-1wtbgv2.jpg",
    ],
    type: "SUV",
    price: 900000,
  },
  {
    id: 12,
    name: "Hyundai i20 N Line 2022",
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.7,
    description: "A sporty hatchback with a peppy engine and advanced features.",
    images: [
      "https://zoomcar-assets.zoomcar.com/751521/HostCarImage/RackMultipart20240903-35-a330v6a65f8cc9-4cf8-4ad0-b0ee-0cbb14fc1f08.jpg",
      "https://zoomcar-assets.zoomcar.com/751935/HostCarImage/RackMultipart20240904-34-dfs6o485fad5a3-aaa3-434e-9a74-8bf729c70f39.jpg",
      "https://zoomcar-assets.zoomcar.com/751936/HostCarImage/RackMultipart20240904-32-1vfpgpq7bf4fb02-9a92-488b-b8f5-92439bf96048.jpg",
      "https://zoomcar-assets.zoomcar.com/751526/HostCarImage/RackMultipart20240903-34-1q8kzfo38187466-eb8c-4560-8aab-3079891e019a.jpg",
    ],
    type: "Hatchback",
    price: 1100000,
  },
  {
    id: 13,
    name: "Hyundai Fluidic Verna 4S 2018",
    fuel: "Petrol",
    transmission: "Manual",
    rating: 4.2,
    description: "A sleek sedan with top-notch safety features and a smooth ride.",
    images: [
      "https://zoomcar-assets.zoomcar.com/779059/HostCarImage/RackMultipart20241030-35-1eddb9y44509408-397f-4f04-9cf5-2af07564d5fa.jpg",
      "https://zoomcar-assets.zoomcar.com/779062/HostCarImage/RackMultipart20241030-38-wfg7dte67a2cf9-d7dc-4824-8a3b-b1cbea3ac250.jpg",
      "https://zoomcar-assets.zoomcar.com/803598/HostCarImage/RackMultipart20241030-35-1s64b56ecaae0f7-60dc-4778-a2a4-480b9c286b06.jpg",
      "https://zoomcar-assets.zoomcar.com/779064/HostCarImage/RackMultipart20241002-38-1tcrreqd912a027-34f5-48dd-b06d-81a26e88a2ef.jpg",
    ],
    type: "Sedan",
    price: 950000,
  },
  {
    id: 14,
    name: "Maruti Suzuki Ciaz 2018",
    fuel: "Petrol",
    transmission: "Manual",
    rating: 4.3,
    description: "A reliable and fuel-efficient sedan with ample space and comfort.",
    images: [
      "https://zoomcar-assets.zoomcar.com/748598/HostCarImage/host_car_image_74859803f9e0ed-3764-4f05-832f-50ad5f06cdf020240901-30-4t2ad3.jpg",
      "https://zoomcar-assets.zoomcar.com/748599/HostCarImage/host_car_image_7485991b80ae3b-041f-452b-babc-e95c7fc112b420240831-37-vo2s0a.jpg",
      "https://zoomcar-assets.zoomcar.com/748830/HostCarImage/host_car_image_7488309576b4f3-4067-4999-994b-0e86f869be0320240831-32-14smq7j.jpg",
      "https://zoomcar-assets.zoomcar.com/748831/HostCarImage/host_car_image_7488316ffcfc4d-15f0-4cc8-a197-aaf9faba53a720240831-33-1w32sao.jpg",
    ],
    type: "Sedan",
    price: 800000,
  },
  {
    id: 15,
    name: "Toyota Yaris 2019",
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.2,
    description: "A compact sedan with excellent fuel economy and safety features.",
    images: [
      "https://zoomcar-assets.zoomcar.com/813108/HostCarImage/RackMultipart20241110-38-1g4l2v87dd2dfb9-5fa6-4e24-9ad4-9ee86c4163ff.jpg",
      "https://zoomcar-assets.zoomcar.com/813109/HostCarImage/RackMultipart20241110-38-1i5x0877e626baa-8030-4b3a-9b6a-53a6c4a12982.jpg",
      "https://zoomcar-assets.zoomcar.com/813110/HostCarImage/RackMultipart20241110-35-17o7hweb742687d-9539-4560-9247-a5757d1c6a01.jpg",
      "https://zoomcar-assets.zoomcar.com/813115/HostCarImage/RackMultipart20241110-32-1qwjqhg6a78390a-5dad-40c3-8877-e33458d20662.jpg",
    ],
    type: "Sedan",
    price: 750000,
  },
  {
    id: 16,
    name: "Tata Altroz 2021",
    fuel: "Petrol",
    transmission: "Manual",
    rating: 4.3,
    description: "A premium hatchback with a bold design and comfortable interiors.",
    images: [
      "https://zoomcar-assets.zoomcar.com/727448/HostCarImage/RackMultipart20240807-57-d3j0a0883b9ca1-067b-45ff-8a2d-f61da1a62176.jpg",
      "https://zoomcar-assets.zoomcar.com/727453/HostCarImage/RackMultipart20240807-51-ouo157f4ed6376-a08c-4d2d-95f1-48cf9a6ce35d.jpg",
      "https://zoomcar-assets.zoomcar.com/727449/HostCarImage/RackMultipart20240807-57-1fj81iha4fb9eff-dc0d-486b-a017-b04549ea5c2d.jpg",
      "https://zoomcar-assets.zoomcar.com/727457/HostCarImage/RackMultipart20240807-57-26mgj21a98e19f-444b-474d-9ee8-37a1eb03983b.jpg",
    ],
    type: "Hatchback",
    price: 700000,
  },
  {
    id: 17,
    name: "Hyundai Venue 2022",
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.5,
    description: "A compact SUV with advanced features and a stylish design.",
    images: [
      "https://zoomcar-assets.zoomcar.com/828235/HostCarImage/RackMultipart20241126-1366-39kjcdb9b07038-2960-42fc-aa85-4e865a6bf781.jpg",
      "https://zoomcar-assets.zoomcar.com/828234/HostCarImage/RackMultipart20241126-39-1570ub1f5fe4be2-0b32-4a67-a9f2-aaaf700cb6ff.jpg",
      "https://zoomcar-assets.zoomcar.com/828232/HostCarImage/RackMultipart20241126-37-1csd9463443abdf-6654-4d7a-8a26-5cac85d41d5a.jpg",
      "https://zoomcar-assets.zoomcar.com/828234/HostCarImage/RackMultipart20241126-39-1570ub1f5fe4be2-0b32-4a67-a9f2-aaaf700cb6ff.jpg",
    ],
    type: "SUV",
    price: 950000,
  },
  {
    id: 18,
    name: "Ford Ecosport 2017",
    fuel: "Diesel",
    transmission: "Manual",
    rating: 4.0,
    description: "A rugged and reliable SUV with great off-road capabilities.",
    images: [
      "https://zoomcar-assets.zoomcar.com/738405/HostCarImage/RackMultipart20240822-37-rki2mjaf70dc03-76b0-4158-9c22-69ef10fa525f.jpg",
      "https://zoomcar-assets.zoomcar.com/740252/HostCarImage/RackMultipart20240822-58-njmy3389776c59-f744-40ac-a2f3-73e07915fa56.jpg",
      "https://zoomcar-assets.zoomcar.com/740266/HostCarImage/RackMultipart20240822-30-2xzk4hf168f67e-7c3e-48a5-81ae-9cff6d1a1928.jpg",
      "https://zoomcar-assets.zoomcar.com/738405/HostCarImage/RackMultipart20240822-37-rki2mjaf70dc03-76b0-4158-9c22-69ef10fa525f.jpg",
    ],
    type: "SUV",
    price: 600000,
  },
  {
    id: 19,
    name: "Renault Triber 2023",
    fuel: "Petrol",
    transmission: "Manual",
    rating: 4.1,
    description: "A versatile MPV with flexible seating and ample cargo space.",
    images: [
      "https://zoomcar-assets.zoomcar.com/533379/HostCarImage/host_car_image_5333791008c710-bf5e-45f0-809c-e0fa378f19ff20240214-31-1tr9hsd.jpg",
      "https://zoomcar-assets.zoomcar.com/533834/HostCarImage/host_car_image_5338345e69fe7f-44a3-4d8a-be87-00cd1b4ead5620240202-33-zfsb8w.jpg",
      "https://zoomcar-assets.zoomcar.com/533384/HostCarImage/host_car_image_5333842395d7c5-757c-4d55-9dcc-77ef4c205e5820240214-30-1nwpzrk.jpg",
      "https://zoomcar-assets.zoomcar.com/533385/HostCarImage/host_car_image_53338565c93492-2ffd-4588-8b1a-f3840127e07720240201-33-14v2z60.jpg",
    ],
    type: "MPV",
    price: 700000,
  },
  {
    id: 20,
    name: "Ford Freestyle 2021",
    fuel: "Diesel",
    transmission: "Manual",
    rating: 4.3,
    description: "A crossover with dynamic styling and high safety standards.",
    images: [
      "https://zoomcar-assets.zoomcar.com/795998/HostCarImage/RackMultipart20241114-35-gdk5nl86ed4df0-c625-4d84-bfe7-3b1608f27abc.jpg",
      "https://zoomcar-assets.zoomcar.com/796001/HostCarImage/RackMultipart20241020-40-dygnxzacbbcf90-d78f-4e72-b611-8408aaef9e8b.jpg",
      "https://zoomcar-assets.zoomcar.com/796025/HostCarImage/RackMultipart20241020-32-1le3ecec0f4b7fd-5f67-412c-b2e7-8d7d8a5423b5.jpg",
      "https://zoomcar-assets.zoomcar.com/817759/HostCarImage/RackMultipart20241114-38-16cdhgqa262016b-850a-4d7b-956f-1735da78ef06.jpg",
    ],
    type: "Crossover",
    price: 650000,
  },
  {
    id: 21,
    name: "Maruti Suzuki Ignis 2023",
    fuel: "Petrol",
    transmission: "Manual",
    rating: 4.3,
    description: "A compact and stylish hatchback with advanced safety features.",
    images: [
      "https://zoomcar-assets.zoomcar.com/534292/HostCarImage/host_car_image_5342928c5b33a7-027a-4260-a562-8d2c9f24cfc620240202-35-f4uxva.jpg",
      "https://zoomcar-assets.zoomcar.com/534296/HostCarImage/host_car_image_5342962e1d2e1b-8c79-4f6f-af05-363f1ff658b920240202-35-e7jxu.jpg",
      "https://zoomcar-assets.zoomcar.com/534297/HostCarImage/host_car_image_534297d9a13311-dd63-4ab5-835f-219edc11d38820240202-33-qs0si8.jpg",
      "https://zoomcar-assets.zoomcar.com/621984/HostCarImage/host_car_image_6219847c173e7c-a968-4c48-9c9b-b8cec26cc4ad20240421-30-dcx8xc.jpg",
    ],
    type: "Hatchback",
    price: 650000,
  },
  {
    id: 22,
    name: "Maruti Suzuki Dzire 2019",
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.2,
    description: "A popular compact sedan known for its fuel efficiency and comfort.",
    images: [
      "https://zoomcar-assets.zoomcar.com/15400/HostCarImage/open-uri20230130-16129-sfo0wccfa7719f-1afa-4213-9180-b4f4ec750139.jpg",
      "https://zoomcar-assets.zoomcar.com/218/HostCarImage/open-uri20230130-8129-1oxw2fv6457bc06-6ece-4397-bff4-11a3123ff418.jpg",
      "https://zoomcar-assets.zoomcar.com/220/HostCarImage/open-uri20230130-8129-1eq65bz75fa0da0-bca5-43d1-b43c-9aa837e9d200.jpg",
      "https://zoomcar-assets.zoomcar.com/221/HostCarImage/open-uri20230130-8129-zc9740d837fcc4-e371-4517-9357-258f3284d0f1.jpg",
    ],
    type: "Sedan",
    price: 600000,
  },
  {
    id: 23,
    name: "Maruti Suzuki Swift 2020",
    fuel: "Petrol",
    transmission: "Manual",
    rating: 4.5,
    description: "A sporty and agile hatchback with a responsive engine.",
    images: [
      "https://zoomcar-assets.zoomcar.com/743975/HostCarImage/RackMultipart20240826-34-q9uag45a703236-bbec-4d73-afa3-ebeb11fe55fa.jpg",
      "https://zoomcar-assets.zoomcar.com/753553/HostCarImage/host_car_image_753553d85caac4-0a88-4677-8fde-631b0f132dbf20240905-35-44yj4v.jpg",
      "https://zoomcar-assets.zoomcar.com/743978/HostCarImage/host_car_image_743978307b3689-35e1-4b30-9b0a-54ac936dfcc720240907-35-1v2dxr9.jpg",
      "https://zoomcar-assets.zoomcar.com/743979/HostCarImage/host_car_image_743979bed1f9c0-3296-4258-be35-67217908ab9f20240907-32-b9fcv2.jpg",
    ],
    type: "Hatchback",
    price: 700000,
  },
  {
    id: 24,
    name: "Honda Amaze 2018",
    fuel: "Diesel",
    transmission: "Manual",
    rating: 4.0,
    description: "A reliable sedan with great mileage and spacious interiors.",
    images: [
      "https://zoomcar-assets.zoomcar.com/815967/HostCarImage/RackMultipart20241113-32-bs8hlf7b11ea7a-2bc7-450c-9ed3-0613f079ff33.jpg",
      "https://zoomcar-assets.zoomcar.com/815976/HostCarImage/RackMultipart20241113-32-t7e07e4515b672-e571-4ba6-90e3-44975114f088.jpg",
      "https://zoomcar-assets.zoomcar.com/815973/HostCarImage/RackMultipart20241113-38-1pghy9u66cbea97-3012-4e59-bad0-a677fed48057.jpg",
      "https://zoomcar-assets.zoomcar.com/815977/HostCarImage/RackMultipart20241113-38-sxdkwlc95246ca-891a-4b97-aac2-a4fd42f95e88.jpg",
    ],
    type: "Sedan",
    price: 550000,
  },
  {
    id: 25,
    name: "Hyundai Grand i10 2021",
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.1,
    description: "A well-rounded hatchback with modern features and a comfortable ride.",
    images: [
      "https://zoomcar-assets.zoomcar.com/707151/HostCarImage/host_car_image_7071515e50b9a7-8ec1-4297-87b3-55581bd15dbd20240724-36-15levds.jpg",
      "https://zoomcar-assets.zoomcar.com/708554/HostCarImage/host_car_image_70855415fa5ce6-c9fa-4796-8dbc-a7977887007620240730-34-1wc7uim.jpg",
      "https://zoomcar-assets.zoomcar.com/708556/HostCarImage/RackMultipart20240714-31-uy6cz41c889b42-9ba8-4216-9485-22126da4547b.jpg",
      "https://zoomcar-assets.zoomcar.com/708557/HostCarImage/RackMultipart20240714-37-5i6v290558f8c7-f6a9-4745-bc74-6c7e76a44496.jpg",
    ],
    type: "Hatchback",
    price: 650000,
  },
  {
    id: 26,
    name: "Ford Figo 2020",
    fuel: "Diesel",
    transmission: "Manual",
    rating: 4.4,
    description: "A compact car with a punchy engine and excellent handling.",
    images: [
      "https://zoomcar-assets.zoomcar.com/829929/HostCarImage/RackMultipart20241128-297-12nx25k24ad0eef-1365-4657-ab8b-96ec65b8e1cc.jpg",
      "https://zoomcar-assets.zoomcar.com/829933/HostCarImage/RackMultipart20241128-37-zfhgt7a43f75d-9555-41ac-bbfe-861937cd839d.jpg",
      "https://zoomcar-assets.zoomcar.com/829935/HostCarImage/RackMultipart20241128-35-17xdsxj78a93c19-9aa6-45c6-9025-0764a3867697.jpg",
      "https://zoomcar-assets.zoomcar.com/829938/HostCarImage/RackMultipart20241128-33-1c5q4nc77553533-7c4f-4f6f-92ed-dadf9ad82995.jpg",
    ],
    type: "Hatchback",
    price: 600000,
  },
  {
    id: 27,
    name: "Maruti Suzuki Ignis 2018",
    fuel: "Petrol",
    transmission: "Manual",
    rating: 4.0,
    description: "A quirky hatchback with a distinctive design and good performance.",
    images: [
      "https://zoomcar-assets.zoomcar.com/574296/HostCarImage/host_car_image_57429637055a39-0408-4b07-8f62-beb8f0c3cd1120240310-35-gn9kby.jpg",
      "https://zoomcar-assets.zoomcar.com/574297/HostCarImage/host_car_image_574297923a0f7f-fd72-4476-8383-43fda53bc5b120240310-30-1d10o1u.jpg",
      "https://zoomcar-assets.zoomcar.com/574298/HostCarImage/host_car_image_574298cc28a41d-a697-4e78-9f63-1ecc3567085920240310-33-9y3feh.jpg",
      "https://zoomcar-assets.zoomcar.com/574299/HostCarImage/host_car_image_5742999022da6b-d1a6-40c0-993d-28991a121e9d20240310-36-1x6wto1.jpg",
    ],
    type: "Hatchback",
    price: 500000,
  },
  {
    id: 28,
    name: "Tata Tiago 2021",
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.2,
    description: "A popular hatchback with a comfortable interior and great features.",
    images: [
      "https://zoomcar-assets.zoomcar.com/366435/HostCarImage/host_car_image_366435f245c299-ba03-49ae-b8d7-32fe7947ef4520231028-42-1ga0qx9.jpg",
      "https://zoomcar-assets.zoomcar.com/456834/HostCarImage/host_car_image_456834f9a9dae4-7ec3-4ff5-8752-51e3b485f43020231108-40-240ory.jpg",
      "https://zoomcar-assets.zoomcar.com/456829/HostCarImage/host_car_image_456829b08e2d05-3ccb-41b2-9021-a1f6537360b520231108-42-3a9yd1.jpg",
      "https://zoomcar-assets.zoomcar.com/371123/HostCarImage/host_car_image_3711231967c72e-8677-4871-8083-1d7896a68e1220230905-27-1j87lky.jpg",
    ],
    type: "Hatchback",
    price: 600000,
  },
  {
    id: 29,
    name: "Hyundai Grand i10 2016",
    fuel: "Petrol",
    transmission: "Manual",
    rating: 4.0,
    description: "A compact and practical hatchback with a smooth drive.",
    images: [
      "https://zoomcar-assets.zoomcar.com/18158/HostCarImage/open-uri20230130-16129-1tb12un5899df22-24c6-4b5e-a332-a87fc2deb714.jpg",
      "https://zoomcar-assets.zoomcar.com/18159/HostCarImage/open-uri20230130-16129-1j3n4lq7b76e59e-0f43-4566-a6ae-2cca01780805.jpg",
      "https://zoomcar-assets.zoomcar.com/18161/HostCarImage/open-uri20230130-16129-1ljsu7z5e97c5b7-0feb-4990-9438-292557750448.jpg",
      "https://zoomcar-assets.zoomcar.com/18165/HostCarImage/open-uri20230130-16129-1wcqoeh1b072b33-c4ad-4871-8d11-5fae925187e2.jpg",
    ],
    type: "Hatchback",
    price: 450000,
  },
  {
    id: 30,
    name: "Maruti Suzuki Celerio 2018",
    fuel: "Petrol",
    transmission: "Manual",
    rating: 4.1,
    description: "A small and efficient hatchback with great mileage and easy handling.",
    images: [
      "https://zoomcar-assets.zoomcar.com/808274/HostCarImage/RackMultipart20241105-40-3fhflva0d38e66-1d20-4006-b0c4-576c2db968ec.jpg",
      "https://zoomcar-assets.zoomcar.com/808278/HostCarImage/RackMultipart20241105-59-aggm4ddf07ff-72f9-4eee-8031-859819543d1d.jpg",
      "https://zoomcar-assets.zoomcar.com/808280/HostCarImage/RackMultipart20241105-38-f0uxjyfb7c4275-c2c5-462e-8130-5bb4351e015e.jpg",
      "https://zoomcar-assets.zoomcar.com/808281/HostCarImage/RackMultipart20241105-35-z1jd16f00eadbd-3fa8-4933-ad1b-02d993a53900.jpg",
    ],
    type: "Hatchback",
    price: 400000,
  },

  {
    id: 31,
    name: "Tata Tigor 2018",
    fuel: "Petrol",
    transmission: "Manual",
    rating: 4.0,
    description: "A compact sedan with a stylish design and comfortable ride.",
    images: [
      "https://zoomcar-assets.zoomcar.com/328304/HostCarImage/host_car_image_328304206c0bff-5ef8-4202-9fec-c298c231d8b520231118-51-srbl1r.jpg",
      "https://zoomcar-assets.zoomcar.com/328309/HostCarImage/host_car_image_328309e32ad4a5-b5ed-4b82-96e8-5d0c1a49c28720231118-40-vrsvpg.jpg",
      "https://zoomcar-assets.zoomcar.com/328308/HostCarImage/host_car_image_328308d2563742-70ad-445d-9ea0-3b3eb13050bd20231118-40-1dekkz3.jpg",
      "https://zoomcar-assets.zoomcar.com/328305/HostCarImage/host_car_image_328305a42229fd-3c43-427e-8172-63dd57e979c220230802-27-116b0ct.jpg",
    ],
    type: "Sedan",
    price: 500000,
  },
  {
    id: 32,
    name: "Maruti Suzuki S-Presso 2020",
    fuel: "Petrol",
    transmission: "Manual",
    rating: 4.1,
    description: "A small and efficient hatchback with a high driving position.",
    images: [
      "https://zoomcar-assets.zoomcar.com/470602/HostCarImage/host_car_image_470602a3f9ef53-f9d2-4aed-a0ba-a4dd6f32303f20231129-42-1vpm0bd.jpg",
      "https://zoomcar-assets.zoomcar.com/470603/HostCarImage/host_car_image_47060356c969ac-87f4-4199-82ca-9ea1791952af20231123-42-16y7jcm.jpg",
      "https://zoomcar-assets.zoomcar.com/470605/HostCarImage/host_car_image_4706055f720afc-0c4f-4010-85be-c7b249f3e51a20231123-49-1wyc1an.jpg",
      "https://zoomcar-assets.zoomcar.com/470606/HostCarImage/host_car_image_470606b265d87d-d6e0-4a35-b6b4-94ab6034ebf020231123-28-1obvtb2.jpg",
    ],
    type: "Hatchback",
    price: 400000,
  },
  {
    id: 33,
    name: "Hyundai Eon 2016",
    fuel: "Petrol",
    transmission: "Manual",
    rating: 4.0,
    description: "A compact and affordable hatchback with good fuel efficiency.",
    images: [
      "https://zoomcar-assets.zoomcar.com/713330/HostCarImage/host_car_image_713330fc8cea3d-d971-45dc-b04d-aa628fd10acc20240719-36-jco8gx.jpg",
      "https://zoomcar-assets.zoomcar.com/711427/HostCarImage/host_car_image_7114274fba4c73-c35a-4e69-8cbe-935bc1c6119e20240718-33-1dw3ku1.jpg",
      "https://zoomcar-assets.zoomcar.com/713331/HostCarImage/host_car_image_7133313011ab48-842a-4a4a-a996-776869a70a7820240719-33-1cwex3f.jpg",
      "https://zoomcar-assets.zoomcar.com/711448/HostCarImage/RackMultipart20240717-37-zansnu65d32f25-409c-477c-a1c4-8b37bd8e2796.jpg",
    ],
    type: "Hatchback",
    price: 300000,
  },
  {
    id: 34,
    name: "Honda BR-V 2017",
    fuel: "Petrol",
    transmission: "Manual",
    rating: 4.3,
    description: "A spacious SUV with a robust build and versatile seating.",
    images: [
      "https://zoomcar-assets.zoomcar.com/230975/HostCarImage/host_car_image_23097593a69e00-cbcc-4b88-83ad-498fa4d9fd3920230415-27-duews6.jpg",
      "https://zoomcar-assets.zoomcar.com/230976/HostCarImage/host_car_image_23097605bcb612-6f6b-44c2-8ae3-adb9760bf2e120230415-49-bjtfps.jpg",
      "https://zoomcar-assets.zoomcar.com/230977/HostCarImage/host_car_image_230977b192e774-02d8-4d65-96d3-1e1635c0deed20230415-44-1l8ja64.jpg",
      "https://zoomcar-assets.zoomcar.com/230978/HostCarImage/host_car_image_230978ccc785e0-afac-4e7c-900b-58831268fb2120230415-50-1wz5oij.jpg",
    ],
    type: "SUV",
    price: 750000,
  },
  {
    id: 35,
    name: "Maruti Suzuki Ertiga 2024",
    fuel: "Petrol",
    transmission: "Manual",
    rating: 4.5,
    description: "A family-friendly MPV with ample space and modern features.",
    images: [
      "https://zoomcar-assets.zoomcar.com/746274/HostCarImage/host_car_image_7462748f8cecde-1a85-4cb4-8f68-d0dda054cadb20240828-52-tutew3.jpg",
      "https://zoomcar-assets.zoomcar.com/745256/HostCarImage/host_car_image_745256d62a607c-595f-4d7f-b781-b8794912ba8320240827-31-1gjuht0.jpg",
      "https://zoomcar-assets.zoomcar.com/745251/HostCarImage/host_car_image_7452512975295b-108e-4567-9543-d95dfaf97f1a20240827-31-ydr7xt.jpg",
      "https://zoomcar-assets.zoomcar.com/745252/HostCarImage/host_car_image_745252ca305214-5869-4f91-a9da-27e8ed6d597920240827-31-39l833.jpg",
    ],
    type: "MPV",
    price: 1000000,
  },
  {
    id: 36,
    name: "Toyota Glanza 2022",
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.2,
    description: "A premium hatchback with a sleek design and advanced features.",
    images: [
      "https://zoomcar-assets.zoomcar.com/635576/HostCarImage/host_car_image_6355766bf28901-a205-4872-8079-99621ef1182520240513-33-14zwsuz.jpg",
      "https://zoomcar-assets.zoomcar.com/635568/HostCarImage/host_car_image_635568453b6ddc-d0c7-4042-8638-dfa829681b2620240513-33-i1s9ts.jpg",
      "https://zoomcar-assets.zoomcar.com/635570/HostCarImage/host_car_image_635570d6ba48c8-18f7-4002-9f7f-029e5997aef320240513-52-hy922g.jpg",
      "https://zoomcar-assets.zoomcar.com/635581/HostCarImage/host_car_image_635581eb0fbc0d-4a88-4d41-8e6f-179cbe3140e120240513-33-1j9lw2a.jpg",
    ],
    type: "Hatchback",
    price: 750000,
  },

  {
    id: 37,
    name: "Toyota Innova Crysta 2016",
    fuel: "Diesel",
    transmission: "Manual",
    rating: 4.5,
    description: "A reliable MPV with a robust build and excellent comfort.",
    images: [
      "https://images10.gaadi.com/usedcar_image/4244869/original/processed_ff6b8742c07d606c75e6a1c35dec2a11.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4244869/original/processed_d01eb788a611a85970a5290392e2f140.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4244869/original/fb4b2362409ecb0a0e3f65197ec58d72.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4244869/original/ee8052aff96e0c53bd7bd65cd2d7ed06.jpg?imwidth=640",
    ],
    type: "MPV",
    price: 900000,
  },
  {
    id: 38,
    name: "Hyundai Creta 2019",
    fuel: "Diesel",
    transmission: "Automatic",
    rating: 4.4,
    description: "A compact SUV with modern features and a strong performance.",
    images: [
      "https://images10.gaadi.com/usedcar_image/4248119/original/155f8f82a1ba9bc9551462114c0145fe.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4248119/original/processed_f6653a1382c006eba42050a3bde051cd.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4248119/original/processed_bf869480f4c1b1bc6eda1042f26998c2.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4248119/original/af721e1a1618d9f2a6c1d229a9153eed.jpg?imwidth=640",
    ],
    type: "SUV",
    price: 1050000,
  },
  {
    id: 39,
    name: "Honda City 2022",
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.6,
    description: "A premium sedan with a smooth ride and top-notch features.",
    images: [
      "https://images10.gaadi.com/usedcar_image/4186901/original/processed_bfb142243f3185a3c655ba676b4b637c.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4186901/original/e333ddaff51c41060524f5dbbf099df9.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4186901/original/processed_ab4d9cdeb2c0e1387320fb5943359a9a.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4186901/original/processed_27610d190944bb08799e6c3a1fbe8a89.jpg?imwidth=640",
    ],
    type: "Sedan",
    price: 1200000,
  },
  {
    id: 40,
    name: "Mahindra XUV500 2019",
    fuel: "Diesel",
    transmission: "Manual",
    rating: 4.3,
    description: "A powerful SUV with strong off-road capabilities and spacious interiors.",
    images: [
      "https://images10.gaadi.com/usedcar_image/4187072/original/processed_de3bb1ef244959c5af37a07d0fdef007.jpeg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4187072/original/processed_6cc40c219106675deeda98902e033db2.jpeg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4187072/original/processed_e39ebc51fe7bb7958f3397dfaa9e9676.jpeg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4187072/original/937c0bdb1f4056282b739e9ac7a842cf.jpeg?imwidth=640",
    ],
    type: "SUV",
    price: 1100000,
  },
  {
    id: 41,
    name: "Tata Nexon 2022",
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.5,
    description: "A stylish SUV with a strong performance and great safety features.",
    images: [
      "https://images10.gaadi.com/usedcar_image/4196094/original/processed_a02edc22c05d2a8beb6a5f18a43032e5.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4196094/original/675cb740b4935a2bff058c32d973de55.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4196094/original/processed_f5bd8aeeaca39ee3e3bd29766f01c1b9.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4196094/original/b63bbfffa8cbc2060b31c55452cbd434.jpg?imwidth=640",
    ],
    type: "SUV",
    price: 950000,
  },
  {
    id: 42,
    name: "Volvo S60 D5 2015",
    fuel: "Diesel",
    transmission: "Automatic",
    rating: 4.7,
    description: "A luxury sedan with a powerful engine and high-end features.",
    images: [
      "https://images10.gaadi.com/usedcar_image/4210621/original/processed_67fa85bca6dff6a03ba022d210ca7cc0.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4210621/original/processed_0e840be854574c1aac10d2821e7e6c61.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4210621/original/processed_9ba90becc21fe51540d66335f6512835.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4210621/original/processed_37989aa0647efe571c08e6248492668e.jpg?imwidth=640",
    ],
    type: "Sedan",
    price: 850000,
  },

  {
    id: 43,
    name: "Maruti Suzuki XL6 Zeta 2021",
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.3,
    description: "A premium MPV with a spacious interior and advanced features.",
    images: [
      "https://images10.gaadi.com/usedcar_image/4194622/original/processed_6b10d1683b84ff62ebf33fa0eb927a25.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4194622/original/428934038fa9a9e057eca443843dcf33.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4194622/original/processed_930b6b675c271406cc1cdb1a5af05d17.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4194622/original/b620b5e4e3dd19f20d2ce92bb1322a5f.jpg?imwidth=640",
    ],
    type: "MPV",
    price: 950000,
  },
  {
    id: 44,
    name: "Kia Seltos 2020",
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.5,
    description: "A stylish SUV with advanced safety features and a comfortable ride.",
    images: [
      "https://images10.gaadi.com/usedcar_image/4192217/original/processed_40031c3edd826fae4aab36ab34f49677.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4192217/original/processed_0a8dde9d7d9d91db0c0a5436b3a40223.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4192217/original/processed_b6007adabb0e985fcb6ea1131d62c5be.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4192217/original/processed_b95276aea2a70d221c79f24f9dbb395b.jpg?imwidth=640",
    ],
    type: "SUV",
    price: 1100000,
  },
  {
    id: 45,
    name: "Maruti Suzuki Vitara Brezza 2021",
    fuel: "Petrol",
    transmission: "Manual",
    rating: 4.2,
    description: "A compact SUV with excellent fuel efficiency and modern features.",
    images: [
      "https://images10.gaadi.com/usedcar_image/4204983/original/processed_5ac7166f02c59561a9c564282b5544ec.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4204983/original/processed_77298bc6215f7d2683e3514602656b87.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4204983/original/processed_46c95b166c9500b67940f1d194f33ca5.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4204983/original/processed_898ca2635a803432f413f84147a992bb.jpg?imwidth=640",
    ],
    type: "SUV",
    price: 800000,
  },
  {
    id: 46,
    name: "Audi A6 2011",
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.5,
    description: "A luxury sedan with a powerful engine and elegant design.",
    images: [
      "https://images10.gaadi.com/usedcar_image/4192845/original/processed_8b2712f139b7681aa32c928e3cd728a3.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4192845/original/8a6ef81af29a1d15f27f20fed08e350e.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4192845/original/processed_b25bbf68be5da9616eb8f209718033c9.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4192845/original/processed_7c92ce739721800b4dbfd7233ceeb729.jpg?imwidth=640",
    ],
    type: "Sedan",
    price: 1200000,
  },
  {
    id: 47,
    name: "Jeep Compass 2018",
    fuel: "Diesel",
    transmission: "Automatic",
    rating: 4.3,
    description: "A rugged SUV with excellent off-road capabilities and a sleek design.",
    images: [
      "https://images10.gaadi.com/usedcar_image/4194017/original/processed_e130aad481fc9910c6ce1c048f43a8b4.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4194017/original/processed_ebd69f9f109794215c0fcfe7a78f66bf.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4194017/original/processed_9679560d3874ab4d36db4abf207859a2.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4194017/original/processed_7b271e9911eeaced01fae74850e1e228.jpg?imwidth=640",
    ],
    type: "SUV",
    price: 1000000,
  },
  {
    id: 48,
    name: "Toyota Corolla Altis 2017",
    fuel: "Petrol",
    transmission: "Manual",
    rating: 4.4,
    description: "A reliable sedan with a comfortable ride and great fuel efficiency.",
    images: [
      "https://images10.gaadi.com/usedcar_image/4246085/original/6c1e69700488f3e7abd762260bf5e4be.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4246085/original/processed_8b7f8c15b67c98995b770b7c3046b4c8.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4246085/original/processed_501849046cfd2008db47550930d9a9ac.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4246085/original/processed_ca514d0d09048a360c1af9d2f6872798.jpg?imwidth=640",
    ],
    type: "Sedan",
    price: 850000,
  },
  {
    id: 49,
    name: "Toyota Urban Cruiser",
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.2,
    description: "A compact SUV with a stylish look and efficient performance.",
    images: [
      "https://images10.gaadi.com/usedcar_image/4152507/original/processed_8b67872ea1b9cdbd1d566412e497ba42.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4152507/original/f3455e1b315a08a699ee4cab23e0da34.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4152507/original/519b1031e2eccd1328085abd9b436cea.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4152507/original/0843af3b40e9965e6d81d6c10e101425.jpg?imwidth=640",
    ],
    type: "SUV",
    price: 800000,
  },
  {
    id: 50,
    name: "Hyundai I20 2022",
    fuel: "Diesel",
    transmission: "Manual",
    rating: 4.7,
    description: "A premium hatchback with great safety features and tech.",
    images: [
      "https://zoomcar-assets.zoomcar.com/447472/HostCarImage/host_car_image_44747214ba1aee-2694-4f42-8cbc-2ec1683c5c4720231101-41-65ph3.jpg",
      "https://zoomcar-assets.zoomcar.com/450103/HostCarImage/host_car_image_4501031e36c229-9c08-4014-9b59-b175344285e420231103-42-ns380r.jpg",
      "https://zoomcar-assets.zoomcar.com/450116/HostCarImage/host_car_image_450116950dfa3d-913c-4702-b1fc-04c19d9383ca20231103-29-agcco0.jpg",
      "https://zoomcar-assets.zoomcar.com/444746/HostCarImage/host_car_image_4447464e366d50-14c2-4d78-89eb-7b881a3e5f5d20231030-29-16ktopt.jpg",
    ],
    type: "Hatchback",
    price: 750000,
  },
  {
    id: 51,
    name: "Mahindra XUV300 2022",
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.4,
    description: "A compact SUV with excellent safety ratings and a powerful engine.",
    images: [
      "https://images10.gaadi.com/usedcar_image/4215026/original/processed_ce215f17186734d90f1caaba9998aa44.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4215026/original/processed_0e72d1d37260d9fa918c4d703a44b6bd.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4215026/original/processed_fcacab43757c254e462fa81b473c0ad8.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4215026/original/processed_f342a45c211760a5a2468121e5d6f65c.jpg?imwidth=640",
    ],
    type: "SUV",
    price: 1100000,
  },
  {
    id: 52,
    name: "Toyota Vellfire 2021",
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.6,
    description: "A luxurious MPV with top-tier comfort and advanced technology.",
    images: [
      "https://images10.gaadi.com/usedcar_image/4238099/original/processed_889abc16ec57d691c546e7341a739616.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4238099/original/processed_e5dd8261eb9173288d63df4f06cef0fc.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4238099/original/processed_78cf5b1f4cb0d732c9024d89244428fe.jpg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4238099/original/processed_b21f690135592d979abdaec2f5e7a8e5.jpg?imwidth=640",
    ],
    type: "MPV",
    price: 8500000,
  },
  {
    id: 53,
    name: "Mahindra Thar 2023",
    fuel: "Diesel",
    transmission: "Manual",
    rating: 4.7,
    description: "A rugged SUV with off-road capabilities and modern amenities.",
    images: [
      "https://images10.gaadi.com/usedcar_image/3985593/original/processed_dec23934e79f33b9045c9f2509e485ec.jpeg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/3985593/original/processed_a83971ccfaf34280687b2edb77b7261e.jpeg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/3985593/original/9bb6b2cc2ef87e7b8d5f60aa25cd6d7a.jpeg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/3985593/original/processed_874e63aac31a39c223005aa73fbe7be2.jpeg?imwidth=640",
    ],
    type: "SUV",
    price: 1500000,
  },
  {
    id: 54,
    name: "Toyota Fortuner 2020",
    fuel: "Diesel",
    transmission: "Automatic",
    rating: 4.6,
    description: "A powerful SUV with excellent off-road capabilities and a luxurious interior.",
    images: [
      "https://images10.gaadi.com/usedcar_image/4207199/original/13b432803f24b86ef90d9e1f8d4d0ddd.jpeg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4207199/original/processed_e486a232ff2447b7a3998d2531698744.jpeg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4207199/original/processed_54fe796001f2fb0519b1d32933160fab.jpeg?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4207199/original/processed_022fe3fba9131e6276b89e53e747dcd6.jpeg?imwidth=640",
    ],
    type: "SUV",
    price: 3000000,
  },
  {
    id: 55,
    name: "Mahindra Scorpio S10 2015",
    fuel: "Diesel",
    transmission: "Manual",
    rating: 4.2,
    description: "A robust SUV with a powerful engine and spacious interiors.",
    images: [
      "https://images10.gaadi.com/usedcar_image/4239292/original/processed_d4105a9390ec05dc6c5c2c0a88c9e2eb.png?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4239292/original/processed_cfd625b167aedd7b6d2914c59e70140c.png?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4239292/original/processed_371a576477f2f4ae8fa67a69899145a1.png?imwidth=640",
      "https://images10.gaadi.com/usedcar_image/4239292/original/73bc9fffa122aea371f40bff03c52e28.png?imwidth=640",
    ],
    type: "SUV",
    price: 700000,
  },
];


const page = () => {
  const [filters, setFilters] = useState({
    fuel: '',
    transmission: '',
    rating: '',
  });

  const [filteredCards, setFilteredCards] = useState(cards);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    let filtered = cards;

    if (filters.fuel) {
      filtered = filtered.filter((car) => car.fuel == filters.fuel);
    }

    if (filters.transmission) {
      filtered = filtered.filter((car) => car.transmission == filters.transmission);
    }

    if (filters.rating) {
      filtered = filtered.filter((car) => car.rating >= parseFloat(filters.rating));
    }

    setFilteredCards(filtered);
  };

  const resetFilters = () => {
    setFilters({
      fuel: '',
      transmission: '',
      rating: '',
    });
    setFilteredCards(cards); // Reset the filtered cards to the original list
  };

  return (
    <div className="flex">
      {/* Sidebar with filter options */}
      <div className="w-1/4 h-full bg-white p-4 border-r border-gray-300">
        <FilterSidebar
          resetFilters={resetFilters}
          filters={filters}
          onFilterChange={handleFilterChange}
          onApplyFilters={applyFilters}
        />
      </div>

      {/* Main content: showing filtered cards */}
      <div className="ml-1/4 w-3/4 p-4">
        <div className="h-[calc(100vh-20px)] overflow-y-auto">
          {filteredCards.length > 0 ? (
            filteredCards.map((car) => <GarageCarCard key={car.id} car={car} />)
          ) : (
            <p>No cars match the selected filters.</p>
          )}
        </div>
      </div>
    </div>


  );
};

export default page;
