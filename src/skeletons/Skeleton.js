import "../skeletons/skeleton.css";
import SkeletonElements from "./SkeletonElements";
import Shimer from "./Shimer";

export default function Skeleton({ template }) {

  return (
    <div className="skeleton-wrapper">
      <div className="shine">
        <Shimer />

        {template === "posts" && (
          <>
            <SkeletonElements type="title" />
            <SkeletonElements type="body" />
            <SkeletonElements type="body" />
            <SkeletonElements type="body" />
          </>
        )}

        {template === "users" && (
          <>
            <SkeletonElements type="avatar" />
            <SkeletonElements type="title" />
            <SkeletonElements type="body" />
          </>
        )}


      </div>
    </div>
  );
}
