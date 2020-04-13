import React from "react";
import { debounced, checkStringMatch, handleKeyDown } from "../helper";
import { MenuList } from "./MenuList";
import { NotFound } from "./NotFound";
import { data } from "../data";

export class Search extends React.Component {
  state = {
    dataList: [...data],
    modifiedDataList: [],
    hideAll: true,
    cursor: 0
  };
  searchRef = React.createRef();

  search = () => {
    if (
      this.searchRef &&
      this.searchRef.current &&
      this.searchRef.current.value
    ) {
      let dataList = [...this.state.dataList];
      let searchTerm = this.searchRef.current.value;
      dataList = dataList.filter(each => checkStringMatch(each, searchTerm));
      this.setState({ modifiedDataList: dataList, hideAll: false, cursor: 0 });
    } else {
      this.setState({ hideAll: true });
    }
  };

  dSearch = () => debounced(200, this.search);

  onCursorChange = cursorPosition => {
    this.setState({ cursor: parseInt(cursorPosition) });
  };

  renderMenuList = () => {
    if (!this.state.hideAll) {
      return (
        <div className="row justify-content-md-center">
          <div className="col-md-6 p-0 menu-list">
            {(() => {
              if (this.state.modifiedDataList.length) {
                return (
                  <MenuList
                    searchTerm={this.searchRef.current.value}
                    userList={this.state.modifiedDataList}
                    cursor={this.state.cursor}
                    onCursorChange={this.onCursorChange}
                  />
                );
              } else {
                return <NotFound />;
              }
            })()}
          </div>
        </div>
      );
    }
  };

  render = () => {
    return (
      <>
        <div className="row justify-content-md-center">
          <div className="col-md-6 p-0">
            <div className="search-icon"></div>
            <input
              className="col-md-12 pl-4"
              type="text"
              name="searchText"
              ref={this.searchRef}
              onInput={this.dSearch()}
              autoFocus
              onKeyDown={handleKeyDown.bind(this)}
            />
          </div>
        </div>
        {(() => this.renderMenuList())()}
      </>
    );
  };
}
