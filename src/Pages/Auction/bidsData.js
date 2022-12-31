import b1 from "../../images/auction/topa1.png";
import b2 from "../../images/auction/topa2.png";

export const bids = [
  {
    id: "b1",
    name: "out of the box",
    creator: "dan murray",
    date: {
      day: 12,
      month: 8,
      year: 22,
    },
    bid: {
      current: {
        eth: 0.987,
      },
      highest: {
        eth: 0.57,
      },
    },
    url: b1,
  },
  {
    id: "b2",
    name: "falling apart",
    creator: "jacob banks",
    date: {
      day: 24,
      month: 9,
      year: 99,
    },
    bid: {
      current: {
        eth: 1.38,
      },
      highest: {
        eth: 0.34,
      },
    },
    url: b2,
  },
];
