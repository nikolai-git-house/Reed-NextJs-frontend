import React, {Component} from 'react'
import Link from 'next/link';
import { withRouter } from 'next/router'

import { 
  BreadcrumbContainer,
  Breadcrumb 
} from './style'

class Breadcrumbs extends Component {

  state = {
    items: [],
    currentPath: '',
    open: false
  }


  static getDerivedStateFromProps(props, state){
    const { asPath } = props.router;

    if(state.currentPath === asPath || !asPath) return null;
    if(asPath === '/') return {
      items: [],
      currentPath: '',
      open: false
    };

    // ignored URL path segment
    const ignore = [
      'item'
    ];

    const pathItems = [];
    return { 
      items: asPath.replace(/^\//,'').replace(/\/$/,'').split('/').reduce((a,b) => {
        pathItems.push(b);
        if(ignore.indexOf(b) !== -1) return a;
        a.push({ 
          name: b.replace(/\?.+/,'').replace(/\#.+/,''), 
          href: (`/${pathItems.join('/')}`).replace(/\/\//,'/') 
        });
        return a;
      },[]),
      currentPath:  asPath
    }
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  }

  render(){

    const { items, currentPath, open } = this.state;
    const last3 = items.length > 3 ? this.state.items.slice(-3) : items;

    // render null for excluded pages
    if(
      !currentPath || 
      this.props.exclude.filter(v => v.test(currentPath)).length 
    ) return null;

    return <BreadcrumbContainer className="__container">
      <Breadcrumb><Link href="/"><a>home</a></Link></Breadcrumb>
      { items.length > 3 && !this.state.open ? <Breadcrumb><a onClick={this.toggleOpen}>...</a></Breadcrumb> : null }
      { (open ? items : last3).map((v,i) => <Breadcrumb key={i}><Link href={v.href}><a>{`${v.name}`}</a></Link></Breadcrumb>) }
      { items.length > 3 && this.state.open ? <Breadcrumb className="last"><a onClick={this.toggleOpen}>&lt;</a></Breadcrumb> : null }
    </BreadcrumbContainer>
  }

}

export default withRouter(Breadcrumbs);