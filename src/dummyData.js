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

export const sections = [
  { value: "Select Section" },
  { value: "A" },
  { value: "B" },
  { value: "C" },
];
export const fileTypes = [
  { value: "Select Type of File" },
  { value: "doc" },
  { value: "pdf" },
];

export const schoolClasses = [
  { value: "Select Class" },
  { value: "2" },
  { value: "3" },
  { value: "4" },
  { value: "5" },
];

export const subjects = [
  { value: "Select Subject" },
  { value: "Math" },
  { value: "Science" },
  { value: "English" },
  { value: "Hindi" },
];

export const studentSubjects = ["Math", "Science", "English", "Hindi"];

export const teacherClass = ["2", "4", "8"];

export const departments = [
  { value: "Select Department" },
  { value: "Department-1" },
  { value: "Department-2" },
];
