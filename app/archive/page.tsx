
import React from "react";
import ArchiveView from "./components/ArchiveView";

export default function ArchivePage() {
    return (
        <div
            className="
        relative z-10
        max-w-7xl mx-auto
        px-6 sm:px-12
        py-24
        animate-in fade-in slide-in-from-bottom-4 duration-1000
      "
        >
            <ArchiveView />
        </div>
    );
}
