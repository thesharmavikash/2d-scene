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
import ToolIcon from 'Editor/Util/ToolIcon/ToolIcon';

import './_objectinfo.scss';

var classNames = require('classnames'); 

class MakeAnimated extends Component {

  renderRow(rowInfo, i) {
      let text = rowInfo.text;
      let icon = rowInfo.icon;
      return (
        <div key={i} className="object-info-row">
            <div className="object-info-row-icon">
                <ToolIcon name={icon}/>
            </div>
            <div className="object-info-row-text">
                {text}
            </div>
        </div>
      );
  }

  render() {
    return (
        <div className={classNames("object-info-container", this.props.className)}>
            <div className="object-info-title">
                {this.props.title}
            </div>
            {this.props.rows.map(this.renderRow)}
        </div>
    );
  }
}

export default MakeAnimated