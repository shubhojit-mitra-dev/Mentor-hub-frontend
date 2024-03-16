"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Lamp() {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <h2>
          Find Mentors <br /> the right way
        </h2>
        <Button variant="secondary" className="mt-4 tracking-wider" asChild>
          <Link href="/register">Join us</Link>
        </Button>
      </motion.div>
    </LampContainer>
  );
}
