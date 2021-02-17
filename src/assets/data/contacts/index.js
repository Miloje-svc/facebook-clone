import faker from 'faker'
import { v4 as uuid } from 'uuid'

export const contacts = [
  {
    id: uuid(),
    name: faker.name.findName(),
    img: 'https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg',
  },
  {
    id: uuid(),
    name: faker.name.findName(),
    img: 'https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg',
  },
  {
    id: uuid(),
    name: faker.name.findName(),
    img: 'https://www.westernunion.com/content/dam/wu/rmt/233107497_WU.com_LP_US_Hero_Bill_Pay_640x500_1.jpg',
  },
  {
    id: uuid(),
    name: faker.name.findName(),
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnOsCHMGQdEwPuodElRq34DKqCBVGmtfRFzA&usqp=CAU',
  },
  {
    id: uuid(),
    name: faker.name.findName(),
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4a6vo1kElwS4A6xZd0mA9X5yhIPJa_BCtng&usqp=CAU',
  },
]