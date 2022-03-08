export const menus = [
  { title: "User Profile", url: "/user-profile" },
  { title: "Attendance", url: "/attendance" },
  { title: "Library", url: "/library" },
  { title: "Assessment", url: "/assessment" },
  { title: "Live Class", url: "/live-class" },
  { title: "Discussions Forums", url: "/discussions-forum" },
  { title: "Calendar", url: "/calendar" },
  { title: "Reports", url: "/reports" },
  { title: "Fee Collection", url: "/fee-collection" },
  { title: "Domuments", url: "/documents" },
  { title: "Notices", url: "/notices" },
];

export const subjects = ["Science", "Math"];
export const classesList = [9, 10];
export const teachers = [
  { id: 1, name: "Teacher 1" },
  { id: 2, name: "Teacher 2" },
];

export const assesments = [
  {
    subject: "Science",
    class: 9,
    teacher: { id: 2, name: "Teacher 2" },
    dueDate: "2022-02-16",
    assessmentUrl: "/",
  },
  {
    subject: "Math",
    class: 9,
    teacher: { id: 2, name: "Teacher 2" },
    dueDate: "2022-02-17",
    assessmentUrl: "/",
  },
  {
    subject: "Science",
    class: 10,
    teacher: { id: 1, name: "Teacher 1" },
    dueDate: "2022-02-15",
    assessmentUrl: "/",
  },
  {
    subject: "Math",
    class: 10,
    teacher: { id: 1, name: "Teacher 1" },
    dueDate: "2022-02-18",
    assessmentUrl: "/",
  },
];
export const completedAssessmentsdata = [
  {
    subject: "Science",
    topic: "Newton's law",

    date: "2022-02-15",
    reportUrl: "/",
  },
  {
    subject: "Math",
    topic: "Newton's law",

    date: "2022-02-16",
    reportUrl: "/",
  },
  {
    subject: "English",
    topic: "Newton's law",

    date: "2022-02-19",
    reportUrl: "/",
  },
  {
    subject: "Science",
    topic: "Newton's law",

    date: "2022-02-16",
    reportUrl: "/",
  },
  {
    subject: "Math",
    topic: "Algebra",

    date: "2022-02-16",
    reportUrl: "/",
  },
];

export const dueAssessments = [
  {
    subject: "Science",
    class: 10,
    section: "B",
    teacher: "Teacher1",
    dueDate: "27/9/21",
    details: "Page",
  },
  {
    subject: "Math",
    class: 9,
    section: "B",
    teacher: "Teacher1",
    dueDate: "28/9/21",
    details: "Page",
  },
  {
    subject: "English",
    class: 9,
    section: "B",
    teacher: "Teacher1",
    dueDate: "28/9/21",
    details: "Page",
  },
  {
    subject: "Math",
    class: 10,
    section: "A",
    teacher: "Teacher1",
    dueDate: "28/9/21",
    details: "Page",
  },
];
export const sections = ["A", "B", "C"];
export const fileTypes = ["PDF", "JPG", "WORD", "PPTX"];
