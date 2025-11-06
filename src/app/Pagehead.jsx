"use client";
import { useEffect, useLayoutEffect } from "react";

export default function PageHead({ PageMeta }) {
  // useLayoutEffect runs *before paint* — faster update than useEffect
  useLayoutEffect(() => {
    if (!PageMeta) return;

    // ✅ Update <title>
    if (PageMeta.title) {
      let titleTag = document.querySelector("title");
      if (!titleTag) {
        titleTag = document.createElement("title");
        document.head.appendChild(titleTag);
      }
      titleTag.textContent = PageMeta.title;
    }

    // ✅ Update <meta name="description">
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = PageMeta.description || "";
  }, [PageMeta]);

  return null;
}
