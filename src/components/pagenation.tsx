// components/pagenation.tsx

import { ChevronFirst, ChevronLast } from "lucide-react";
import Link from "next/link";

import { FC } from "react";


type Props = {
  prevText?: string;
  prevUrl?: string;
  nextText?: string;
  nextUrl?: string;
};

const Pagenation: FC<Props> = ({ prevText, prevUrl, nextText, nextUrl }) => {
  return (
    <div className="flex justify-center items-center py-16">
      <ul className="container flex flex-row justify-between items-center gap-2 first-line max-w-5xl">
        {prevText && prevUrl ? (
          <li>
            <Link href={prevUrl} className="flex flex-row justify-end items-center gap-2">
            <ChevronFirst size={16} />
              <span>{prevText}</span>
            </Link>
          </li>
        ): (<div></div>)}
        {nextText && nextUrl ? (
          <li>
            <Link href={nextUrl} className="flex flex-row justify-end items-center gap-2">
              <span>{nextText}</span>
            <ChevronLast size={16} />
            </Link>
          </li>
        ): (<div></div>)}
      </ul>
    </div>
  );
};

export default Pagenation;
