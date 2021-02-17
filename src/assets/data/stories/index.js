import faker from 'faker'
import { v4 as uuid } from 'uuid'

export const stories = [
  {
    id: uuid(),
    avatar: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/136002835/original/3a0aedc0da6ed57db890ede7da4198e603626f93/ask-a-random-person-any-question-or-talk-with-them-about-any-topic.jpg',
    story: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg`,
    username: faker.name.findName(),
  },
  {
    id: uuid(),
    avatar: 'https://static.skillshare.com/uploads/project/4c49440fec9b45c5464596033e0a23d7/ad168d89',
    story: `https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg`,
    username: faker.name.findName(),
  },
  {
    id: uuid(),
    avatar: 'https://i1.wp.com/metro.co.uk/wp-content/uploads/2015/07/daniel.jpeg?quality=90&strip=all&zoom=1&resize=540%2C540&ssl=1',
    story: `https://i.ytimg.com/vi/p7TDpx0hsn4/maxresdefault.jpg`,
    username: faker.name.findName(),
  },
  {
    id: uuid(),
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFxgLN_duRguBt0jymAuct5IuOn3Q8f0Fzw&usqp=CAU',
    story: `https://www.hackstrive.com/wp-content/uploads/2020/01/poem1.jpg`,
    username: faker.name.findName(),
  },
  {
    id: uuid(),
    avatar: 'https://cdn.vox-cdn.com/thumbor/oJMKuH5J5c7Z6SrmcqQLKNVp-m8=/0x0:3537x2574/1200x800/filters:focal(1486x1005:2050x1569)/cdn.vox-cdn.com/uploads/chorus_image/image/64610282/9675151831.0.jpeg',
    story: `https://static.wixstatic.com/media/60e4cd_46db9ed07a27471bba3b072699c5b3dc~mv2.jpg/v1/fill/w_1200,h_600,al_c,q_90/60e4cd_46db9ed07a27471bba3b072699c5b3dc~mv2.webp`,
    username: 'faker.name.findName()',
  },
  {
    id: uuid(),
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcWummSnHwTDURhLFpTwYdn_pUJdzvE3KYdQ&usqp=CAU',
    story: `https://cdna.artstation.com/p/assets/images/images/012/499/584/large/zmo-alien-q04-rss4.jpg?1535097828`,
    username: 'faker.name.findName()',
  },
  {
    id: uuid(),
    avatar: 'https://i1.wp.com/newsofmonth.com/wp-content/uploads/2018/11/gang.jpg?fit=960%2C720&ssl=1',
    story: `https://d2n9ha3hrkss16.cloudfront.net/uploads/stage/stage_image/50568/optimized_large_thumb_2051-cartoonish-instagram-stories.jpg`,
    username: faker.name.findName(),
  },
  {
    id: uuid(),
    avatar: 'https://pbs.twimg.com/profile_images/950815117448499200/XVFH6rjh_400x400.jpg',
    story: `https://i.pinimg.com/originals/b5/c0/4b/b5c04bbafeecfb94cfebb9112e9ea5d1.jpg`,
    username: faker.name.findName(),
  },
  {
    id: uuid(),
    avatar: 'https://qph.fs.quoracdn.net/main-qimg-72e4ffeb8811408d3ddc7939d595031c.webp',
    story: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7UME_yAnbsgT2-Q6HO7WzQBw7w8cGYMci7w&usqp=CAU`,
    username: faker.name.findName(),
  },
  {
    id: uuid(),
    avatar: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/6e/01/ac/blue-coyote-grill.jpg',
    story: `https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png`,
    username: faker.name.findName(),
  },
]