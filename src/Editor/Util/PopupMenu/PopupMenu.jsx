/*
 * Copyright 2020 WICKLETS LLC
 *
 * This file is part of 2D Scene.
 *
 * 2D Scene is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * 2D Scene is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with 2D Scene.  If not, see <https://www.gnu.org/licenses/>.
 */

import React, { Component } from 'react';
import { Popover } from 'reactstrap';
import './_popupmenu.scss'

var classNames = require("classnames");

class PopupMenu extends Component {
  render() {
    return (
      <Popover
        placement="bottom"
        isOpen={this.props.isOpen}
        toggle={this.props.toggle}
        target={this.props.target}
        boundariesElement={'viewport'}
        className={classNames("popup-menu-popover", this.props.mobile && "mobile")}
      >
        {this.props.children}
      </Popover>
    )
  }
}

export default PopupMenu
