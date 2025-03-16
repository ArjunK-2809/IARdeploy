import './Students.css'; 
// import { useRef, useState, useEffect } from "react";

import image13 from './assets/slide13.jpg';
import image14 from './assets/slide14.jpg';
import image15 from './assets/slide15.jpg';
import image16 from './assets/slide16.jpg';
import image17 from './assets/slide17.jpg';
import image18 from './assets/slide18.jpg';

function Students() {
  const students = [
    {
      name: "Tatenda Darlington Nhika",
      country: "Zimbabve",
      program: "MTech in Power electronics and power systems.",
      description: "My name is Tatenda Darlington Nhika, and I’m an M.Tech student in Power Electronics and Power Systems from Zimbabwe. I’m thrilled to share my experience at IIT Palakkad as part of my journey.My time at IIT Palakkad has been nothing short of extraordinary. While the academic environment here is rigorous and intellectually stimulating, what truly sets this institute apart is its emphasis on holistic development. The faculty are not only experts in their fields but also deeply invested in the well-being of their students. My faculty advisors have been incredibly supportive, always checking in to ensure I’m doing well both academically and personally.Beyond academics, IIT Palakkad offers a vibrant campus life. I recently registered to participate in the General Championships (GC), where students can engage in a wide range of activities—from field games like soccer and athletics to intellectual games like chess. This diversity of opportunities ensures that every student can find something they’re passionate about.The cultural clubs and events have also been a highlight, allowing me to connect with students from diverse backgrounds and learn about different traditions. The campus itself is breathtaking. The hilltop location offers stunning views of the surrounding mountains, and it’s the perfect spot to unwind, get some fresh air, and recharge. Nearby attractions like the Malampuzha Dam provide a refreshing escape, whether it’s for a quiet walk or a fun day out with friends.What I truly appreciate is how IIT Palakkad encourages students to balance academics with extracurricular activities. From tracking events to baking and pottery workshops, there are plenty of opportunities to explore new hobbies and unwind. These initiatives have helped me develop not just academically but also personally, improving my communication skills and cultural awareness.The International Relations team deserves special mention for their unwavering support. They are always up to the task, ensuring that everything runs smoothly for international students. From helping us settle in to organizing cultural exchange programs, they go above and beyond to make us feel at home.Mental health is also a priority at IIT Palakkad. The institute has a dedicated counselling team(Mitra) ready to support students whenever needed. Knowing that there’s a safe space to talk about challenges and seek guidance has been incredibly reassuring.IIT Palakkad is more than just an institute of academic excellence—it’s a place that nurtures well-rounded individuals. It equips students with the skills to excel in their studies while fostering a sense of community, creativity, and balance.I would highly recommend IIT Palakkad to any student looking for a transformative educational experience. It’s a place where you can grow, explore, and create memories that last a lifetime.Thank you, IIT Palakkad, for this incredible journey. I’m proud to be part of this community and excited to see how it continues to inspire future students.",
      image: image13,
    },
    {
      name: "Abigairl Nyasha Chigwededza	",
      country: "Zimbabve",
      program: "M Tech in	Data Science	",
      description: "",
      image: "",
    },
    {
      name: "Ropa",
      country: "Zimbabve",
      program: "MTech in Data Science",
      description: "My time at IIT Palakkad has been an incredible experience. The academics are rigorous, with supportive faculty who encourage critical thinking and innovation. The campus life is vibrant, and the hostel facilities are excellent, providing a comfortable and welcoming environment for students. What truly makes IIT Palakkad special is its collaborative environment—you are constantly learning, growing, and engaging with brilliant minds. There are also many great student clubs to join, offering opportunities to explore new interests, develop skills, and connect with others.I highly recommend IIT Palakkad to any international student looking for a world-class education and an enriching campus experience.",
      image: image14,
    },
    {
      name: "Samuel",
      country: "Zimbabve",
      program: "Mtech in Computer Science and Mathematics",
      description: "",
      image: image15,
    },
    {
      name: "Kritagya Koirala",
      country: "Nepal",
      program: "B Tech in Civil Engineering",
      description: "IIT Palakkad has been incredibly welcoming since the day I arrived. My time here has been an enriching journey, instilling new values and broadening my perspective. The diversity on campus has given me the opportunity to interact with people from various backgrounds, helping me develop a more global outlook. As an exchange student, I have truly experienced the essence of globalization, meeting individuals from different parts of the world and learning from their experiences. The faculty at IIT Palakkad are highly enthusiastic and dedicated, making the teaching-learning process engaging and effective. The scenic beauty of the campus adds to the overall experience—nestled among towering mountains, the surroundings serve as a reminder of resilience and excellence which are instilled in students. The supportive and motivating community here plays a significant role in the personal and academic growth of students. IIT Palakkad not only focuses on academic excellence but also nurtures overall development, shaping students into well-rounded individuals. I strongly recommend this institution to anyone looking for a transformative educational experience.",
      image: image16,
    },
    {
      name: "Sushan Adhikari",
      country: "Nepal",
      program: "BTech CSE",
      description: "",
      image: image18,
    },
    {
      name: "Dikshant Bikram Thapa",
      country: "Nepal",
      program: "B.Tech_Semester Exchange CSE",
      description: "",
      image: image17,
    },
    {
      name: "Dikshya Lamichhane	",
      country: "Nepal",
      program: "B.Tech_Semester Exchange CSE",
      description: "",
      image: "",
    },
    {
      name: "Mandira Sharma",
      country: "Nepal",
      program: "B.Tech_Semester Exchange CSE",
      description: "",
      image: "",
    },
    {
      name: "Niloy Das",
      country: "Bangladeshi",
      program: "B.Tech_Semester Exchange CE",
      description: "",
      image: "",
    },
  ];

  return (
    <div className="students-container">
      {students.map((student, index) => (
        <div className="student-card" key={index}>
          <img src={student.image} alt={student.name} className="student-image" />
          <div className="student-info">
            <h3 className="student-name">{student.name}</h3>
            <p className="student-country"><strong>Country:</strong> {student.country}</p>
            <p className="student-program"><strong>Program:</strong> {student.program}</p>
            <p className="student-description">{student.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Students;
