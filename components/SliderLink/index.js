import React, { Component } from "react";
import Card from "../Card";
import { TabWrapper } from "./style";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import Link from "next/link";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.defaultIndex
    };
  }

  render() {
    return (
      <Tabs
        selectedTabClassName="Tabs__tab--selected"
        defaultIndex={this.state.index || 0}
        onSelect={index => {}}
      >
        <TabList style={{ marginBottom: 50 }}>
          <TabWrapper
            style={{
              paddingLeft: 100,
              paddingRight: 100,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly"
            }}
          >
            {this.props.tabs.map((tab, i) => {
              return (
                <Tab key={i}>
                  <Link href={tab.href}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                      }}
                    >
                      <img
                        src={tab.img}
                        style={{
                          width: 40,
                          height: 40
                        }}
                      />
                      <p style={{ fontSize: 14, fontWeight: 200 }}>
                        {tab.label}
                      </p>
                    </div>
                  </Link>
                </Tab>
              );
            })}
          </TabWrapper>
        </TabList>
        {this.props.tabs.map((tab, i) => {
          return (
            <TabPanel key={i}>
              {this.props.tabs[this.state.index].component}
            </TabPanel>
          );
        })}
      </Tabs>
    );
  }
}

export default Slider;
