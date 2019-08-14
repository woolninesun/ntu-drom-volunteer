import React from 'react';

import { Header } from "semantic-ui-react";
import CardView from "./components/CardView";

import './DataViewTab.scss';

import { getRowDataFromWorksheetEntries } from './utilities/gsx';

import { RowData } from './interface/app';

interface DataViewProps {
  worksheet: {
    title: string,
    link: string
  }
};

const DataView: React.FunctionComponent<DataViewProps> = (props: DataViewProps) => {
  const { worksheet } = props;

  // const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [rowDatas, setRowDatas] = React.useState<RowData[]>([]);

  React.useEffect(() => {
    fetch(worksheet.link)
      .then(response => response.json())
      .then((result) => {
        setRowDatas(getRowDataFromWorksheetEntries(result.feed.entry));
        setIsLoading(false);
      }, (error) => {
        // setIsError(true);
      });
  }, [worksheet]);

  return (
    <div className="data-view-tab">
      <Header as="h1" textAlign="center" dividing>{worksheet.title}</Header>
      <CardView
        isLoading={isLoading}
        headerContent={Object.keys(rowDatas[0] || {})}
        rowDatas={rowDatas}
      />
    </div>
  );
}

export default DataView;
