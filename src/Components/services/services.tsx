import React from "react";
import Card from "../../YIEUI/services/Card";
import "./services.css";

function services() {
  // Heading
  var heading = "Services we offer";

  //Heading in card
  var cardHeading1 = "Online Lectures";
  var cardHeading2 = "Certified Instructors";
  var cardHeading3 = "Exams &Grades";
  var cardHeading4 = "Course certificate";
  var cardHeading5 = "Attendance & Timetable";
  var cardHeading6 = "Discussion Forums";

  //Discription in card
  var cardParagraph1 =
    "The lecture videos are breif and engaging and doesn’t exceed 20 minutes.";
  var cardParagraph2 =
    "Instructors are here to make you learn every concept  to ensure deep understanding.";
  var cardParagraph3 =
    "Online examination mode with report card, instantly shared with parents and students.";
  var cardParagraph4 =
    "After completing a course, you’ll be eligible to receive a E-Course Certificate for a small fee.";
  var cardParagraph5 =
    "Easily mark the attendance and create an error-free timetable.";
  var cardParagraph6 =
    "The LMS comes equipped with discussion forum to clear every doubt for effective learning.";

  return (
    <div className="services">
      <h1>{heading}</h1>
      <div className="cards">
        <Card cardHeading={cardHeading1} cardParagraph={cardParagraph1} />
        <Card cardHeading={cardHeading2} cardParagraph={cardParagraph2} />
        <Card cardHeading={cardHeading3} cardParagraph={cardParagraph3} />
        <Card cardHeading={cardHeading4} cardParagraph={cardParagraph4} />
        <Card cardHeading={cardHeading5} cardParagraph={cardParagraph5} />
        <Card cardHeading={cardHeading6} cardParagraph={cardParagraph6} />
      </div>
    </div>
  );
}

export default services;
