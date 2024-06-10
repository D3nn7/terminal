import style from "./Output.module.css";

// Convert some special elements to React components like Comment lines or parts in line

export default function ConsoleOutput({
  key,
  output,
}: {
  key: any;
  output: string;
}) {
  const lines = output.split("\n");

  return (
    <div key={key}>
      {lines.map((line, index) => {
        if (line.trim().startsWith("//")) {
          return (
            <span key={index} className={style.outComment}>
              {line}
              <br />
            </span>
          );
        } else if (line.includes("**")) {
          const parts = line.split("**");
          return (
            <span key={index}>
              {parts.map((part, partIndex) => {
                if (partIndex % 2 === 1) {
                  return <b key={partIndex}>{part}</b>;
                } else {
                  return part;
                }
              })}
              <br />
            </span>
          );
        } else if (line.trim() === "") {
          return <br key={index} />;
        } else {
          return (
            <span key={index}>
              {line}
              <br />
            </span>
          );
        }
      })}
    </div>
  );
}
