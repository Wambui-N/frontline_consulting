import React from "react";
import Link from "next/link";
import { ArrowProps } from "../../types";

const Arrow = ({ href, Link_text }: ArrowProps) => {
  return (
    <div className="flex flex-row">
      <Link
          className="px-[30px] py-[4px] border-[1px] text-black hover:text-white border-black/75 hover:border-transparent hover:bg-orange rounded-full"
          href={href}
        >
          {Link_text}
        </Link>
    </div>
  );
};

export default Arrow;
