import React from "react";
import TimelineItem from "../components/timelineItem";
import timeline from "./timeline.module.css";


const Group = (props) => (
  <div className={timeline.year}><a href={"#" + props.year} className="anchor">{props.year}</a></div>
);

const getYear = timelineItem => timelineItem.date.substring(0, 4);

const groupTimelineByYear = (timelineItems) => {
  return timelineItems
    .reduce((groups, item, index) => {
      const year = getYear(item.node.frontmatter);
      if (typeof groups[year] === 'undefined') {
        groups[year] = [];
      }
      groups[year].push({
        isOdd: (index % 2) === 1,
        content: item
      });
      return groups;
    }, {});
}

const renderTimelineGroup = (timelineItems) => (
  timelineItems.map((item, i) => (
    <TimelineItem data={item.content.node} key={i} odd={item.isOdd}></TimelineItem>
  ))
);

const renderTimeline = timelineItems => {
  const groupedTimeline = groupTimelineByYear(timelineItems);
  const groups = Object.keys(groupedTimeline);
  return groups.map((group, index) => (
    <React.Fragment key={index}>
      <Group year={group} />
      {renderTimelineGroup(groupedTimeline[group])}
    </React.Fragment>
  ))
}

export default (props) => (
  <div className={timeline.container}>
    {renderTimeline(props.data)}
  </div>
);