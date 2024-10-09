"use client";

import React from "react";
import { InfiniteMovingCards } from "./moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden ">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}






// const testimonials = [
//   {
//     quote:
//       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//     name: "Charles Dickens",
//     title: "A Tale of Two Cities",
//   },
//   {
//     quote:
//       "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
//     name: "William Shakespeare",
//     title: "Hamlet",
//   },
//   {
//     quote: "All that we see or seem is but a dream within a dream.",
//     name: "Edgar Allan Poe",
//     title: "A Dream Within a Dream",
//   },
//   {
//     quote:
//       "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
//     name: "Jane Austen",
//     title: "Pride and Prejudice",
//   },
//   {
//     quote:
//       "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
//     name: "Herman Melville",
//     title: "Moby-Dick",
//   },
// ];





// const testimonials = [
//   {
//     quote:
//       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//     name: "Charles Dickens",
//     title: "A Tale of Two Cities",
//     link: "https://example.com/tale-of-two-cities",
//   },
//   {
//     quote:
//       "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
//     name: "William Shakespeare",
//     title: "Hamlet",
//     link: "https://example.com/hamlet",
//   },
//   {
//     quote: "All that we see or seem is but a dream within a dream.",
//     name: "Edgar Allan Poe",
//     title: "A Dream Within a Dream",
//     link: "https://example.com/dream-within-a-dream",
//   },
//   {
//     quote:
//       "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
//     name: "Jane Austen",
//     title: "Pride and Prejudice",
//     link: "https://example.com/pride-and-prejudice",
//   },
//   {
//     quote:
//       "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
//     name: "Herman Melville",
//     title: "Moby-Dick",
//     link: "https://example.com/moby-dick",
//   },
// ];




const testimonials = [
  {
    quote:
      "Cultivation of mind should be the ultimate aim of human existence.",
    name: "Dr. Babasaheb Ambedkar",
    title: "On Education",
    link: "https://example.com/ambedkar-education",
  },
  {
    quote:
      "I measure the progress of a community by the degree of progress which women have achieved.",
    name: "Dr. Babasaheb Ambedkar",
    title: "On Social Justice",
    link: "https://example.com/ambedkar-social-justice",
  },
  {
    quote:
      "Democracy is not merely a form of government. It is primarily a mode of associated living.",
    name: "Dr. Babasaheb Ambedkar",
    title: "On Democracy",
    link: "https://example.com/ambedkar-democracy",
  },
  {
    quote:
      "Life should be great rather than long.",
    name: "Dr. Babasaheb Ambedkar",
    title: "On Life",
    link: "https://example.com/ambedkar-life",
  },
  {
    quote:
      "Arise, awake, and stop not till the goal is reached.",
    name: "Swami Vivekananda",
    title: "On Courage",
    link: "https://example.com/vivekananda-courage",
  },
  {
    quote:
      "You cannot believe in God until you believe in yourself.",
    name: "Swami Vivekananda",
    title: "On Strength",
    link: "https://example.com/vivekananda-strength",
  },
  {
    quote:
      "Take risks in your life. If you win, you can lead; if you lose, you can guide.",
    name: "Swami Vivekananda",
    title: "On Risk and Leadership",
    link: "https://example.com/vivekananda-risk",
  },
  {
    quote:
      "In a day, when you don't come across any problems—you can be sure that you are traveling on a wrong path.",
    name: "Swami Vivekananda",
    title: "On Challenges",
    link: "https://example.com/vivekananda-challenges",
  },
  {
    quote:
      "All differences in this world are of degree, and not of kind, because oneness is the secret of everything.",
    name: "Swami Vivekananda",
    title: "On Unity",
    link: "https://example.com/vivekananda-unity",
  },
];


