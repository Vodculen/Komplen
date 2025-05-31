import ChapterSection from "./ChapterSection";
import RememberPosition from "../RememberScrollPosition";
import Spacer from "./Spacer";
import { useRef } from "react";

export default function Chapters({ list, activeTabIndex }) {
  const chaptersRef = useRef(null);
  let tabCounter = 0;

  const listItems = list.map((section, sectionIndex) => {
    const tabsWithActive = section.tabs.map((tab) => {
      const isActive = tabCounter === activeTabIndex;
      const updatedTab = { ...tab, active: isActive ? "active" : "" };
      tabCounter++;
      return updatedTab;
    });

    return (
      <ChapterSection
        key={sectionIndex}
        sectionName={section.title}
        list={tabsWithActive}
      />
    );
  });

  return (
    <div className="chapters" ref={chaptersRef}>
      <RememberPosition scrollContainerRef={chaptersRef} />
      <Spacer amount={32} />
      {listItems}
    </div>
  );
}
