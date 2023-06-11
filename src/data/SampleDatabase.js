//This is just a sample database para sayo yieh
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";

const sampleDatabase = [
  {
    ADMIN: "Canada",
    population: 100,
    users: [
      {
        userName: "Patel",
        userCoordinates: [53.5461, -113.4938],
        pictureSrc: image1,
      },
      {
        userName: "Priya Sharma",
        userCoordinates: [45.4215, -75.6982],
        pictureSrc: image2,
      },
      {
        userName: "Anaya Kapoor",
        userCoordinates: [49.2827, -123.1207],
        pictureSrc: image3,
      },
      {
        userName: "Akshara Mishra",
        userCoordinates: [53.5444, -113.4909],
        pictureSrc: image4,
      },
    ],
  },
  {
    ADMIN: "China",
    population: 1400000000,
    users: [
      {
        userName: "Aarav Gupta",
        userCoordinates: [22.3964, 113.975],
        pictureSrc: image5,
      },
    ],
  },
  {
    ADMIN: "India",
    population: 1003,
    users: [
      {
        userName: "Nisha Singh",
        userCoordinates: [8.0883, 77.5385],
        pictureSrc: image5,
      },
      {
        userName: "Siddharth Verma",
        userCoordinates: [8.0859, 77.4749],
        pictureSrc: image5,
      },
    ],
  },
];

export default sampleDatabase;
