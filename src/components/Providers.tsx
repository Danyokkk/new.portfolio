"use client";

import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return <SmoothScrollProvider>{children}</SmoothScrollProvider>;
}
