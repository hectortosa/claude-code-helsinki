"use client";

interface TreeConfig {
  position: number;
  height: number;
  mirrored?: boolean;
}

const CONTAINER_WIDTH = 2400;

function generateTrees(): TreeConfig[] {
  const trees: TreeConfig[] = [];

  for (let i = 0; i < CONTAINER_WIDTH; i += 30) {
    trees.push({
      position: i,
      height: 140 + Math.round(Math.sin(i * 0.05) * 50),
      mirrored: (i / 30) % 2 === 0,
    });
  }
  for (let i = 15; i < CONTAINER_WIDTH; i += 30) {
    trees.push({
      position: i,
      height: 120 + Math.round(Math.sin(i * 0.07) * 35),
      mirrored: (i / 30) % 2 === 1,
    });
  }
  for (let i = 8; i < CONTAINER_WIDTH; i += 25) {
    trees.push({
      position: i,
      height: 100 + Math.round(Math.sin(i * 0.09) * 25),
      mirrored: (i / 25) % 3 === 0,
    });
  }
  for (let i = 5; i < CONTAINER_WIDTH; i += 20) {
    trees.push({
      position: i,
      height: 75 + Math.round(Math.sin(i * 0.11) * 20),
      mirrored: (i / 20) % 2 === 1,
    });
  }
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

/**
 * Pine forest tinted for the summer theme: deep forest green by day,
 * solid silhouette against the amber horizon at night.
 */
export function SummerForestDivider() {
  const visibleTipHeight = 60;

  return (
    <div
      className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden"
      style={{ height: `${visibleTipHeight}px` }}
    >
      <div
        className="absolute bottom-0"
        style={{
          width: `${CONTAINER_WIDTH}px`,
          left: "50%",
          transform: "translateX(-50%)",
          height: `${visibleTipHeight}px`,
        }}
      >
        {/* Light mode trees - deep forest pine green */}
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
                  "brightness(0) saturate(100%) invert(26%) sepia(32%) saturate(500%) hue-rotate(85deg) brightness(80%)",
              }}
            />
          </div>
        ))}

        {/* Dark mode trees - solid silhouette under midnight sun */}
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
                  "brightness(0) saturate(100%) invert(12%) sepia(20%) saturate(900%) hue-rotate(95deg) brightness(70%)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
