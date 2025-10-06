"use client"
import React from "react"
import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <h2 className="font-mono text-white">Denver Timlick</h2>
      <h2 className="font-mono text-white"> GitHub Repo: <Link className="font-mono text-white"
      href="https://github.com/Denver-T/cprg306-assignments.git">
        View Repo
      </Link></h2>
    </div>
  );
}