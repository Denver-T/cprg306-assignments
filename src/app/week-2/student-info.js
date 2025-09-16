"use client"
import React from "react"
import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <h1 className="font-mono text-white">Denver Timlick</h1>
      <h1 className="font-mono text-white"> GitHub Repo: <Link className="font-mono text-white"
      href="https://github.com/Denver-T/cprg306-assignments.git">
        View Repo
      </Link></h1>
    </div>
  );
}