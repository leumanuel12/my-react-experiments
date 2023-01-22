import "../skeletons/skeleton.css";

export default function SkeletonElements({ type }) {
  const classes = `skeleton ${type}`;

  return (
      <div className={classes} />
  );
}
