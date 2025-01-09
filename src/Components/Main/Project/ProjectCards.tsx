"use client";

import React from "react";
import { InfiniteMovingCards } from "./moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden ">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}


const testimonials = [
  {
    id: 1,
    quote: "Cultivation of mind should be the ultimate aim of human existence.",
    name: "Dr. Babasaheb Ambedkar",
    title: "On Education",
    link: "https://example.com/ambedkar-education",
  },
  {
    id: 2,
    quote:
      "I measure the progress of a community by the degree of progress which women have achieved.",
    name: "Dr. Babasaheb Ambedkar",
    title: "On Social Justice",
    link: "https://example.com/ambedkar-social-justice",
  },
  {
    id: 3,
    quote:
      "Democracy is not merely a form of government. It is primarily a mode of associated living.",
    name: "Dr. Babasaheb Ambedkar",
    title: "On Democracy",
    link: "https://example.com/ambedkar-democracy",
  },
  {
    id: 4,
    quote: "Life should be great rather than long.",
    name: "Dr. Babasaheb Ambedkar",
    title: "On Life",
    link: "https://example.com/ambedkar-life",
  },
  {
    id: 5,
    quote: "Arise, awake, and stop not till the goal is reached.",
    name: "Swami Vivekananda",
    title: "On Courage",
    link: "https://example.com/vivekananda-courage",
  },
  {
    id: 6,
    quote: "You cannot believe in God until you believe in yourself.",
    name: "Swami Vivekananda",
    title: "On Strength",
    link: "https://example.com/vivekananda-strength",
  },
  {
    id: 7,
    quote:
      "Take risks in your life. If you win, you can lead; if you lose, you can guide.",
    name: "Swami Vivekananda",
    title: "On Risk and Leadership",
    link: "https://example.com/vivekananda-risk",
  },
  {
    id: 8,
    quote:
      "In a day, when you don't come across any problems—you can be sure that you are traveling on a wrong path.",
    name: "Swami Vivekananda",
    title: "On Challenges",
    link: "https://example.com/vivekananda-challenges",
  },
  {
    id: 9,
    quote:
      "All differences in this world are of degree, and not of kind, because oneness is the secret of everything.",
    name: "Swami Vivekananda",
    title: "On Unity",
    link: "https://example.com/vivekananda-unity",
  },
];
