import React from "react";
import { hilite, throttled, checkStringMatch, isInViewport } from "../helper";

export class MenuList extends React.Component {
  onHover = event => {
    this.props.onCursorChange(event.currentTarget.id);
  };
  tHover = () => throttled(200, this.onHover);

  componentDidUpdate = () => {
    const element = document.getElementById(this.props.cursor);
    if (!isInViewport(element, 45))
      element.scrollIntoView({ behavior: "smooth" });
  };

  renderMenu = (user, searchTerm, index) => {
    return (
      <li
        className={this.props.cursor === index ? "card selected" : "card"}
        key={user.id}
        id={index}
        onMouseEnter={this.tHover()}
      >
        <div className="card-body pb-0 pt-0">
          <h5
            className="card-title m-0"
            dangerouslySetInnerHTML={hilite(user.id, searchTerm)}
          ></h5>
          <em
            className="card-text"
            dangerouslySetInnerHTML={hilite(user.name, searchTerm)}
          ></em>
          {(() => this.renderItemsElement(user, searchTerm))()}
          <p
            className="m-0"
            dangerouslySetInnerHTML={hilite(user.address, searchTerm)}
          ></p>
          <p dangerouslySetInnerHTML={hilite(user.pincode, searchTerm)}></p>
        </div>
      </li>
    );
  };

  renderItemsElement(user, searchTerm) {
    let itemsStr = "";
    user.items.forEach(each => {
      if (checkStringMatch({ each: each }, searchTerm)) {
        itemsStr += '"' + hilite(each, searchTerm).__html + '", ';
      }
    });

    if (itemsStr) {
      itemsStr = itemsStr.replace(/,$/, "") + " found in items.";
      return (
        <ul className="border-top-btm" type="disc">
          <li dangerouslySetInnerHTML={{ __html: itemsStr }}></li>
        </ul>
      );
    }
  }

  render = () => {
    return (
      <ul className="dropdown-menu show col-md-12 p-0">
        {this.props.userList.map((user, index) =>
          this.renderMenu(user, this.props.searchTerm, index)
        )}
      </ul>
    );
  };
}
