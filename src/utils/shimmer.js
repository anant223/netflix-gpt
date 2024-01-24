import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

export default function SkeletonColor() {
  return (
    <Box
      sx={{
        bgcolor: "black",
        p: 5,
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="bg-black w-full flex gap-2 relative top-14 flex-1">
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          variant="rectangular"
          width={150}
          height={210}
        />
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          variant="rectangular"
          width={150}
          height={210}
        />
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          variant="rectangular"
          width={150}
          height={210}
        />
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          variant="rectangular"
          width={150}
          height={210}
        />
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          variant="rectangular"
          width={150}
          height={210}
        />
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          variant="rectangular"
          width={150}
          height={210}
        />
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          variant="rectangular"
          width={150}
          height={210}
        />
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          variant="rectangular"
          width={150}
          height={210}
        />
      </div>
    </Box>
  );
}
