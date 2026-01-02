"use client";

interface TreeConfig {
  left: string;
  height: number;
  mirrored?: boolean;
}

const trees: TreeConfig[] = [
  // Dense forest - back layer (taller trees)
  { left: "-1%", height: 140, mirrored: false },
  { left: "2%", height: 165, mirrored: true },
  { left: "5%", height: 150, mirrored: false },
  { left: "8%", height: 175, mirrored: true },
  { left: "11%", height: 155, mirrored: false },
  { left: "14%", height: 180, mirrored: false },
  { left: "17%", height: 160, mirrored: true },
  { left: "20%", height: 170, mirrored: false },
  { left: "23%", height: 145, mirrored: true },
  { left: "26%", height: 185, mirrored: false },
  { left: "29%", height: 155, mirrored: true },
  { left: "32%", height: 175, mirrored: false },
  { left: "35%", height: 165, mirrored: true },
  { left: "38%", height: 150, mirrored: false },
  { left: "41%", height: 180, mirrored: true },
  { left: "44%", height: 160, mirrored: false },
  { left: "47%", height: 190, mirrored: true },
  { left: "50%", height: 170, mirrored: false },
  { left: "53%", height: 155, mirrored: true },
  { left: "56%", height: 185, mirrored: false },
  { left: "59%", height: 165, mirrored: true },
  { left: "62%", height: 175, mirrored: false },
  { left: "65%", height: 150, mirrored: true },
  { left: "68%", height: 180, mirrored: false },
  { left: "71%", height: 160, mirrored: true },
  { left: "74%", height: 170, mirrored: false },
  { left: "77%", height: 145, mirrored: true },
  { left: "80%", height: 185, mirrored: false },
  { left: "83%", height: 155, mirrored: true },
  { left: "86%", height: 175, mirrored: false },
  { left: "89%", height: 165, mirrored: true },
  { left: "92%", height: 150, mirrored: false },
  { left: "95%", height: 170, mirrored: true },
  { left: "98%", height: 160, mirrored: false },
  // Mid layer - fill gaps
  { left: "0%", height: 120, mirrored: true },
  { left: "3.5%", height: 135, mirrored: false },
  { left: "6.5%", height: 125, mirrored: true },
  { left: "9.5%", height: 140, mirrored: false },
  { left: "12.5%", height: 130, mirrored: true },
  { left: "15.5%", height: 145, mirrored: false },
  { left: "18.5%", height: 120, mirrored: true },
  { left: "21.5%", height: 135, mirrored: false },
  { left: "24.5%", height: 140, mirrored: true },
  { left: "27.5%", height: 125, mirrored: false },
  { left: "30.5%", height: 145, mirrored: true },
  { left: "33.5%", height: 130, mirrored: false },
  { left: "36.5%", height: 140, mirrored: true },
  { left: "39.5%", height: 120, mirrored: false },
  { left: "42.5%", height: 135, mirrored: true },
  { left: "45.5%", height: 145, mirrored: false },
  { left: "48.5%", height: 125, mirrored: true },
  { left: "51.5%", height: 140, mirrored: false },
  { left: "54.5%", height: 130, mirrored: true },
  { left: "57.5%", height: 145, mirrored: false },
  { left: "60.5%", height: 120, mirrored: true },
  { left: "63.5%", height: 135, mirrored: false },
  { left: "66.5%", height: 140, mirrored: true },
  { left: "69.5%", height: 125, mirrored: false },
  { left: "72.5%", height: 145, mirrored: true },
  { left: "75.5%", height: 130, mirrored: false },
  { left: "78.5%", height: 140, mirrored: true },
  { left: "81.5%", height: 120, mirrored: false },
  { left: "84.5%", height: 135, mirrored: true },
  { left: "87.5%", height: 145, mirrored: false },
  { left: "90.5%", height: 125, mirrored: true },
  { left: "93.5%", height: 140, mirrored: false },
  { left: "96.5%", height: 130, mirrored: true },
  { left: "99%", height: 135, mirrored: false },
  // Front layer - shorter trees to fill bottom gaps
  { left: "1%", height: 95, mirrored: false },
  { left: "4%", height: 105, mirrored: true },
  { left: "7%", height: 90, mirrored: false },
  { left: "10%", height: 100, mirrored: true },
  { left: "13%", height: 95, mirrored: false },
  { left: "16%", height: 110, mirrored: true },
  { left: "19%", height: 85, mirrored: false },
  { left: "22%", height: 100, mirrored: true },
  { left: "25%", height: 95, mirrored: false },
  { left: "28%", height: 105, mirrored: true },
  { left: "31%", height: 90, mirrored: false },
  { left: "34%", height: 100, mirrored: true },
  { left: "37%", height: 95, mirrored: false },
  { left: "40%", height: 110, mirrored: true },
  { left: "43%", height: 85, mirrored: false },
  { left: "46%", height: 100, mirrored: true },
  { left: "49%", height: 95, mirrored: false },
  { left: "52%", height: 105, mirrored: true },
  { left: "55%", height: 90, mirrored: false },
  { left: "58%", height: 100, mirrored: true },
  { left: "61%", height: 95, mirrored: false },
  { left: "64%", height: 110, mirrored: true },
  { left: "67%", height: 85, mirrored: false },
  { left: "70%", height: 100, mirrored: true },
  { left: "73%", height: 95, mirrored: false },
  { left: "76%", height: 105, mirrored: true },
  { left: "79%", height: 90, mirrored: false },
  { left: "82%", height: 100, mirrored: true },
  { left: "85%", height: 95, mirrored: false },
  { left: "88%", height: 110, mirrored: true },
  { left: "91%", height: 85, mirrored: false },
  { left: "94%", height: 100, mirrored: true },
  { left: "97%", height: 95, mirrored: false },
  // Extra fill layer - very dense
  { left: "0.5%", height: 80, mirrored: true },
  { left: "2.5%", height: 75, mirrored: false },
  { left: "4.5%", height: 85, mirrored: true },
  { left: "6%", height: 70, mirrored: false },
  { left: "8.5%", height: 80, mirrored: true },
  { left: "11.5%", height: 75, mirrored: false },
  { left: "14.5%", height: 85, mirrored: true },
  { left: "17.5%", height: 70, mirrored: false },
  { left: "20.5%", height: 80, mirrored: true },
  { left: "23.5%", height: 75, mirrored: false },
  { left: "26.5%", height: 85, mirrored: true },
  { left: "29.5%", height: 70, mirrored: false },
  { left: "32.5%", height: 80, mirrored: true },
  { left: "35.5%", height: 75, mirrored: false },
  { left: "38.5%", height: 85, mirrored: true },
  { left: "41.5%", height: 70, mirrored: false },
  { left: "44.5%", height: 80, mirrored: true },
  { left: "47.5%", height: 75, mirrored: false },
  { left: "50.5%", height: 85, mirrored: true },
  { left: "53.5%", height: 70, mirrored: false },
  { left: "56.5%", height: 80, mirrored: true },
  { left: "59.5%", height: 75, mirrored: false },
  { left: "62.5%", height: 85, mirrored: true },
  { left: "65.5%", height: 70, mirrored: false },
  { left: "68.5%", height: 80, mirrored: true },
  { left: "71.5%", height: 75, mirrored: false },
  { left: "74.5%", height: 85, mirrored: true },
  { left: "77.5%", height: 70, mirrored: false },
  { left: "80.5%", height: 80, mirrored: true },
  { left: "83.5%", height: 75, mirrored: false },
  { left: "86.5%", height: 85, mirrored: true },
  { left: "89.5%", height: 70, mirrored: false },
  { left: "92.5%", height: 80, mirrored: true },
  { left: "95.5%", height: 75, mirrored: false },
  { left: "98.5%", height: 85, mirrored: true },
];

export function ForestDivider() {
  // How much of the tree tips should show above the solid bar
  const visibleTipHeight = 60;

  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: `${visibleTipHeight}px` }}>
      {/* Trees - positioned so their tops align with visible area */}
      {trees.map((tree, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            left: tree.left,
            bottom: `-${tree.height - visibleTipHeight}px`,
            height: `${tree.height}px`,
            transform: tree.mirrored ? "scaleX(-1)" : undefined,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/pine-tree.svg"
            alt=""
            className="h-full w-auto dark:hidden"
            style={{
              height: `${tree.height}px`,
              filter: "brightness(0) saturate(100%) invert(25%) sepia(15%) saturate(400%) hue-rotate(60deg) brightness(95%) contrast(90%)"
            }}
          />
        </div>
      ))}

      {/* Dark mode trees */}
      <div className="hidden dark:block absolute inset-0">
        {trees.map((tree, index) => (
          <div
            key={`dark-${index}`}
            className="absolute"
            style={{
              left: tree.left,
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
                filter: "brightness(0) saturate(100%) invert(6%) sepia(5%) saturate(500%) hue-rotate(200deg) brightness(95%) contrast(95%)"
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
