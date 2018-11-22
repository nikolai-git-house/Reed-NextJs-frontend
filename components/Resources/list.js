import React, {Component} from 'react';
import {
  ListHeader
} from './style'

import {ApiUrl} from '../../config'

export default class ResourceList extends Component {

  state = {
    search: "",
    searchType: ""
  }

  getFiltered = (resources) => {
    const { search, searchType } = this.state;
    if(search && !searchType) return resources.filter(v => v.title.toLowerCase().match(search.toLowerCase()))
    else if(search && searchType) return resources.filter(v => v.title.toLowerCase().match(search.toLowerCase()) && v.type === searchType)
    else return resources
  }

  render(){
    const {resources} = this.props;
    const filtered = this.getFiltered(resources);
    const types = [ ...(new Set(resources.map(v => v.type))) ];

    return <div>
      <ListHeader>
        <input value={this.state.search} type="text" placeholder="search for something specific" onChange={e => this.setState({ search: e.target.value })} />
        <select value={this.state.searchType} onChange={e => this.setState({ searchType: e.target.value })}>
          <option value="">All Material</option>
          {types.map((v,i) => <option key={i} value={v}>{v}</option>)}
        </select>
      </ListHeader>
      <hr />
      {filtered.map((v,i) => v.file ? <p key={i}><a href={`${ApiUrl}${v.file.url}`} target="_blank">{v.title}</a></p> : null)}
    </div>

  }

}