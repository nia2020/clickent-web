"use client";

import { SceneVisual, type SceneVariant } from "./visuals/SceneVisual";

export function HeroVisual({ variant = "browser" }: { variant?: SceneVariant }) {
  return <SceneVisual variant={variant} size="lg" />;
}
