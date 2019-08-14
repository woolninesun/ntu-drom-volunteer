import React from 'react';

import './static/semantic/semantic.min.css';
import './GSXToWebApp.css';

import DataViewTab from "./DataViewTab";
import TabSidebar from "./components/TabSidebar";

import { getStringFromRawObject, getRowDataFromWorksheetEntries } from './utilities/gsx';

import { WorksheetLink, WorksheetEntry } from './interface/gsx';
import { RowData, WorksheetData, Settings } from './interface/app';

const defaultSettings: Settings = { title: "", links: [] };
const defaultSettingData: RowData = { attribute: "", content: "" };
const linkRegexp = new RegExp(/^\[(.+)\]\((.+)\)$/);

const GSXToWebApp: React.FunctionComponent<{}> = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [title, setTitle] = React.useState<string>("");
  const [settings, setSettings] = React.useState<Settings>(defaultSettings);
  const [worksheets, setWorksheets] = React.useState<WorksheetData[]>([]);

  React.useEffect(() => {
    const getSettingsFromWorksheet = (WorksheetUrl: string) => {
      fetch(WorksheetUrl)
        .then(response => response.json())
        .then((result) => {
          if (result && result.feed && result.feed.title && result.feed.entry) {
            let rawSettings: Settings = defaultSettings;
            getRowDataFromWorksheetEntries(result.feed.entry).forEach(
              (rowData: RowData) => {
                const rawSetting = Object.assign(defaultSettingData, rowData);

                if (rawSetting.attribute === "title") {
                  rawSettings.title = rawSetting.content;
                }

                if (rawSetting.attribute === "links") {
                  const matches: string[] = rawSetting.content.match(linkRegexp) || [];
                  rawSettings.links.push({ name: matches[1], href: matches[2] });
                }
              }
            );
            setSettings(rawSettings);
          }
        }, (error) => {
          // setIsError(true);
        });
    }

    const getWorksheetLink = (links: WorksheetLink[], target: RegExp): string => {
      const link: WorksheetLink | undefined = links.find(link => target.test(link.rel));
      return link ? `${link.href}?alt=json` : "";
    }

    const getWorksheetDataFromEntries = (entries: WorksheetEntry[]): WorksheetData[] => {
      let worksheets: WorksheetData[] = [];
      entries.forEach((entry: WorksheetEntry) => {
        const sheetTitle = getStringFromRawObject(entry.title);
        const sheetLink = getWorksheetLink(entry.link, /#listfeed/);

        if (sheetTitle === "" || sheetLink === "") { return; }
        if (sheetTitle === "Settings") { getSettingsFromWorksheet(sheetLink); return; }

        worksheets.push({ title: sheetTitle, link: sheetLink });
      });
      return worksheets;
    }

    const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
    const sheetID: string = urlParams.get('sheetid') || "";
    if (sheetID === "") {
      // setIsError(true);
      return;
    }

    // const sheetID = 1WWh4gfO9Iak3XzPZb0CYN4_N-g5bALiDZsnN97qn0nk
    const apidomain: string = "https://spreadsheets.google.com";
    const apiQuery: string = `feeds/worksheets/${sheetID}/public/values?alt=json`;
    const apiUrl: string = `${apidomain}/${apiQuery}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then((result) => {
        if (result && result.feed && result.feed.title && result.feed.entry) {
          setTitle(getStringFromRawObject(result.feed.title));
          setWorksheets(getWorksheetDataFromEntries(result.feed.entry));
          setIsLoading(false);
        }
      }, (error) => {
        // setIsError(true);
      });
  }, []);

  return <React.Fragment>{
    isLoading ? "" : (
      <TabSidebar
        title={settings.title || title}
        tabMenuItems={worksheets.map((worksheet) => ({
          name: worksheet.title,
          panel: (<DataViewTab worksheet={worksheet} />)
        }))}
        linkMenuItems={settings.links} />
    )
  }</React.Fragment>;
}

export default GSXToWebApp;
