export interface StudentReview {
  id: string;
  name: string;
  origin?: string;
  role: string;
  isDirectQuote: boolean;
  content: string;
  focusArea: string;
}

export const STUDENT_REVIEWS: StudentReview[] = [
  {
    id: "sachin-prajapati",
    name: "Sachin Prajapati",
    origin: "Bareilly",
    role: "Student",
    isDirectQuote: true,
    content: "Best institute in Bareilly.",
    focusArea: "Overall Training Quality",
  },
  {
    id: "mohd-tohid",
    name: "Mohd Tohid",
    origin: "Chandausi",
    role: "Student",
    isDirectQuote: false,
    content:
      "Feedback Summary: Shared a positive learning experience highlighting practical work, step-by-step training, and dedicated doubt-clearing support throughout the course.",
    focusArea: "Practical Work & Doubt Clearing",
  },
  {
    id: "anuj-yadav",
    name: "Anuj Yadav",
    origin: "Jayatipur",
    role: "Student",
    isDirectQuote: false,
    content:
      "Feedback Summary: Highlighted live demonstration classes on actual mobile phones and clear practical explanations of circuit faults.",
    focusArea: "Live Demonstrations",
  },
  {
    id: "vansh-gupta",
    name: "Vansh Gupta",
    origin: "Faridpur",
    role: "Student",
    isDirectQuote: false,
    content:
      "Feedback Summary: Appreciated the beginner-friendly teaching approach and structured, step-by-step practical learning sessions.",
    focusArea: "Beginner-Friendly Teaching",
  },
  {
    id: "aman-sharma",
    name: "Aman Sharma",
    origin: "Tilhar",
    role: "Student",
    isDirectQuote: false,
    content:
      "Feedback Summary: Commended hands-on practical work, instructor guidance, and the direct availability of laboratory training instruments.",
    focusArea: "Laboratory Equipment & Guidance",
  },
  {
    id: "danish-ahmed",
    name: "Danish Ahmed",
    origin: "Bareilly",
    role: "Course Graduate",
    isDirectQuote: false,
    content:
      "Feedback Summary: Positively recommended the mobile repairing course for anyone looking to build practical skills in phone hardware repair.",
    focusArea: "Course Recommendation",
  },
];
