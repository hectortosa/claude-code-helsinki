"use client";

interface TreeConfig {
  position: number; // pixel position from left
  height: number;
  mirrored?: boolean;
}

// Fixed container width - trees are positioned in pixels within this
const CONTAINER_WIDTH = 2400;

// Generate multiple layers of trees for a dense forest effect
function generateTrees(): TreeConfig[] {
  const trees: TreeConfig[] = [];

  // Back layer - tall trees, spaced every 30px
  for (let i = 0; i < CONTAINER_WIDTH; i += 30) {
    trees.push({
      position: i,
      height: 140 + Math.round(Math.sin(i * 0.05) * 50),
      mirrored: (i / 30) % 2 === 0,
    });
  }

  // Mid-back layer - offset by 15px
  for (let i = 15; i < CONTAINER_WIDTH; i += 30) {
    trees.push({
      position: i,
      height: 120 + Math.round(Math.sin(i * 0.07) * 35),
      mirrored: (i / 30) % 2 === 1,
    });
  }

  // Mid layer - every 25px, different offset
  for (let i = 8; i < CONTAINER_WIDTH; i += 25) {
    trees.push({
      position: i,
      height: 100 + Math.round(Math.sin(i * 0.09) * 25),
      mirrored: (i / 25) % 3 === 0,
    });
  }

  // Front layer - shorter trees, every 20px
  for (let i = 5; i < CONTAINER_WIDTH; i += 20) {
    trees.push({
      position: i,
      height: 75 + Math.round(Math.sin(i * 0.11) * 20),
      mirrored: (i / 20) % 2 === 1,
    });
  }

  // Extra fill layer - very dense, every 18px
  for (let i = 12; i < CONTAINER_WIDTH; i += 18) {
    trees.push({
      position: i,
      height: 60 + Math.round(Math.sin(i * 0.13) * 15),
      mirrored: (i / 18) % 2 === 0,
    });
  }

  return trees;
}

const trees = generateTrees();

export function ForestDivider() {
  // How much of the tree tips should show above the solid bar
  const visibleTipHeight = 60;

  return (
    <div
      className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden"
      style={{ height: `${visibleTipHeight}px` }}
    >
      {/* Fixed-width container centered, overflows on sides */}
      <div
        className="absolute bottom-0"
        style={{
          width: `${CONTAINER_WIDTH}px`,
          left: "50%",
          transform: "translateX(-50%)",
          height: `${visibleTipHeight}px`,
        }}
      >
        {/* Light mode trees */}
        {trees.map((tree, index) => (
          <div
            key={index}
            className="absolute dark:hidden"
            style={{
              left: `${tree.position}px`,
              bottom: `-${tree.height - visibleTipHeight}px`,
              height: `${tree.height}px`,
              transform: tree.mirrored ? "scaleX(-1)" : undefined,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/pine-tree.svg"
              alt=""
              className="h-full w-auto"
              style={{
                height: `${tree.height}px`,
                filter:
                  "brightness(0) saturate(100%) invert(97%) sepia(5%) saturate(300%) hue-rotate(10deg) brightness(98%)",
              }}
            />
          </div>
        ))}

        {/* Dark mode trees */}
        {trees.map((tree, index) => (
          <div
            key={`dark-${index}`}
            className="absolute hidden dark:block"
            style={{
              left: `${tree.position}px`,
              bottom: `-${tree.height - visibleTipHeight}px`,
              height: `${tree.height}px`,
              transform: tree.mirrored ? "scaleX(-1)" : undefined,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/pine-tree.svg"
              alt=""
              className="h-full w-auto"
              style={{
                height: `${tree.height}px`,
                filter:
                  "brightness(0) saturate(100%) invert(5%) sepia(5%) saturate(100%) hue-rotate(180deg) brightness(100%)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
