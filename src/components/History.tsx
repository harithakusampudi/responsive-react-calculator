import React, { useState, useEffect } from "react";
import { List, Typography } from "antd";
import { CalculationProps } from "../modules/calculations/calculations.duck";
import Styles from "./styles";
const history = [{ TODAY: "Today" }, { YESTERDAY: "Yesterday" }];

const { HistoryWrapper, HistoryContent, HistoryButton, TextContnet } = Styles;
const { Text } = Typography;
interface HistoryProps {
  calculations: {
    todayList: CalculationProps[];
    yesterdayList: CalculationProps[];
  };
}
const History = (props: HistoryProps) => {
  const [todaysList, setTodaysList] = useState<CalculationProps[]>(
    props.calculations.todayList
  );
  const [open, setOpen] = useState<boolean>(true);
  const [yesterdayList, setYesterdayList] = useState<CalculationProps[]>(
    props.calculations.yesterdayList
  );

  useEffect(() => {
    setTodaysList(props.calculations.todayList);
    setYesterdayList(props.calculations.yesterdayList);
  }, [props.calculations.todayList, props.calculations.yesterdayList]);

  const onCollapse = () => {
    setOpen(!open);
  };
  return (
    <HistoryWrapper>
      <HistoryButton onClick={onCollapse}>
        <Text strong>{open ? "Hide History" : "View History"}</Text>
      </HistoryButton>
      {open && (
        <List
          dataSource={history}
          renderItem={(item, index) => {
            const itemTitle = Object.values(item)[0];
            const itemKey = Object.keys(item)[0];
            const contentList =
              itemKey === "TODAY" ? todaysList : yesterdayList;
            return (
              <List.Item key={index}>
                <List.Item.Meta title={itemTitle} />
                <HistoryContent>
                  {contentList.length ? (
                    contentList.map(each => {
                      return (
                        <TextContnet>
                          <Text type="secondary">{each.input} =</Text>{" "}
                          {each.result}
                        </TextContnet>
                      );
                    })
                  ) : (
                    <Text type="secondary">No Results Found</Text>
                  )}
                </HistoryContent>
              </List.Item>
            );
          }}
        />
      )}
    </HistoryWrapper>
  );
};

export default History;
