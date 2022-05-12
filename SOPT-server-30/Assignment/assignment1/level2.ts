import { Member } from './interface/Member';
import { Dinner } from './interface/Dinner';

const dinner: Dinner = {
  member: [
    {
      name: "채정아",
      group: "ob",
    },
    {
      name: "김루희",
      group: "yb",
    },
    {
      name: "장서현",
      group: "yb",
    },
    {
      name: "이승헌",
      group: "ob",
    },
    {
      name: "남지윤",
      group: "ob",
    },
    {
      name: "공혁준",
      group: "yb",
    },
    {
      name: "김소령",
      group: "ob",
    },
    {
      name: "김희빈",
      group: "yb",
    },
    {
      name: "구건모",
      group: "yb",
    },
  ],
  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
  },
  organize(array) {
    let members = this.shuffle(array);
    console.log(
      `오늘의 저녁 식사 멤버는 ${members[0].name}, ${members[1].name}`
    );
  },
};

dinner.organize(dinner.member);